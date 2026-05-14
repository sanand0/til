#!/usr/bin/env bash

set -euo pipefail

# Activate mise since we need jq which is mise-installed (~50ms)
eval "$(mise env -s bash)"

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
OUT="$SCRIPT_DIR/trending-repos.tsv"
NEW_TSVDATA="$(mktemp)"
FETCH_DIR="$(mktemp -d)"
trap 'rm -rf "$FETCH_DIR"; rm -f "$NEW_TSVDATA" "${TMP_OUT:-}"' EXIT

if ! command -v gtrending >/dev/null 2>&1; then
  echo "gtrending is not installed. Install it outside the timer, e.g. uv tool install gtrending" >&2
  exit 127
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is not available on PATH" >&2
  exit 127
fi

languages=(rust go python typescript javascript shell)

for language in "${languages[@]}"; do
  out_json="$FETCH_DIR/$language.json"
  if ! gtrending repos --language "$language" --since weekly --json > "$out_json"; then
    echo "Failed to fetch weekly trending repos for language: $language" >&2
    exit 1
  fi

  if [[ ! -s "$out_json" ]]; then
    echo "gtrending returned no JSON for language: $language" >&2
    exit 1
  fi
done

# Fetch weekly trending repos as TSV with name, date, language, stars, ...
jq -rs --arg date "$(date +%F)" '

  def trim: gsub("^[[:space:]]+|[[:space:]]+$";"");

  def pad_left($width):
    tostring as $s
    | ($width - ($s | length)) as $pad
    | (if $pad > 0 then reduce range(0;$pad) as $i (""; . + " ") else "" end) + $s;

  add | .[] |
  [ "🟣",
    ({ "Rust":"RS", "Go":"GO", "Python":"PY", "TypeScript":"TS", "JavaScript":"JS", "Shell":"SH" }[.language] // .language),
    (.stars | pad_left(8)),
    (.currentPeriodStars | pad_left(6)),
    $date,
    .fullname,
    ((.description // "") | gsub("[\t\n\r]";" ") | trim) ] | @tsv
' "$FETCH_DIR"/*.json > "$NEW_TSVDATA"

cat "$NEW_TSVDATA"

# Prepend only new repos. Keep old content unchanged at bottom.
if [[ -f "$OUT" ]]; then
  TMP_OUT="$(mktemp)"
  awk -F'\t' 'FNR==NR{seen[$6]=1; old[NR]=$0; n=NR; next}
              !($6 in seen){print}
              END{for(i=1;i<=n;i++) print old[i]}' \
      "$OUT" "$NEW_TSVDATA" \
  | tee "$TMP_OUT" >/dev/null && mv "$TMP_OUT" "$OUT"
else
  # First run: just write the new batch
  cp -- "$NEW_TSVDATA" "$OUT"
fi
