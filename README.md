# Things I learned

This repo publishes things I've learned at [til.s-anand.net](https://til.s-anand.net).

I store my notes in Dropbox. The repo:

- `llms.md` has notes on LLMs, copied from `C:/Dropbox/Apps/anandblog/llms.md`.
- `til.md` has notes on other things I've learned, copied from `C:/Dropbox/notes/@til-things-i-learned.md`.
- `update.sh`: A shell script that copies the notes from Dropbox to the repo and commits them.
- `convert.js`: GitHub action that converts Markdown notes into HTML + RSS using Deno.

## Running the script

```bash
# Copy files from Dropbox, lint them, commit and push to the repo
bash update.sh
```
