#!/usr/bin/env bash

# Lint all Markdown files
npx -y prettier@3.5 --print-width 120 --write "*.md"

# Generate embeddings locally to test
deno run --allow-read --allow-write --allow-env --allow-net convert.js

# Commit and push
git add .
git commit -m "Update notes"
# git push
