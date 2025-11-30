#!/usr/bin/env bash

set -euo pipefail

# Activate mise since we need jq which is mise-installed (~50ms)
eval "$(mise env -s bash)"

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
OUT="$SCRIPT_DIR/trending-repos.tsv"
NEW_TSVDATA="$(mktemp)"; trap 'rm -f "$NEW_TSVDATA"' EXIT

# Fetch weekly trending repos as TSV with name, date, language, stars, ...
{
  uvx gtrending repos --language rust       --since weekly --json
  uvx gtrending repos --language go         --since weekly --json
  uvx gtrending repos --language python     --since weekly --json
  uvx gtrending repos --language typescript --since weekly --json
  uvx gtrending repos --language javascript --since weekly --json
  uvx gtrending repos --language shell      --since weekly --json
} | jq -rs --arg date "$(date +%F)" '

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
' > "$NEW_TSVDATA"

cat "$NEW_TSVDATA"

# Prepend only new repos. Keep old content unchanged at bottom.
if [[ -f "$OUT" ]]; then
  TMP_OUT="$(mktemp)"; trap 'rm -f "$TMP_OUT"' EXIT
  awk -F'\t' 'FNR==NR{seen[$6]=1; old[NR]=$0; n=NR; next}
              !($6 in seen){print}
              END{for(i=1;i<=n;i++) print old[i]}' \
      "$OUT" "$NEW_TSVDATA" \
  | tee "$TMP_OUT" >/dev/null && mv "$TMP_OUT" "$OUT"
else
  # First run: just write the new batch
  cp -- "$NEW_TSVDATA" "$OUT"
fi
