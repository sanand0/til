#!/usr/bin/env bash

# Copy files
cp /c/Dropbox/notes/llms.md ./llms.md
cp /c/Dropbox/notes/@til-things-i-learned.md ./til.md

# Lint them
npx prettier@3.2 --write "*.md"

# Generate locally
deno run --allow-read --allow-write --allow-env --allow-net convert.js

# Commit and push
git add .
git commit -m "Update notes"
# git push
