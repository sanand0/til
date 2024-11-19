# Things I learned

This repo publishes things I've learned at [til.s-anand.net](https://til.s-anand.net).

I store my notes in Dropbox. Specifically:

- `C:/Dropbox/Apps/anandblog/llms.md` has notes on LLMs
- `C:/Dropbox/notes/@til-things-i-learned.md` has notes on other things I've learned

The repo has:

- `update.sh`: A shell script that copies the notes from Dropbox to the repo and commits them.
- `convert.js`: A Deno script that converts my markdown notes in Dropbox to weekly learnings.
- `index.html`: The main page of the website that links to each week's learnings.
- `yyyy-mm-dd.html`: Weekly learnings

## Running the script

```bash
deno run -A convert.js
```

## TODO

- [ ] Convert this into a build step as part of the CI/CD pipeline
