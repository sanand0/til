#!/usr/bin/env bash

# Copy files
cp /c/Dropbox/Apps/anandblog/llms.md ./llms.md
cp /c/Dropbox/notes/@til-things-i-learned.md ./til.md

# Lint them
npx prettier@3.2 --write "*.md"

# Commit and push
git add .
git commit -m "Update notes"
git push
