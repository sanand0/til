#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
OUT="$SCRIPT_DIR/trending-repos.tsv"
NEW_TSVDATA="$(mktemp)"; trap 'rm -f "$NEW_TSVDATA"' EXIT

# Fetch weekly trending repos as TSV with name, date, language, stars, ...
{
  # uvx gtrending repos --language rust       --since weekly --json
  # uvx gtrending repos --language go         --since weekly --json
  uvx gtrending repos --language python     --since weekly --json
  # uvx gtrending repos --language typescript --since weekly --json
  # uvx gtrending repos --language javascript --since weekly --json
  # uvx gtrending repos --language shell      --since weekly --json
} | jq -rs --arg date "$(date +%F)" '
  def trim: gsub("^[[:space:]]+|[[:space:]]+$";"");
  add | .[] |
  [ .fullname, $date, .language, .stars, .currentPeriodStars,
    ((.description // "") | gsub("[\t\n\r]";" ") | trim) ] | @tsv
' > "$NEW_TSVDATA"

# Prepend only new repos. Keep old content unchanged at bottom.
if [[ -f "$OUT" ]]; then
  TMP_OUT="$(mktemp)"; trap 'rm -f "$TMP_OUT"' EXIT
  awk -F'\t' 'FNR==NR{seen[$1]=1; old[NR]=$0; n=NR; next}
              !($1 in seen){print}
              END{for(i=1;i<=n;i++) print old[i]}' \
      "$OUT" "$NEW_TSVDATA" \
  | tee "$TMP_OUT" >/dev/null && mv "$TMP_OUT" "$OUT"
else
  # First run: just write the new batch
  cp -- "$NEW_TSVDATA" "$OUT"
fi
