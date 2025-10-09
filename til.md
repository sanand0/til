# Things I learned

## Oct 2025

- 07 Oct 2025. The VPN industry is a consolidating oligopoly that doesn't offer much security and biases towards affiliates. [Who Owns Express VPN, Nord, Surfshark?](https://windscribe.com/blog/the-vpn-relationship-map/)
- 06 Oct 2025. [`npx -y emoj`](https://github.com/sindresorhus/emoj) lets you type text and pick a relevant emoji.
- 06 Oct 2025. Many people who shifted away from conflict aversion did so by systematizing it. [ChatGPT](https://chatgpt.com/share/68e3d40e-97e8-800c-b6c0-e34f4059b147)
  - Martin Luther King Jr institutionalized not stepping back from conflicts in his movement.
  - Kim Scott (Radical Candor) practiced caring more via short, specific feedback loops.
  - Kwame Christian (Compassionate Curiosity) practiced ask open questions.
  - Ed Catmull (Pixar) instituted Braintrust to ask candid questions.
  - Ray Dalio (Bridgewater) instituted radical transparency.
- 06 Oct 2025. Many people who adopted a failure-seeking mindset made failure frequent, small, cheap, and informative. [ChatGPT](https://chatgpt.com/share/68e3d668-9030-800c-a6a6-b7b8a3007685)
  - Jia Jiang ran a 100-day rejection challenge, acclimatizing himself to failure.
  - Kim Liao (writer) moved from submission-avoidance to “100 rejections/year”.
  - Reshma Saujani (Girls Who Code) built a practice of "brave, not perfect" - ship before perfect.
  - Ray Dalio (Bridgewater) instituted mistake logs and "pain + reflection = progress".
  - Astro Teller (X, the Moonshot Factory) rewired incentives so teams are rewarded for killing their own ideas early.
  - Sara Blakely (Spanx) set weekly failure quotas.
  - Kathryn Schulz (author of Being Wrong) converts failures into teaching methods.
- 06 Oct 2025. Sindre Sorhus has already created a micro-framework [css-extras](https://github.com/sindresorhus/css-extras) using CSS [@functions](https://www.w3.org/TR/css-mixins-1/).
- 05 Oct 2025. [zx](https://github.com/google/zx) is a nice JS-based alternative to shell scripts.
  ```js
  const branch = await $`git branch --show-current`;
  await $`dep deploy --branch=${branch}`;
  ```
- 05 Oct 2025. `docker run -it --name test --user vscode mcr.microsoft.com/devcontainers/base:ubuntu` gives you a test Ubuntu image closer to a desktop / user setup rather than a server. Useful to try out apps.
- 03 Oct 2025. Wrong answers are useful if you discover why they said that. Conversation is a game where you CO-CONSTRUCT common ground. [Mike Caulfield](https://mikecaulfield.substack.com/p/when-wrong-llm-answers-get-you-to)
- 03 Oct 2025. BMTC hourly data from Bangalore Metro is available via RTI. [Vivek](https://github.com/Vonter/bmrcl-ridership-hourly)
- 02 Oct 2025. [SSH3](https://github.com/francoismichel/ssh3) is an emerging SSH alternative that's written on top of HTTP/3. It supports OAuth2, OpenID Connect, and HTTPS for certificates.
- 02 Oct 2025. Cholesterol has become a victim of its own success. We give statins to those with high LDL. So most people who have heart attacks have lower-than-natural cholesterol. Inflammation (HS-CRP) is now the strongest predictor of heart attack ([American College of Cardiology ](https://www.empirical.health/blog/inflammation-and-heart-health/)). The usual stuff reduces HS-CRP: no sugar/carbs, veggies, nuts, green tea, turmeric/black pepper, weight loss, exercise, sleep, meditation.
- 02 Oct 2025. ⭐ The beginner mindset: scrub your instincts and don't let life experience cloud you. This takes effort. Hold on to naivette and escape cynicism. [The Knowledge Project: Barry Diller](https://fs.blog/knowledge-project-podcast/barry-diller/)
- 02 Oct 2025. Forecasts give comfort. They may not be good but they feel safer than instinct. [The Knowledge Project: Barry Diller](https://fs.blog/knowledge-project-podcast/barry-diller/)
- 02 Oct 2025. My laptop's mic is much better than my phone's mic, surprisingly. When recording conversations, it's better to leave my laptop open and record than use the phone's recording app.
- 01 Oct 2025. ⭐ What I'd like to do next, maybe, is build a boutique "AI Studio". Small group of good people coding delightful AI problems. Something that doesn't scale.

## Sep 2025

- 30 Sep 2025. [GLM models can be used with Claude Code](https://docs.z.ai/scenario-example/develop-tools/claude). At $3/month and a quality close to Claude 4 Sonnet, this is a good deal. But the effort of adding a new subscription is too high for me. I'd rather use it via OpenRouter which is doesn't support an Anthropic API end point at the moment.
- 28 Sep 2025. [`typst`](https://github.com/typst/typst) is a good LaTeX alternative. Markdown-like syntax with fast rendering. Mostly useful for researchers using LaTeX. But publishers / journals don't accept typst often.
- 28 Sep 2025. [`libSQL`](https://github.com/tursodatabase/libsql) is an SQLite compatible fork with remote access, replication, ALTER TABLE to modify columns, random ROWID, etc. It supports the same externsions. The maintainers are working on [`turso`](https://github.com/tursodatabase/turso) - a SQLite compatible improvement with async, vectors, change data capture, etc. (still in alpha). But because of this, I'm a bit uncertain about the future of `libSQL`.
- 27 Sep 2025. [`selectolax`](https://github.com/rushter/selectolax) is a fast, easy-to-use, modern HTML5 parser with CSS selectors. A good replacement for `lxml.html`.
- 27 Sep 2025. The most effective way to convert a blob (e.g. file input) to a data URL on the browser seems to be via the [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) API.
  ```js
  const blobToDataURL = (blob) =>
    new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = () => rej(r.error);
      r.readAsDataURL(f);
    });
  ```
- 26 Sep 2025. Adding `// @ts-check` to a JavaScript file and documenting types via JSDoc might be the simplest way to migrate phase-wise from JS to Typescript.
- 26 Sep 2025. `envsubst < file.txt` replaces `file.txt` with the environment variable, e.g. `$HOME` is replaced by the `HOME` environment variable. Clean shell-level templating.
- 25 Sep 2025. [Compost](https://www.amazon.in/ORGANIC-PLANT-Primium-Quality-Vermicompost/dp/B0B59QXGC4) is the cheapest thing per ton that I can buy on Amazon India. I can buy 1 ton of compost for Rs 13,500. [ChatGPT](https://chatgpt.com/s/t_68d5e3ef9e4081919e1ecd6582e6197c)
- 24 Sep 2025. `yt-dlp` requires Deno from now on. [#14404](https://github.com/yt-dlp/yt-dlp/issues/14404)
- 24 Sep 2025. In meetings, make cameras optional by default -- and judge engagement by contributions, not video -- because a 4-week field experiment found camera-on increased fatigue and reduced voice, especially for women and newcomers. Camera on early for trust building is useful. [PubMed](https://pubmed.ncbi.nlm.nih.gov/34423999/)
- 24 Sep 2025. [`wrkflw`](https://github.com/bahdotsh/wrkflw) is a quick and light way to test GitHub actions before publishing. It runs GitHub actions locally.
- 23 Sep 2025. ⭐ I'm habit engineering, i.e. discovering and stacking habits on to existing ones. For example:
  - ChatGPT suggested increasing observability based on code reviews. I'm including it in my [weekly codecast](https://github.com/sanand0/sanand0/tree/main/week).
  - ChatGPT suggested defining closures inmeetings. I'mn now discussing objectives at meeting starts and effectiveness at the end.
- 23 Sep 2025. Since Anaconda [cannot be used for free](https://www.anaconda.com/pricing) by organizations with 200+ people, Straive's received legal notices from Anaconda. Since laptops are under central IT administration, they went ahead and deleted all Anaconda instances. Installing [miniconda](https://www.anaconda.com/docs/getting-started/miniconda/main) for use with [conda-forge](https://conda-forge.org/) requires admin access that most developers do not have, however. That leads to an interesting "No Python" situation. This is where [`uv`](https://github.com/astral-sh/uv) becomes the knight in shining armor.
- 22 Sep 2025. Gall's "law" says that complex systems that work evolved from simple systems that worked. But a complex system designed from scratch won't ever work. This holds in uncertain environments. But where formal theory or regulations exists, it doesn't. [ChatGPT](https://chatgpt.com/share/68d2c367-d674-800c-9c1c-51fcacfa5c6d)
- 22 Sep 2025. [`uvx --with visidata vd`](https://www.visidata.org/) gives you a command-line Excel editor to edit / convert CSV, Excel, JSON, SQLite, directories, etc.
- 22 Sep 2025. `uvx markitdown https://example.com/` fetches `example.com` as Markdown. I learnt this when I told Codex it could use `uvx markitdown` to convert PDFs and it figured this part out by itself.
- 21 Sep 2025. `yt-dlp` has a `--download-sections` option that downloads specific YouTube time ranges. For example `--download-sections "*00:01:00-00:03:00"` downloads _roughly_ (not exactly) from 1 min to 3 min. Note the `*` at the beginning.
- 21 Sep 2025. My Lenovo laptop's touchpad started scrolling instead of moving when I moved my finger. Many things could have caused it, but the solution was to click (not tap) the top middle of the trackpad. [ChatGPT](https://chatgpt.com/share/68cfc8ff-e7fc-800c-b8bf-474d41332cd1)
- 21 Sep 2025. The [India Entrance Exam database](https://github.com/lalithaar/indian-exams-database) is a dataset collating Indian entrance exams.
- 19 Sep 2025. I understand at least one mechanism of how costs are inflated in large organizations. Even people who want to keep costs low find that the process of tracking expenses, submitting receipts, answering questions around approval, adds transaction cost. So, rather than going for a $10 plus top up mechanism, I would rather go for and ask people to take a $500 top up. Better ask for more and waste than have to ask again.
- 19 Sep 2025. YouTube downloaders: [yt-dlp](https://github.com/yt-dlp/yt-dlp) for the CLI, [Stacher](https://stacher.io/) for Windows/Mac/Linux, [Cobalt](https://cobalt.tools/) for a web-based app. [Ref](https://windowsread.me/p/best-youtube-downloaders)
- 19 Sep 2025. VS Code a bunch of features I discovered:
  - It can run a terminal in its own new window for over a year (via Ctrl+P > Terminal: Move Terminal into New Window). Now, <kbd>Ctrl + Alt + Shift + \`</kbd> does this directly.
  - [Terminal Intellisense](https://code.visualstudio.com/docs/terminal/shell-integration#_intellisense-preview) shows completion suggestions in the UI. Very helpful. Ctrl+Space triggers the menu completion.
- 18 Sep 2025. ⭐ "We find that the per-step error rate itself rises as the task progresses", i.e. once a conversation goes the wrong way, it's really hard to correct it. [The Illusion of Diminishing Returns](https://arxiv.org/html/2509.09677)
- 17 Sep 2025. [Japonaise Cake](https://www.google.com/search?q=japonaise) is the name of the pastry that I had as a child and grew up longing for. I have spent several weeks searching for it in the roadside bakeries at Bangalore and Chennai but only [one bakery](https://cakebee.in/products/japonaise-cake) seems to have it.
- 17 Sep 2025. `systemd` is the modern way to run scheduled jobs, instead of `cron`. It's far more complex. But it can catch up on missed runs via a `Persistent` option. [Working with systemd timers](https://documentation.suse.com/smart/systems-management/html/systemd-working-with-timers/index.html)
- 17 Sep 2025. ⭐ Vice-chancellors of universities resist AI in education because (a) their faculty does not know AI and (b) AI is unreliable. But they are interested in (a) large-scale AI-evaluation and (b) AI-enabling entire campus.
- 17 Sep 2025. [tldr.sh](https://tldr.sh/) offers concise man pages, e.g. `uvx tldr jq`. [cheat.sh](http://cheat.sh/) offers detailed examples, e.g. `curl cheat.sh/jq` or `curl cheat.sh/:help`.
- 14 Sep 2025. [`ugrep`](https://github.com/Genivia/ugrep) is a fast drop-in replacement for `grep`. It supports fuzzy search with a customizable Levenshtein distance. Also `ug -Q` shows an interactive TUI searches like VS Code's "Search in Files" feature. Very intuitive.
- 14 Sep 2025. [Dagger](https://dagger.io/) lets you write CI/CD workflows in Python. I tried running it but after 7m of pulling large Docker containers, I gave up. Too heavy.
- 14 Sep 2025. [dotslash](https://dotslash-cli.com/) lets you write scripts that downloads GitHub releases, caches, and runs them. Requires writing scripts. I prefer [`mise`](https://mise.jdx.dev/).
- 12 Sep 2025. Though I'm connected on LinkedIn with people I can't remember (weak ties), pruning them shrinks serendipity. Weak ties, despite noise, are disproportionately valuable for opportunities, e.g. intros, jobs, and pruning reduces future upside. [Science](https://www.science.org/doi/10.1126/science.abl4476)
- 11 Sep 2025. [SuperTinyIcons](https://github.com/edent/SuperTinyIcons) has very small icons for many websites and is available via CDN. Sample: `http://cdn.jsdelivr.net/npm/super-tiny-icons/images/svg/github.svg`
- 10 Sep 2025. In Pyodide, you can use `from js import document` and then `document.querySelector` to manipulate the DOM directly from Python. `from pyodide.http import pyfetch` lets you use fetch.
- 10 Sep 2025. [`gtrending`](https://pypi.org/project/gtrending) is a Python package that fetches trending GitHub repos, users, etc. `uvx gtrending repos --language rust --since weekly` fetches trending Rust repos of the week.
- 10 Sep 2025. [`astgrep`](https://ast-grep.github.io/) lets you search in code (across languages) using AST patterns. Like [semgrep](https://github.com/semgrep/semgrep) but [more](https://ast-grep.github.io/advanced/tool-comparison.html) about code search than security. `uvx --from ast-grep-cli ast-grep` runs from the CLI. Useful for [code rewriting](https://ast-grep.github.io/guide/rewrite/transform.html), fast [linting](https://ast-grep.github.io/guide/project/lint-rule.html), [code search](https://ast-grep.github.io/guide/pattern-syntax.html).
- 10 Sep 2025. [`hurl`](https://github.com/Orange-OpenSource/hurl) is a CLI config-based HTTP automation tool. Useful for tests, bulk (templatized) HTTP requests, etc.
- 10 Sep 2025. [`rustdesk`](https://rustdesk.com/) is an open-source remote desktop software. TeamViewer alternative. Self-hostable.
- 10 Sep 2025. [`prek`](https://github.com/j178/prek) is a much faster version of [`pre-commit`](https://pre-commit.com/) - a cross-language pre-commit hook manager.
- 10 Sep 2025. ⭐ [`mise`](https://mise.jdx.dev/) is a tool version manager. Combines nvm/fnm, pipx, etc. Supports running [several tools](https://mise.jdx.dev/registry.html) with a smooth installation.
- 10 Sep 2025. The [npm phishing email was a great one](https://xeiaso.net/notes/2025/we-dodged-a-bullet/). It [compromised chalk](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised) which is used in most npm packages. This may be one of the best supply chain attacks in recent times and makes me want to pin versions instead of using `npx -y`. Also makes me glad that I'm sponsoring [@isaacs](https://github.com/isaacs) and [@sindresorhus](https://github.com/sindresorhus) - two _critical_ open source maintainers.
- 10 Sep 2025. "I pay for YouTube Premium. For my money, it’s the best bang-for-the-buck subscription service on the market". - [Gavin Andregg](https://anderegg.ca/2025/09/08/youtube-is-a-mysterious-monopoly)
- 09 Sep 2025. You can create an [infinite leaflet map with nano banana](https://github.com/seezatnap/nano-banana-infinimap).
- 08 Sep 2025. The [Reod](https://coppermind.net/wiki/Reod) on [Elantris](<https://coppermind.net/wiki/Elantris_(city)>) might have been triggered by [Jaddeth](https://coppermind.net/wiki/Jaddeth) who might be an [Autonomy](https://coppermind.net/wiki/Autonomy) avatar. [ChatGPT](https://chatgpt.com/share/68be4c74-afa8-800c-b004-7a1565cb2487)
- 06 Sep 2025. A quick way to get the docs for an npm package is `npm view package-name readme`. For PyPi, it's `curl -s https://pypi.org/pypi/package-name/json | jq -r .info.description`
- 04 Sep 2025. [gitingest](http://gitingest.com/) has a [CLI](https://github.com/coderamp-labs/gitingest). `uvx gitingest https://github.com/owner/repo` fetches the code in the Git repo suitable for passing to an LLM.
- 03 Sep 2025. You can use the `<script>` tag in XML to render RSS, as an alternative to XSLT. [Jake Archibald](https://jakearchibald.com/2025/making-xml-human-readable-without-xslt/)
- 03 Sep 2025. [`browser-fs-access`](https://www.npmjs.com/package/browser-fs-access) is a ponyfill for the [File System Access API](https://wicg.github.io/file-system-access/) and should be the go-to approach for reading and saving files via the browser.
- 01 Sep 2025. To run a Python project directly from GitHub, use `uvx --from "git+https://github.com/owner/repo.git@branch" script-name`
- 01 Sep 2025. [Github1s](https://github.com/conwnet/github1s) is a cool tool. Replace `github.com` with `github1s.com` to get a VS Code page that opens that repo. It's fast and very useful to browser repos. For example, <https://github1s.com/sanand0/tools-in-data-science-public> is my TDS course repo.

## Aug 2025

- 31 Aug 2025. [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) is a great API but suffers from XSS vulnerabilities. The [TrustedHTML](https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML) API is an emerging standard to create sanitized HTML strings.
- 30 Aug 2025. ⭐ **Habit tooling** can expand habit-building capacity. I already use tools to support my habits. [Habit stacking](https://jamesclear.com/habit-stacking) "sticks" new habits to old ones. By sticking new habits into existing tools, I can automate this. (For example, I extended my meeting `record` fish script with an `echo` reminding me to write the meeting goal, my role, practice kind candor, and measure effectiveness.)
- 30 Aug 2025. ⭐ The crux of Arthashastra's advice on defeating an enemy is removing support:
  - मित्राणि भेदयेत्, मित्रं च शत्रोः। Dis-unite friends, enemies from their allies.
  - अमात्यान् द्रव्यैः, जनपदं भेदयेत्। Bribe their ministers, sow discord among subjects.
  - बलं चोच्छिनत्ति, कोशं चोपशोषयेत्। Break the army, exhaust the treasury.
  - ततोऽन्योन्यवैरिणं कुर्यात्। Then set them against each other as mutual foes.
- 30 Aug 2025. Consensus is dangerous in venture capital. "Because if everyone inside the firm sees the same thing, it probably means the market already does too. And when the market sees it, the upside is limited." [Guillermo Flor](https://www.linkedin.com/posts/guillermoflor_consensus-is-dangerous-in-venture-capital-ugcPost-7365751724503875584--eZN)
- 29 Aug 2025. I finally get why elders in my family prefers eating in a pure (rather than a mixed) vegetarian restaurant. When in Vietnam, I could pick dishes in pure vegetarian restaurants without worrying about whether they were meat or not, even when I didn't understand what the dishes were about. That confidence to proceed without fear is a powerful enabler.
- 28 Aug 2025. [oklch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) seems the [best color model](https://jakub.kr/components/oklch-colors) supported by all modern browsers. We can use relative colors with it, making color palette design _much_ easier:
  ```css
  #darker-color {
    background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
  }
  ```
- 28 Aug 2025. Malware embedded in the compromised `nx` build tool leveraged Claude/Gemini CLI to offload fingerprintable password-gathering code into prompts, making detection significantly harder for traditional security tools. [semgrep](https://semgrep.dev/blog/2025/security-alert-nx-compromised-to-steal-wallets-and-credentials/)
- 27 Aug 2025. Image APIs that support hotlinking and searching (useful to support LLM-generated content, e.g. slides or presentations):
  1. Openverse: CC, scale, simple REST.
  2. Wikimedia Commons: CC, historic/diagram breadth.
  3. Pixabay: easy, free, broad, but license fuzzier.
  4. Pexels: beautiful but custom license.
  5. Unsplash: stylish but restrictive.
  6. OpenClipart: niche, useful for icons.
- 27 Aug 2025. ⭐ For mental tiredness, the impact of sleep > workload > mood/stress > environment (travel, light, air) > posture > food/drink.
  To rebound, nap > bright light > exercise > fresh air > water > posture/breathing. [ChatGPT](https://chatgpt.com/share/68ae6f42-52a4-800c-b27d-6215e9bd9b89)
- 27 Aug 2025. In my internal meetings, I tend to ask many questions (1 per 8 turns), but fewer open-ended ones (~40%) compared with others. I also praise once every 22 turns - among the lowest in our group. I could ask more open-ended questions and acknowledge good work. [ChatGPT](https://chatgpt.com/c/68ae4c2f-fff4-8329-adff-7e95af88b2ab)
- 26 Aug 2025. When seeking advice, people sometimes think aloud, become repetitive, and introduce detail before clarifying intent. Kind candor helps. You can:
  - **State time boundaries**. "We have 20 min. If we spend 5 min on your question, we'll have 15 for solutions."
  - **Clarify intent upfront**. "Before we dive in: _What can I help with_?"
  - **Interrupt, summarize, clarify _early_**. "Cooperative interruptions" are seen as supportive. E.g. "I get this: six accelerators, two done. Great! _What can I help with_? To accelerate?"
- 25 Aug 2025. [rclone](https://rclone.org/) is the cleanest way to copy files from Google Drive. I ran `rclone config` to set it up with Google Drive via [native app OAuth key](https://developers.google.com/identity/protocols/oauth2/native-app). Then, `rclone copy "gdrive:" transcripts/ --drive-shared-with-me --include "**Transcript*.docx"` copied all transcripts _including_ "Shared with me" files (not just drives). The `--drive-shared-with-me` enables this.
- 22 Aug 2025. Notes from discussion on education with Srikanth Nadhumuni
  - Indian higher education has done better, e.g. with the IITs, than primary education, where ASER _consistently_ shows that 5th graders can't read 2nd grade books.
  - The National Education Policy (NEP) is focusing on FLN (foundational numeracy and literacy). The goal is universal FLN by 2027.
  - Teacing FLN in local languages beats English. Teachers, parents, community support are high. Learning English as a second language is faster. Other countries (France, Germany, Japan) do this.
  - Voice LLMs could help, but may not be toddler-ready, nor strong enough in all local langauges.
  - But high-quality textbook translation with local nuances is a one-time human-in-the-loop effort that AI can support.
  - India's 1 crore teachers have a mandatory 50 hrs/year training requirement that is largely under-implemented.
  - Senthil Mullainathan is working on extracting features from student answers to questions and generating remedial content purely as a black-box. Results beat explainability.
- 23 Aug 2025. Pilots like to have fun, too. While awaiting landing clearance at Kolkata, our IndiGo pilot weaved tight curves _just_ above the clouds at steep angles, giving us stunning views and a mildly thrilling experience. (Or maybe they were just following a flight path.)
- 22 Aug 2025. ⭐ Creating systems that rapidly improve from feedback is the key to success. Rapidity, quality of improvement, quantity of feedback are all enablers.
- 22 Aug 2025. CBDC (Central Bank Digital Currency) is RBI's Web 3.0 protocal. It allows purpose-driven transfers, e.g. money meant for education can only be spent on education.
- 21 Aug 2025. Reading the [Obsidian docs](https://help.obsidian.md/syntax) is like a master class in Markdown note-taking. Features like [properties](https://help.obsidian.md/properties), [embedding YouTube](https://help.obsidian.md/embed-web-pages#Embed+a+YouTube+video), [bases](https://help.obsidian.md/bases), [tags](https://help.obsidian.md/plugins/tags), etc. provide food for thought. The [ObsidianMD subreddit](https://www.reddit.com/r/ObsidianMD/) has interesting tips.
  - Summarize takeaways on top of each section
  - Use atomic notes: one file per idea. Link liberally
  - YAML front-matter you can query, e.g. tags, project, status, ...
  - Use GFM admonitions, e.g. `> [!NOTE]`
  - Store images in a predictable way, e.g. `![Alt text](./img/2025-08-21-screenshot.webp)` -- ALWAYS with alt text
  - Use diff fences for edits / doc changes
  - Task lists with inline dates, e.g. `- [ ] 2025-08-21 Draft a letter`
- 21 Aug 2025. How to research better. [Abhishek Divekar](https://www.linkedin.com/in/ardivekar/)
  - Have an objective when researching. Filter research based on that.
  - Research backwards. Pick a relevant paper. Go through _relevant_ citations. Typically, there are only 1 or 2 _directly_ related ancestors.
  - Don't waste time searching. Gemini Deep Research is a great way to find _and_ read papers.
  - Don't read the abstract. Read the introduction, which _is_ the summary. It's just a page. (The abstract is an LLM-ized versionof the introduction. Not as effective.)
- 19 Aug 2025. The crux of experimentation is the learning from a postmortem. From that perspective I have been experimenting a lot but not been documenting or learning from that. Decision logs with post mortem are a more apt device for me.
- 18 Aug 2025. Meditation is about noticing distraction and returning to focus. So, distraction is necessary _and_ good. #beliefs
- 17 Aug 2025. Notes from podcast with Daniel Kahnemann. The Knowledge Project.
  - Happiness is pleasure in the moment. Satisfaction is the meaningful story of our life. When we _think_, we want satisfaction. When we _feel_, we want happiness. The thinking brain and feeling brain optimize for slightly different things. E.g. The thinking brain packs the calendar with satisfying tasks that the feeling brain feels unhappy executing Both are good for us. We don't know which matters more.
  - Behavior change is harder than we think. Usually, it's better not to expect success in changing others, or ourselves. Instead, understand _why_ that behavior makes sense. Our behaviour is an equilibrium of forces. Weakening "bad" forces is easier than strengthening "good" forces, since it lowers tension. That's inversion!
  - Behaviours tell us more about _situations_ than personality. We assume otherwise. That's an attribution error.
  - Motivation is complex. People can do bad things for good reasons and vice versa.
  - "Feelings get in the way of clear thinking." Example: I vibe-coded the last 2 questions of [TDS GA7](https://exam.sanand.workers.dev/tds-2025-05-ga7) on Claude Code. It didn't run. I delayed fixing it for 5 days, afraid it would a major effort. It ended up a 2 min fix. It _could_ have been major, but checking would have helped. Fear prevented that.
  - Things that hamper clear thinking: intuition, emotion, beliefs. Beliefs are often formed based on people we admire or identify, not reason.
    - Prefer rules, systems and processes. Willpower is an illusion.
    - Delegate decisions to unemotional agents. (But agents misjudge perceived value of gain or loss!)
    - Break down the problem, analyze it, THEM form an intuition. Be disciplined in delaying intuition or forming an opinion
  - Environment shapes thinking but it's not obvious how, e.g. some people work better in noisy cafes. Some colors are more calming.
  - Protect dissenters and dissent. It's painful and costly, and needs nurturing.
- 17 Aug 2025. [NodeJS runs TypeScript files natively](https://nodejs.org/en/learn/typescript/run-natively).
- 16 Aug 2025. Git [partial clone](https://git-scm.com/docs/partial-clone) lets you fetch files on-demand! E.g. `git clone --filter='blobs:size=100k' <repo>` will clone files under 100K and fetch the rest only on checkout. Over time, Git LFS capabilities will migrate into native Git. [Ref](https://tylercipriani.com/blog/2025/08/15/git-lfs/)
- 16 Aug 2025. ⭐ From Daniel Kahneman, The Knowledge Project Podcast.
  - Key lesson. Have lower expectations. Behavior change is hard.
  - Happiness is pleasure in the moment. Satisfaction is the meaningful story of our life. When reflecting, the thinking brain wants satisfaction. When feeling, the feeling brain feels happiness. The 2 brains optimize for different things. The thinking brain packs the calendar with satisfying tasks that the feeling brain hates doing.
  - Happiness & pleasure are both are good for us. We don't know which matters more.
  - Behavior change is harder than most people think. Usually, it's better not to expect success. Changing others, or ourselves.
    - Instead, _understand_ the cause of that behavior. Behaviour is an equilibrium of forces.
    - Weakening forces preventing right behaviour is easier than strengthening forward forces. It lowers tension. That's inversion!
    - Behaviours are more about situations than personality. We assume otherwise - that's an attribution error.
    - Environment shapes thinking but it's not obvious how, e.g. some people work better in noisy cafes. Some colors are more calming.
  - Leadership & delegation
    - Motivation is complex. People can do bad things for good reasons and vice versa.
    - So, delegate decisions to unemotional agents. But agents misjudge perceived value of gain or loss!
    - People prefer over-confident intuitive leaders over slow, deliberate leaders.
    - Protect dissenters and dissent. It's painful and costly, and needs nurturing.
  - Negotiation is about _understanding_, not convincing.
  - "Feelings get in the way of clear thinking."
    - Example: I vibe-coded the last 2 questions of [TDS GA7](https://exam.sanand.workers.dev/tds-2025-05-ga7) on Claude Code. It didn't run. I delayed fixing it for 5 days, afraid it would a major effort. It ended up a 2 min fix. It _could_ have been major, but checking would have helped. Fear prevented that.
    - Intuition, emotion, beliefs hamper clear thinking. Beliefs are often formed based on people we admire or identify, not reason.
  - What enables clear thinking (all are hard):
    - **Pragmatism**. Don't threaten your identity, the leader, etc. Else none of this works.
    - **Rules**, systems and processes. Willpower is illusion. Alignment is an illusion. "Whereever there is judgement, there is noise, and more than what people think."
    - **Standards**. Shared, consistent scales of evaluation. Super-forecasters use probability scales.
    - **Deliberation**. Slow decision making.
    - **Decomposition**. Break down the problem, analyze it, THEN form an intuition. Be disciplined in delaying intuition or forming an opinion.
    - **Pre-mortems**. "Write the history of the disaster this decision led to."
    - **Decision journals** with post-mortems. Pros, cons and alternatives from failed decisions, e.g. Ray Dalio's principles. Change of mind.
    - **Independent data**. Use data. Keep evidence gatherers independent of decision makers.
    - **Preparation**. Have decision makers write down decisions _before_ discussing. Increases diversity.
- 16 Aug 2025. DuckDB's feature engineering capabilites are faster than scikit-learn. [DuckDB](https://duckdb.org/2025/08/15/ml-data-preprocessing.html)
- 15 Aug 2025. ⭐ Assets are any leveragable stored capability. Money is one, but there are several one can "invest" in, be an agent of, or perhaps steal.
  1.  Wealth (investments, income)
  2.  Regenerative assets (land, carbon credits, renewables)
  3.  Contacts (reference customers, hiring pipeline, talent bench, weak-ties)
  4.  Distribution channels (repeatable routes to users: partnerships, marketplaces, APIs, SEO)
  5.  Attention (your audience, whom you can reach directly)
  6.  Trust/reputation in communities (community capital in employers, clients, forums, society, search keywords)
  7.  Personal brand “edges” (moral authority, values lived aloud, distinctive taste or stance)
  8.  Data (your clean, labeled, joined data corpus)
  9.  Code (models, algorithms, components, templates, libraries, tools, evals; versioned)
  10. Content (blog posts, video tutorials, case studies, demos, stories, slides, docs)
  11. Knowledge (notes, decision logs, knowledge graph, institutional memory)
  12. Playbooks & runbooks (process checklists that survived fire, SOPs, scenario plans)
  13. Habits & policies (operating cadence, rituals, governance & compliance muscle)
  14. Optionality (cash buffer, credit lines, slack time, real options, small bets)
  15. Agreements (MSAs/SLAs, pre-negotiated contracts)
  16. IP (copyrights, trade secrets, trademarks)
  17. Health & energy reserves
- 15 Aug 2025. ⭐ Intense negative emotions get in the way of clear thinking. Curiosity, humor, kindness, and gratitude help. (Intense positive emotions like awe, passion, etc. help creativity and are not so bad.) #beliefs
- 15 Aug 2025. I like to think I'm a Python expert. When I saw a client use this code, I told her the indentation is wrong. It ran just fine. And people think only LLMs hallucinate.

  ```python
  prompt = (
    "Let's do this.\n"
      "Step 1\n"
      "Step 2\n"
  )
  ```

- 14 Aug 2025. Turns out Indian English is a well studied topic. Indianisms like "can able to", "need not to", "why because…", "if suppose…", "return back", "revert back", "angry on", "discuss about", "order for", "do one thing…", "give me a missed call", "what is your good name", "kindly adjust", "we are like that only", "he is coming only", "today itself", "now only", "prepone", "pass out (of college)", "out of station", "do the needful", "hotel", "batchmate", "cousin-brother / cousin-sister", "I have a doubt", "I am understanding", "she is knowing", "you’re coming, no?" etc. are discussed in [Pingali Sailaja's Indian English](https://theswissbay.ch/pdf/Books/Linguistics/Mega%20linguistics%20pack/Indo-European/Germanic/English%2C%20Indian%20%28Sailaja%29.pdf). [ChatGPT](https://chatgpt.com/share/689dcf8d-2ce4-800c-8553-e419eafd4891)
- 14 Aug 2025. Astral is [building pyx](https://astral.sh/blog/introducing-pyx) - a paid PyPi alternative. It aims to solve problems like PyTorch CUDA builds. Knowing them, it'll be fabulous. I look forward to when they build a Python hosting service.
- 12 Aug 2025. Blindspots continue to be the insight with maximum RoI. Discovering something we're not even aware we're unaware of opens up the largest possibilities. #beliefs My top sources to discover blindspots are:
  - Feedback. Especially feedback we reject, ignore, or miss.
  - Things we run/shy away from.
- 11 Aug 2025. Discussion at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html). [Padlet](https://padlet.com/pyconsg/pyconsg-education-summit-2025-topic-how-to-prevent-students--57puwelj2o7rgadd)
  - [Discussion validation](https://chatgpt.com/share/6899bd13-03e0-800c-8618-971ed7050a1a)
  - Interesting ways students use AI
    - Use AI to refactor/debug whole codebases
    - Get AI to create questions for practice
    - ChatGPT Study mode
    - Students like to upload photos. We can teach them to upload these to ChatGPT and ask questions.
  - What teaching practices / assessment design can help students think for themselves before turning to AI? [ChatGPT](https://chatgpt.com/share/6899bc2c-4678-800c-b133-3653c378e978)
    - **Interactive orals / micro-vivas (short, process-focused).** Strong alignment with “interactive oral assessment” research and guidance in the AI era: improves authenticity, reduces outsourcing/contract cheating, and checks understanding. Make them low-stakes but frequent.
      _How_: 5–8 min viva tied to a task; students must explain choices, failures, and next steps.
    - **Authentic / project-based assessments students can self-validate (observable outputs).** Project-based and “authentic” assessment meta-reviews show consistent positive effects (achievement, thinking skills, motivation), especially in STEM and small teams. Design tasks with _local data/constraints_ so generic LLM answers are only a baseline.
      _How_: “Default AI answer” gets a pass; “A-grade” requires empirical validation, custom data, or optimisation trade-offs with metrics.
    - **Pair programming + peer critique on whiteboards/pseudocode.** Evidence (meta-analyses & CS-ed studies) supports pair programming for learning and retention; code tracing/peer instruction deepen understanding before coding.
      _How_: Rotate driver/navigator; force commit-message style rationales; 10-minute “whiteboard dry-run” before touching IDE.
    - **Process-over-product with structured reflection.** Metacognitive/reflective interventions show medium-to-large effects on achievement; they also build habits that resist blind acceptance of AI outputs. Keep reflections short but structured.
      _How_: “What I asked AI; what it missed; how I verified; what I’d change next time.”
    - **“No-AI under secure conditions” mixed with AI-permitted coursework.** Matches national/institutional guidance for GenAI-aware assessment design. Use secure, time-boxed checks for fundamentals; allow AI elsewhere with audit trails.
    - **Primary research (interviews/user studies) before design/coding.** Fits the “authentic assessment” literature and reduces LLM substitution. Grade on research protocol + synthesis rigor, not word count.
    - **Explicit problem-solving frames (initial/current/goal state).** Classic problem-solving scaffolds; improves formulation before querying AI. Pair with short “assumption logs.” (General pedagogy supported; CT depends on domain knowledge -- see caveat below.)
    - **Caveat (important):** _Critical thinking depends on domain knowledge._ Don’t expect generic CT drills to transfer without content mastery. Plan tasks so students must recall/apply _specific_ knowledge before or alongside AI.
  - How can we train students to use AI critically instead of accepting the output blindly? [ChatGPT](https://chatgpt.com/share/6899bc5e-1800-800c-bfce-25d261c63a09)
    - **Teach “lateral reading” and SIFT for source checking.** Stanford’s Civic Online Reasoning work and Caulfield’s SIFT method offer actionable heuristics for verifying claims, URLs, and citations that LLMs surface. Build these into rubrics.
    - **Run “AI auditing” labs (hallucination hunts).** Students collect/label model mistakes, missing assumptions, and fabricated citations -- an approach aligned with UNESCO’s call for AI literacy and validation.
    - **Use online judges with _hidden_ tests + adversarial cases.** Autograding literature supports hidden tests for robust generalization; it trains students to verify and not overfit to visible specs -- or to AI’s surface patterns.
    - **“Sandwich” workflow: spec → implement 1–2 reps → let AI complete → _verify_ rigorously.** Mirrors human-in-the-loop patterns in industry; use checklists for unit/property tests and invariants before accepting AI output.
    - **Live-coding with an AI assistant _on display_ (to show failure modes).** Demonstrates nondeterminism/limitations in real time; supports critical habits. Pair with a post-mortem template.
    - **Prompt red-teaming/jailbreak exercises (safe scope).** Students learn that guardrails can be bypassed and why verification matters. Keep it ethical and bounded.
    - **Build a knowledge base first.** Reinforce that CT sits on content knowledge; teach students to _explain_ why an AI answer is plausible or not, citing domain facts.
- 11 Aug 2025. Notes from "My Thoughts on Computational Thinking in the Generative AI Era" by [LEONG Hon Wai](https://www.comp.nus.edu.sg/cs/people/leonghw/), ex-NUS, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - Students from China don't like to write, express their ideas, and share. That's changing now.
  - Computational thinking is pretty new (Jeannette Wing, 2006), actually, based on Papert (1980). It's too early to abandon it.
  - It enables effective learning attitudes:
    - Tinker (experiment & play): helps finding diverse problems to generalize into
    - Debug (find & fix bugs)
    - Create (design & make)
    - Persevere (keep going): but only if it's _productive_, i.e failing in _new_ ways
    - Collaborate & communicate
  - Teaching this is hard. Get students to _WANT_ to do computational thinking.
  - Problem formulation (among the computational thinking blocks) is more important than before.
  - [Leveraging Computational Thinking in the Era of Generative AI](https://cacm.acm.org/blogcacm/leveraging-computational-thinking-in-the-era-of-generative-ai/) argues that computational thinking manifests in prompt/context engineering.
  - We're moving from "Computational Thinking" to "Computational Action" -- where we're talking to AI coders that actually deploy apps that _DO_ stuff.
- 11 Aug 2025. Notes from "Make Learning Easy and Fun @ NLB LearnX" by Goh Soon Seng, NLB, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - Libraries have a Pi Python Makers Club, open for all. Bi-monthly meetings. Quarterly Pi Python workshop.
  - Space provides 3D printers, Raspberry Pi, sensors, etc.
- 11 Aug 2025. Notes from "Teaching Goals and Plans - How we might help students improve problem-solving" by Dr Norman Lee, SUTD, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - Programming is _hard_. E.g. Solving the [Rainfall problem](https://scholar.google.com/scholar?q=Soloway+rainfall+problem) "Sum numbers until 99999" needs _several_ building blocks:
    - Python syntax
    - Getting user input
    - While loop
    - Controlling while loop with counter
    - Accumulation
    - If-else
  - Merging (or composing) such blocks is the hard part. In [Learning to program = learning to construct mechanisms and explanations](https://scholar.google.com/scholar?cluster=16826723591053220162), Soloway, shares 4 compositions.
    - Abutment: Put one block _after_ another
    - Nesting: Put one block _inside_ another
    - Merging: Interleave the code in the blocks
    - Tailoring: Modify the code in the blocks
  - But you need to already have those primitives (patterns) to put together. The "expert blind spot" blinds experts to this.
  - Actionable ideas:
    1. Teach _patterns_ explicitly
    2. Create exercises on _applying_ them
    3. Use [Parsons problem](https://en.wikipedia.org/wiki/Parsons_problem)s: Fill in the blanks. Re-order lines of code. **But** design problem carefully
    4. Step through a debugger. **BUT** students must predict next line, not passive watching
    5. Teach to from one format (psuedocode, flowchart, another language like Excel) to Python. Helps multiple modes of learning
- 11 Aug 2025. Notes from "AISG programmes" by Chen Qeiquang, AI Singapore, [AI Apprentice Programme (AIAP)](https://aiap.sg/apprenticeship/) Assistant Head
  - Full-time. For SG citizens. $4,000/month. Build 3-6 month MVPs for startups, SMEs, or corporates. 300/1000 delivered so far.
  - No lectures/tutorials. Focus is: topic assignments, discussion with mentors, apprentice sharing sessions.
  - Includes an [LLM Application Developer Program](https://aiap.sg/ladp/).
- 11 Aug 2025. Notes from "Scaffolding the Problem-Solving Process for Introductory Computing Students" by Ashish Dandekar, NUS, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - [Built an intelligent tutoring system](https://scholar.google.com/scholar?cluster=5380873998289933948)
  - Encourage students to create their own pattern banks / cheat sheets. "Find 2 more problems that can be solved in the same way."
  - Focusing on the problem-solving process **shrinks** the gap. Students _above_ the 50th percentile of pre-assessment did not improve much. The lowest percentile improved the most.
  - "At NUS, I know that even if I give 0.5% weightage for students attending tutorials, _everyone_ will attend it for those 'free marks'."
- 11 Aug 2025. Notes from "Exploring Multi-Agent Generative AI in Education and Career Advisory" by Dr Yeo Wee Kiang, NUS, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - ⭐ "When you have a high fever, do you speak more sense or nonsense? Nonsense. LLM temperature is like that. But it can also sound creative!"
  - The router pattern is a powerful query rewriter. Redirects the query to specialized prompts/agents.
  - Useful tools you can build for students: Course Mentor, Interview Coach, Job planner/matcher.
- 11 Aug 2025. Notes from "Do we need to teach coding given vibe-coding tools?" by Dr. Oka Kurniawan, SUTD, at [PyConSG Edu Summit 2025](https://pycon.sg/edusummit.html)
  - Paper: [What the Science of Learning Teaches Us About Arithmetic Fluency](https://journals.sagepub.com/doi/pdf/10.1177/15291006241287726) says mental math helps mathematicians. Fluency bootstraps higher-level thinking.
  - MIT Media Lab's Project: [Your Brain on ChatGPT](https://www.media.mit.edu/projects/your-brain-on-chatgpt/overview/). Explores impact on brain. Bran-only group had the widest ranging brain networks. AI accumulates **cognitive debt**.
  - Paper: "A Study of the Difficulties of Novice Programmers" struggle with:
    1. Syntax
    2. Problem solving
    3. Tools
    4. Computing concepts
    5. Analytical thinking / debugging
  - Polya's [How to Solve It](https://en.wikipedia.org/wiki/How_to_Solve_It) is the base problem solving framework for maths and can be adapted to computing
  - Expert programmers have enough patterns to match against. Novices don't. We need a **bottoms-up framework** instead
    - Give them a concrete case.
    - Have them generalize (loops, functional, vectors)
    - Have them implement (debugging)
    - Have them break it (test)
    - All via **vibe-coding**!
    - The chats are tracked!!
  - Paper: [First Things First: Providing Metacognitive Scaffolding for Interpreting Problem Prompts](https://researchrepository.ucd.ie/rest/bitstreams/41008/retrieve)
    - Students often get the problem wrong
    - Reading student conversations helps figure it out
    - LLMs can figure it out too!
  - Paper: [The Widening Gap: The Benefits and Harms of Generative AI for Novice Programmers](https://dl.acm.org/doi/pdf/10.1145/3632620.3671116)
    - Good coders got better with AI. Were able to ignore unhelpful advice.
    - Poor coders got **worse**! Thought they performed better than they did. _Increased_ illusion of competence.
- 11 Aug 2025. The [Bebras Challenge](https://challenge.bebraschallenge.org/) is a global non-programming computational thinking (CT) challenge. [Examples](https://www.bebras.org/task-examples). Singapore runs a [National Junior Informatics Olympiad](https://simcc.org/njio/) that learns from Bebras. It tests the _mindset_ behind coding, specifically "computational thinking":
  - Problem formulation (added recently, and is increasingly important)
  - Decomposition (and composition): break the problem down
  - Pattern recognition: find the building blocks
  - Abstraction: generalize useful blocks, drop irrelevant ones
  - Algorithmic thinking: write the steps to solve
  - Validation (not part of original list, but critical): how to efficiently check if this works
- 11 Aug 2025. [Apple's Embedding Atlas](https://apple.github.io/embedding-atlas/) ([Demo](https://apple.github.io/embedding-atlas/demo/index.html) - slow, needs WebGPU) is an embeddings visualizer, like
  [Tensorflow Projector](https://projector.tensorflow.org/) or [Mantis](https://home.withmantis.com/) ([Demo](https://mantisdev.csail.mit.edu/home/)).
- 10 Aug 2025. CSS nesting can be used with media queries too! [Julia Evans](https://bsky.app/profile/b0rk.jvns.ca/post/3lvve6hrmss22)
- 10 Aug 2025. `id3v2`, `mid3v2` and `eyeD3` seem the cleanest way of editing MP3 tags on the CLI. `mid3v2` was already installed on my system.
- 10 Aug 2025. Learnings people shared in [Ask HN: What trick of the trade took you too long to learn?](https://news.ycombinator.com/item?id=44789068)
  - **Finance & housing**
    - Time is a non-renewable asset.
    - Lifestyle design matters as much as net worth.
    - Future-proof against regret. The present matters, too.
    - Home ownership ties up location choice, capital and has hidden costs.
    - Market timing & geographic arbitrage has an outsized effect.
  - **Software**
    - Align abstraction to domain. Avoid premature abstraction (Don't Repeat Yourself vs Write Everything Twice) and over-abstraction.
    - Temporary fixes tend to stick. Stop-gap regexes last for years.
    - Consistency is a quality multiplier. Small inconsistencies cause disproportionate harm.
    - `git bisect` is a regression-finding superpower.
    - It's OK to write tests covering key parts of legacy codebases - 100% coverage isn't critical.
    - Document architectural decisions: _why_ this approach. See [Diátaxis](https://diataxis.fr/).
    - Flow metrics predict delivery better than (arbitrary) estimates.
    - Building features without linking to delivery spesd wastes resources.
  - **Life habits & learning**
    - You have the right to say "no".
    - Small, consistent actions beat dramatic changes. Persistence beats skill.
    - You're allowed to change your mind.
    - Over-cleverness backfires. Witty code & communication lead to confusion.
    - Context is king. Without background, everything is mis-interpretable.
    - Fun leads to excellence. Excellence leads to fun.
  - The meta-lesson here is how I discovered these:
    - Run [topicmodel](https://pypi.org/project/topicmodel) to identify topics
    - Feed the output CSV to ChatGPT and ask it to share lessons topic-by-by-topic [#](https://chatgpt.com/share/68983ff8-7d34-800c-b098-8649162597ce)
- 10 Aug 2025. Topic modeling can be extended in many ways. [#](https://chatgpt.com/share/68981721-ab80-800c-9ccf-9fc138a92b84)
  - **Structural Topic Models** factor in metadata, like year (numeric) or category or author (categorical).
  - **Relational Topic Models** factor in undirected graph relationships, e.g. parent documents
  - **Graph-Regularized Topic Models** factors in arbitrary graph relationships, e.g. weighted, directed
  - Neural (GNN + Topic Model) approaches work better for large graphs, long-range dependencies, etc.
- 10 Aug 2025. Some ways to inject graph structure into topic similarities to, for example, cluster threaded discussions. [#](https://chatgpt.com/share/68981721-ab80-800c-9ccf-9fc138a92b84)
  - Start with a graph similarity matrix `S`, like [#](https://chatgpt.com/share/68981924-019c-800c-b1f2-1985af81244c)
    - a regularized graph Laplacian (based on degree - adjacency matrix)
    - a similarity matrix like `graph2vec` from [Graph Kernel](https://github.com/ysig/GraKeL)
    - a node-embedding [karateclub](https://github.com/benedekrozemberczki/karateclub).
  - Option 1: "Smoothen" the embedding matrix multiplying it with `S` (i.e. spread each document towards neighbors), _then_ calculate similarities
  - Option 2: Take the weighted average of `S` and the embedding similarity matrix
- 10 Aug 2025. You can extract Hacker News comments as a _threaded_ discussion pasting this into the DevTools console:

  ```javascript
  (() => {
    const rows = [...document.querySelectorAll("tr.athing.comtr")];
    const lines = [];

    for (const row of rows) {
      const ind = row.querySelector("td.ind");
      const level = +ind?.getAttribute("indent");
      const comment = row.querySelector(".commtext");
      if (!comment) continue; // skip deleted/collapsed with no text
      // Get readable text, collapse whitespace/newlines. Replace <p> with •
      let text = comment.innerText
        .replace(/\n{2,}/g, " • ")
        .replace(/\s+/g, " ")
        .trim();
      if (!text) continue;
      lines.push(`${"  ".repeat(level)}- ${text}`);
    }

    copy(lines.join("\n"));
    console.log(`Copied ${lines.length} comments to clipboard.`);
  })();
  ```

- 08 Aug 2025. [Docsify 4.13.1](https://www.npmjs.com/package/docsify/v/4.13.1) is 2 years old and [uses](https://github.com/docsifyjs/docsify/blob/v4.13.1/package.json#L68) [marked@1.2.9](https://www.npmjs.com/package/marked/v/1.2.9) which is 5 years old. Newer plugins like [marked-directive](https://www.npmjs.com/package/marked-directive) don't work with it. Though [docsify v5.0.0-rc1](https://github.com/docsifyjs/docsify/tree/v5.0.0-rc.1) is in development, it may be the better option for modern Markdown plugins. [Here's sample code](https://github.com/sanand0/smartart/blob/e4c5bb88eba3aa3cd92d6711a9e29935cc36e62f/script.js).
- 08 Aug 2025. CommonMark has a _powerful_ [directive syntax](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444) proposal that lets you add classes, attributes, and arbitrary plugins to Markdown. For example, `:abbr[MD]{#id .class title="Markdown"}` for inline directives. Plugins exist for [marked](https://www.npmjs.com/package/marked-directive), [markdown-it](http://npmjs.com/package/markdown-it-directive) and [remark](https://github.com/remarkjs/remark-directive).
- 08 Aug 2025. [biomejs](https://biomejs.dev/) and [dprint](https://dprint.dev/) are gaining traction as [prettier](https://prettier.io/) alternatives. I'm yet to try them but keen to explore.
  - Skip biomejs for now. It uses tabs (not spaces) and does not respect .gitignore by default. Handling these is too much work.
- 05 Aug 2025. [defuddle](https://github.com/kepano/defuddle) can be used in the browser to get the main content from web pages. A replacement for Mozilla Readability. [#](https://stephango.com/defuddle)
- 05 Aug 2025. [Modern Node.js Patterns for 2025](https://kashw1n.com/blog/nodejs-2025/) include these 5 features I'm excited by:
  - **Single-executable bundling**. `node --experimental-sea-config sea-config.json` builds standalone binaries.
  - **ES Modules**. Use `node:` prefix for built-in imports. `import { createServer } from 'node:http';`
  - **Watch mode**. Use `node --watch file.js` auto-reloads when `file.js` or dependencies change.
  - **Env file**. Use `node --env-file=.env` loads `.env` as environment variables.
  - **`node:test`** is a full-featured test framework with `--watch` and coverage.
- 05 Aug 2025. Concise explanations speed up decisions because they're faster to read and understand (obvious). They're also easier to combine with other ideas (less obvious). [#](https://stephango.com/concise)
- 05 Aug 2025. I've been uncertain about [htmx](https://htmx.org/) for some time now. This tutorial, [HTMX is hard, so let's get it right](https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md), convinced me that it's too far from my mental model, so I'm unlikely to ever use it.
- 05 Aug 2025. ⭐ Slow, effortful practice (spaced recall, interleaving topics, self-testing) builds lasting knowledge but looks inefficient and doesn't help with exams. [#](https://chatgpt.com/share/689180c7-03a0-800c-a5d4-5a455429e97f) #beliefs
- 05 Aug 2025. [GitDoc VS Code extension](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gitdoc) auto-commits and syncs notes. I dropped [gitwatch](https://github.com/gitwatch/gitwatch) in favor of this.

  Here's my earlier `gitwatch` script:

  ```bash
  sudo apt install inotify-tools
  git clone https://github.com/gitwatch/gitwatch ~/.local/bin/gitwatch
  chmod +x ~/.local/bin/gitwatch
  printf '[Unit]\nDescription=Auto‑push til\n\n[Service]\nExecStart=%%h/.local/bin/gitwatch/gitwatch.sh -s 10 -r origin -b live -m "auto-commit" /home/sanand/code/til-live\nRestart=on-failure\n\n[Install]\nWantedBy=default.target\n' > ~/.config/systemd/user/gitwatch-til.service
  systemctl --user daemon-reload; systemctl --user enable --now gitwatch-til
  printf '[Unit]\nDescription=Auto‑push notes\n\n[Service]\nExecStart=%%h/.local/bin/gitwatch/gitwatch.sh -s 10 -r origin -b live -m "auto-commit" /home/sanand/code/notes\nRestart=on-failure\n\n[Install]\nWantedBy=default.target\n' > ~/.config/systemd/user/gitwatch-notes.service
  systemctl --user daemon-reload; systemctl --user enable --now gitwatch-notes
  ```

- 04 Aug 2025. Instead of Celery, Redis, Kafka, etc. as task queues, we could the file system as a message queue. For example, `pending/task-01.json` moves to `wip/task-01.json` to `done/task-01.json`. Folders for state/tags, files for task details.
- 04 Aug 2025. [Foam](https://foambubble.github.io/) is a note-taking VS Code extension. The [WikiLinks](https://foambubble.github.io/foam/user/features/wikilinks), [tags](https://foambubble.github.io/foam/user/features/tags) and [backlinking](https://foambubble.github.io/foam/user/features/backlinking) features align _naturally_ with Markdown note-taking. Via [Steph Ango](https://stephango.com/vault) who uses Obsidian which nudged me to search for WikiLink-ing features in VS Code.
- 04 Aug 2025. I'm an open data hawk. But here are things I should remind myself of. [#](https://chatgpt.com/c/68901fb2-38b0-8333-9853-7e6c2fdaf97c)
  - **Privacy incubates creativity**. People self-censor when watched. Privacy shields fragile ideas.
  - **Power assymetry**. Big players can leverage openness more, e.g. Cambridge Analytics + Facebook data.
  - **Context matters**. What's harmless in one setting can be toxic in another.
  - **One-way door**. Data can't be unshared. Don't scrap brakes dreaming of perfect roads. Anticipate tyrannical regimes / cultures.
  - **Not your call**. You don't share your neighbour's medical records.
- 04 Aug 2025. [One Punch Man](https://en.wikipedia.org/wiki/One-Punch_Man) is available as [manga](https://onepunchmanmangaa.com/). I watched the anime first and assumed that came first. Apparently not.
- 04 Aug 2025. ⭐ In "kind" environments (stable rules, rapid and accurate feedback), specialize. In "wicked" environments (rules shift, feedback is noisy/late), generalize. [ChatGPT](https://chatgpt.com/share/68902bbf-bf58-800c-b6b5-9ae787fa9c26)
- 03 Aug 2025. "In fact, React Native looks set to become the most engine-agnostic JavaScript runtime around". [The Many, Many, Many, JavaScript Runtimes of the Last Decade](https://buttondown.com/whatever_jamie/archive/the-many-many-many-javascript-runtimes-of-the-last-decade/)
- 03 Aug 2025. [OMDb](https://www.omdbapi.com/) (simple) and [TMDb](https://www.themoviedb.org/) (comprehensive) are API-friendly alternatives to the IMDb.
- 03 Aug 2025. [copyparty](https://github.com/9001/copyparty) seems one of the most feature-rich file servers out there. Single Python file, runs on any OS, works with any client, and optimized for speed. [Video](https://youtu.be/15_-hgsX2V0)
- 03 Aug 2025. Quotes I enjoyed from [Linus Torvalds' TED interview](https://youtu.be/o8NPllzkFhE)
  - I want to not have external stimulation. You can kind of see, on the walls are this light green. I'm told that at mental institutions they use that on the walls. It's like a calming color. ... the main thing I worry about in my computer is -- it really has to be completely silent. If the cat comes up, it sits in my lap. And I want to hear the cat purring.
  - I did not start Linux as a collaborative project. I started it as one in a series of many projects I had done at the time for myself, partly because I needed the end result, but even more because I just enjoyed programming.
  - I'm actually not a people person. But I do love other people who comment and get involved in my project.
  - The big point for me was not being alone and having 10, maybe 100 people being involved. Going from 100 people to a million people is not a big deal -- to me. Well, I mean, maybe it is if you want to sell your result then it's a huge deal. But if you're interested in the technology and you're interested in the project, the big part was getting the community.
  - So Git is my second big project, which was only created for me to maintain my first big project. And this is literally how I work.
  - Well, I do code for fun -- but I want to code for something meaningful so every single project I've ever done has been something I needed.
  - Apparently, my sister said that my biggest exceptional quality was that I would not let go.
  - I can't do UI to save my life.
  - Good taste is about really seeing the big patterns and kind of instinctively knowing what's the right way to do things.
  - Companies like Google and many others have made, arguably, like, billions of dollars out of your software. Does that piss you off? No. No, it doesn't piss me off for several reasons. And one of them is, I'm doing fine. But the other reason is -- I mean, without doing the whole open source and really letting go thing, Linux would never have been what it is.
  - I think one reason open source works so well in code (is that ...) Code either works or it doesn't.
- 03 Aug 2025. The [Uses This](https://usesthis.com/) site has interviewed professionals for decades. From their [repo](https://github.com/waferbaby/usesthis) I scraped the top developer apps post 2020:

  ```bash
  git clone --depth=1 --branch=main https://github.com/waferbaby/usesthis.git

  /bin/ls usesthis/posts/*.markdown \
    # Pick the developers \
    | xargs grep -l '^- developer' \
    # Interviewed after 2020 \
    | xargs grep -l '^date: 202' \
    # Find all links \
    | xargs cat | grep -o '\[[^]]*\]' \
    # Extract the link text \
    | sed 's/^\[\(.*\)\]$/\1/' \
    # Convert to lowercase \
    | tr '[:upper:]' '[:lower:]' \
    # Sort by frequency \
    | sort | uniq -c | sort -rn
  ```

  Based on this, here are the top services I'm not using:

  - Editors: vim, emacs, neovim
  - Hardware: All Apple products, Blue yeti mic
  - Services: Slack, Spotify, Notion, Figma, Todoist
  - Software: Photoshop, Blender, Unity, Obsidian, Lightroom, Illustrator

- 03 Aug 2025. CloudFlare has an Iceberg data catalog in [R2 Data Catalog](https://developers.cloudflare.com/r2/data-catalog/). Iceberg is like Parquet but supports metadata, time-travel, and schema edits. But I'm yet to find a single publicly accessible Iceberg catalog. Its open-data adoption is not as high as Parquet's. [Apache Iceberg vs Parquet](https://chatgpt.com/share/688f0b61-f9d8-800c-a7c8-46410ab4f1ab)
- 03 Aug 2025. [Observable Notebook 2](https://observablehq.com/notebook-kit/) is the new notebook format from Mike Bostock. It is vanilla JS and embeddable into other pages. THis would have been a big deal 2 years ago, but with the LLM ecosystem today, I'm not sure if it matters as much.
- 03 Aug 2025. To add CORS support to CloudFlare pages protected by Zero Trust, add a [`_headers`](https://developers.cloudflare.com/pages/configuration/headers/) file to your repo. (This is different from the [Zero Trust CORS](https://developers.cloudflare.com/cloudflare-one/identity/authorization-cookie/cors/) which allows automated logins.) Sample `_headers` that lets logged-in users fetch pages via `fetch("...", { credentials: "include" })`:
  ```
  /*
    Access-Control-Allow-Credentials: true
    Access-Control-Allow-Origin: https://your-site.example.com
    Access-Control-Allow-Methods: GET, HEAD
    Access-Control-Allow-Methods: *
  ```
- 02 Aug 2025. From [A.I. Is About to Solve Loneliness. That’s a Problem](https://www.newyorker.com/magazine/2025/07/21/ai-is-about-to-solve-loneliness-thats-a-problem): “Blindly stifling every flicker of boredom with enjoyable but empty distractions precludes deeper engagement with the messages boredom sends us about meaning, values, and goals.” Maybe the best thing about boredom is what it forces us to do next.
- 02 Aug 2025. Here's when be candid vs polite. #beliefs [ChatGPT](https://chatgpt.com/share/688e29be-d4bc-800c-b5f5-527c3502bf78)
  - If there's high trust (i.e. the other person trusts you):
    - Important topic/decision: Be candid
    - Unimportant: Follow culture (e.g. in Japan, you'd be polite; in The Netherlands, you'd be candid)
  - Low trust:
    - Important: Earn trust first
    - Unimportant: Be polite
- 02 Aug 2025. I didn't realize that it was [Luis Alvarez](https://en.wikipedia.org/wiki/Luis_Walter_Alvarez) (whom I know from his work on the bubble chamber) is the _same_ person who figured out that [an asteroid killed dinosaurs](https://en.wikipedia.org/wiki/Alvarez_hypothesis). He also used muon tomography to search pyramids for hidden chambers and figured out Kennedy was shot from behind. Added his biography, [Collisions](https://www.goodreads.com/book/show/218569821-collisions) to my [to-read list](https://www.goodreads.com/review/list/39713492-s-anand?ref=nav_mybooks&shelf=to-read&sort=date_added). [Ref](https://en.wikipedia.org/wiki/Luis_Walter_Alvarez#Scientific_detective_work)
- 01 Aug 2025. Most CDNs use `package.json` `"exports"` for the default URL of npm packages.
  - [jsDelivr](https://www.jsdelivr.com/) uses `jsDelivr` > `browser` > `main` (does not use `exports` - a notable exception)
  - [unpkg.com](https://unpkg.com/) uses `exports.default` > `browser` > `main`
  - [skypack.dev](https://www.skypack.dev/) uses `exports.default` > `module` > `main`
  - [esm.sh](https://esm.sh/) uses `esm.sh.bundle` > `exports.default`
  - [jspm.dev](https://jspm.dev/) uses `jspm` > `exports.default` > `main`

## Jul 2025

- 30 Jun 2025. Here's a JS snippet you can paste in the DevTools console of an npm package version page ([example](https://www.npmjs.com/package/d3?activeTab=versions)) to get a Markdown list showing the versions and dates
  ```js
  copy(
    $$('table[aria-labelledby="version-history"] tbody tr')
      .map((tr) => {
        const a = tr.querySelector("a");
        const date = new Date(tr.querySelector("time").getAttribute("datetime")).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        return `- [${a.textContent.trim()}](https://npmjs.com${a.getAttribute("href")}): ${date}.`;
      })
      .join("\n")
  );
  ```
- 29 Jul 2025. [FFmpeg in plain english](https://vidmix.app/ffmpeg-in-plain-english/) lets you run ffmpeg in the browser with plain English commands. It converts the task using an LLM into an ffmpeg command, runs it in browser via [WASM](https://ffmpegwasm.netlify.app/) (without uploading the file) and saves the output locally. This is very useful, since [ffmpeg](https://ffmpeg.org/) has one of the most complex command line options. I use an [llm]() template defined via:
  ```bash
  llm --save ffmpeg --model gpt-4.1-mini --extract --system 'Write an ffmpeg command'
  ```
  which I can use like this:
  ```
  llm -t ffmpeg 'Crossfade a.mkv (1:00-1:30) with b.mkv (2:10-2:20), 3s duration'
  ```
- 28 Jul 2025. Textual 4.0 supports Markdown streaming. [Ref](https://github.com/Textualize/textual/releases/tag/v4.0.0)
- 28 Jul 2025. `Exception.add_note()` lets you add notes to any Exception. Available since Python 3.11. [Simon Willison](https://simonwillison.net/2025/Jul/27/til-exception-add-note/)
- 26 Jul 2025. Here are some tech community builders in India. [ChatGPT](https://chatgpt.com/share/688787c8-a0b0-800c-8be1-0c18a9c4f23e)
  - Atul Chitnis (Bengaluru) – FOSS.IN and Linux Bangalore
  - Dr. Nagarjuna G. (Mumbai) – FSF India and ILUG Bombay
  - Rushabh Mehta (Mumbai) – FOSS United & ERPNext Community
  - Kiran Jonnalagadda & Zainab Bawa (Bengaluru) – HasGeek Tech Conferences
  - Kenneth Gonsalves (Nilgiris/Tamil Nadu) – Indian Python Community (deceased)
  - Thejesh GN (Bengaluru) – DataMeet Open Data Community
  - Varun Aggarwal (Delhi) – ML-India (Machine Learning Forum)
  - Prashant Sahu (Pune) – Pune AI Meetup
  - Akshay Dashrath (Bengaluru) – BlrDroid Android Group
  - Vikrant Singh (Bangalore) – ReactJS
  - Sankarshan Mukhopadhyay – Mozilla India and Wikimedia tech outreach
  - Neependra Khare (Bengaluru) – Docker/Kubernetes Meetup
  - Atul Jha (Bengaluru/Hyderabad) – OpenStack & CNCF Communities
  - Aseem Jakhar & Ajit Hatti (Delhi/Pune) – null Open Security Community
  - Rohit Srivastwa (Pune) – ClubHack and Hackerspaces
  - Anubha Maneshwar (Nagpur) – GirlScript Developer Network
- 26 Jul 2025. Digital Public Infrastructure initiatives in India scale if there's a clear use case _and_ centralized orchestration. [Prof R Srinivasan](https://newsletter.iimbaa.com/from-upi-to-ondc-the-role-of-centralised-orchestration-in-dpi-success/)

  | DPI                | Clear use case?                                              | Centralised orchestration?                                          |
  | ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------- |
  | Aadhaar            | **Yes** - KYC + subsidy/welfare authentication               | **Strong** - UIDAI + govt mandates tied to services                 |
  | UPI                | **Yes** - Instant P2P/merchant mobile payments               | **Strong** - RBI/NPCI rails; policy nudges (QR, low cost)           |
  | DigiLocker         | **Partial** - Store/share govt docs when needed              | **Medium** - MeitY platform; dept adoption uneven                   |
  | Account Aggregator | **Weak/indirect** - Consent-based data sharing for loans/PFM | **Light** - RBI framework + Sahamati; integration left to ecosystem |
  | ONDC               | **Mixed** - Open e-commerce access for SMEs/buyers           | **Hybrid** - DPIIT/ONDC Ltd design; decentralized market actors     |
  | DIGIT              | **Yes (gov ops)** - Municipal services (tax, permits, etc.)  | **Top-down per state** - eGov Foundation core + state rollout gaps  |
  | DIKSHA             | **Yes** - Digital learning; QR textbooks; teacher training   | **Hybrid** - MoE/NCERT core + federated state execution             |

- 26 Jul 2025. The distance between the end of the thumb and little finger, when fullet stretched, is ~9 inches. Between the thumb and pointer, when at a right angle, is ~6 inches. I checked this today - and it's right. A useful rule of thumb for measurement - literally. [Vasuki](https://www.linkedin.com/in/vasuki-seshadri/), ~1985
- 26 Jul 2025. [GitHub Sponsors Explore](https://github.com/sponsors/explore) shows you which developers code most of your dependencies. You can sponsor them. I sponsored [isaacs](https://github.com/sponsors/isaacs) who maintains [node-tap](https://node-tap.org/) and [sindresorhus](https://github.com/sponsors/sindresorhus) who maintains several NodeJS packages for $50/month each.
- 26 Jul 2025. [markmap](https://markmap.js.org/) looks like a promising JS-based interactive mindmap from Markdown. More interactive than [Mermaid Mindmap](https://docs.mermaidchart.com/mermaid-oss/syntax/mindmap.html#an-example-of-a-mindmap).
  - [mind-elixir](https://github.com/ssshooter/mind-elixir-core) is another option that lets you edit mindmaps and serialize in its own format
  - [jsmind](https://github.com/hizzgdev/jsmind) is yet another but docs are in Chinese
  - [elkjs](https://github.com/kieler/elkjs) seems a good option for laying out nodes in an architecture-style flow diagram
- 23 Jul 2025. [catbox.moe](https://catbox.moe/) is a file hosting service that you can upload a file to without any API key. It's an alternative to [0x0.st](https://0x0.st/). Both can be used for images. Catbox retains files indefinitely and openly publishes costs - might last longer. 0x0 deletes files between 1-12 months based on size.
- 22 Jul 2025. "Common sense is a specialization". That's something I said accidentally when seeing that some schools/colleges tend to produce more broad, sensible thinkers (e.g. Naval College @ Goa) while others produce more narrow-thinking specialists (e.g. engineering colleges).
- 22 Jul 2025. Three groups control the financial economy. To sell sustainability services, you need to have sold to one of them. via [Sundeep](https://www.linkedin.com/in/sundeeprm/)
  1. Banks, who will sell a loan against anything they can insure, and look to insurers for long-term thought leadership.
  2. Insurers, who will insure anything they can re-insure, and re-insurers, who look at real-estate trends as a stable long-term asset
  3. REITs who own the majority of the world's real-estate
- 21 Jul 2025. Google Apps Scripts are actually a web apps platform in JavaScript more than a macros equivalent. [Ref](https://github.com/tanaikech/taking-advantage-of-Web-Apps-with-google-apps-script)
- 21 Jul 2025. ⭐ DuckDB supports joins based on embedding similarity and even hybrid similarity! [Ref](https://duckdb.org/2025/06/13/text-analytics.html)
- 21 Jul 2025. Human persuasion techniques like Cialdini's work well with LLMs [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3luawqzljzc2d)
- 20 Jul 2025. [gitwatch](https://github.com/gitwatch/gitwatch) is a clean way of auto-committing & pushing files into GitHub. It effectively converts GitHub into a Dropbox-like service.
- 20 Jul 2025. Adding [`?udm=14`](https://udm14.com/) to Google Search URLs removes AI mode and other clutter. [Ref](https://tedium.co/2024/05/17/google-web-search-make-default/)
- 19 Jul 2025. [Inevitablism](https://tomrenner.com/posts/llm-inevitabilism/) is framing an argument as if it is the only logical choice in an inevitable future. Thereafter, the argument shifts to are there any alternative choices in that inevitable world, rather than whether that future is, in fact, inevitable.
- 19 Jul 2025. ⭐ LLM chat over data may leapfrog dashboards. This may be a trigger to kill redundant UI.
- 19 Jul 2025. A new wave of (liberal) colleges have emerged. Ashoka University, Krea, Plaksha (Mohali), Jindal University (Sonipat), FLAME University (Pune), Azim Premji University, Shiv Nadar University. Many of these accept IB students who are choosing to stay in India, instead of the earlier trend of studying abroad.
- 16 Jul 2025. `xh` is `curl`-compatible but adds JSON pretty‑print, colour, `--table` and can pass parameters like `xh post :8000/api question='When is the ROE?'`
- 16 Jul 2025. `dasel` is `jq`-compatible but supports YAML and TOML too
- 16 Jul 2025. `lazygit` is a 5-MB TUI that lets you stage/commit/push/diff in one screen
- 16 Jul 2025. `eza` is a modern `ls` replacement. I switched to this with `abbr --add l 'eza -l -snew --git --time-style relative --no-user --no-permissions --color-scale=size'`
- 16 Jul 2025. `jless` is `less` replacement for large JSON streams, with search & scroll
- 16 Jul 2025. `jc` is a JSON to table formatter
- 16 Jul 2025. `uv cache prune` removes only _unused_ cache entries and saves a fair bit of space. Mine trimmed 85 GB.
- 15 Jul 2025. [neomutt](https://github.com/neomutt/neomutt) is a convenient way for me to read my archived `.mbox` files. `neomutt -f $FILE.mbox` lets you browse an MBOX.
- 14 Jul 2025. IITM DoMS is a management school inside a technical institute. That lets MBA students learn to interact with geeks and create startups.
- 14 Jul 2025. Last year, LLMs were able to solve 3 JEE problems. This year, they were all-India Rank #4, and then beat AIR #1.
- 14 Jul 2025. India has 3% electric vehicle penetration. The highest (perhaps Norway) is 80%. The Indian Government is actively looking to phase in EVs. Charging points are being installed across the country.
- 01 Jul 2025. LinkedIn has an undocumented link that shows schedules posts at <https://www.linkedin.com/share/management/> which redirects to <https://www.linkedin.com/feed/?shareActive=true&view=management>

## Jun 2025

- 30 Jun 2025. DuckDB can read JSON APIs! [Ref](https://duckdb.org/2025/06/27/discovering-w-github)
- 28 Jun 2025. "People are great at feedback on what you are doing wrong. They are not so good at telling you how to fix it. They don't know you that well." [Amit Kapoor](https://amitkaps.com/)
- 28 Jun 2025. [Perfect Cursors](https://github.com/steveruizok/perfect-cursors) makes periodic cursor positions animate smoothly by interpolating on a spline\*\*
- 27 Jun 2025. CloudFlare _and_ Vercel now support sandboxes where you can execute code. The price is not so low that we can execute for free in bulk but works well infrequent or batched code execution. [Simon Willison](https://simonwillison.net/2025/Jun/26/sandboxes/)
- 27 Jun 2025. Here's how I'm using ffmpeg for video recording & editing.

  - To record screen at 5 frames per second, I run an abbreviation `screenrecord` which maps to:

    ```bash
    FPS=5 ffmpeg -vaapi_device /dev/dri/renderD128 -f x11grab -video_size 1920x1080 -framerate $FPS -i $DISPLAY+0,0 -vf 'format=nv12,hwupload' -c:v h264_vaapi -qp 20 screenrecord.mkv
    ```

  - To merge the screen recording with audio recorded on my phone:

    ```bash
    OFFSET=-4 ffmpeg -y -i screenrecord.mkv -itsoffset $OFFSET -i audio.opus -c:v copy -c:a aac -map 0:v -map 1:a -shortest video.mkv
    ```

  - To normalize audio and reduce noise: (this worked well once, and not at all well once, so needs more tweaking.)

    ```bash
    # Detect the normalization parameters
    ffmpeg -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null - -i video.mkv

    # Apply normalization and noise reduction
    ffmpeg -i video.mkv -c:v copy -af afftdn=nr=20:nf=-40,loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=$input_i:measured_TP=$input_tp:measured_LRA=$input_lra:measured_thresh=$input_thresh:offset=$target_offset:linear=true -c:a aac -b:a 12k normalized.mkv
    ```

- 25 Jun 2025. [Hyperfine](https://github.com/sharkdp/hyperfine) is like %timeit for the shell. Written in Rust
- 24 Jun 2025. The hungrier I am the better the food tastes. A good reason to eat less quantity and frequency
- 24 Jun 2025. You can [purge the jsDelivr cache](https://www.jsdelivr.com/tools/purge) manually. Helps if you released a new version of a package and way to purge an alias (e.g. `https://cdn.jsdelivr.net/npm/your-package@1`)
- 23 Jun 2025. [XConvert](https://www.xconvert.com/compress-webm) is a convenient online app to compress .webm videos. Not great design but fairly good compression.
- 22 Jun 2025. You can draw a treemap of import times via `python -X importtime app.py > timing.txt` and then paste them at <https://kmichel.github.io/python-importtime-graph/>.
- 22 Jun 2025. [PyOpenLayers](https://github.com/eoda-dev/py-openlayers) adds interactive mapping via OpenLayers to Marimo and Jupyter.
- 22 Jun 2025. In a [TechCrunch interview with Jared Kaplan](https://techcrunch.com/podcast/inside-anthropics-ai-ambitions-with-jared-kaplan/) has was asked if Anthropic is becoming less safety conscious because they released Opus 4 which blackmails. Kaplan replied that they have stronger testing and higher transparency, so they're _more_ likely to share AI dangers early. Great positioning! Conversations are about perspective change and this nailed it.
- 21 Jun 2025. Never use a toothpick on a tooth with a dental crown. Only use a flosser or water flosser.
- 21 Jun 2025. [CSS `attr()`](https://ishadeed.com/article/modern-attr/) is one of the most powerful features in modern CSS. It lets you control CSS via HTML attributes.
- 20 Jun 2025. Notes from [Pydantic AI GitHub CI](https://github.com/pydantic/pydantic-ai/blob/main/.github%2Fworkflows%2Fci.yml):
  - UV_PYTHON sets default Python version
  - COLUMNS increase terminal width
  - `uv run` supports `--extra` for extra packages
  - `cloudflare/wrangler` action has a deploy that allows deployment to specific URLs or subdomains
- 20 Jun 2025. Adding QR code to _all_ slides in a deck (linking to the slides) helps. People take photos of random slides and this lets them get the link wherever.
- 20 Jun 2025. [PyOpenLayers](https://github.com/eoda-dev/py-openlayers) adds interactive mapping via OpenLayers to Marimo and Jupyter
- 20 Jun 2025. Conversation is about positioning. For example:
  - TechCrunch interviewer: Anthropic released Claude Opus 4 thought it blackmailed people. Is Anthropic is becoming less safety conscious?
  - Kaplan: We have very strong testing. So we're more more likely to spot AI dangers early. We share such reports to set higher standards for transparency.
- 18 Jun 2025. `vitest run --globals` makes `vitest` is a near drop-in replacement for `jest`. It injects `describe`, `it`, `expect`, etc. as globals. You need to swap `jest.*` with `vi.*`.
- 18 Jun 2025. To extract all jq paths from a JSON, use `jq -r 'paths(scalars)|map(if type=="string" then "[]" else ".\(. )" end)|join("")|unique[]' file.json`.
  I use this to extract paths from ChatGPT's export conversations.json via
  `jq -r '[paths(scalars)|map(if type=="string" then "."+. else "[]" end)|join("")]|unique[]|select(contains(".mapping."))|split(".mapping.")[1]|sub("^[^.]*";"")' chatgpt/conversations.json | sort | uniq`
- 18 Jun 2025. `uv run` can run _any_ command, not just Python scripts, e.g. `uv run npx` or `uv run bash`. It's the same as `npx` or `bash` except it activates the venv and loads `.env`.
- 18 Jun 2025. Notes from [AI Startup School](https://events.ycombinator.com/ai-sus). [Guillermo Flor](https://www.linkedin.com/posts/guillermoflor_yesterday-was-day-1-of-y-combinators-ai-activity-7340779902104711171-GtBn)
  - Sam Altman. Chase $0B ideas, not $0M ones. Weird + right > safe + crowded
  - Gary Tan. Agency scales. Tools change, people/mindset don’t.
  - Andrej Karpathy.
    - Instead of LLM memory to store facts, edit system prompt with general strategies, like the LLM writing a book for itself on how to solve problems.
    - Autonomy slider. Let user pick how far LLM acts by itself. Like the Tesla autopilot levels.
    - Make evals EASY and FAST for humans.
- 14 Jun 2025. ⭐ "Database migrations are like version control for your database." [X](https://x.com/alexisgallagher/status/1933615376732131477). [dbmate](https://github.com/amacneil/dbmate) seems like an apt choice.
- 13 Jun 2025. [PDF plumber](https://github.com/jsvine/pdfplumber) seems a good way to extract PDF structure and internals.
- 12 Jun 2025. [yq](https://github.com/mikefarah/yq) is like [jq](https://jqlang.org/) but for YAML, XML, CSV, and TOML as well. [dasel](https://github.com/TomWright/dasel) is similar but not updated.
- 12 Jun 2025. [qsv](https://github.com/dathere/qsv) is a data wrangling toolkit for CSV files. [xan](https://github.com/medialab/xan) is similar. [csvkit](https://github.com/wireservice/csvkit), of course, is the most popular. An alternative, [xsv](https://github.com/BurntSushi/xsv?tab=readme-ov-file) is no longer updated.
- 10 Jun 2025. The [Singularity Reddit](https://www.reddit.com/r/singularity/) is apparently a good source of LLM news.
- 10 Jun 2025. Reddit has RSS feeds for each subreddit:
  - Basic: `https://www.reddit.com/r/<subreddit>.rss  `
  - All new: `https://www.reddit.com/r/<subreddit>/new.rss`t
  - Daily top: `https://www.reddit.com/r/<subreddit>/top.rss?t=day` (replace day with hour, week, month, or year)
  - Private reddit feeds are available at https://www.reddit.com/prefs/feeds/
- 05 Jun 2025. Indian High Court judgements are now available as a public dataset on AWS and updated periodically. [Ref](https://registry.opendata.aws/indian-high-court-judgments/)
- 03 Jun 2025. Pure CSS tooltips are possible. [Julia Evans](https://jvns.ca/til/in-css-you-can-populate--content---with-a--data---attribute/)
- 03 Jun 2025. Google has an [OAuth Playground](https://developers.google.com/oauthplayground/) which is a convenient way to get a temporary OAuth token.
- 02 Jun 2025. [anyascii](https://github.com/anyascii/anyascii) is a better alternative to [unidecode](https://pypi.org/project/Unidecode/). It supports more characters and also supports transliteration. I use it to strip out non-ASCII in ChatGPT's output. [Commit](https://github.com/sanand0/scripts/commit/5ea8493)

## May 2025

- 31 May 2025. MicroVMs like [firecracker](https://github.com/firecracker-microvm/firecracker) are like containers but offer higher isolation with slightly higher latency and memory via `kvm` hypervisors. [ChatGPT](https://chatgpt.com/share/683c1251-3f48-800c-95d4-6a3e9a2b63ac)
- 31 May 2025. I was exploring free alternatives to the $4/mo Hetzner instance I use. Google offers a free e2 micro instance. But it's _much_ smaller than the Hetzner CAX11/CX-22 server I run. 25% of CPU, 25% of RAM (which is the main problem -- 1 GB is often not enough), slower HDD, 5% of outbound traffic. Hetzner remains one of the best value offerings.
- 31 May 2025. Planning to use [pretty-quick](https://www.npmjs.com/package/pretty-quick) instead of [prettier](https://www.npmjs.com/package/prettier). It's a wrapper that only fixes changed files based on git.
- 31 May 2025. [f2](https://github.com/ayoisaiah/f2) is an intuitive cross-platform renaming tool. Usage:
  ```bash
  f2 -f 'jpeg' -r 'jpg'
  f2 -r '{id3.artist}/{id3.album}/${1}_{id3.title}{ext}'
  ```
- 31 May 2025. git worktrees can create multiple copies of code. This is useful when using different coding agents run the same task in parallel. [Ref](https://www.skeptrune.com/posts/git-worktrees-agents-and-tmux/)
  - `git worktree add -b $newbranch worktree/$path` creates a copy of HEAD in $path as a $newbranch
  - `git push` from branch and create a pull request
  - `git worktree remove worktree/$path` to remove worktree
  - `git worktree prune` for garbage collection
- 29 May 2025. Today, I'd go with [Node's native test runner](https://nodejs.org/api/test.html) for backend JS testing. I used [node-tap](https://node-tap.org/) earlier. For front-end, I'd pick [vitest](https://vitest.dev/). [ChatGPT](https://chatgpt.com/share/683808bf-c01c-800c-a5ea-18df8394414c)
- 27 May 2025. ⭐ DuckLake is a DuckDB extension that makes Parquet files editable with history. And much more. [DuckDB](https://duckdb.org/2025/05/27/ducklake.html)
- 25 May 2025. Here's one way controls inflate cost. Tracking expenses, submitting receipts, and justifying usage adds transaction cost. So, rather than a $10 monthly top-up, I'd rather top-up $200 (even if it might go unused), rather than have to ask again.
- 24 May 2025. [oxlint](https://oxc.rs/docs/guide/usage/linter) is a fast [eslint](https://eslint.org/) alternative written in Rust. It supports _most_ but not all eslint rules. [Migration](https://github.com/oxc-project/oxlint-migrate) can be automated but not all rules are migrated (which may be OK). Best for new projects.
- 23 May 2025. My preferred way to remove passwords from a PDF is via pikepdf: `uv run --with pikepdf python -c 'import pikepdf, sys; pdf = pikepdf.open(sys.argv[1], password=sys.argv[2], allow_overwriting_input=True); pdf.save()' filename.pdf password`.
- 23 May 2025. Learnings on [the mortality of states](https://www.pnas.org/doi/10.1073/pnas.2218834120#supplementary-materials)
  - **Steep early rise in vulnerability**. Risk of nation states dying (hazard curve) climbs quickly during roughly the first ~200 years of a state’s life.
  - **Risk then flattens out**. After that "middle-age," the chance of termination stops increasing; hardy states can survive for many centuries.
  - **Pattern is global**. Same shape appears in Europe, the Americas, and East Asia, including the well-known ~300-year upper limit of many Chinese dynasties.
  - Resilience erodes due to "slow" variables that grow quietly.
    - **Environmental degradation**. Soil exhaustion, deforestation, or irrigation salinity silently reduce a polity’s safety buffer.
    - **Increasing complexity & overhead**. Success breeds a bigger bureaucracy and military, raising fixed costs and response time.
    - **Rising inequality**. Elite capture and extractive institutions sap legitimacy and social cohesion, making the system brittle.
    - **Path-dependence & sunk-cost lock-in**. Older states are invested in infrastructures and hierarchies that are hard to reform quickly.
  - **Corporates are different**. Hazard curve spikes within ~5-10 years. After that, risk declines, but rises of obsolescence sets in. They due after ~30 years due to technological disruption, market saturation, managerial inertia, or capital-market pressure. [ChatGPT](https://chatgpt.com/share/6832865e-39a8-800c-b211-0d17815f14e1)
- 22 May 2025. The [Material Contracts Corpus](https://mcc.law.stanford.edu/) is a collection of ~1 million contracts / agreements with machine-generated metadata (party names, contract types, dates). Great for text analysis.
- 21 May 2025. WSL is now open source. [Microsoft](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
- 20 May 2025. [UUID7](https://uuid7.com/) is a UUID that's sortable by time. DuckDB implements it in [v1.3.0](https://duckdb.org/2025/05/21/announcing-duckdb-130.html)
- 20 May 2025. [just](https://github.com/casey/just) is a command runner like `make` but uses YAML conifguration. Written in Rust.
- 19 May 2025. If you have a podcast RSS feed and want to share it as a friendly link for apps, here are options.
  1. **pod.link**: `https://pod.link/id?href=<RSS>`. Page with Apple, Spotify, Google/YouTube Music, Pocket Casts, Overcast; auto-detects installed app; free, vanity slugs, GA-ID, cache-clear; run by Spotify
  2. **SubscribeOnAndroid**: `https://subscribeonandroid.com/<RSS>`. Android-only intent for any compliant app (AntennaPod, Pocket Casts, etc.); tiny, ad-free fallback
  3. **Episodes.fm**: `https://episodes.fm/<base64-RSS>`. Device-detect page; remembers the app a listener chose; supports live-episode `<podcast:liveItem>` tags
  4. **Plink**: `https://plinkhq.com/i/<AppleID>?to=page`. Deep-link redirect on mobile, landing page on desktop; free tier, vanity `plnk.to/` URLs, built-in analytics
  5. **Podfollow**: `https://podfollow.com/<AppleID>`. Claim by RSS; free; episode links; optional web player; custom redirect rules
  6. **Chartable SmartLinks**: `https://chartable.com/feeds/<feedID>/smartlinks`. Add a trackable prefix in RSS; channel attribution, vanity slug, A/B testing
  7. **Linkfire for Podcasts**: `https://linkfire.com/podcasts?url=<RSS>`. Dashboard "Create link" flow; auto-updates new episodes; Apple Podcasts analytics; email-capture widgets
  8. **Feature.fm**: `https://feature.fm/smartlinks/podcast?feed=<RSS>`. Pixel support, retargeting campaigns; freemium tier with upgrade for custom domains
- 16 May 2025. Birds navigate using quantum entanglement! [Guardian](https://www.theguardian.com/science/2025/mar/23/they-have-no-one-to-follow-how-migrating-birds-use-quantum-mechanics-to-navigate) [ChatGPT](https://chatgpt.com/share/68282f03-3978-800c-8e46-e9979887317d)
- 13 May 2025. ⭐ Today, if I had to store a bunch of data files (e.g. parquet) under 1GB, I would use GitHub Releases. Here are options:
  - **GitHub Releases**. 2 GiB **per file**, unlimited total & bandwidth. 🟢 Immortal URL, versioning, easy CI publish. 🔴 Each file must stay < 2 GiB; no built-in SQL.
  - **Zenodo** (CERN). 50 GB per record; one-off bumps to 200 GB. 🟢 DOI assignment, archival mandate. 🔴 Occasional throttled bandwidth; no API for partial file reads.
  - **Hugging Face Hub**. 300 GB per repo; 50 GB per file. 🟢 Git-based, dataset tooling, lively ML community. 🔴 Large files need git-LFS; pushes via LFS can be slow.
  - **Cloudflare R2**. 10 GB storage & 1 M ops / month. 🟢 S3 API, zero-egress to Cloudflare Workers, fast. 🔴 10 GB cap below your 50 GB target.
  - **Kaggle Datasets**. 20 GB per dataset, public only. 🟢 Built-in notebooks & GPU. 🔴 No programmatic SQL API; quotas sometimes change.
  - **data.world (free)**. 1 GB total, 100 MB per dataset. 🟢 Nice social features. 🔴 Too small for your size.
- 13 May 2025. If I had to query a bunch of data files in an external Parquet or SQLite file, here are SQL engines-as-a-service:
  - **MotherDuck**. 10 GB storage + 10 CU-hrs/mo compute. Native DuckDB; no credit card; GA June 2024; monthly feature drops.
  - **Datasette Cloud**. Two-month trial (or 1-yr for non-profits). SQLite backend. Great UX; but not free forever for general use.
  - **AWS Athena**. Pay-per-TB scanned; no free tier; S3 fees after 12 mo. Costs creep quickly; free-tier S3 ends after a year.
- 13 May 2025. Bootstrap has a [`.stretched-link`](https://getbootstrap.com/docs/5.3/helpers/stretched-link/) that makes a link cover the containing block. A clever trick that I discovered when Claude 3.5 Sonnet wrote [my code](https://github.com/sanand0/sanand0.github.io/blob/0932f2efe3ad6c950c20b2ed7534ef27d8fff304/update.js#L62).
- 13 May 2025. Discovered spray and peel paints at [ArtFriend](https://artfriendonline.com/). I had no idea that was a thing.
- 12 May 2025. If you're looking for datasets / APIs related to research publications (especially funding), then explore:
  - Crossref [API](https://api.crossref.org/swagger-ui/index.html) and [snapshots](https://www.crossref.org/documentation/retrieve-metadata/rest-api/tips-for-using-public-data-files-and-plus-snapshots/)
  - OpenAlex [API](https://docs.openalex.org/) and [snapshots](https://docs.openalex.org/download-all-data/openalex-snapshot) which is funded by [OurResearch](https://ourresearch.org/). OpenAlex is like CrossRef but includes some disambiguation
  - [OpenAIRE Graph](https://graph.openaire.eu/docs/category/downloads/) [2024](https://zenodo.org/records/13133184) / [2025](https://zenodo.org/records/14851262)
  - [Europe PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10767826/) [dataset](https://ftp.ebi.ac.uk/pub/databases/pmc/)
- 12 May 2025. To avoid Ubuntu 24 suspending on closing the laptop lid use one of these and restart:
  - `/etc/systemd/logind.conf`: Set `HandleLidSwitch=ignore`
  - `etc/UPower/UPower.conf`: Set `IgnoreLid=true`
- 12 May 2025. `UV_TORCH_BACKEND=auto uv pip install torch torchvision torchaudio` installs the most appropriate PyTorch version. [Ref](https://docs.astral.sh/uv/guides/integration/pytorch/#automatic-backend-selection)
- 12 May 2025. [Cog](https://cog.readthedocs.io/en/latest/) is a Python based templating language. It is embedded as comment chunks in any file and replaced itself with the output of the Python code you write.
- 12 May 2025. [CloudFlare Zero Trust](https://www.cloudflare.com/en-in/zero-trust/products/access/) seems the easiest way to enable auth on static websites, especially if your DNS is already on Cloudflare. No cost
- 11 May 2025. ⭐ Never live delete data. Mark it for deletion and schedule a deletion task. That way you have time to react to mistakes. [Simon Willison](https://simonwillison.net/2025/May/14/james-cowling/)
- 11 May 2025. [Pandoc](https://pandoc.org/MANUAL.html) has several options useful when converting Markdown to HTML (`cat file.md | pandoc -f markdown -t html`). My favorites:
  - `--no-highlight` skips code-highlighting. `--highlight=pygments` adds Pygments styling
  - `--wrap=none` doesn't wrap the content in a single block
  - `--number-sections` adds section numbering (`<h2>1. Introduction</h2>`)
  - `--shift-heading-level-by=NUM` – shift all headings by NUM levels (e.g., start at `<h2>` instead of `<h1>`)
  - `pandoc -f markdown-auto_identifiers` drops the auto-identifiers extension that generates `id=...` for each heading
  - `pandoc -f gfm` uses GitHub flavored Markdown. Run `pandoc --list-extensions=gfm` to identify the extensions it uses.
  - Pandoc's [Markdown extension examples](https://pandoc.org/demo/example33/8-pandocs-markdown.html) are quite extensive.
  - Auto-enabled GFM extensions:
    - `alerts`: GitHub-style callouts (info, tip, warning) via `> [!TYPE]` blocks.
    - `autolink_bare_uris`: Turns bare URLs into links, without needing `<...>`.
    - `emoji`: Parses `:smile:`-style codes into Unicode emoji characters.
    - `footnotes`: Enables footnote syntax with `[^id]` and definitions at the bottom.
    - `gfm_auto_identifiers`: Uses GitHub’s heading-ID algorithm: spaces → dashes, lowercase, removes punctuation.
    - `pipe_tables`: Enables table.
    - `raw_html`: Raw HTML is unchanged.
    - `strikeout`: Enables strikethrough with `~~text~~`.
    - `task_lists`: Parses `- [ ]` and `- [x]` items as checkboxes.
    - `yaml_metadata_block`: YAML front matter for document metadata, e.g. `<title>`
  - GFM extensions worth enabling:
    - `ascii_identifiers`: Strips accents/non-Latin letters in automatically generated IDs.
    - `bracketed_spans`: `[Warning]{.alert}` becomes `<span class="alert">`
    - `definition_lists`: `Term\n: Definition text` becomes a definition list
    - `fenced_divs`: `::: {.note}` block creates a `<div class="note">...</div>`
    - `implicit_figures`: Standalone images become `<figure>` with `<figcaption>`.
    - `implicit_header_references`: `[Section]` is treated as `[Section][#section]`
    - `raw_attribute`: `<b>bold</b>`{=html} is inserted as HTML
    - `smart`: Converts straight quotes to curly, `--` to en-dash, `---` to em-dash, `...` to ellipsis.
    - `subscript & superscript`: E.g. `H~2~O` and `E = mc^2^`
- 10 May 2025. [snapdom](https://github.com/zumerlab/snapdom) is a fast, light, element capture alternative to [html2canvas](https://html2canvas.hertzen.com/) but doesn't work well with non-CORS images or iframes.
- 10 May 2025. [Sli.dev](https://sli.dev/) is a Markdown slide language. Similar to [Marp](https://marp.app/)
- 10 May 2025. Don't split your code into microservices until you need to scale. [Ref](https://nexo.sh/posts/microservices-for-startups/)
- 09 May 2025. Tofu Yakitori is a Japanese dish. It's like a dhokla. Marinated tofu cubes brushed with that sweet‑savory tare (soy, mirin, sake, a hint of sugar), then grilled until caramel‑charred. One of the better (tasty + different) dishes I've had recently. I used [ChatGPT](https://chatgpt.com/share/681d880f-5860-800c-ab21-68c07a25277a) to remind me of the dish name.
- 07 May 2025. India attacked Pakistan!
- 07 May 2025. ⭐ When writing notes, summarize at the end of the day the learnings and next steps.
- 06 May 2025. GitHub does not let you control the cache duration, but there are many creative workarounds. [ChatGPT](https://chatgpt.com/share/6819df70-4310-800c-acdc-5b743e1cde31)
  - HTML meta tags: `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">`
  - Use a [service worker](https://github.com/gzuidhof/coi-serviceworker) ([blog](https://dev.to/stefnotch/enabling-coop-coep-without-touching-the-server-2d3n))
  - Proxy through a CDN. Cloudflare, Netlify
  - Move to another static host: S3 + CloudFront, Heroku, Vercel, Surge, Firebase Hosting
- 03 May 2025. Among the popular exams in India, UPSC seems the most restrictive: bachelor's degree, age 21-32, 6 attempts, reservation applies.
  CMA seems the least: 10th pass, any age, any number of attempts, no reservation.
  NDA is interesting. 10+2, age 16.5-19.5, any number of attempts, no reservation. But you must be unmarried!
  [ChatGPT](https://chatgpt.com/share/6815d249-f478-800c-a49a-8bb7fbb54a06)
- 02 May 2025. [Saregama Carvaan](https://www.saregama.com/carvaan) supports USB sticks but only FAT, not NTFS or exFAT. To convert my NTFS USB drive to NTFS, I ran:

  ```bash
  sudo parted /dev/sda mklabel msdos
  sudo parted /dev/sda mkpart primary fat32 1MiB 100%
  sudo mkfs.vfat -F32 /dev/sda1
  ```

  This is a bit wasteful since I'm restricting a 32 GB USB drive to just 4GB, but it works well to play songs.

- 02 May 2025. [ServerHunter.com](https://www.serverhunter.com/) seems to have the best search for low-cost hosting providers. [MassiveGrid](https://portal.massivegrid.com/cart.php?a=confproduct) currently offers the cheapest servers -- even lower than Hetzner.
- 02 May 2025. `sqlite3 my_database.db .dump | gzip` is a more efficient way to copy SQLite databases than the original if you have indices. [Ref](https://alexwlchan.net/2025/copying-sqlite-databases/)
- 02 May 2025. Notes from the [Garry Tan - Knowledge Project podcast](https://fs.blog/knowledge-project-podcast/garry-tan/):
  - Funding people who want to solve a problem are better than people who want to start a company.
  - Concentration of good people is very powerful. It doubles the chances of being a unicorn
  - Sales is a discovery problem. There are 100 boxes of which five have a gold nugget. Rather than gingerly open the first, afraid of finding nothing, open them all as quickly as you can. A quick no is very helpful.
  - Berkshire Hathaway is hard to replicate because of the character of the founders, Charlie Munger and Warren Buffet, is hard to replicate. Y combinator has the character of Paul Graham. This means that some kinds of success may not last long because they are hard to replicate.
  - A trend in the 2020 is startups with under 10 employees are hitting $10m revenue. Soon we will see them hitting $100m. AI increases labour leverage while cloud computing reduced increased capital leverage.
  - Having too many people is a disadvantage. It slows down people from progress. Founders lose control.
  - The opposite of: hire the best people and give them freedom. Don't hoard smart people - let them solve real problems out there.
- 01 May 2025. [nocodb 54,107 ⭐ May 2025](https://github.com/nocodb/nocodb) and [teable 18,116 ⭐ May 2025](https://github.com/teableio/teable) are self-hostable Airtable alternatives. Teable has [AI support](https://help.teable.io/en/basic/field/ai).

## Apr 2025

- 30 Apr 2025. [Recursive LLM](https://github.com/andyk/recursive_llm) prompts that change themselves are an interesting idea. It might be interesting to see LLMs play [Nomic](https://en.wikipedia.org/wiki/Nomic). [Like here](https://content.cooperate.com/post/nomic/).
- 29 Apr 2025. Notes from [AI Snake Oil](https://www.aisnakeoil.com/)
  - PCs took 3 years to hit 20% of US population. ChatGPT took 2 years for 40%. But it's a lot cheaper, and a lot less used (0.5-3.5% of work hours). Maybe Gen AI adoption is slower than PCs.
  - The jagged edge of capability: some things will become MUCH easier while others don't. The relative mix determines who goes out of a job and which tasks get fully automated. Benchmarks are rare in areas where AI is weak.
  - Factory electrification took 40 years - to redesign the layout & process; change the org structure & policies; hiring & training practices. AI diffusion could take as long.
    - Therefore, the ability to re-structure a workflow end-to-end will be an advantage.
  - Several areas of low AI capability will improve slowly because the feedback is slow due to safety regulations, human adoption speed, lack of clarity on what is better, slow physical feedback (e.g. growing trees), etc.
  - Human intelligence is in the _use_ of technology. AI is one more such technology.
  - We know of good system safety controls in complex systems like aircrafts, power grids, engineering, chip design, healthcare, cyber-security, etc. Circuit-breakers, predefined rules, audits & monitors, access control, formal verification, etc.
  - Even if everything humans do TODAY is automated, it doesn't mean we won't have work. It just shifts to what we're not doing today.
    - We stopped work 4,000 years ago, with the agricultural revolution. The plant/livestock does all the growing. We just manage them, moving stuff around.
    - We stopped work 400 years ago, with the industrial revolution. Machines do the moving. We just manage them, computing the moves.
    - We stopped work 40 years ago, with the information revolution. Computers do the computation. We just manage them, thinking how.
    - Most future tasks will be managing AI that do the thinking.
- 29 Apr 2025. `ngrok http` on the CLI can be used in surprisingly versatile ways:
  - `ngrok http file://$PWD` to serve local files
  - `--compression` for gzip compression
  - `--host-header=example.com` to set the Host header
  - `--response-header-add "Access-Control-Allow-Origin: *"` to enable CORS
  - `--basic-auth='user:password` for basic auth
  - `--oauth google --oauth-client-id $CLIENT_ID --oauth-client-secret $SECRET --oauth-allow-domain gramener.com --oauth-allow-email ...` for Google Auth. It supports other oauth providers as well as OIDC.
  - `--ua-filter-deny ".*bot$"` to reject user agents ending with `bot`
- 28 Apr 2025. Though the [Element Capture and Region Capture APIs](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture) are "fully supported" by Edge, Chrome, and Opera, it didn't work for me on Edge on Linux.
- 27 Apr 2025. [Cupping therapy](https://en.wikipedia.org/wiki/Cupping_therapy) provides short-term pain relief for chronic low-back, neck & general musculoskeletal pain but other benefits are not as clearly evident. BTW, homeopathy doesn't help or hurt. Ayurveda helps with stress. [ChatGPT](https://chatgpt.com/share/680dee7c-7404-800c-83f1-8d65c9ebdf5c)
- 27 Apr 2025. [`uv`](https://docs.astral.sh/uv/reference/cli/) now supports:
  - [pylock.toml](https://docs.astral.sh/uv/reference/cli/#uv-export--format), the new lock file standard [PEP 0751](https://peps.python.org/pep-0751/)
  - [--env-file](https://docs.astral.sh/uv/reference/cli/#uv-tool-run--env-file) multiple times, allowing layered secrets
  - [--exclude-newer](https://docs.astral.sh/uv/reference/cli/#uv-tool-run--exclude-newer) installs versions before a specific date
  - [--overrides](https://docs.astral.sh/uv/reference/cli/#uv-tool-run--overrides) overrides versions a package specifies
  - [--constraints](https://docs.astral.sh/uv/reference/cli/#uv-tool-run--constraints) limits the version of the package
- 27 Apr 2025. It's interesting how many places offer a free compute via shells (apart from Google Colab):
  - [Google Cloud Shell](https://shell.cloud.google.com/): Free for **50 hours/week**, refreshed every Monday. Sessions last up to **12 hours** and terminate after **~1 hour** inactivity. [Ref](https://cloud.google.com/shell/docs/quotas-limits)
  - [Azure Cloud Shell](https://shell.azure.com/): Always free to use with **5 GB free storage** for first 12 months (standard rates after). No documented session limits but typically times out after prolonged inactivity. [Ref](https://azure.microsoft.com/services/cloud-shell/)
  - [AWS Cloud9](https://console.aws.amazon.com/cloud9/home): Free IDE, underlying compute free under AWS Free Tier (**750 hours/month** EC2 t2.micro or t3.micro for first 12 months). Regular EC2 rates apply afterward. [Ref](https://aws.amazon.com/cloud9/pricing/)
  - [Gitpod](https://gitpod.io/): Free tier offers **500 credits/month (~50 hrs)**. Workspaces run up to **8 hours/session** and stop after **30 minutes** inactivity. [Ref](https://www.gitpod.io/pricing)
  - [GitHub Codespaces](https://github.com/codespaces): **120 core-hours/month** (~60 hrs with 2-core machine) and **15 GB** storage free. Sessions timeout after **30 minutes** inactivity. [Ref](https://docs.github.com/codespaces/developing-in-codespaces/about-codespaces#monthly-included-storage-and-core-hours)
    - Create: `gh codespace create --idle-timeout 10m --machine basicLinux32gb -R $USER/$REPO` returns the $CONTAINER_ID
    - SSH: `gh codespace ssh -c $CONTAINER_ID`
    - Delete: `gh codespace delete -c $CONTAINER_ID`
  - [Replit](https://replit.com/~/): Free Starter plan provides **20 hours/month**, **1 vCPU**, **2 GB RAM**, **2 GiB storage**. Repls sleep after **30 minutes** inactivity. [Ref](https://replit.com/pricing)
  - [IBM Cloud Shell](https://cloud.ibm.com/shell): Free for all users; **50 h/week** per region; any open session counts toward quota; sessions can run any length up to weekly cap; **500 MB** temporary workspace. [Ref](https://cloud.ibm.com/docs/cloud-shell?topic=cloud-shell-faqs)
  - [Oracle Cloud Infrastructure Cloud Shell](https://console.oraclecloud.com/cloudshell): Free within tenancy limits; up to **400 h/month** on Pay-As-You-Go, **240 h/month** on Universal Credits; **5 GB** encrypted persistent home. [Ref](https://docs.cloud.oracle.com/Content/API/Concepts/cloudshellintro.htm)
  - [PythonAnywhere](https://www.pythonanywhere.com/consoles): Free (beginner plan), includes one web app (restricted outbound), low CPU/bandwidth, no Jupyter; **2 concurrent Bash/Python consoles**, **500 MB** disk; limited daily CPU. [Ref](https://www.pythonanywhere.com/pricing/)
  - [Glitch](https://glitch.com/): Starter (free) plan -- full-stack apps sleep after **5 min** inactivity and wake on request; unlimited public/private projects; container state preserved. [Ref](https://glitch.com/pricing)
  - [CodeSandbox](https://codesandbox.io/): Free tier provides **400 credits/month** (~40 h of 2 vCPU+4 GB Devbox runtime), unlimited front-end Sandboxes (no credits), up to **20** Sandboxes/workspace. [Ref](https://codesandbox.io/docs/learn/plans/subscriptions)
- 25 Apr 2025. [Dyson Sphere](https://en.wikipedia.org/wiki/Dyson_sphere).
- 23 Apr 2025. [gcalcli](https://github.com/insanum/gcalcli) is a convenient way to export Google Calendar. Example: `uvx gcalcli agenda --tsv 2025-01-01 2025-01-05`
- 23 Apr 2025. [cmdg](https://github.com/ThomasHabets/cmdg) is a command line GMail client that I've now switched to for quick email checks. 80% of my email is spam and this is good enough to scan and delete those. It also avoids running a 200-500 MB tab in the browser that constantly shows me how many unread emails I have.
- 23 Apr 2025. From [Worklife with Adam Grant: Cancelling cancel culture with Loretta Ross](https://shows.acast.com/worklife-with-adam-grant/episodes/cancelling-cancel-culture-with-loretta-ross)
  - "Lighten up! Fighting Nazis should be fun. It's being a Nazi that sucks. If you're not having fun fighting for hope and joy and human rights, maybe you're doing the fight wrong. We are the ones who should be having fun."
  - "You can say what you mean. But you don't have to say it mean." There is always a way to put it across better. Refusing to say mean things is about to discover these approaches.
  - "The true mark of a lifelong learner is knowing that you can learn something from every single person you meet." If you remember that, you can't be a know it all.
- 23 Apr 2025. [semantic-text-splitter](https://pypi.org/project/semantic-text-splitter/) could be the go-to text splitter. It's Rust-based, supports MarkdownSplitter, and multiple tokenizers. Alternatives like [semchunk](https://pypi.org/project/semchunk/), [advanced-chunker](https://pypi.org/project/advanced-chunker/), [chonkie](https://github.com/chonkie-inc/chonkie), etc. seem clunkier.
- 23 Apr 2025. ULID is like UUID but time-sortable. That's an improvement over timestamp IDs (definitely) and potentially even UUIDs. They can be generated by clients as a globally unique ID. Try [`pip install python-ulid`](https://github.com/mdomke/python-ulid) and [`npm install ulid`](https://github.com/ulid/javascript).
- 22 Apr 2025. The [Consumer Product Safety Commission Data](https://www.cpsc.gov/Data) has thousands of reports of product safety over time
- 22 Apr 2025. You can run `xclip -sel clip -o | pandoc -f markdown -t html --no-highlight | xclip -sel clip -t text/html -i` to convert Markdown in the clipboard to rich text. But `xclip` doesn't support multiple selections, so the text is lost. [ChatGPT](https://chatgpt.com/share/68071421-07a4-800c-a286-0d8b624c27e4)
- 22 Apr 2025. [DuckDB UI & Notebooks](https://duckdb.org/2025/03/12/duckdb-ui.html) will potentially be a good alternative to Datasette, DBeaver, etc. But for now, there are still glitches. It crashes with a `SIGSEGV (Address boundary error)` when connecting to SQLite databases.
- 21 Apr 2025. Finally! [t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/) land in Python. They're like JavaScript template literals.
- 21 Apr 2025. DuckDB's CSV parser might be one of the most forgiving parsers. Even better than Pandas or SQLite3. [Ref](https://duckdb.org/2025/04/16/duckdb-csv-pollock-benchmark)
- 20 Apr 2025. If Windsurf stops working, reload the extension. [GitHub](https://github.com/Exafunction/codeium/issues/59#issuecomment-2690290023)
- 20 Apr 2025. TLS certificates will start expiring in 47 days from 15 Mar 2029, forcing automated domain renewals. [Digicert](https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days)
- 20 Apr 2025. [Nix flakes](https://wiki.nixos.org/wiki/Flakes) are a reliable alternative to [DevContainers](https://containers.dev/) that don't need Docker - but don't work on Windows.
- 20 Apr 2025. [Ink](https://github.com/vadimdemedes/ink) is like React for the CLI.
- 20 Apr 2025. The [Unsure Calculator](https://filiph.github.io/unsure/) is a great tool to calculate formulas with _multiple_ uncertainties, like:
  - My office is 9-11 km away and it takes me 45-55 min to reach. So I cycle at `9~11 / 45~55 * 60` ~ 10-14 kmph (12 most likely).
  - I spend $6-15 on lunch and eat out 80-120 days a year. So I spend `6~15 * 80~120` ~ $600~1550 ($1000 most likely) eating out yearly.
  - I take 30-120 min to prepare a quiz question. Each exam has 6-12 questions. So I need `30~120 * 6~12 / 60` = 4~20 hours (11 most likely)
- 20 Apr 2025. Using Kiran's [macOS setup for dev](https://jackerhack.ing/notes/202412051824-macos-setup-for-dev) I [enabled](https://github.com/sanand0/scripts/commit/ae95013019374a3b542ef5a93ea2f4295d0d86c4) colorized less and mouse options for tmux.
- 20 Apr 2025. `time fish -i -c exit` prints the time taken for fish startup. `fish --profile-startup ~/fish.profile -i -c exit` prints the time taken by each command on fish startup to `~/fish.profile`. I used this to [speed up my fish startup](https://github.com/sanand0/scripts/commit/90d34b7239197d69c3502d1e847b79dd503c1b72).
- 19 Apr 2025. The [`devcontainers.json`](https://containers.dev/) spec encapsulates everything you need to get a codebase running for development - as opposed to production. E.g. VS Code extensions, linters, etc.
- 19 Apr 2025. Practical use for GitPod are:
  - Make quick edits to repos that are not on your system (e.g. other people's repos, or via others' machines.)
  - Run public workshops with a full coding environment.
  - Give students assignments that have dependencies pre-installed.
  - Collaborate on a work-in-progress codebase with my team.
  - Share POCs with clients or public allowing them to edit it.
  - Allow teams to install remote AI code extensions (e.g. Windsurf) that may be blocked inside the corporate firewall?
- 15 Apr 2025. Notes from discussion with [Balaji T](https://www.linkedin.com/in/balaji1975/):
  - Zero-day options are options that expire on the same day. They are priced low. It's almost just a gamble or a lottery ticket. But since the price is low, retail investors can invest.
  - NIFTY is one of the largest markets for zero day options, surprisingly. There are several college grads who trade writing Python scripts.
  - CoreWeave has taken over all the compute from OpenAI. Though the stock price has fallen, buying CoreWeave is the closest equivalent to buying OpenAI pre-IPO.
  - However, every OpenAI product lost money, despite their 75% discounted compute from Microsoft. (With CoreWeave, the cost would be higher.) So their profitability depends on wiping out competition long-term.
  - For investment research companies (hedge funds, VCs, etc.) increasing the number of companies they research is an advantage. So using AI for research is key. However, the quality of LLMs is too poor for financial analysis accuracy. We need better LLMs for spreadsheet analysis.
  - We suffer from the [Gell-Mann's amnesia effect](https://en.wikipedia.org/wiki/Gell-Mann_amnesia_effect) with LLMs. "You read a newspaper article in your field and find it's rubbish. You turn the paper and believe it's perfectly accurate on the next page".
  - Domain expertise will therefore become even more valuable in the near future.
  - People don't like AI being forced down their throats. MAS is forcing AI down banks whose execs are forcing it down the org. Bankers and analysts are grumbling about this.
- 14 Apr 2025. I visited [SUTD InspireCon 2025](https://www.sutd.edu.sg/events-listing/inspirecon-2025/). Here were some exhibits that caught my eye.
  - A path marking app that uses cameras to draw a heatmap of people's walking paths. Popular tracks are redder.
  - Using drones for machine inspection.
  - Portable immigration devices that let you scan passports, face recognition, fingerprint, mic/speakers, etc.
  - Using accelerometer to detect unsafe gait and improve walking habits.
  - UImagine: a web app builder. Interestingly, they used [Webcontainers](https://webcontainers.io/) to run Node in the browser!
  - Training a drone to follow a person
  - Credibility detection via micro facial expressions
  - PitchMe: providing real-time feedback to pitches / presentations
  - Zetesis: a platform for people to ask questions during a lecture or meeting (independent of Zoom, Meet, etc.)
  - Tinyeqn: helps grade student assignments
- 13 Apr 2025. ⭐ Marp supports [bespoke transitions](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md) which includes morphing animations. This can create a [bar chart race](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md#example) just using Markdown!
- 13 Apr 2025. Nick Lansley, who I know from my work with Tesco, wrote a great article that includes [advice for aspiring consultants](https://www.linkedin.com/pulse/10-years-ago-today-i-exited-from-my-27-year-career-tesco-nick-lansley-imvde/):
  - Re-connect with ex-colleagues
  - Leave on good terms with your employer
  - Have a 6-12 month financial buffer
  - Hire an accountant / legal advisor to set up your business
  - Focus on what you enjoy
  - Have a 30-second elevator pitch
  - Build a brand with blogs, social media, or talks
  - Create a portfolio to reinforce your skills
- 12 Apr 2025. It's possible to intentionally train yourself to:
  - [Form close friends](https://www.neelnanda.io/blog/43-making-friends). Care, ask, and share.
  - [Become a do-er](https://www.neelnanda.io/blog/become-a-person-who-actually-does-things). Stay mindful of the problem or opportunity you're deferring.
- 11 Apr 2025. The Singapore [Urban Redevelopment Authority Property Data](https://eservice.ura.gov.sg/property-market-information/pmiResidentialRentalSearch) lets you search sale and rental prices of properties in Singapore. No API though
- 10 Apr 2025. Notes from meeting with [Deepak Goel](https://www.linkedin.com/in/drizzlin)
  - We have linguistic boundaries in media today more than national boundaries. The Chinese language media, for example, is a very different ecosystem.
  - China culturally struggles with the exercise of branding and cultural power, unlike the west, which has adopted assertive and opinionated branding.
  - You really learn the character of a region only by traveling
  - Similarities arise from unexpected sources. For example, Japan and Ecuador have similar culutures - both are disaster prone locations.
  - AI unlocks _so many social research possibilities_ that were not possible before, e.g. by interpreting and classifying what people share in different situations.
  - Companies send clients to third party trainings (e.g. at Harvard) along with their employees - to learn clients' real pain points! Education has become a tool for customer experience. Schools are tying up with companies for this (e.g. with Emeritus)
  - [International Schools Partnership](https://internationalschoolspartnership.com/) provides services to independent schools for a small stake. It's an interesting business model.
  - Research for colleges is a business model that's at risk thanks to Deep Research (e.g. analyse sustainability practices of listed companies.)
- 10 Apr 2025. There's an [Indian Censor Board Scraper](https://github.com/diagram-chasing/censor-board-cuts) repo.
- 10 Apr 2025. Using `chroot`, you can boot from a Linux USB stick, but trick the system into working from your hard disk as the OS. Useful if your system won't boot. [Ref](https://livesys.se/posts/the-chroot-technique/)
- 08 Apr 2025. Notes from discussion with [Sundeep](https://www.linkedin.com/in/sundeeprm/)
  - In his experience, investors tend to let you run the show (e.g. ask what you want rather than push in a specific direction) unless there is trouble
  - We discussed the "running out of problems" problem with AI. His suggestion: List problems we dropped or eliminated for lack of time/capacity. This filter is a blindspot.
  - Even if you know how to do someting, use AI to discover an alternate solution approach. That's the path to 10X (rather than incremental) optimization.
  - Having AI create end-to-end pitch videos based on a product idea is now a reality. (He showed me one for his product.)
  - Areas to explore with Deep Research are:
    - What hidden trends is media misdirecting away from? What are second order effects and hidden gameplays?
    - Which organizations would be good clients to target? What would be an apt pitch pitch for them?
  - Experience dining is an emerging theme.
  - Having LLMs explain scenarios (i.e. what might happen if ...) based on parameters can help understand/quantify the impact of actions, and therefore what to do.
- 08 Apr 2025. One way to copy as Markdown: copy page contents, [paste in text-html.com](https://text-html.com/), copy HTML, [paste in Turndown](https://mixmark-io.github.io/turndown/), copy Markdown.
- 07 Apr 2025. SQLite can open locked databases (e.g. browser history) via `sqlite3 'file:places.sqlite?mode=ro&nolock=1'`. datasette uses this. For example, to read the Edge history on Linux, use `datasette ~/.config/microsoft-edge/Default/History --nolock` [Ref](https://sqlite.org/forum/info/a2e9387b8ea1c919b2ad1ecafb417cebb15c48634c55b3abd6a9acbb2fabf797)
- 05 Apr 2025. `<select>` will soon be _very_ customizable via CSS. Including custom HTML inside options - even SVG. [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select). Edge/Chrome already support it.
- 05 Apr 2025. [The Vitali Set](https://www.youtube.com/watch?v=_cr46G2K5Fo&t=1042s) is every real number none of whose difference is rational. A sparse collection of irrational sets. It's like a line but doesn't have a measurable "length".
  - The Lebesgue measure measures the length of broken lines. You add up the lengths of the smallest continuous intervals that cover the line.
  - The Cantor set (take a line, drop every middle third, repeat) has a Lebesgue measure of 0 because the sum of the removed thirds = 1/3 + 2/9 + 4/27 + ... = 1. You've removed every "length" though infinitely many points remain.
  - The Vitali set built so that if you shift it by _every_ rational from -1 to +1 and add them up, you definitely cover every real from 0-1, but never anything beyond -1 to +2. So the length _must_ be between 1-3. Yet, there's no number you can add infinitely many times to get something between 1-3.
  - If you add up multiple unmeasurable sets like the Vitali set, you can get any total length you want. The [Banach Tarski paradox](https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox) splits a sphere into unmeasurable sets and adds them to get 2 spheres.
- 05 Apr 2025. [Ctrl+Alt+F1/F2/...](https://askubuntu.com/a/1293952/601330) on Ubuntu switches the terminal. Typically [Ctrl+Alt+F2](https://askubuntu.com/a/1307012/601330) switches back to Gnome. But it's a useful hack if Gnome freezes and you need to kill a process. Press `Ctrl+Alt+F3`, log in, and kill what you need.
- 03 Apr 2025. [CSS Speech](https://www.w3.org/TR/css-speech-1/) is a W3C spec that lets you control how screen readers should read pages. No browser support now, though.
- 03 Apr 2025. [Clipboard2Markdown](https://euangoddard.github.io/clipboard2markdown/) is a utility that lets you paste rich text and convert it to Markdown.
- 02 Apr 2025. [OHDSI](https://ohdsi.org/) has a [vocabulary](https://github.com/OHDSI/Vocabulary-v5.0) you can download from [Athena](https://athena.ohdsi.org/) that includes ICD codes and a lot of medical data standards. It also has a hostable [WebAPI](https://github.com/OHDSI/WebAPI)

## Mar 2025

- 31 Mar 2025. I published an eBook on Amazon. It takes about an hour if you have the content ready.
  - [Set up a Kindle Direct Publishing account](https://account.kdp.amazon.com/) with your address, bank details, and tax information. (10 min.)
  - [Export](https://wordpress.com/support/export/) my [London 2000](https://www.s-anand.net/blog/category/london-2000/) blog archive and [convert to Markdown](https://github.com/lonekorean/wordpress-export-to-markdown). (15 min)
  - Reformat the Markdown by writing a script in Cursor (10 min). Here's the prompt:
    > Write a Python script that reads `*.md` including the YAML frontmatter, adds the YAML `title` as H1, `date` (yyyy-mm-dd) like <em>Sun, 01 Jan 2000</em> in a new para after the frontmatter and before the content.
  - Convert it to an ePub using pandoc `pandoc *.md -o book.epub --toc --metadata title="An LBS Exchange Program" --metadata author="Anand S" --metadata language=en --metadata date="31 Mar 2025"` (15 min).
  - Generated a cover page with [ChatGPT](https://chatgpt.com/) (5 min) and compressed it into JPEG via [Squoosh](https://squoosh.app/). (10 min)
    > Draw a comic-style book cover page that covers the experiences of an Indian exchange student (picture attached) from IIM Bangalore at London Business School and exploring London. The book title is "An LBS Exchange Program".
  - [Publish the book on KDP](https://kdp.amazon.com/) (10 min)
- 31 Mar 2025. There are several _small_ things that delight me about switching to Ubuntu. One that brings joy to my heart is that I can customize gestures for music on Gnome using [Touche](https://github.com/JoseExposito/touche) and [TouchEgg](https://github.com/JoseExposito/touchegg).
  - Swipe with 3 fingers Up: Increase volume. Execute a command `amixer sset Master 5%+`. Repeat command.
  - Swipe with 3 fingers Down: Decrease volume. Execute a command `amixer sset Master 5%-`. Repeat command.
  - Swipe left/right with 3 fingers: Play/Pause VLC. `dbus-send --print-reply --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.PlayPause` on Gesture start.
- 31 Mar 2025. Notes from discussion with [Roy](https://www.linkedin.com/in/anandamoy/):
  - There's more pressure on successful founders in Asia than in the US, since winners are rarer.
    - Most failed founders try another startup based on their experience. Their likelihood of getting funded is largely based on their reputation, e.g. did the venture fail despite them or because of then.
  - Expertise is over-rated when the underlying context changes. A lot of expertise is about managing current constraints. As Jeff Bezos asks, "What are the invariants?"
  - As the cost of intelligence drops, industries that rely on intelligence are disrupted.
    - E.g. Cyber security. It's a data analysis problem. A needle in the haystack problem. A signal anticipation problem. A classic IQ gap problem.
  - As building software becomes easy:
    - Demand will explore, since ROI is higher.
    - Not everyone will build software. (3D printers are cheap. How many people own one?)
    - So demand for custom software and craftsmen engineers will grow - including from enterprises.
    - Demand for SaaS (one-size-fits-all) will shrink.
    - Demand for personalized software (services model) will grow.
    - Code migration will get consolidated. It's a niche space competing with new app generation. There is an opportunity for high margins in fragmented businesses. Consolidation is likely.
    - Verticalized coding agents (i.e. specialized software for specific platforms) might grow.
  - "You don't get the US without the guns!"
  - AI voice generation is in the uncanny valley. We need non-verbal cues for good voice conversations.
    - An aside: Is the uncanny valley biological? Did the revulsion push homo hapiens to kill off the homo neanderthalensis, homo erectus, etc?
  - Vertical model gardens (i.e. specialized HuggingFaces, e.g. for HealthCare) are a niche, potentially temporary, opportunity corporates will likely leverage in the near future.
  - Thoughts on angel investing.
    - The VC industry is designed to win in the long run. Given a huge AuM base managed by a small team with a steady carry, it's hard to lose in the long term
    - But you need that large AuM. Angel investing is _not_ designed to win.
    - Know why you want to angel-invest. Lack of clarity hurts most people
    - For most people, angel investing is an expensive MBA. You don't know shit. Invest if a VC will invest _at that moment_.
    - The angel investor matters only until the point of investment. For successful companies, once VCs start funding them, you're a drop in the ocean and irrelevant.
  - Pick portfolio managers who don't advertise. The ones that do don't have enough business. <!-- Roy aims for 18% in India in sub 10K cr companies. -->
  - The Telok Blangah walking trail and the Sentosa walk are less known but good walking trails in Singapore.
- 30 Mar 2025. Use [QR vCards](https://www.qrcode-monkey.com/#vcard) instead of business cards. Less to carry. Directly adds to their contacts.
- 29 Mar 2025. Discussion with [Vedang](https://vedang.me/)
  - [Recurse center](https://www.recurse.com/) (Brooklyn, online) is a 6/12 week free self-driven programmer retreat. Runs every 6 weeks. You can do whatever you pick. There are daily standups for accountability. The groups are diverse. You can pair with them, pivot ideas, whatever. [Principles](https://www.recurse.com/self-directives): push yourself & learn.
  - Western education techniques (e.g. spaced repetition, adaptive learning) are very much present in Indian coaching systems, though not known by those names. However, interventions are hard since class 12 students _just don't have enough time_.
  - Coaching classes are a social phenomenon. It's not the smart students who are pulling in their friends. Smart students actually _follow_ the popular students. (Coaching classes are below the typical smart students' standards.)
  - Monetizing coaching is hard. People don't want to pay for advice, and welcome free advice only _if they ask for it_. Coupling with execution is necessary.
  - Aider's integrations make it more powerful than Cursor/Windsurf. It auto-lints, runs test cases. Allows different models for "architecting" (generating changes) vs "editing" (applying code). It reads from the screen logs. Context is manual, not automated. Uses an `ai!` comment to trigger changes and `ai?` to ask questions.
  - [Cline.bot](https://cline.bot/) is another Cursor-like open source AI code editor that's a VS Code plugin.
  - When coding with LLMs, a useful workflow is: data schema ➡️ interfaces ➡️ LLM-generated test cases ➡️ code.
  - ShellSage is a `tmux` based LLM tool for the command line. It screen-grabs from tmux, which is powerful.
  - Some MCPs that have proven useful: [vega-lite](https://github.com/isaacwasserman/mcp-vegalite-server), [SQLite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite), [sequential thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking), [memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)
  - `make` sucks but is hard to beat. [`just`](https://github.com/casey/just) comes closest.
  - CRDTs are more powerful than for just collaborative editing. It can power a peer-to-peer Internet (beginning with office tools). Versioning schema is still problematic. [`yjs`](https://github.com/yjs/yjs) is a good start but [`automerge`](https://github.com/automerge/automerge) (Rust, WASM) is faster and may be better.
  - [Fermyon](https://www.fermyon.com/) hosts WASM serverless functions.
- 28 Mar 2025. [13 things I would have told myself before building an autorouter](https://blog.autorouting.com/p/13-things-i-would-have-told-myself) has a few interesting points:
  - The [A\* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm) finds the shortest path in a graph _much_ quicker than others like Dijkstra's algorithm by preferring nodes closer to the goal.
  - Spatial Hash Indexing are O(1) and beat Tree Data Structures which are O(log n). Always prefer hashes when possible.
- 28 Mar 2025. There's an actual convention for using emojis in Git commits: [gitemoji](https://gitmoji.dev/). It even has a [VS Code plugin](https://github.com/seatonjiang/gitmoji-vscode), a [changelog generator](https://github.com/frinyvonnick/gitmoji-changelog/), and [more](https://gitmoji.dev/related-tools).
- 28 Mar 2025. Emojis have a strong role in enhancing Markdown documents. The ones I use often are:
  - 🔴🟡🟢 for low/medium/high priority
  - ⭐️ or ❤️ or 👍 for ratings or emphasis
  - ✅ for completed tasks
  - 💡 for ideas
  - ⚠️ or ❗️ for warnings / issues
- 28 Mar 2025. Technological innovations have always been changing art forms. For example, the [perspective grid](https://en.wikipedia.org/wiki/Perspective_%28graphical%29#Renaissance) and the [camera obscura](https://www.researchgate.net/publication/387663661_From_Light_to_Canvas_The_Camera_Obscura%27s_Role_in_Renaissance_Artistic_Technique) led to major improvements in realistic paintings in the 15th and 17th centuries.
- 28 Mar 2025. [regex](https://pypi.org/project/regex/) is an _officially recommended_ Python library with better regex support than re. [Ref](https://carlo.ai/til/regex-search)
- 25 Mar 2025. Playwright offers an MCP server. https://simonwillison.net/2025/Mar/25/playwright-mcp/
- 23 Mar 2025. I've settled on [squoosh.app](https://squoosh.app/) for image compression using WebP. I'm exploring [FreeImage.host](https://freeimage.host/) for image hosting instead of Imgur for WEBP support. FreeImage.host also seems [reliable](https://budgetlightforum.com/t/reference-the-best-free-image-hosting-sites-that-support-webp-images/219923), retains file sizes, and supports hotlinking.
- 23 Mar 2025. [DeepFace](https://github.com/serengil/deepface) currently seems the easiest option for face detection. Easy to install. Multiple back-ends.
- 21 Mar 2025. I was born in the Ananda year in the Tamil _and_ Telugu calendars. [ChatGPT](https://chatgpt.com/share/67dbcb41-209c-800c-9403-1eb4cd365ece)
- 20 Mar 2025. Andrej Karpathy's note taking mechanism is similar to mine, except I use Microsoft TODO. [Ref](https://x.com/karpathy/status/1902503836067229803)
  - I have 3 categories. Things I learnt, which I just note. Things to explore, which I can delegate, defer, drop, or do at any time. Things to do, which are the hardest and pile up.
- 19 Mar 2025. The `huggingface_hub` cache-system uses symlinks by default to efficiently store duplicated files. To support symlinks on Windows, you either need to [activate Developer Mode](https://docs.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development) or to run Python as an administrator.
- 19 Mar 2025. In Windows, you can enable offline files for any SMB share via: Control Panel → Sync Center → Manage offline files and turn on the feature. Then, in File Explorer, right‑click the mapped network folder or drive and select "Always available offline."
- 18 Mar 2025. Anger is a trigger for change. "Either change yourself or the environment, else you'll be uncomfortable."
- 18 Mar 2025. [HocusPocus](https://tiptap.dev/docs/hocuspocus/introduction) allows live collaboration e.g. editing together
- 18 Mar 2025. [Block notes](https://www.blocknotejs.org/) is a notion like library for editor components. Converts to Markdown
- 18 Mar 2025. [Oxidizr](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu) enables replacing Linux tools with Rust equivalents.
- 18 Mar 2025. [Emoji Kitchen](https://emojikitchen.dev/) lets you create stickers from emoji combinations.
- 16 Mar 2025. `duckdb -ui` launches a DuckDB notebook. This is built into newer DuckDB releases
- 16 Mar 2025. [Monolith](https://github.com/Y2Z/monolith) downloads web pages as a single HTML file by embedding content.
- 16 Mar 2025. [Archgw](https://github.com/katanemo/archgw?tab=readme-ov-file) is an LLM proxy/router from the makers of Envoy proxy.
- 16 Mar 2025. There's an [annotated Terry Pratchett](https://www.lspace.org/books/apf/the-colour-of-magic.html)!
- 15 Mar 2025. Here is a [training program on open source corporate policy](https://todogroup.org/resources/training/).
- 15 Mar 2025. [htmlq](https://github.com/mgdm/htmlq) and [pup](https://github.com/ericchiang/pup) query HTML. They're like `jq` for HTML.
- 15 Mar 2025. Here are time-tested and robust ways to leverage serendipity: [ChatGPT](https://chatgpt.com/share/67d4df37-d30c-800c-bf25-e33f94dc53b0)
  1. **Place**. Be in places with high, diverse, talent density. Bell Labs (1950s), MIT (1970s), Pixar (1990s).
  2. **People**. Meet diverse, talented people. Da Vinci's Renaissance circles, Lockheed Martin's Skunk Works.
  3. **Free time** for unstructured work. 3M's 15% rule, Google's 20% time, Edison's Invention Factory.
  4. **Curiosity**. Learn unrelated fields. Darwin's earthworm research, Ben Franklin's ocean currents work.
  5. **Serendipity**. Systematically add randomness. Brian Eno's Oblique Strategies, IDEO's Deep Dives.
  6. **Reframe failure** as opportunities. Penicillin, Velcro, Post-it Notes.
  7. **Ceremonies**. Hackathons, lightning talks, coffee trials.
- 15 Mar 2025. What makes client-side computing on the browser powerful is
  - There's nothing to install
  - Private by default: data stays with client
  - Speed: no latency
- 15 Mar 2025. [SemGrep](https://semgrep.dev/) is a lot less open source than it used to be. [ChatGPT](https://chatgpt.com/share/67d525e5-eea0-800c-a382-4aa5a19b609d). That's a pity. It was a good tool.
- 15 Mar 2025. Site builders and headless CMSs are gently eating into the dominant market share of open source CMSs (via [PretaGov](https://www.youtube.com/live/dXhHtsW8qjo?si=WiEuwrxiyoaQ3D2Y&t=2460)).
  - WordPress is pretty much the dominant CMS in the world, followed by Drupal.
  - WordPress is now VC backed and is not growing, so they seem to be attacking their own community.
  - Umbraco CMS is the only open source CMS that's growing. Maybe because it's the only .NET one
  - Craft CMS is the only proprietary CMS that's growing.
  - Site builders are growing as a category. SquareSpace is the leading one.
  - Headless CMS is growing too. Statamic. Next.js. Nuxt.js, Contentful, Prismic, Storyblok, Gatsby, etc.
- 15 Mar 2025. Here's a [sample CI/CD pipeline with automated code review](https://gitlab.com/kitarp29/buaji/-/jobs/8416107396).
  - [Here is the script that generated it](https://gitlab.com/kitarp29/buaji/-/blob/e9211bd619bd238f4b32c4a3509b78c199937f8d/.gitlab-ci.yml#L84-113).
  - Note the use of [NVIDIA's GPU Docker containers](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/) via `nvcr.io`
- 15 Mar 2025. Things I learnt about robotics.
  - [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) is an open-source 3D printable robot arm. Takes ~20 hours to print, ~1 hour to assemble. Costs ~$120.
  - [LeKiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) is a mobile version of this arm
  - [LeRobot](https://github.com/huggingface/lerobot) is a set of HuggingFace models and datasets. The idea is, you can use one "control" robot to control the other. Do stuff manually, teach it ~50 times, and it learns how to do what you're do.
  - [Pi0](https://huggingface.co/blog/pi0) is an LLM equivalent for robotics that predicts actions. HuggingFace ported that to LeRobot
  - Most real robotics work is on SIMILATED "gym" environments, not costly/slow physical environments.[PushT](https://github.com/huggingface/gym-pusht) is a simple 2D version. [ALOHA](https://github.com/huggingface/gym-aloha) is a 3D one.
  - [ROS](https://www.ros.org/) is a nightmare to install and run - on Windows _and_ Mac.
  - [Robotics Academy](https://jderobot.github.io/RoboticsAcademy/) is an open collection of easier ROS exercises.
  - [PSLab - Pocket Science Lab](https://pslab.io/) is a sensor kit for the phone / PC. Costs ~$100 but isn't available anywhere. Getting it to work requires too much mucking around with USB drivers and it just doesn't work. (BBC [micro:bit](https://microbit.org/) may be more promising.)
  - Getting stuff done with electronics is still _really_ hard unless it's well designed.
  - It's FASCINATING that robots can have arbitrary joints. Our intuitions (or even biomimicry) on how to move and do stuff is a POOR intuitive guide for how robots should act.
- 15 Mar 2025. MathML Core is a language _and_ layout specification, distinct from MathML 2/3. It's not fully compatible with JATS XML.
  - [`latexmlmath`](https://tmke8.github.io/math-core/) converts TeX to MathML.
  - `m|math { font-family: "Noto Sans Math", "Noto Sans" }` is a popular OpenType Math font. Browsers default to native fonts: e.g. Cambria Math on windows. Explore at <https://fred-wang.github.io/MathFonts/>.
  - The people working on this at arXiv are: Deyan Ginev, Fred Wang, and [Norbert Preining](mailto:norbert@arxiv.org). Their work is sponsored by NSF.
- 15 Mar 2025. There's a [PDF UA2](https://pdfa.org/iso-14289-2-pdfua-2/) standard for accessibility but there aren't enough tools to generate it.
- 15 Mar 2025. LibreOffice is now on WASM. [ZetaJS](https://www.npmjs.com/package/zetajs) provides office in the browser. Has a CDN (that was down from our IP). 35M packaged binary. 100M of in-memory file-system loaded.
  - Useful for: Document conversion, Thumbnail generation, Text extraction, Merging / splitting documents
- 15 Mar 2025. The [Poincare Conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture) says that any finite 3D blob with has no holes can be deformed into a sphere. It took until 2003 to prove it because we didn't have the tools to manipulate 3D shapes.
- 14 Mar 2025. [Twine](https://twinery.org/) ([docs](https://twinery.org/reference/en/index.html)) is an open source interactive fiction / story writing tool.
  - [Snowman](https://videlais.github.io/snowman/) is a browser-based Twine 2 story template format.
  - These enable behavioural experimentation. Cheaper than using tools like [Gorilla.sc](https://gorilla.sc/) and [Pavlovia](https://pavlovia.org/) for behavioral experiments
  - For example, you can present a social or political issue and see if people change their opinions more or less depending on the content/path they see. Or, if it varies by demographics. Or, check if repeated mentions or emotional hooks improve memory / retention. [More research ideas](https://chatgpt.com/share/67d3fe6f-aff4-800c-bb02-2cb72d8f6e16)
- 14 Mar 2025. Techniques to reduce Docker image sizes:
  - Native Linux `mount` supports overlaying directories! Lower layer is read-only. Edits (including deletions) affect upper layer only. Docker uses this. `docker image inspect` shows layers.
  - Always run `RUN apt-get update && apt-get [packages]` rather than in separate lines. Else `RUN apt-get update` gets cached with OLD update cache.
  - Defer `COPY` till as late as possible, and COPY _minimally_ - since it typically invalidates the cache.
  - Skip development dependencies and temporary caches.
  - Docker Dive via `dive [IMAGE]` analyzes image details and shows the file system in each layer.
  - Use multi-stage builds. A: Create an image using `FROM some-image AS builder` and do what you want. Then, after that, B: `FROM scratch` (or `FROM node:22-slim`) use `COPY --from=builder what-you-want`.
  - Use [distroless images](https://github.com/GoogleContainerTools/distroless) from GCR. It doesn't have shells, package managers, etc. Fewer vulnerabilities.
- 14 Mar 2025. [Playwright](https://playwright.dev/) seems to be the emerging standard for modern browser testing/automation, beating [Cypress](https://www.cypress.io/) and [Selenium](https://www.selenium.dev/).
- 14 Mar 2025. "Openwashing" is a term where something is termed open source but is not.
- 14 Mar 2025. [Photos from FOSSASIA](https://drive.google.com/drive/folders/1Bk9vILFYUjqxS2jHxBvY148yWSuC5WWm) are public.
- 14 Mar 2025. To publish images long-term
  - [GitHub](https://github.com/) is an option. Likely to last long-term. Clone-able.
  - [Archive.org](https://archive.org/) is a good too but may suffer from bandwidth constraints.
  - [Imgur](https://imgur.com/) remains popular but it's unclear if it will remain unrestricted.
  - [Flickr](https://flickr.com/) has had a flaky history with limits and commercialization.
  - [WikiMedia Commons](https://commons.wikimedia.org/wiki/Special:UploadWizard) deletes personal uploads by first-time contributors. Only files _clearly_ useful for a large audience are retained.
- 13 Mar 2025. [Marp](https://marp.app/) is my new favorite way to generate slides from Markdown. Reveal.js is not easy with Markdown (though HTML works well.)
  - The [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) makes development very easy
  - [Marp CLI](https://github.com/marp-team/marp-cli/) makes deployment easy.
  - I used it for my talk on [LLM Hallucinations](https://sanand0.github.io/llmhallucinations/) ([source](https://github.com/sanand0/llmhallucinations/)).
  - Supports all [bespoke](https://github.com/bespokejs/bespoke) features and [plugins](https://www.npmjs.com/search?q=keywords:bespoke-plugin)
  - [Transitions](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md). Requires OS animation effects to be enabled
  - [Animated SVG backgrounds](https://www.svgator.com/blog/animated-svg-backgrounds-examples/) are a good add-on.
- 11 Mar 2025. Bots need structured content (e.g. Markdown, XML). Humans need rich content (e.g. HTML). Here are 4 ways to serve both, roughly in increasing order of sophistication:
  1. **Different URLs**. E.g. https://example.org/about/ vs https://example.org/about.md (this is how Jekyll or Hugo work). Use for static sites generators.
  2. **JavaScript**. Inject after Markdown: `<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script><script>document.body.innerHTML = marked(document.body.textContent);</script>`. Use for dynamically generated static sites.
  3. **URL query parameters**. E.g. `?format=markdown` vs `?format=html` vs `?format=json`. Use in APIs.
  4. **Content Negotiation**. Based on the user agent and `Accept` header, serve Markdown or HTML. Send `Vary: Accept` to indicate that the response depends on the `Accept` header. Use for dynamic web apps.
- 11 Mar 2025. Notes from The Knowledge Project: [Josh Wolfe: Human Advantage in the World of AI](https://fs.blog/knowledge-project-podcast/josh-wolfe-2/)
  - Agent optimization might become as popular as search engine optimization in the future.
  - APIs are likely to be replaced by just chat requests that will do the same thing.
  - APIs might be replaced by RPA, where somebody uses a chatbot to do the equivalence instead.
  - Today, blue-collar workers may be more protected from AI than white-collar workers. Robots still can't serve a meal well enough and aren't progressing as fast as AI yet.
  - There's a lot of tacit knowledge in craftsmanship that will take a long time for machines to replace.
  - Margins are fleeting. The only time you have large sustainable margins is when you truly have a monopoly.
  - Cost is going down so quickly right now that all you have to do is wait, and stuff will become available for a very affordable or even a free price.
  - The moat is really in the data. The models are not an advantage. Engineering and services on top of that are marginal.
  - Machines will be doing science 24/7. All of the science data that we have will probably be the biggest leverage for humanity.
  - The discovery of penicillin, Viagra, and rubber were all serendipitous. Machines should run with a little bit of randomness to benefit from this.
  - Tesla might have gotten away with accounting fraud on warranty claims. But short sellers are likely to be after Elon Musk.
  - With LLMs, the value of our social network has gone up considerably. Remember: The reason we believe things is not because we have thought through and analyzed them. It's because the people around us believe in those things.
  - It is now practical for a person to live on forever by sharing all their thoughts into an LLM. Kids can have a "Dad AI".
  - One good use of meeting recordings is to see where there are biases in the conversations and where the engagement is not high enough or how there are unproductive power balances.
  - A great virtue of college is that it allows you to break free from your previous personality. For those four years, nobody knows who you are or cares what you wear. And you can be or grow into a very different person. The more content we put in into AI or social media, the harder it is to change ourselves.
- 08 Mar 2025. In Jan 2025, ChatGPT included images as part of their data chat export. They also have a 30 second limit for the export. As an extensive user, my export is about 1GB which takes well over 30 seconds to download. [Like many others](https://community.openai.com/t/chatgpt-data-export-too-big-feature-in-the-options/1080111) the export option pretty much doesn't work for me any more.
- 08 Mar 2025. Bharathi said மெல்லத் தமிழினிச் சாகும் in a poem that has been often quoted (and parodied). [Here's the context](https://www.tumblr.com/kuvikam/105265085187/%E0%AE%AA-%E0%AE%B0%E0%AE%A4-%E0%AE%9A-%E0%AE%A9-%E0%AE%A9-%E0%AE%B0-%E0%AE%AE-%E0%AE%B2-%E0%AE%B2%E0%AE%A4-%E0%AE%A4%E0%AE%AE-%E0%AE%B4-%E0%AE%A9-%E0%AE%9A-%E0%AE%9A-%E0%AE%95-%E0%AE%AE-%E0%AE%8E%E0%AE%A9-%E0%AE%B1).
- 08 Mar 2025. The [Zettelkasten note-taking method](https://www.goodnotes.com/blog/zettelkasten-method) proposes that you:
  - Capture: Write down every idea or piece of information on a separate note. Use your own words to ensure understanding.
  - Organize: Consolidate fleeting notes into permanent ones. Assign unique identifiers to each note for easy reference.
  - Connect: Link related notes to form a web of knowledge. This can be done with tags, references, or hyperlinks in digital systems.
  - Review: Regularly revisit your notes to strengthen connections and discover new insights.
- 07 Mar 2025. Ancient languages tend to have fewer words for hues than brightness, since they didn't need them. So "Krishna was blue" or "the sea is wine-dark" is more an indication of darkness than shade of color. [Ajit Narayanan](https://www.quora.com/Why-is-Krishnas-complexion-depicted-as-blue-when-he-is-actually-black/answer/Ajit-Narayanan-1)
- 06 Mar 2025. From [How I Write with Tyler Cowen](https://youtu.be/H1ztOoADp7M)
  - Keep researching. Use LLMs as an altemative to books and other reading material. Keep publishing what you learn regularly.
  - While reading a chapter, keep asking the LLM. What did you think of that? What just happened there? What should I focus more on? What's puzzling about this? How do I connect this to something else later or earlier in the book?
  - LLM is better used to support you rather than replace you in areas of your expertise. Where you are an expert it's best for you to be yourself and have AI fill in the gaps.
  - Ask the AI: "What is in my writing that some people might find obnoxious? Or cold / heartless? Explain it to me in great detail."
  - The first input is context setting and should be really long. Use voice dictation for that instead of typing.
  - Send your blog post to an LLM. No need to explain it. Just let it be the reader and see what it understands and doesn't understand.
  - His PhD students don't have a textbook, which saves them some money. But they are required to subscribe to a large language model which ends up costing less.
  - Today, it makes sense to use the best models and pay $200 for it if required. The differences are large. But in some years in the future, the cost of these models may come down for the free versions.
  - Humans know secrets. AI does not. So at least in some areas, humans will have an advantage.
  - Secrets full matter a lot more in the future. Gossip will matter a lot more. How good are you at keeping and trading secret? Travelling and meeting people will become more important. So will the value of social networks.
  - Since everyone has access to better intelligence, the value of mobilization or being able to _do_ things with people will have higher value. Leadership is an example. The value of your network therefore has gone up a lot.
  - There's more value in prompting one thing 10 times then 10 things one time. Follow up questions work better than long prompts.
  - There are so many AI note-takers (and transcribers) these days that you are not just writing for an AI but speaking for AIs as well!
  - Which model to use:
    - O1 Pro is the best model. Claude does a decent job. DeepSeek is full of hallucinations but is interesting. It is more imaginative.
    - Use O3 mini to write your prompt first, and _then_ ask the model
    - Use DeepSeek and other somewhat wacky high-end models once a day so that you stay in touch with what is models are capable of (beyond the conventional.)
    - Perplexity has entirely replaced Google for many people.
    - Anthropic's models are the best writers.
    - Gemini is good for long documents and hence for things like legal work. Gemini also has excellent YouTube integration and hands can directly read the transcripts.
    - Grok is very good at fact checking tweets.
  - Converting data into LLM consumable forms will be a huge project. Lot of a knowledge is not in such a form and a huge human project will involve this conversion.
- 06 Mar 2025. Indians do not need a visa to enter Thailand. [Ref](https://www.thaievisa.go.th/)
- 04 Mar 2025. Tools and solutions should fit within existing workflows. That means almost all capabilities need to be exposed as APIs.
- 03 Mar 2025. Most browsers are moving away from third-party cookies. Here's [Google's recommendation on alternatives](https://developers.google.com/privacy-sandbox/cookies). The simplest of these is [CHIPS](https://developers.google.com/privacy-sandbox/cookies/chips), which requires adding a `Partitioned` cookie attribute.
- 02 Mar 2025. [YayText](https://yaytext.com/) converts text to Unicode that has strikethrough, bold, italics, alternate fonts, and other interesting features. So does
  [Unitextify](https://unitextify.com/),
  [ConvertCase](https://convertcase.net/unicode-text-converter/), and
  [LingoJam](https://lingojam.com/BoldTextGenerator).
- 02 Mar 2025. [10 red flags I look for as an angel investor](https://www.linkedin.com/posts/jnpayne_10-red-flags-i-look-for-as-an-angel-investor-activity-7298357529967771649-IqdO) is an interesting read.
  1. **No real customers**: A deck, a landing page, and a "vision" don’t impress me. Show me paying customers. Even better, show me customers coming back.
  2. **No path to profitability**: I don’t care if you raise $100M -- if there’s no plan to make money, you’re just burning oxygen. Growth is great, but cash flow keeps you alive.
  3. **Founders who won’t sell**: If you’re scared to get on sales calls, that’s a red flag. The best founders sell in the early days -- whether it’s to customers, employees, or investors.
  4. **No differentiation**: "Like X, but cheaper" isn’t a strategy. If your only edge is price, you’ll get crushed. What do you have that no one else does?
  5. **No urgency**: The best founders operate like time is running out. If you’re "exploring ideas" or "thinking about raising next year," you’ve already lost.
  6. **Raising money before proving anything**: Too many founders try to fundraise their way out of bad ideas. If you need VC to get off the ground, you’re building the wrong business.
  7. **No clear distribution strategy**: Product alone doesn’t win. First-time founders obsess over features. Second-time founders obsess over distribution. How are you getting customers?
  8. **No ownership mentality**: If I hear "I need to hire someone to do that" too early, I’m out. Founders who win figure things out before they delegate.
  9. **A CEO who can’t attract talent**: Your first hires are everything. If great people aren’t willing to join, either the vision is weak -- or you are.
  10. **No skin in the game**: If a founder won’t invest their own money or take a pay cut to make it work, why should I?
- 02 Mar 2025. By contrast, this [OpenAI Deep Research report](https://chatgpt.com/share/67c3e38c-e514-800c-8cfc-983bd4fdeb21) feels a lot less actionable.

## Feb 2025

- 28 Feb 2025. [Proxmox Virtual Environment](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) is an open-source alternative to VMWare, Hyper-V, Citrix XenServer, etc. (There's nothing there that prompts me to explore it further.)
- 28 Feb 2025. With Podman on Windows (a Docker equivalent), many Docker-enabled tasks become easier. For example, running PostgreSQL is as easy as:
  ```sh
  podman run -d --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:latest
  podman exec -it postgres psql -U postgres -c "CREATE DATABASE mydb;"
  ```
- 23 Feb 2025. OpenAI shares an insights report with clients that has insights on what different professions search for. What doctors search for is:
  1. Is my diagnosis right?
  2. How do I read this report?
  3. Is my prescription correct?
  4. Is there a cheaper medicine?
  5. What's the life expectancy given these symptoms?
- 23 Feb 2025. Dataclasses in Python have a slight overhead over named tuples. The 2 main uses I see for them are: providing defaults and offering type hints.
- 23 Feb 2025. UVB 76 is a radio channel has been broadcasting static (with occasional Russian conversation) since 1976. No one knows why. It's live at <https://m.youtube.com/watch?v=8h_D2P0iqMk>
- 23 Feb 2025. Romans washed clothes in urine. The government taxed the purchase of urine for commercial purposes! That's the origin of the phrase "Pecunia non olet" which means "money doesn't stink".
- 23 Feb 2025. [Nix](https://nixos.org/) is a package manager that creates container-like environments. Like a cross between Docker and `apt` / `venv`. It has an immutable file system. [DevBox](https://www.jetify.com/devbox) is a higher-level tool built on top of Nix that streamlines developer workflows, e.g. common project environment setup.
- 23 Feb 2025. VS Code can be used to develop inside a Docker container via Podman, too. Set `dev.containers.dockerPath": "podman"` [Ref](https://geekingoutpodcast.substack.com/p/running-dev-containers-locally-with)
- 23 Feb 2025. [Rill Data](https://www.rilldata.com/) is an interesting BI tool based on DuckDB. It auto-generates a dashboard given a dataset.
- 23 Feb 2025. It's possible to assign "variables" in SQL (notably in DuckDB). Here's an example:
  ```sql
  WITH
    sessions AS (FROM events SELECT COUNT(DISTINCT session_id) AS value),
    pages AS (FROM events SELECT COUNT(*) AS value)
  FROM sessions, pages
  SELECT sessions.value / pages.value AS pages_per_session;
  ```
- 23 Feb 2025. DuckDB has a `GROUP BY *` that groups by all categorical columns. `SELECT x, y, COUNT(*) FROM t GROUP BY *` is equivalent to `SELECT x, y, COUNT(*) FROM t GROUP BY x, y`.
- 23 Feb 2025. VS Code can be used as a code executor by adding `{"key": "shift+enter", "command": "workbench.action.terminal.runSelectedText", "when": "editorFocus"}` to the `keybindings.json` file. Press Shift-Enter to run the selection on the terminal. Useful for DuckDB, SQLite, etc. [Ref](https://motherduck.com/blog/duckdb-tutorial-for-beginners/)
- 22 Feb 2025. Remote Desktop may be the easiest way to have a Windows machine access files / screen from another Windows machine, even for home PCs.
- 22 Feb 2025. [Caddy](https://caddyserver.com/) sets up reverse proxies that get _automatic SSL certificates_ from [Let's Encrypt](https://letsencrypt.org/)!
- 22 Feb 2025. The [Nomic Embed v2](https://www.nomic.ai/blog/posts/nomic-embed-text-v1) blog post has an excellent visualization for embedding quality. It takes all Wikipedia disambiguation articles and shows them on a Nomic Atlas, embedded via Nomic Embed v2. It lets you toggle to OpenAI text-ada-002 which moves the topics far away. Visually, this is very convincing.
- 22 Feb 2025. Python 3.15 will enable UTF-8 mode by default. [PEP 686](https://peps.python.org/pep-0686/)
- 22 Feb 2025. Python 3.13 supports sub-interpreters to bypass the GIL. It's _quite_ like web workers. [PEP 554](https://peps.python.org/pep-0554/)
- 22 Feb 2025. The quickest way to change the `fish` prompt is `function fish_prompt; echo '> '; end`
- 20 Feb 2025. Mermaid has an [Architecture Diagrams Syntax](https://mermaid.js.org/syntax/architecture.html) (in beta) that's capable of creating elegant architecture diagrams with icons.
- 20 Feb 2025. [Blind](https://www.teamblind.com/) is an app that allows users to post anonymously. It's particularly useful to find honest negative feedback about (mostly US) companies.
- 20 Feb 2025. [Iconify.design](https://iconify.design/) is a single npm interface to most open source icon sets. It includes FontAwesome, Bootstrap, Material Design, and many others. [icones.js.org](https://icones.js.org/) is an alternate interface.
- 20 Feb 2025. Self-pity may have evolved as a signal for social support and reducing conflict, while also encouraging self-reflection and behavioral adjustment. But in modern contexts it may be maladaptive and lead to depression. [ChatGPT](https://chatgpt.com/share/67b74759-4cdc-800c-8250-2d1757c5e85c)
- 19 Feb 2025. There's a [YCombinator Founder Directory](https://www.ycombinator.com/companies/founders) listing all founders of YC companies. At the moment, there are 8,628 founders. There's also a [co-founder matching tool](https://www.startupschool.org/).
- 18 Feb 2025. US companies typically pay employees every 2 weeks not every month.
- 18 Feb 2025. What's good about Snowflake? A few developers who explored it mentioned that:
  - Its ability to scale up compute automatically makes queries run faster.
  - "Time travel" allows you to see how data looked at any point in time and that is impressive and useful.
  - Live data sharing with access control without the need for ETL pipelines is useful.
  - Open-source competition: ClickHouse, Apache Druid, and Presto/Trino
  - DataBricks is a lakehouse and less a data warehouse. It's more about:
    - storing unstructured data (Snowflake prefers semi-structured: JSON, Avro, etc.)
    - running collaborative notebooks in Python, SQL, Scala, R (Snowflake encourages SQL)
- 17 Feb 2025. I learnt what a [Memoji](https://www.youtube.com/watch?v=j2iMZaDclJg) is for the first time. An avatar that follows your facial expressions. Cool!
- 16 Feb 2025. Google shows US flight timings from [FlightView](https://flightview.com). Emperically, based on one data point (my UA-2168 which was delayed by 4 hours), it gets updates faster than [Flight Radar 24](https://www.flightradar24.com/) or [FlightAware](https://www.flightaware.com/) or [FlightStats](https://www.flightstats.com/).
- 16 Feb 2025. When comparing Indian graduates with their western counterparts, the Indian ones are often seen as:
  - 🟢 Theoretically sound
  - 🟢 Analytical & technical
  - 🟢 Academically disciplined
  - 🟢 Resilient under pressure
  - 🟢 Committed continuous learners
  - 🔴 Rote-learning oriented
  - 🔴 Limited independent inquiry
  - 🔴 Limited creative innovation
  - 🔴 Restricted practical exposure
  - 🔴 Poor communicators
  - 🔴 Low leadership / initiative
  - 🔴 Need structured guidance
  - 🔴 Struggle to network
- 14 Feb 2025. [Connected Papers](https://www.connectedpapers.com/) shows papers similar to each other based on co-citation and bibliographic coupling for ~50,000 papers.
- 14 Feb 2025. Notes from a fireside chat with [Prashanth Chandrasekar](https://www.linkedin.com/in/pchandrasekar/), CEO, StackOverflow, and the StackOverflow team
  - There's a signal that software demand is growing in 2024. Many more students took the StackOverflow survey in 2024. So more students (or other professionals) are shifting into / starting to learn software development.
  - The [AI Index](https://aiindex.stanford.edu/report/) is a good resource for AI trends.
  - Experts are better able to use AI for writing code. Less experienced developers are more likely to use AI for code reviews, project planning, etc.
  - There's a 5% _decline_ in favorability for AI tools compared to 2023, maybe due to disappointing results.
  - Pilot groups working on AI are 25-30% more productive. They're the most enthusiastic. For the rest of the company, it drops off to 5-10%
    - #LEARNING Benefit comes from NEW people becoming programmers, not existing ones getting more effective?
  - StackOverflow wants to be where the developer is.
    - The programmer workflow was: Google -> StackOverflow -> GitHub.
    - Now it's changing to ChatGPT / Cursor -> GitHub.
    - StackOverflow has a partnership with OpenAI and working on a plugin. Same with Google's Duet AI, GitHub Copilot, many others. They'll link to StackOverflow.
  - StackOverflow is driving integration actively through an enterprise Overflow API
  - Q: What tech have you seen blaze through the ranks?
    - Prashanth: Abstraction wins. Stuff that abstracts away things well and more wins. This includes Gen AI.
    - [Erin Yepis](https://stackoverflow.blog/author/eyepis/): Rust (from 3% to 12%). AWS has steady growth.
    - Erin Yapis: I have a time series spreadsheet that I'll publish.
  - Q: What technologies are unusually tightly coupled?
    - Prashanth: AWS & Google Cloud are tightly coupled.
  - Q: We have an engagement problem. Might be India-specific. What are low-effort high-return mechanisms to increase engagement.
    - [Eric Woodring](https://www.linkedin.com/in/eric-woodring-1823bb84/): Rather than a static web page, integrate it using the API. #TODO
    - [Ben Marconi](https://www.linkedin.com/in/benjaminmarconi/): Use LLMs to write post mortems and push to StackOverflow. #TODO
    - Eric Woodring: "Hydrating" the community helps.
      - We take repeat questions on Teams / Slack and seed them using LLMs.
      - We integrate with the API to auto-add Q&A.
      - Transform documentation into Q&A. Potentially **UPDATE** existing Q&A if it's wrong.
  - Q: What unexpected lessons about developer behavior have you learned while running StackOverflow?
    - Prashanth: We didn't expect developers moving away from Google. Now it moved to the IDE.
  - Q: What are you learning about developer learning behavior?
    - Ben Marconi: Generating LLM-based onboarding documents.
    - Using StackOverflow for Teams to identify who the experts are to contact for specific topics.
  - Q: Are you thinking about leveraging Stack Overflow's knowledge base for personalized or interactive learning experiences? How?
    - Prashanth: Traditionally, people use StackOveflow for productivity, learning, and flexibility (i.e. to ask/answer questions asynchronously without breaking their flow). So yeah, learning is important for us. (Duh!)
  - Q: Could Stack Overflow’s interactions help evaluate the accuracy and relevance of LLM-generated code? Or provide potential metrics on quality?
    - Prashanth: LLM accuracy improves by ~30%. Upvotes / downvotes are reinforcement learning (RL) in steroids, so that helps.
  - Q: What are your thoughts on reliance on LLMs potentially deskill-ing developers?
    - Prashanth: A real issue for _junior_ developers, not for senior ones.
    - They'll _come across_ as knowledgeable.
    - Make internal evaluations and interviews more rigorous.
  - Anand's requests for action:
    - Could I get a copy of Erin's spreadsheet? Vivek Narayanan will follow-up.
    - Could you help me learn more about hydration? Nick Madison will set up a meeting with customer success group.
- 13 Feb 2025. I switched to [fish shell](https://fishshell.com/) mainly because:
  - Autocomplete and tab completion works perfectly, out-of-box.
  - Syntax highlighting is beautiful
  - Great multi-line editing
- 13 Feb 2025. To format with [VS Code Ruff](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff), you need to point the `ruff.interpreter` setting to a Python interpreter. You can't run the ruff server without Python, even though ruff itself doesn't need Python.
- 13 Feb 2025. `cd` checks all paths specified in [`CDPATH`](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/cd.html) for the directory name and changes to the first match. That's pretty convenient!
- 10 Feb 2025. [Flipper Zero](https://flipperzero.one/) is now on my list of "To Buy" tools. It has a variety of hardware devices including NFC, RFID, Bluetooth, Infrared, etc. and is great to reverse engineer or hack devices.
- 05 Feb 2025. Lessons from discussions at IIT Madras:
  - Even in recorded video tutorials, asking students a question and pausing to give them time to think can be effective.
  - When you put students in front of real clients, engagement increases dramatically.
  - Most teaching assistants would like to help diligent students among the bottom half (more than the top decile of students).
  - However, there is a fraction of poor performers who do not care, and are best ignored. Their engagement and effort is a good measure of their interest.
  - Defining a minimal set of principles that we want to teach helps us measure if we've helped the bottom half at least meet those objectives.
  - Teaching is hard. Even after explanations, students, even ENGAGED students, tend to make basic mistakes
- 02 Feb 2025. The data catalog space is led by proprietary solutions:

  - [Alation Data Catalog](https://www.alation.com/data-catalog/): Market leader; growing steadily in enterprise use
  - [Collibra Data Catalog](https://www.collibra.com/data-catalog): Widely adopted with steady growth
  - [AWS Glue Data Catalog](https://aws.amazon.com/glue/features/data-catalog/): Growing rapidly as AWS expands its data services
  - [Informatica Enterprise Data Catalog](https://www.informatica.com/products/data-catalog/): Long established and stable, though facing newer alternatives
  - [Microsoft Purview Unified Catalog](https://www.microsoft.com/en-us/microsoft-365/enterprise-data-catalog): Experiencing fast growth driven by cloud momentum
  - [Atlan Data Catalog](https://www.atlan.com/data-catalog): Relatively new but gaining fast traction among tech-forward organizations

  But open source alternatives are also gaining traction:

  - [DataHub](https://datahubproject.io/): Rapidly growing and embraced by modern data teams. Update: 6 Jun 2025. Not updated since Nov 2023 [Ref](https://github.com/Zjh-819/LLMDataHub/)
  - [Amundsen](https://www.getamundsen.io/): Growing steadily, popular in tech companies for its simplicity
  - [OpenMetadata](https://openmetadata.org/): Fast-growing with a strong emerging community
  - [Apache Atlas](https://atlas.apache.org/): An older tool that’s seen declining momentum versus newer alternatives
  - [Marquez](https://marquezproject.org/): Niche adoption with a more stagnant growth curve
  - [Unity Catalog](https://www.unitycatalog.io/): Gaining early traction among teams breaking free of vendor lock‑in

- 02 Feb 2025. [OpusClip](https://www.opus.pro/) automatically creates short clips from long videos.
  I ran it on [Programming Minecraft with WebSockets in Python](https://youtu.be/NgvtJZDcY) to get this
  [short 30-second clip](https://www.youtube.com/shorts/v3W2cjTWY-Y). 30 minutes. 100% automated.
- 02 Feb 2025. Alternatives to Postman:
  - [Hoppscotch](https://hoppscotch.io/) – A web‑based/desktop API client supporting REST, GraphQL, and WebSockets. It’s lightweight, open-source, and self‑hostable.
  - [HTTPie](https://httpie.io/app) – A web-based API along with a friendly command-line tool for API interaction.
  - [Insomnia](https://insomnia.rest/) (or its fork Insomnium) – A popular cross‑platform API client with a minimal interface and plugin ecosystem.
  - [Bruno](https://www.usebruno.com/) – A desktop open-source API client that stores collections as files (ideal for Git versioning).
  - [Milkman](https://milkman.dev/) – A desktop open‑source workbench for managing API requests.
- 02 Feb 2025. Here is the summary of [DuckCon #6](https://www.youtube.com/watch?v=Sb9DFclZRpg) on 31 Jan 2025 in Amsterdam. I copied the transcript from [YouTubeTranscript](https://youtubetranscript.com/) and passed it through Gemini 2.0 Flash Exp with the system prompt: "Summarize this transcript from the DuckDB conference without missing any points. Cover every point mentioned. A lot of spelling errors that sound like DuckDB are likely to be DuckDB".
  - Introduction & Welcome:
    - **DuckCon #6:** This is the 6th DuckDB conference, held in their hometown. The first DuckCon was online due to the pandemic.
    - **Live Streaming:** This is the first time DuckCon is being live-streamed, chosen to accommodate global time zones (especially China and the US).
    - **Global Reach:** The live stream is intended to reach users in areas where in-person DuckCons are unlikely.
    - **Q&A:** Slido (qa.duckdb.org) will be used for Q&A, with upvoting to prioritize questions.
    - **Sponsors:** Thanks to gold sponsor monday.com and silver sponsors Real and Crunchy Data.
    - **DuckCon Purpose:** DuckCon is a place for users to connect, share experiences, and provide feedback to the DuckDB team.
    - **Inspiration:** The team is inspired by the community's use of DuckDB and how far the project has come.
    - **Mission Statement:** DuckDB aims to make large datasets less intimidating and more accessible, moving away from fear of data to confidence in handling it.
    - **Motivation:** The project was born from seeing people struggle with data that didn't fit in Excel and the lack of user-friendly tools.
    - **Industry Trends:** Single-node processing capabilities have grown faster than the size of useful datasets.
    - **Data Singularity:** A prediction that most data analysis queries can run on a single node is now a reality.
    - **Real-World Data Sizes:** Analysis of Snowflake and Redshift data shows that 99.9% of datasets are under 300GB.
    - **Raspberry Pi Benchmark:** The industry-standard TPCH benchmark (scale factor 300, ~300GB) can run on a Raspberry Pi using DuckDB.
    - **Single Node Growth:** Single-node processing power is rapidly increasing, allowing for larger datasets to be handled.
    - **Adoption Numbers:**
      - **32 Million Extension Installs:** 32 million DuckDB extension installs in the last month.
      - **1.8 Million Unique Website Visitors:** 1.8 million unique visitors per month to the DuckDB website.
      - **Blue Sky Community:** Growing community on Blue Sky, with the hashtag `#dataBS`.
  - Technical Updates (Mark):
    - **Extension Ecosystem:** Focus on enabling the community to build and share extensions.
    - **Community Extensions:** Making it easier to create and use community-built extensions.
    - **DuckDB v1.2 (Harlequin Duck):** Releasing next week, named after the Harlequin duck.
      - **CSV Reader Improvements:** Significant improvements to the CSV reader.
      - **Friendlier SQL:** Improvements to the SQL experience.
      - **CLI Autocomplete:** Reworked and improved CLI autocomplete.
      - **Performance Optimizations:** Many queries are now faster due to performance work.
      - **C API for Extensions:** Introducing a C API to make building extensions easier.
      - **Logging Features:** Improved logging for production use.
    - **Lakehouse Focus:** The main focus for the year is on lakehouse formats and related features.
  - Q&A (Mark & Hanis):
    - **Doubling Team:** If the team doubled, they would focus on client integrations and other projects, not a major architectural change.
    - **Partitioning:** Near-term plans to add support for partitioning, related to lakehouse formats.
    - **DuckDB WASM:** The WASM ecosystem is evolving, with exciting possibilities for in-browser use.
    - **Financial/Pharmaceutical Industries:** DuckDB could replace some SAS workflows due to its cost-effectiveness and capabilities.
    - **Lakehouse & MotherDuck:** Lakehouse work is separate from MotherDuck, though MotherDuck will likely support lakehouse features.
    - **Contributing to Extensions:** Plans to make it easier to contribute to extensions, including support for Rust and Go.
  - Airport Extension (Rusty):
    - **Analogy:** The airport extension allows DuckDB to "fly" to remote servers using Apache Arrow Flight.
    - **Functionality:** Supports select, insert, update, and delete operations on remote data sources.
    - **Motivation:** To reduce the burden of writing extensions and enable faster development using existing code.
    - **Arrow Flight:** Uses Arrow Flight for communication, enabling connections to various data sources.
    - **Demo 1: Delta Lake:**
      - Attaches to a flight server for Delta Lake access.
      - Allows creating schemas, tables, and performing standard SQL operations.
      - Uses Python and deltars (Rust implementation of Delta Lake).
      - Supports predicate pushdown and C integration with the DuckDB catalog.
    - **Demo 2: AutoGluon:**
      - Integrates the AutoGluon AutoML package.
      - Predicts Hacker News post votes using a trained model.
      - Demonstrates table-returning functions for model fitting and prediction.
      - No C++ code required, just Python.
    - **Demo 3: Geocoding:**
      - Uses a geocoder service to convert addresses to coordinates and vice versa.
      - Demonstrates scalar UDFs for vectorized requests.
      - Uses a Python example for a simple uppercase function.
    - **Features:**
      - List flights, take flights.
      - Catalog integration.
      - Select, update, delete.
      - Scalar UDFs.
      - Table in/out functions.
      - Authentication for row/column filtering.
    - **Availability:** Requires DuckDB 1.2, MIT licensed, available on GitHub.
  - Q&A (Rusty):
    - **Most Proud Extension:** Airport is the most fun, but the AWS API wrapper also brings joy.
    - **Extension Resources:** The GitHub DuckDB extension template and reading others' source code are helpful.
    - **Airport & Other Extensions:** Airport is separate and can be used alongside other extensions like spatial or httpfs.
    - **Graph Support:** Graph database support is planned, with examples like Kuzu, Neptune, and Neo4j.
    - **Licensing:** Airport is MIT licensed, compatible with Apache license.
    - **Scaling Out:** Airport can be used to query multiple DuckDB instances on different machines.
  - Ibis & Geospatial (Nati):
    - **Nati Clementi:** Senior software engineer at Nvidia, working on open-source projects like Ibis.
    - **Ibis:** Open-source Python library for data wrangling, with a DataFrame API and interfaces to 15+ engines, including DuckDB.
    - **DuckDB for Geospatial:** DuckDB is fast, has a geospatial extension, and supports various geospatial formats.
    - **Geop Parquet:** Becoming a standard for geospatial data, enabling cloud data warehouse interoperability and compression.
    - **Geo Arrow:** A way of representing geospatial vector data in memory for faster processing.
    - **Ibis Benefits:** Allows writing Python instead of SQL, with deferred execution determined by the engine.
    - **Demo:**
      - Uses OverTour Maps data in geop parquet format.
      - Filters data using bounding boxes.
      - Demonstrates geospatial operations like ST_Distance and ST_Transform.
      - Plots data using Lumber.
      - Shows how to find points of interest near a location (e.g., the Van Gogh Museum).
    - **Ibis & DuckDB:** Ibis uses DuckDB for the parquet reader and lets DuckDB do the heavy lifting.
    - **Ibis Optimizations:** Ibis does type checking but doesn't do query optimization, leaving that to the engine.
    - **Ibis in Browser:** Ibis works in the browser through DuckDB WASM.
  - Q&A (Nati):
    - **Linear Interpolation:** Ibis ML module can help with regression-related tasks.
    - **Missing Features:** No major features are missing in the DuckDB/Ibis geospatial setup, with minimal overhead.
    - **Parquet Reader:** Ibis uses DuckDB's parquet reader.
    - **Query Optimization:** Ibis does not optimize SQL queries, leaving that to DuckDB.
    - **Ibis in Browser:** Ibis works in the browser through DuckDB WASM.
  - Rill & Metrics Layer (Mike):
    - **Rill:** A BI tool optimized for DuckDB, with instant slicing and dicing, BI as code, and a metrics-first philosophy.
    - **Metrics-First:** Design metrics models, and Rill autogenerates dashboards and user experiences.
    - **Live Demo:**
      - Downloaded Rill using a curl command.
      - Created a new project called "DuckCon 6".
      - Imported a parquet file of GitHub commit data.
      - Used AI to generate a metrics model and dashboard.
      - Showed the dashboard with trends and filtering.
    - **Metrics as Building Blocks:** Metrics are flexible, fast, and intuitive.
    - **SQL for Metrics:** Metrics should be defined in SQL, not other languages.
    - **Visual Metrics Editor:** Rill has a visual editor for defining metrics using DuckDB SQL.
    - **Metric Stack:**
      - **Legacy:** Data warehouses, traditional BI tools, inconsistent metrics, full table scans.
      - **DuckDB Powered:** Consistent metrics, fast olap queries, SQL everywhere.
    - **Challenges:** Data modeling is hard, metric changes can be expensive, single-node scale has limits.
    - **AI & Metrics:** AI can assist in metrics modeling, optimization, and conversational data exploration.
  - Q&A (Mike):
    - **Complex Metrics:** Rill works well with complex metrics involving multiple sources and transformations by joining tables in DuckDB.
    - **60 FPS Dashboards:** Users can feel the difference with faster dashboards.
    - **Defining Metrics:** Metrics are defined in the Rill UI using SQL expressions.
    - **Replacing ChatGPT:** Considering locally run self-hosted models for privacy.
  - Stock Data Analysis (Ryan):
    - **Two Takeaways:** Simple finance data flows with trade data and a tool called Q Studio.
    - **Ryan Hamilton:** 14 years building large data platforms in banks.
    - **Bank Data:** Data from exchanges, market data providers, and internal systems.
    - **Use Cases:** Backtesting, data analysis, and report generation.
    - **Q Studio:** A Java desktop application that connects to 30 databases, including DuckDB.
    - **Demo:**
      - Loaded a 6GB CSV file of trade data into DuckDB.
      - Showed basic queries, pivoting, and Candlestick charts.
      - Demonstrated time-based aggregation and moving averages.
      - Showed a basic trading strategy using window functions.
    - **DuckDB Benefits:** Fast, easy to use, great for time-based analysis.
  - Q&A (Ryan):
    - **KDB+ vs. DuckDB:** KDB+ is for large data, DuckDB is more approachable with strong Python integration.
    - **XML Files:** Offloading processing to DuckDB, not planning XML integration.
  - Lightning Talks:
    - **Zuk (Jared):**
      - Search engine research using DuckDB.
      - Python-based experiments with SQL.
      - Removing document lengths for faster search engines.
    - **DuckPGQ (Daniel):**
      - Graph analytics in DuckDB using SQL property graph queries (pgq).
      - Visual graph syntax for pattern matching and path finding.
      - Outperforms Neo4j on analytical queries.
    - **Yat (Kristoff):**
      - Smallest DuckDB SQL orchestrator.
      - Runs SQL queries in a folder in the correct order.
      - Generates a mermaid diagram for lineage.
    - **Grafana & DuckDB (Sam):**
      - Lessons learned from using DuckDB in Grafana.
      - Security incident due to shell commands and file access.
      - Importance of reading the documentation.
    - **Cloud Slur (Adam):**
      - Syncing query engine for bank transaction data.
      - Uses LLM to convert human language to SQL.
      - Uses DuckDB in the browser, Node.js, and Python.
    - **Healthcare Data (Tony):**
      - Data engineering use cases in healthcare.
      - Dynamic data masking system using DuckDB and Snowflake.
      - Data integration pipeline using DuckDB and Arrow streams.
  - Closing Remarks:
    - **Michel Simmons:** Author of the DuckDB in Action book, will be signing books.
    - **Poster Session:** A poster session will follow the talks.
    - **Sponsors:** Thanks again to the sponsors.
    - **Social Event:** The conference will now move to the social event.
- 02 Feb 2025. [ibis](https://duckdb.org/docs/guides/python/ibis.html) is a Python library that works with _multiple_ dataframe backends like DuckDB, Polars, and Pandas.
- 01 Feb 2025. You can add any content at the end of a PDF file. It's ignored. It's an interesting way to send additional information (or just blow up the file size if you don't like them.)
- 01 Feb 2025. [JavaScript introduces a `Temporal` object](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/) that will replace the `Date` object.

## Jan 2025

- 26 Jan 2025. Bring LLMs to the table. One mode of collaboration is using LLMs as **ACTIVE** participants, i.e. they CONTRIBUTE. For example, in a video call. A workshop. A classroom. A presentation. Have the LLM provide input **DIRECTLY** to a group of people.
- 26 Jan 2025. Environment shapes ambient thoughts. Working in a hospital will give you ideas about how to use LLMs in hospitals, for example. People you are working / ENGAGING with are perhaps the biggest drivers.
- 26 Jan 2025. The cost of a cream biscuit packet in India has fallen about 25 _times_, i.e. about as fast as inflation, between 1981 - 2024. Effectively, the absolute price has not changed. How do I know this?
  - [In 1981, a cream biscuit packet cost Rs 25](https://youtube.com/clip/UgkxCF90vppUV01qz0Wila-9meADPord26kc?si=3LLQ5fgRzwG_wUO-)
  - [In 2025, it's available for Rs 21](https://www.amazon.in/Sunfeast-Dark-Fantasy-Bourbon-120g/dp/B0BSX9N69D/)
  - [India Inflation Calculator](https://www.in2013dollars.com/india/inflation/1981?amount=25) - a rare inflation calculator with annual inflation rates baked in - shows that Rs 25 in 1981 is equivalent to Rs 540 in 2024. That's about 25 times more than the Rs 21 it costs today.
- 26 Jan 2025. [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/) deconstructs a piece of JS that creates a tiny WebAssembly calculator. It's a great walk-through of JavaScript compression tricks and how WebAssembly works. [Simon Willison](https://simonwillison.net/2025/Jan/25/a-webassembly-compiler-that-fits-in-a-tweet/#atom-everything)
- 26 Jan 2025. Brandon Sanderson has a [series of YouTube videos](https://www.youtube.com/watch?v=-6HOdHEeosc) where he teaches a course on magic systems.
- 25 Jan 2025. Something I learned from a Sikkil Gurucharan concert.
  - Make the subject of your talk the hero. Not yourself. Be a fan. Share your enthusiasm
  - Get into the zone while presenting.
- 24 Jan 2025. Something I learnt from [Aboorva Singeetham](https://youtu.be/AjoQTODx0rY):
  - Kamal Hassan: "A farmer invests in crops. I'm an actor. So I invest in films." As a technologist, I guess I would invest in technology.
  - "A person who has much more to give is unfazed by overwhelming demands because there is too much in him to overwhelm. He gives you 2 options in place of one."
- 22 Jan 2025. Lessons from [Clear Thinking](https://www.goodreads.com/book/show/75665850-clear-thinking)
  - Watch out for four things: Emotion, Ego, Social confirmation, and Inertia/habit. Basically: adrenaline, testosterone, oxytocin, and dopamine. When you feel these, consider doing the opposite.
  - Here's what makes us prone to emotion. Sleep deprivation. Hunger. Unknown places. Fatigue. Distraction. Stress (e.g. feeling rushed).
  - A good signal for ego is blinding you: You often feel you're right. Or feel unfairly treated.
  - Changing behaviors is hard. Instead, join a group or environment where that's the default behavior. Hiring a trainer or joining a gym, for example.
  - Why does so much of success literature focus inwards rather than on the environment? Perhaps because we often fool ourselves, and doing less of that gives the biggest bang for the buck. It doesn't mean the environment is unimportant.
  - Doing work has the characteristics of a drug. E.g. replying emails gives you control, connections, etc. Work addiction exists because it gives you all the right chemicals.
- There are companies whose business model is training developers for technical interviews! E.g. [Michael Novart](https://www.linkedin.com/in/michaelnovati/) runs Formation which does this.
- 17 Jan 2025. Audio diaries are a thing. Monash University asks students to voice their learnings, share it with each other and have them give feedback. I wonder if ChatGPT diaries could become a thing, too, and LLM journalling starts helping with therapy.
- 17 Jan 2025. Regulation shows things down at colleges and hospitals. For example, patient consent is required for surgeons to learn from their own surgery videos. Unregulated sectors are far more likely to innovate.
- 17 Jan 2025. Doctors can only do so much. Air quality, where you live, etc can do more for the patient than medicines or the doctor. If doctors keep this in mind, they can be more effective.
  - Extending that thought, _ANYONE_ who leverages assets through holistic thinking, becomes _FAR_ more effective.
- 17 Jan 2025. "The curriculum tells teachers what to teach. The exams tell students what to learn." - Ronald Harden
- 17 Jan 2025. "Stravaig" is a Scottish word. It means mindless wanderings.
- 17 Jan 2025. "The real voyage of discovery consists of not a new voyage but having new eyes" - Proust
- 17 Jan 2025. Possibility Thinking is "the willingness to see possibilities everywhere instead of limitations". It's an approach / mindset that can make things that seem hard possible. With LLMs, this is becoming increasingly realistic to me in many areas.
- 14 Jan 2025. [How to export browser history from Brave to Edge](https://community.brave.com/t/how-to-export-braves-browsing-history-to-another-browser/114687)
  - Go to `AppData Local > BraveSoftware > Brave-Browser > User Data > Default`
  - Copy `History` and `History-journal` into `AppData Local > Google > Chrome > User Data > Default`
  - On Edge, go to `edge://settings/profiles/importBrowsingData` and `Import data from Google Chrome` and import the history.
- 14 Jan 2025. I switched back from Brave to Edge, mainly because Edge's native text-to-speech and speech recognition is far better. I can use it better on my mobile.
- 12 Jan 2025. [GitHub CodeSpaces](https://github.com/features/codespaces) seems to be coming up more often in my radar, but I'm yet to figure out a use for it.
- 11 Jan 2025. [Measuring developer productivity with the DX Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/) is a framework for measuring developer productivity. It encapsulates other frameworks like DORA, SPACE, and DevEx.
- 10 Jan 2025. Wednesday comes from Wōdnesdæg - named after Odin (or Woden).
- 07 Jan 2025. [Cloudflare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/) is like ngrok but more permanent. It's a bit more complex, too. But given CloudFlare's liberal free tier, it's a good, viable option for long-term local hosting.
- 06 Jan 2025. John Wheeler: "We live on an island surrounded by a sea of ignorance. As our island of knowledge grows, so does the shore of our ignorance." A great way to understand how ignorance actually grows as you learn more.
- 05 Jan 2025. There is little reason to use Redis. There are several clones you can use. [Databases in 2024: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html)
  - [Microsoft's Garnet](https://microsoft.github.io/garnet/)
  - [KeyDB](https://docs.keydb.dev/) (only Linux)
  - [ValKey](https://valkey.io/) (only source)
  - [DragonFly](https://www.dragonflydb.io/) (only Linux)
  - [ReDict](https://redict.io/) (only Linux)
- 05 Jan 2025. Every few years, something comes along trying to replace relational databases and SQL, and gets absorbed. [YouTube](https://youtu.be/8Woy5I511L8)
  - Key value stores. People soon realize they need more features, e.g. indices.
  - MapReduce systems. Most MapReduce vendors put SQL on top of SQL. Then the Hadoop market crashed. (But HDFS, S3, distributed storage systems are a good idea)
  - Document Databases. JSON. SQL absorbed that. SQLite 3.45+ supports even JSONB. DuckDB, of course, has JSON.
  - Column Databases. Again, these introduced SQL.
  - Graph Databases. SQL:2023 introduced graph queries via SQL/PGQ (Property Graph Queries). DuckPGQ beats Neo4J
  - Array Databases. SQL:2023 adds SQL/MDA which allows for matrix operations. But specialized databases might make sense in this category.
  - Vector Databases. Every DB is adding support for this.
- 04 Jan 2025. Some management philosophies used to be successful but are no longer as effective. [ChatGPT](https://chatgpt.com/share/6778b5f9-f1e4-800c-a1f7-30dcdfdccdaa)
  - Command-and-control hierarchy
  - Taylorism: deep specialization
  - Seniority-based advancement
  - Annual performance reviews (without continuous feedback)
  - Up-or-Out promotion models
  - Confidential strategic information
  - Narrow job descriptions
  - Relying on formal authority
- 04 Jan 2025. Some management philosophies have been around for millenia. [ChatGPT](https://chatgpt.com/share/6778b5f9-f1e4-800c-a1f7-30dcdfdccdaa)
  - Lead by example
  - Fairness and empathy
  - Clear, consistent communication
  - Delegation and empowerment
  - Strategic planning and foresight
  - Consistent rule enforcement
  - Rewarding merit
  - Leadership by virtue and character
- 04 Jan 2025. [Interview with Liang Wenfeng, CEO of DeepSeek](https://www.chinatalk.media/p/deepseek-ceo-interview-with-chinas):
  > In the face of disruptive technologies, moats created by closed source are temporary. Even OpenAI’s closed source approach can’t prevent others from catching up. So we anchor our value in our team -- our colleagues grow through this process, accumulate know-how, and form an organization and culture capable of innovation. That’s our moat.
  >
  > Open source, publishing papers, in fact, do not cost us anything. For technical talent, having others follow your innovation gives a great sense of accomplishment. In fact, open source is more of a cultural behavior than a commercial one, and contributing to it earns us respect. There is also a cultural attraction for a company to do this.
  >
  > Why is Silicon Valley so innovative? Because they dare to do things. When ChatGPT came out, the tech community in China lacked confidence in frontier innovation. From investors to big tech, they all thought that the gap was too big and opted to focus on applications instead. But innovation starts with confidence, which we often see more from young people.
- 04 Jan 2025. [mitmproxy](https://mitmproxy.org/) is an open source tool to intercept, modify, and replay HTTP requests. An alternative to [Charles](https://www.charlesproxy.com/), [Fiddler](https://www.telerik.com/fiddler), and partly [WireShark](https://www.wireshark.org/). [Guide](https://earthly.dev/blog/mitmproxy/). Like the others, it requires installing a trusted root certificate on your machine.
  - [mitmproxy2swagger](https://github.com/alufers/mitmproxy2swagger) digs through the mitmproxy flows and generates an OpenAPI schema. A clever idea to reverse-engineer APIs.
- 03 Jan 2025. [Matomo](https://matomo.org/), [PostHog](https://posthog.com/), [Umami](https://umami.is/) and [Plausible](https://plausible.io/) are open source web analytics tools (like Google Analytics).
- 03 Jan 2025. [Redash](https://redash.io/) and [Metabase](https://www.metabase.com/) are new open source data visualization tools sitting alongside [Grafana](https://grafana.com/) and [Apache Superset](https://superset.apache.org/).
  - Redash feels too clunky / enterprise-y rather than open-source-y.
  -
- 03 Jan 2025. From [Ego is the enemy](https://www.goodreads.com/book/show/27036528-ego-is-the-enemy):
  - Add a daily habit to understand your ego. Where and how is it showing up? How are you fooling yourself? Where are you fighting battles without knowing the war?
  - Speak less. Do more. E.g. Release more, blog less. Review, THEN publish.
  - Always have a teacher, a student, and a peer to compete with. That's how you learn.
  - "It is impossible for a man to learn what he thinks he already knows" - Epictetus.
  - Passion makes you blind. Purpose and realism are less so. Delegate, take help, take feedback.
- 02 Jan 2025. A git repo with a submodule stores the specific commit of the submodule. When you update the submodule, you need to `git add` the submodule.
  - `git pull --recurse-submodules`: Pulls parent repo along with submodules
  - `git submodule status`: For each submodule, show current commit, path, and branch (if on a branch)
  - `git submodule update --init --recursive`: Fetches/moves each submodule to the commit tracked by the parent repo
- 02 Jan 2025. [`uvx doc2docx`](https://pypi.org/project/doc2docx/) converts Word `.doc` files to the new `.docx` format. I had several old `.doc` files that I converted.
- 02 Jan 2025. Sometimes, the value of reading a book is not what you learn from it. It is the thoughts that pop into your head _while_ reading the book.

## Dec 2024

- 27 Dec 2024. What would be the cost of storing about 500GB of LLM cache logs and 5 million write requests per month?
  - CloudFlare KV: $250 + $25 / month [Ref](https://developers.cloudflare.com/kv/platform/pricing/)
  - MongoDB: $125 + $5 / month [Ref](https://www.mongodb.com/pricing)
  - S3: $0.0115 + $25 / month [Ref](https://aws.amazon.com/s3/pricing/) + ?
  - CloudFlare R2: $0.0075 + $22.5 / month [Ref](https://developers.cloudflare.com/r2/pricing/)
- 25 Dec 2024. Browsers support SVG favicons as data URLs. So I used this SVG (generated by Claude via `Generate a simple, interesting SVG favicon. Keep the SVG size VERY small but it should be inspiring.`)

  ```svg
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <!-- Background circle -->
    <circle cx="16" cy="16" r="15" fill="#2563eb"/>

    <!-- Stylized star/spark shape -->
    <path d="M16 7 L18 14 L25 16 L18 18 L16 25 L14 18 L7 16 L14 14 Z" fill="white"/>

    <!-- Inner glow/highlight -->
    <circle cx="13" cy="13" r="2" fill="#93c5fd" opacity="0.6"/>
  </svg>
  ```

  and modified it a bit into this:

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="15" fill="#2563eb"/>
    <path fill="#fff" d="m16 7 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z"/>
  </svg>

  ... which and then compressed it (via [svgomg](https://svgomg.net/)) into a [data URL](https://www.svgviewer.dev/svg-to-data-uri) included like this:

  ```html
  <link
    rel="icon"
    type="image/svg+xml"
    href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTUiIGZpbGw9IiMyNTYzZWIiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTYgNyAyIDcgNyAyLTcgMi0yIDctMi03LTctMiA3LTJaIi8+PC9zdmc+"
  />
  ```

  I applied the same to the [Gramener and Straive logos](https://github.com/gramener/assets)

- 23 Dec 2024. Given about 30 generations, Llama 1b outperforms Llama 8b. [Ref](https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute)
- 23 Dec 2024. OpenAI introduced a `developer` role in addition to the `system` role. This is mainly for `o1`. The API is backward compatible - and also forward compatible. [OpenAI](https://community.openai.com/t/how-is-developer-message-better-than-system-prompt/1062784)
- 23 Dec 2024. Em dashes are a strong sign of ChatGPT use. Curly quotes too. [Reddit](https://www.reddit.com/r/ApplyingToCollege/comments/1h0vhlq/in_the_past_three_days_ive_reviewed_over_100/)
- 23 Dec 2024. CloudFlare has multiple [SSL modes](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/) when proxying requests.
  - [Off (no encryption)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/off/): No encryption between browsers and Cloudflare or between Cloudflare and origins. Everything is cleartext HTTP.
  - [Flexible](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/flexible/): Browsers to Cloudflare is HTTPS, Cloudflare to origin is HTTP. Useful to set up CloudFlare as a HTTP Proxy.
  - [Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/): Browser to Cloudflare matches browser request. Same protocol is used for Cloudflare to origin, without validating the origin’s certificate. Use for self-signed or otherwise invalid certificates.
  - [Full (strict)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/): Similar to Full Mode, but with validation.
  - [Strict (SSL-Only Origin Pull)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/ssl-only-origin-pull/): Cloudflare always connects to the origin over HTTPS with certificate validation.
  - Getting this wrong can lead to a [HTTP 526: invalid SSL certificate](https://developers.cloudflare.com/support/troubleshooting/cloudflare-errors/troubleshooting-cloudflare-5xx-errors/#error-526-invalid-ssl-certificate)
  -
- 22 Dec 2024. [aspose-words](https://pypi.org/project/aspose-words/) is a Python library that converts documents with many formats (Word, RTF, PDF, HTML, Markdown, EPUB, etc.)
- 22 Dec 2024. Discourse does not support searching across multiple forums. Instead, search for the term in all forums. [Example](https://discourse.onlinedegree.iitm.ac.in/search?q=TDS). Then scroll through the results. Then, in the console, hide the ones you don't want. Example:
  - Hide posts that are not in the "Tools in Data Science" category: `$(".badge-category__name").filter(d => d.textContent == "Tools in Data Science").map(d => d.closest(".fps-result")).filter(d => d).forEach(d => d.style.display = "none")`
- 21 Dec 2024. What to use for hosting: [ChatGPT](https://chatgpt.com/share/676663cd-2560-800c-b53c-2c51ef41be69)
  - GitHub Pages: Static websites, medium files
  - Cloudflare Pages: Static websites, global delivery
  - Vercel: Frontend frameworks (e.g. Next.js) with high DX and ISR, small files
  - Netlify: JAMstack projects, minimal back-end, moderate files
  - Glitch: Small static projects
  - Render: Full-stack apps requiring databases and server-side compute
  - Firebase Hosting: Small sites, limited large files
  - Archive.org: Public archival, large files
  - Google Drive: File sharing, large files
  - Dropbox: File sharing, moderate files
  - Cloudflare R2: Static assets, large file delivery
- 19 Dec 2024. To download YouTube subtitles, use: `yt-dlp -q --skip-download --convert-subs srt --write-sub --sub-langs "en" --write-auto-sub --print "requested_subtitles.en.url" "$url"` [Simon Willison](https://simonwillison.net/2024/Dec/19/q-and-qv-zsh-functions/#atom-everything)
- 16 Dec 2024. [markdown2](https://pypi.org/project/markdown2/) is the new de facto Markdown library for Python.
- 15 Dec 2024. [Raspberry Pi 5](https://www.raspberrypi.com/news/introducing-raspberry-pi-5/) has a faster CPU, more RAM and GPU, 4K support, multiple USB 3 ports
- 15 Dec 2024. Government websites like the official press releases cannot be crawled from outside India. Hence the need for server farms in India!
- 14 Dec 2024. `**/*.md` can search for all Markdown files. [Julia Evans](https://jvns.ca/til/star-star-works-for-globbing-in-the-shell/)
- 14 Dec 2024. Windows 11 2024 Update features: [Ref](https://support.microsoft.com/en-us/windows/inside-this-update-93c5c27c-f96e-43c2-a08e-5812d92f220d)
  - [Live captions](https://support.microsoft.com/topic/b52da59c-14b8-4031-aeeb-f6a47e6055df) (via the tray) can transcribe audio and microphone.
  - [Cocreator in Paint](https://support.microsoft.com/topic/53857513-e36c-472d-8d4a-adbcd14b2e54) lets you draw crudely and enhances it with AI. The neat UI is a slider that lets you control how close it should be to your drawing.
  - Voice Clarity automatically cancels echo, reduces background noise, and minimizes reverb.
  - [Studio Effects](https://support.microsoft.com/en-us/windows/windows-studio-effects-273c1fa8-2b3f-41b1-a587-7cc7a24b62d8) (via the tray) lets you apply camera effects on all apps. Eye contact feature is CLEVER!
  - [sudo](https://learn.microsoft.com/en-us/windows/sudo/) lets you run commands with admin privileges from the command line. [source](https://github.com/microsoft/sudo)
- 12 Dec 2024. Traffic to StackOverflow has fallen considerably. Especially from young and Indian developers. StackOverflow revenue is down. Via [Prashanth](https://www.linkedin.com/in/pchandrasekar/). They're exploring:
  - Licensing their content. (Meta says high quality content improves LLM performance by 30% on HumanEval)
  - Enterprise StackOverflow for system integration
  - Fine-tuned versions of Enterprise Stackoverflow for enterprises
  - Integrate StackOverflow within your IDE. Ask questions, post directly
- 11 Dec 2024. [Hyperbrowser](https://www.hyperbrowser.ai/) is a cloud based puppeteer service.
- 10 Dec 2024. [Hacker News RSS](https://hnrss.github.io/) is a good way to get RSS feeds from Hacker News. It's also a good way to understand how to convert a news source into RSS feeds. [BlueSky has RSS feeds too](https://openrss.org/blog/bluesky-has-launched-rss-feeds)
- 06 Dec 2024. NumLock can be dangerous. An IT support team member took control of Radheya's screen while debugging and had turned on NumLock. Radheya's login failed after that. After 5 tries, he was locked out.
- 06 Dec 2024. With LLMs, most architectural decisions are no longer one-way doors. [Steve Yegge](https://simonwillison.net/2024/Dec/4/steve-yegge/)
- 05 Dec 2024. To install Docker on Windows without admin privileges, use [`net localgroup docker-users "your-user-id" /ADD`](https://stackoverflow.com/a/63290821/100904)
- 05 Dec 2024. A non-administrator in a Google Groups domain can only add 200 emails to a group from the UI directly without invitation at a time. The only programmatic way to add users is for an administrator to add them. Even apps that use the Google Admin SDK need an admin to log in to access the relevant API.
- 04 Dec 2024. Take 100% of your work, including complex, multi step processes and put it into an LLM. It might fail at some but you will discover the limitations.
- 04 Dec 2024. I emailed Straive employees about their use of [LLM Foundry](https://llmfoundry.straive.com/) - the internal LLM portal. I picked ~500 non-users from teams that _otherwise_ have high (30%+) usage.
  - Reasons they didn't use it were:
    - 40% had not heard of it.
    - 40% were unclear of the benefits
    - 20% didn't have time
  - 45% feel they don't have enough information and training to use it
  - Some feedback
    - Sharing training videos will help
    - Live training sessions that allows for Q&A will help
    - Developers prefer detailed documentation
    - The same prompt gives different results
  - Possible solution: Email non-users introducing the tool and sharing a quick 15-minute tutorial and a 1-page quick start.
- 03 Dec 2024. DuckDB's JavaScript API is still under development. For example, [JSON, ARRAY are not insertable](https://github.com/duckdb/duckdb-node-neo/blob/cb5be3d27b8aedfac7f2c9d0eec360891fb9e1f7/api/src/DuckDBAppender.ts). Plus, re-creating persistent HNSW indices crashes.

## Nov 2024

- 29 Nov 2024. Gists are a good place to store static files for posterity as well as throwaway files. But, they're just git repositories. So there may be no advantage over GitHub repos.
- 28 Nov 2024. HTMX focuses on HTML over JS. Like server responses being HTML snippets not JSON. But I need front-end over back-end. Client side apps. HTMX doesn't help much there, e.g. templating, or just plain JS code.
  - [htmx client side templates](https://v1.htmx.org/extensions/client-side-templates/) do can convert JSON to HTML.
- 26 Nov 2024. CloudFlare workers can bundle any kind of files, including text, data, and WASM. [Docs](https://developers.cloudflare.com/workers/wrangler/configuration/#bundling)
- 26 Nov 2024. AssemblyScript can compile TypeScript to WASM. [Here's what I learnt](https://github.com/sanand0/assemblyscript-tutorial)
- 26 Nov 2024. Here's a convenient pattern to `git commit` a directory but nothing else in it (e.g. a `build/` directory). Add a `.gitignore` file with `*` followed by `!.gitignore`. Only the `.gitignore` file is tracked.
- 23 Nov 2024. OpenAI lets you download GPT instructions and execute arbitrary code in their containerized environment. This is not a bug. [Ref](https://0din.ai/blog/prompt-injecting-your-way-to-shell-openai-s-containerized-chatgpt-environment)
- 23 Nov 2024. BM25 works as follows: [Ref](https://emschwartz.me/understanding-the-bm25-full-text-search-algorithm/)
  - For each query term in the query, sum up the product of:
    - Inverse document frequency = LN(% of docs without the query term + 1) -- with a small tweak
    - Term frequency = freq / (freq + k) -- where k is usually between 1.2 to 2. Returns 0-1 with diminishing frequency benefit
      - k is multiplied by Document length normalization = 1 - b(1- DocLength/AvgDocLength). Longer documents have larger k, dampening frequency benefits.
  - Some implications:
    - The actual BM25 score has no meaning. It's just useful for ordering
    - BM25 scores for 2 queries can be compared ONLY IF the document sets don't change
- 23 Nov 2024. A list of Markdown to Website converters on [this thread](https://news.ycombinator.com/item?id=36531937):
  - [Jekyll](https://jekyllrb.com/) - Ruby - 2008
  - [MkDocs](https://www.mkdocs.org/) - Python - 2014
  - [GitBook](https://www.gitbook.com/) - JavaScript (Node.js) - 2014
  - [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) - Python (MkDocs-based) - 2016
  - [Docsify](https://docsify.js.org/) - JavaScript - 2016
  - [MdBook](https://rust-lang.github.io/mdBook/) - Rust - 2017
  - [Antora](https://antora.org/) - JavaScript (Node.js) - 2017
  - [Docusaurus](https://docusaurus.io/) - JavaScript (React) - 2017
  - [JupyterBook](https://jupyterbook.org/) - Python - 2019
  - [Keenwrite](https://github.com/DaveJarvis/keenwrite) - Java - ~2019
  - [Honkit](https://github.com/honkit/honkit) - JavaScript (GitBook fork) - 2019
  - [Nextra](https://nextra.site/) - JavaScript (Next.js) - 2020
  - [Astro](https://astro.build/) - JavaScript/TypeScript - 2021
  - [Hugo Book](https://github.com/alex-shpak/hugo-book) - Go (Hugo-based) - ~2020
  - [Clowncar](https://github.com/secretGeek/clowncar) - JavaScript/Node.js - ~2021
  - [Quarto](https://quarto.org/) - R and Python - 2022
  - [Starlight](https://starlight.astro.build/) - JavaScript/TypeScript - 2023
- 21 Nov 2024. With Deno 2.0, the same `.js` file can run in Node.js as well as Deno. [Example](https://chatgpt.com/share/673f44f0-cd54-800c-b9d7-7f68f7666958)
- 21 Nov 2024. [jspm](https://jspm.org/) lets you generate import maps against any CDN.
- 20 Nov 2024. You can click on `htop` columns on the terminal to sort by that column! Mouse events work on command line apps. [Julia Evans](https://social.jvns.ca/@b0rk/113510202564987943)
- 14 Nov 2024. [Malcolm Gladwell on the importance of self-correction](https://www.ted.com/pages/malcolm-gladwell-on-the-importance-of-self-correction-transcript)
  - Belonging to multiple social worlds is a good way to defend against no longer being good at what you used to be. Diverse values and social groups help.
  - Self handicapping explains a lot about the world. You study late for a maths test - so you can fail for lack of trying, not aptitude. Ecosystems (e.g. sports teams) mitigate self-handicapping.
  - You don't have to be good in athletics to get the benefits. A slow runner gets the same discipline, pumping up, etc that a fast runner does
  - Mono cultures are good to accomplish a known mission. Diversity is good to pivot during uncertainty. So, localize mono cultures
  - Diversity helps only if there are sufficient numbers, or if they have enough power to change the organization's thinking.
- 18 Nov 2024. A [HTML quine](https://secretgeek.github.io/html_wysiwyg/html.html): A page that, when rendered as HTML, shows the HTML source code of the page!
- 18 Nov 2024. You can enable syntax highlighting _just using fonts_. [Ref](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)
- 18 Nov 2024. [HTML is all you need](https://maxbo.me/a-html-file-is-all-you-need.html) shows examples of using HTML for notebooks instead of Jupyter, Observable, etc.
- 17 Nov 2024. The problem with Accept headers is that you can't link to them. [Simon Willison](https://fedi.simonwillison.net/@simon/113484569366205490)
- 16 Nov 2025. Write tutorials or blog posts as you learn. [Steve Klabnik](https://steveklabnik.github.io/jujutsu-tutorial/)
- 14 Nov 2024. Use a standardized password strategy, e.g. use the month like GramNov2024 (via Namit)
- 12 Nov 2014. List of Gen AI companies disrupting SaaS incumbents: [LinkedIn](https://www.linkedin.com/posts/sjbrinker_martech-activity-7261021751705243649-M28M)
- 11 Nov 2024. Cloudflare R2 has the same API as S3 but is cheaper
- 11 Nov 2024. Prefect.io is a good alternative to Airflow / cron. Can use for synchronisation tasks, e.g. Drive to server. But no Auth, UI params or config.
- 10 Nov 2024. [Tech Council Ventures](https://techcouncilventures.com/) and [Sunicon VC](https://sunicon.vc/) invest in early stage startups, and aloso provide them technology support (via Naveen)
- 09 Nov 2024. [OpenFreeMap](https://openfreemap.org/) is a free embeddable OpenStreetMap tile server. You can use [MapLibre GL](https://maplibre.org/) (more features) or Leaflet (simpler) to render it. It offers styling and self-hosting.
- 08 Nov 2024. Android keyboard learning only sends model changes back to server and not local keywords. Model changes are aggregated! [Ref](https://chatgpt.com/share/672d6d6d-46a0-800c-a130-c689f5ebc0b7)
- 06 Nov 2024. WebContainers are a thing and Bolt.new uses them!
- 04 Nov 2024. Check out [Loom](https://www.loom.com/) and [Cleanshot](https://cleanshot.com/) are the recommended tools for screen recording and screenshotting. But Loom is paid and Cleanshot is Mac only.
- 04 Nov 2024. The Rubik's cube has a Hamiltonian cycle through every one of its 43 quintillion states. [Ref](https://bruce.cubing.net/ham333/rubikhamiltonexplanation.html)
- 01 Nov 2024. Indian companies with 30+ employees MUST have 2.5%-15% of their employees as apprentices. [Ref](https://chatgpt.com/share/67249206-3be0-800c-a2c3-d1dab166f180)
- 01 Nov 2024. [Textnow](https://www.textnow.com/) and [TextFree](https://textfree.us/) provides a free phone number (like a virtual SIM). (But TextFree has more ads.) Keep using to avoid deactivation. No guarantee of retaining the number.
  - Some banks don't accept TextNow for verification SMS. But voice call is OK.
  - [Tello](https://www.tello.com/), [Red pocket](https://www.redpocket.com/) are cheap MVNOs with $5/month voice plans.
  - [Metro by T-Mobile](https://www.metrobyt-mobile.com/) and [Cricket](cricketwireless.com) are other MVNOs.
  - [MintMobile](https://mintmobile.com/) and [US Mobile](https://usmobile.com/) have $15/month and $8/month data plans.

## Oct 2024

- 31 Oct 2024. The scientific discoveries that might have remained undiscovered for long if not for their discoverers [Ref](https://chatgpt.com/share/6722ec5e-56b8-800c-b869-3c09f10ad685)
  - Newton's discovery of the universal law of gravitation
  - Einstein's discovery of General Relativity
  - McClintock's discovery of Transposable Elements: genes that can turn physical characteristics on and off
  - Mullis' invention of the PCR that makes billions of DNA copies rapidly
- 30 Oct 2024. [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) deep clones objects in JS
- 28 Oct 2024. Rust has crazy low memory usage too. Spawning thousands of child processes is common and OK these days. [Ref](https://github.com/pretzelhammer/rust-blog/blob/master/posts/rust-in-non-rust-servers.md)
- 28 Oct 2024. SetInterval is a good idea in cyborg scraping. [Ref](https://til.simonwillison.net/twitter/collecting-replies)
- 28 Oct 2024. GH CLI is quite good for deployment too, like Wrangler CLI. Enabling pages, setting secrets, etc.
- 28 Oct 2024. Restic is a CLI backup tool. Just like git. Works well with rclone.
- 23 Oct 2024. [0x0.st](https://0x0.st/) is an open API-based file upload + URL shortening service. You can dump files there temporarily.
- 23 Oct 2024. [noVNC](https://novnc.com/info.html) is a JavaScript VNC client. You can control a remote (virtual) machine from your browser.
- 23 Oct 2024. [Friend](https://www.wired.com/story/friend-ai-pendant/) is an always recording pendant that you can ask questions to.
- 17 Oct 2024. SQL optimizations for multi-threaded web applications. [Ref](https://github.com/rails/rails/pull/49349)
  - `PRAGMA journal_mode = WAL`. Improves performance for frequent writes. It allows concurrent reads and writes.
  - `PRAGMA synchronous = NORMAL`. Improves performance. We might lose a few transactions but won't corrupt the database.
  - `PRAGMA mmap_size = 128000000`. Set global memory map for processes to share data
  - `PRAGMA journal_size_limit = 64000000`. Limit WAL file to prevent unlimited growth
  - `BEGIN IMMEDIATE` instead of `BEGIN`. Prevents writes to the journal file until the transaction is complete. Improves concurrency.
- 14 Oct 2024. How AI can improve education performance and engagement. [Ref](https://s-anand.net/notes/Pearson%20Updates%20-%202024-10-13.opus)
  - Student: Create study plan based on course and schedule
  - Student: Focus on what you need to learn more
  - Student: Align with your study style and pace
  - Teacher: Grading MCQs
  - Teacher: Writing conceptual guides
  - ["New collar workers"](https://en.wikipedia.org/wiki/New-collar_worker) was coined by Ginny Rometty
  - Embed tutor or document in video and ask for clarification! This is a new embedded interface. #TODO
- 13 Oct 2024. [Playing Bad Apple in Minecraft](https://purplesyringa.moe/blog/we-built-the-best-bad-apple-in-minecraft/). Ultra cool!
- 11 Oct 2024. [DuckDB supports function chaining](https://duckdb.org/docs/sql/functions/overview.html#function-chaining-via-the-dot-operator)
- 11 Oct 2024. [DuckDB lets you create functions = macros](https://duckdb.org/docs/sql/statements/create_macro.html)
- 11 Oct 2024. [HTML for People](https://htmlforpeople.com/) is a nice introduction to HTML.
- 11 Oct 2024. [FlightRadar24](https://www.flightradar24.com/) lets you watch airplanes live.
- 10 Oct 2024. [sq](https://sq.io/) is like `jq` but for SQL.
- 10 Oct 2024. [Deno 2](https://deno.com/) is fully backward compatible with Node! [via](https://deno.com/blog/v2.0)
- 09 Oct 2024. O1 is good at solving problems where the solution is easy to verify and generating options helps get closer to the solution
- 07 Oct 2024. GitHub co-pilot workspaces let you code using your mobile with AI and deploy it at one shot
- 07 Oct 2024. If you need an Ubuntu Docker container with Python, install it via uv rather than compiling from source. [via](https://mkennedy.codes/posts/python-docker-images-using-uv-s-new-python-features/)
- 07 Oct 2024. [VTracer](https://www.visioncortex.org/vtracer/) is an open source library (and tool) to convert raster images to SVGs. [via](https://simonwillison.net/2024/Oct/7/vtracer/)
- 07 Oct 2024. If you want to create a `console.llm()` function, a browser extension is the best way, because some pages have Content-Security-Policy that block eval, form submission, fetch from other domains, and script execution.
- 07 Oct 2024. [PyPi lets you publish from GitHub Actions](https://docs.pypi.org/trusted-publishers/adding-a-publisher/) without a token. Also from Gitlab.com CI/CD and Google Cloud.
- 07 Oct 2024. [ActiveState](https://en.wikipedia.org/wiki/ActiveState) which made ActivePython, ActivePerl, etc. made these products paid for commercial use around 2013 after a series of acquisitions.
- 06 Oct 2024. [Marimo](https://marimo.app/) supports:
  - Publishing any notebook to static.marimo.app as a static app
  - Creating a SINGLE link that embeds the ENTIRE notebook in the URL!
  - Runnable via `uvx marimo edit`
- 06 Oct 2024. [Parables on the Power of Planning in AI](https://youtu.be/eaAonE58sLU): Giving models about 30 seconds of thinking time consistently improves results - as much as increasing parameter size by a factor of 1,000 to 100,000!
  - This works particularly well for verifiable results (code, math, etc.)
  - Technique: Ask an LLM hundreds of times at low temperature and pick the most common one. (Google's Minerva used this on the MATH dataset.)
  - Better Technique: Ask an LLM hundreds of times. Pick the best solution based on an evaluation metric (reward model)
  - Better Technique: Apply a reward model at EACH step of the process. OpenAI's "Let's Verify Step by Step"
- 05 Oct 2024. [ffmpeg on WASM](https://github.com/ffmpegwasm/ffmpeg.wasm) works but is unstable and hard to use.
  - You can't use it in a CDN without CORS issues, since it loads ffmpeg-core via a worker.
  - It often runs into buffer allocation issues.
- 04 Oct 2024. [Exotel](https://exotel.com/) and [Plivo](https://www.plivo.com/) provide voice & SMS services in India (like Twilio). Plivo is more customer friendly.
- 04 Oct 2024. [Uber's H3](https://h3geo.org/), [Google's S2](https://github.com/google/s2geometry), and [GeoHash](https://en.wikipedia.org/wiki/Geohash) are geocoding systems.
  - H3 offers uniform cell sizes and better distance measurement
  - S2 offers higher precision (factoring in Earth's curvature) for exact location matches
  - GeoHash is the simplest
- 04 Oct 2024. There's a movement towards embeddable databases on the cloud.
  - [MotherDuck](https://motherduck.com/) is hosted DuckDB.
  - [Turso](https://turso.tech/) is hosted SQLite (with local sync, multi-tenant)
  - [StarBase DB](https://starbasedb.com/) is SQLite with an API on top of Cloudflare Durable Objects.
- 03 Oct 2024. [Jaro-Winkler Distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) is a string matching algorithm that weights the start of a string higher.
- 03 Oct 2024. Passing the feed of the following to NotebookLLM is a good way to get caught up with news and summaries.
  - A blog / WhatsApp group (e.g. The Generative AI Group, Sithamalli, etc.)
  - A Google Group / mailing list (e.g. genainews, datameet)
  - YouTube channels (e.g. Vertiasium, GitHub)
  - Hacker News top stories
  - Research papers
  - Emails (skipping marketing emails)
- 02 Oct 2024. [DuckDB runs inside Pyodide](https://duckdb.org/2024/10/02/pyodide.html)
- 01 Oct 2024. [Hungarian Jews have genetic diseases that increase their IQ](https://slatestarcodex.com/2017/05/26/the-atomic-bomb-considered-as-hungarian-high-school-science-fair-project/). Gaucher’s disease, Torsion dystonia.
- 01 Oct 2024. [People don't like hard stuff like maths or science, so richer societies have fewer scientists](https://www.thepsmiths.com/p/review-math-from-three-to-seven-by)

## Sep 2024

- 30 Sep 2024. In Singapore Airlines,
  - You can't wear your seatbelt loose
  - You have to keep the laptop in the pocket in front, not on your lap, during takeoff
  - You can't charge during takeoff
  - They verify if you ask for a veg meal and place a sticker on your seat
- 30 Sep 2024. Coders are more likely to edit LLM code. Non-coders don't have that bad habit.
  - [Vaishnavi](https://youtu.be/uuf3-_xYp7k) and [Ranjeet](https://youtu.be/5FZadpAGXb0) edited code
  - [Indal](https://youtu.be/EGbeA-x79tY) and [Koustav](https://youtu.be/2Je37vJhcD4) didn't
- 30 Sep 2024. Coders are likely to get more out of an LLM because they know what it can do. But some non-coders will get more out of an LLM because they don't know what it can't do.
  - E.g. [Indal](https://youtu.be/EGbeA-x79tY) trying for a confetti animation, which is hard but do-able
- 28 Sep 2024. Pyodide can access the DOM and JavaScript in the browser
- 28 Sep 2024. [Jupyter Lite](https://jupyter.org/try-jupyter/lab/) lets you run Jupyter notebooks in the browser
- 28 Sep 2024. AVIFs is about 10X better than GIFs. I tried creating one via [EZGIF AVIF Maker](https://ezgif.com/avif-maker/) and the .avifs file created was 15X smaller!
  `ffmpeg -i input.gif -c:v libaom-av1 -crf 30 -b:v 0 -cpu-used 4 -tiles -an output.avif`
- 28 Sep 2024. Claude 3.5 thinks `.opus` is the best format to compress audio. It used `ffmpeg -i audio.wav -c:a libopus -b:a 16k -application voip -vbr on -compression_level 10 audio.opus`
- 28 Sep 2024. API coding best practices [Source](https://erikbern.com/2024/09/27/its-hard-to-write-code-for-humans.html) via [Simon Willison](https://simonwillison.net/2024/Sep/27/erik-bernhardsson/):
  - Always add screenshots to the Readme. They never break.
  - Always add every example. Human think in examples.
  - Avoid defaults and be explicit unless 99% of the usage is with the default.
  - Make the feedback loops incredibly fast.
  - Make deprecations easy for users to deal with.
  - Keep objects immutable.
- 25 Sep 2024. When you paste HTML into Excel, it automatically changes the font of the cell to match the content in the HTML!
- 25 Sep 2024. Aptos is the new default font in Office - replacing Calibri.
- 20 Sep 2024. [Jupyter Lite](https://jupyter.org/try-jupyter/lab/) lets you run Jupyter notebooks in the browser
- 20 Sep 2024. [Piston](https://piston.readthedocs.io/) lets you run Python code via a REST API
- 20 Sep 2024. [`<link rel="modulepreload">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload) lets you load and compile modules early!
- 19 Sep 2024. Non-Negative matrix factorization apparantly aligns to intuition more than K-Means and hence would be a great fit for most cosine-similarity matrices (via Jaidev).
- 15 Sep 2024. Groq, SembaNova and Cerebras are fast inference models. All appear to be free
- 15 Sep 2024. The skills required to vet the AI's response is the same skillset used to vet a Pull Request. It's a good way to teach code review. Source: [My personal guide for developing software with AI](https://www.reddit.com/r/LocalLLaMA/comments/1fbe995/my_personal_guide_for_developing_software_with_ai/)
- 9 Sep 2024. "Invest in things that don't change." Jeff Bezos. Like faster delivery, SQL, web platform.
- 9 Sep 2024. Medical cost in Singapore (for insurance coverage) - via Kumar
  - Root canal at clinic: $1,300
  - Crown replacement at clinic: $1,300
  - Periodontist (gums) at hospital: $2,500
- 8 Sep 2024. [OAuth from First Principles](https://stack-auth.com/blog/oauth-from-first-principles) is a SIMPLE explanation of OAuth. Conclusion: "You probably shouldn't implement your own OAuth client."
- 8 Sep 2024. [Alphaxiv](https://www.alphaxiv.org/) is Arxiv.org but with author comments and chat
- 8 Sep 2024. [The Impact of AI on Computer Science Education](https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/):
  - Eric Klopfer divided his undergrad CS class into three groups and gave them a Fortran task.
  - One used ChatGPT. Another, Meta's Code Llama LLM. Third, only use Google.
  - ChatGPT group was faster than Code Llama was faster than Google
  - When tested on the approach, the ChatGPT remembered nothing. Half the Code Llama group passed. The Google group passed fully
- 8 Sep 2024. Server-side implementation of an OAuth2 client is too complex. Best to delegate this to Auth0
- 8 Sep 2024. Via Pratap Vardhan:
  - At Khan Academy, every developer working on Khanmigo has cursor. Everyone who's contributed to a Khan Academy GitHub repo has GitHub Copilot.
  - I stopped using Google + StackOverflow 2 years ago. I use ChatGPT, Copilot, etc. For humans, I ask Reddit.
  - Excited by async agents. Things that do my job while I sleep.
    - Zapier notifications.
    - Monitor what happens. Put it into a flow diagram and alert me.
    - Every month, did my broker trade? Did my bank transaction fail? Did I pay my electricity bill?
    - Every time you delegate, use an agent instead.
    - Read my RSS feeds.
    - Read my browser history and suggest interests.
  - Plan a session in Bain, BCG, etc. on Artifacts.
  - Explore sparse embeddings. More effective. ColiPali, ColBERT
- 7 Sep 2024. When running a Hello world app:
  - FastAPI takes ~26K RAM, 3% CPU
  - NodeJS + Express takes ~62K RAM, 2% CPU
  - Deno + Express takes ~62K RAM, 1% CPU
  - Deno + Fresh takes ~54K RAM, 0.4% CPU
- 24 Aug 2024. [Karya.in](https://karya.in/) is creating high quality datasets. Suhel mentioned them
- 11 Aug 2024. [DocxTemplater](https://docxtemplater.com/) is SlideSense but open-core and handles DOCX as well!
- 11 Aug 2024. `handle = await window.showDirectoryPicker()` lets you access the browser [File system API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API).
- 5 Aug 2024. Alternative interfaces to YouTube: Piped.video, CloudTube, Invidious, NewPipe, FreeTube
- 1 Aug 2024. Power Toys has an Advanced Paste that uses OpenAI to paste as Markdown or JSON!

## Aug 2024

- 28 Aug 2024. Practice for each thought: "What would make me change my mind? How likely is that?"

## Jul 2024

- 31 Jul 2024. Interest Turing complete languages:
  - [find + mkdir](https://ogiekako.vercel.app/blog/find_mkdir_tc), maybe
  - sed and awk
  - Minecraft's Redstone Circuits
  - Conway's Game of Life
  - [Cellular Automata Rule 110](https://conwaylife.com/wiki/OCA:Rule_110)
  - Magic: The Gathering
  - SQL
  - Excel
- 28 Jul 2024. [Rev.ai](https://rev.ai/) does a good job of diarization. Cost: 2 cents per minute. Update: 6 Jun 2025. Cost: 0.33c/min [Ref](https://www.rev.ai/pricing)
- 22 Jul 2024. [Awesome PaaS](https://github.com/debarshibasak/awesome-paas) lists self-hosted deployment platforms. [Piku](https://github.com/piku/piku) - similar to [Dokku](https://dokku.com/) -- is promising.
- 15 Jul 2024. [Xata](https://xata.io/docs/rest-api) offers a free PostgreSQL tier with REST API
- 14 Jul 2024. Mamba now uses mambaforge as the default installation, i.e. conda-forge is the default and only channel!
  - Update: 6 Jun 2025. Mambaforge is sunset as of 29 Jul 2024. Conda-forge now uses Miniforge as the standard installer [Ref](https://conda-forge.org/news/2024/07/29/sunsetting-mambaforge/)
    conda-forge.org. Users should switch to Miniforge instead.
- 14 Jul 2024. nginx supports a load-balancing method `least_conn` which is _far_ better than the default round-robin.
- 12 Jul 2024. Carlton's TDS session
  - Always create a new venv via VS Code when starting a training session. Helps reproduce issues (though I could use Colab instead)
  - Create an empty .ipynb notebook and double-click it. That's another way (though slower) to open a Jupyter notebook
- 09 Jul 2024. Share Parrish Knowledge Project podcast. Three generations of wealth
  - There is a big difference between liking animals and being a vet. Between liking education and being a teacher.
  - Even if no one reads your writing, you benefit from the writing.
  - Emotional.crises like 9/11 or Covid are far easier for markets to recover from
- 08 Jul 2024. Hidden brain podcast. White trying to hard can back fire on you
  - Sometimes conscious thinking makes our automated responses of sports music, dance are great examples
  - Instead, SURRENDER to something outside of you. Like playing with kids. Exercise also sends blood away from brain. Drugs. ChatGPT.
  - It's called Ue in Chinese philosophy
- 25 Jun 2024. Amara's law: "We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run."
- 24 Jun 2024. Any word with the letters `izehsglbo` can be spelt on a calculator. That includes Hobbes (538804)! Via [Calculator spelling](https://paperlined.org/apps/wikipedia/offsite_content/Calculator_spelling.txt)
- 23 Jun 2024. Tor Browser + DuckDuckGo is good for torrent searches. Maybe the Dark Web _IS_ the original Internet. The ad-free hacker web
- 19 Jun 2024. From Dan Becker on running a workshop
  - Answer questions at the end, not in parallel in a chat, to avoid distraction
  - Have fewer words in slides when presenting. It's less distracting
- 17 Jun 2024. Morgan Housel Shane Parrish podcast
  - Risk is what stops you from achieving YOUR goals. What's risky for me may not be risky for you
  - The lesson from compounding is that you want to optimize for duration, not return. That's what does the heavy lifting. Survival, consistency, long term - these matter. The performance does NOT matter.
- 08 Jun 2024. httpretty can mock ALL Python HTTP libraries
- 08 Jun 2024. Japanese pray to dead parents instead of gods. The dead are preserved in plates by priests. Japanese are generally non religious
- 06 Jun 2024. The sum of a sinusoidal series is like a spirogram. Spinning circle linked to another and so on <https://www.andreinc.net/2024/04/24/from-the-circle-to-epicycles>

## May 2024

- 30 May 2024. Knowledge Project podcast. Morgan Housel
  - Differences of opinion exist because of different stories arising from origins and experiences. We are not debating facts. We are debating life lessons!
  - Solution: hear their anecdotes. The stories that taught them their lessons.
- 29 May 2024. AI reporting templates are a trend. Domain expertise comes in via structuring the report template and associated prompts.
- 28 May 2024. Hidden Brain podcast: Innovation 2.0: The power of less
  - Subtraction is hard because we are biologically and economically wired against it. It's also hard because there are fewer markers of subtraction. Additions are natural markers / triggers.
  - Marie Kondo suggests keeping only what sparks joy
- 27 May 2024. Discussion with Anand
  - Explore BBC Microbit
  - Everyone should get a Raspberry Pi!
  - Watch 2 minutes paper on YouTube
- 24 May 2024. My home WiFi is on WiFi 6. This supports beam-forming which increases range by "focusing" on devices!
- 18 May 2024. In Scandinavia, Århus comes after Zürich because Å is a different letter. It was added by the Dutch after WW2 to distance themselves from the Germans. [via](https://youtu.be/gd5uJ7Nlvvo)
- 18 May 2024. Zalgo text is where we combine multiple Unicode combining characters
- 06 May 2024. Radio free Xp podcast. Nudge 61
  - always announce first before doing. Give people time to plan comment and react. That gets you alignment without sacrificing freedom.
  - give information, not orders. When someone is parking a car, tell them how much space they have, don't tell them to start stop or how much to turn left
  - it's almost impossible to change the culture if you're not the boss
- 02 May 2024. Hidden brain podcast. Innovation 2.0
  - solve your own problem. Don't solve other people's problems. This helps you pick what you're good at
  - affordable losses. Make sure you survive
  - borrow others' spares. spare time, scrap data, anything others don't use. If you can monetize it, you can pay them back
  - focus on the controllable. Ignore what's outside your control don't even waste time on it
- 01 May 2024. curl supports [globbing](https://everything.curl.dev/cmdline/urls/globbing.html), [emails](https://everything.curl.dev/usingcurl/smtp.html)

## Apr 2024

- 28 Apr 2024. [ESLint's new flat configuration does not support package.json](https://eslint.org/docs/latest/use/configure/migration-guide)
- 25 Apr 2024. JSR lets you publish Deno packages that can be imported by npm [via](https://deno.com/blog/jsr-is-not-another-package-manager). It also auto-evaluates documentation and scores it! [via](https://jsr.io/docs/scoring)
- 17 Apr 2024. Many arts demand devotion. Devoting unrestricted time is part of that. 16 hours of practice a day is not uncommon. Sessions don't start and end on time.
- 17 Apr 2024. Instruments take a lot longer to learn than vocal music. The instrument needs to become an extension of you.
- 17 Apr 2024. Tests and homework have a purpose. It helps people figure out whether they've learnt. So:
  - Write tests that make people think! Like DuckDB workshop
  - Share a list of exercises that people can explore
- 17 Apr 2024. People need to explicitly be INVITED, and potentially IN PERSON, before they will engage with something new.
  - For example, no one posted to <GenAINews@straive.com> until the VIA Talks session where we got them to post.
  - For example, having one day at IITM mandatory (especially early in the course) gets online students familiar with TAs. They understand that TAs actually help, at high quality. That they can use Discord.
  - What makes Delhi students more assertive? How can we inculcate that in others?
- 14 Apr 2024. [jsr-io/migrations](https://github.com/jsr-io/jsr/tree/main/api/migrations) is a great example of database migrations.
- 14 Apr 2024. [Shape Detection API](https://developer.chrome.com/docs/capabilities/shape-detection) in the browser detects QR codes, face bounding boxes,
- 14 Apr 2024. Browsers also _natively_ support blurring and face tracking. [via](https://w3c.github.io/mediacapture-extensions/#exposing-mediastreamtrack-source-background-blur-support)
- 12 Apr 2024. Prashant Pandey: we need to prepare before every meeting. Something to teach
- 11 Apr 2024. VS Code
  - Select any code and command `Explain this` to understand the code
  - `%something` in command bar searches ACROSS files for a term. Exactly like `Ctrl+Shift+F`
  - Copilot has an Inline Chat: Start in Terminal (that needed me to unbind Ctrl+I in bash to work)
  - `Ctrl+2` opens a second window on the side. `Ctrl+1` goes back to the first window
  - Terminal: Open Detected Link lets you scroll through detected (file) links in terminal
  - Terminal sticky scroll is transparent. (But Terminal stick scroll isn't working for me.)
  - Copilot uses last 10 commit messages, Jupyter notebook kernel state (variables) as additional context
  - 1.88: supports locked scrolling to sync scrolling of side-by-side windows
- 10 Apr 2024. [fsspec](https://filesystem-spec.readthedocs.io/) is used by [csvbase](https://csvbase.com/blog/7), Pandas, etc. to implement file system protocols like `s3fs`, `gcfs`, etc.
- 10 Apr 2024. [SQLime](https://github.com/nalgeon/sqlime) is a SQLite client / playground on the browser!
- 09 Apr 2024. Do nothing. Then do less
  - Humans have a bias against inaction. Hence a strategic advantage. What can you cancel today?
  - Humans have a bias against subtraction or removal. That too is a strategic advantage. What can you remove today?
  - Humans have a bias against constraints. That's a strategic advantage. What constraint can you embrace?
  - No Yay! When declining something, add it your calendar so that when the time comes you can say yeah I got this time back
- 03 Apr 2024. CSS nesting is now available in browsers
- 02 Apr 2024. [Cold starts in AWS Lambda](https://mikhail.io/serverless/coldstarts/aws/): serverless functions stay alive for 5-7 min. All languages are fast but Docker is slow. More npm packages slow start dramatically.
- 02 Apr 2024. [WiFi only works when it's raining](https://predr.ag/blog/wifi-only-works-when-its-raining/) because a tree was obstructing the signal but was weighed down when raining!
- 02 Apr 2024. [Good reasons why finding a technical co-founder won't work](https://www.breakneck.dev/blog/no-tech-cofounder).
  - You want a unicorn to passionately trust YOUR idea after 2 meetings.
  - Why should THEY risk money for YOUR idea? You're the money guy. RAISE the money for YOUR idea!
  - How passionate are you about software? And you want to build one now?

## Mar 2024

- 31 Mar 2024. [How I write podcast. Paul Graham essays](https://youtu.be/2OZ94b3fJvo)
  - Write simply. It helps communicate. (Don't concise if communication worsens.). It forces you to make the idea better
  - Do lame stuff. Else you won't start. Low standards drive creativity
  - The more to delete, the better your writing. Read your piece. Highlight what feels poor. Fix it. Ask friends to highlight what's BORING? UNCONVINCING? Delete the first, brainstorm the second. Or ask, what's the 10% to cut and 10% to keep.
  - Write about stuff you don't know above the. Writing GENERATES ideas
  - Write about what's BUS. GENERAL and SURPRISING. (Laughter is a sign of comprehension.) Do HARD things to cultivate taste.
  - Spend more time with people who generate ideas in you. Ravi chithappa. Ram. Ankor. Ganes. Books!
  - Build taste. I have a taste for picking technologies. Data visualization. Retrospect. Write down what you like and dislike. Copy what you REALLY like. Guilty pleasures.
  - A benefit of lower standards is that it let's you pick the path less travelled.
  - ITERATE. Discuss ideas. Iterate. Acknowledge. ITERATE.
- 30 Mar 2024. [sqlite-schema-diagram](https://gitlab.com/Screwtapello/sqlite-schema-diagram/) generates schemas for SQLite databases using Graphviz
- 30 Mar 2024. [TechEmpower web server benchmarks](https://www.techempower.com/benchmarks/) place Rust servers on top
- 29 Mar 2024. Rust is non-trivial. Inspired by [We are under DDoS attack and we do nothing](https://tableplus.com/blog/2024/03/how-we-deal-with-ddos.html), I ["wrote"](https://chat.openai.com/share/ec5f3d23-06b3-40a8-a965-ab466d214802) a small binary that serves a parquet file as JSON. It failed and I couldn't fix it.
- 29 Mar 2024. [spleeter](https://github.com/deezer/spleeter) is a better alternative to demucs. Splits audio into
- 29 Mar 2024. [pyannote-audio](https://github.com/pyannote/pyannote-audio) does speaker diarization
- 27 Mar 2024. [uvicorn](https://github.com/encode/uvicorn) is faster than [hypercorn](https://github.com/pgjones/hypercorn) but [hypercorn supports HTTP/2 and HTTP/3](https://pgjones.gitlab.io/quart/tutorials/deployment.html). FastAPI with uvicorn is reasonably fast.
- 25 Mar 2024. When I set up a training:
  - On inviting for DuckDB workshop on Sun evening, Gramener starts accepting immediately, Straive doesn't.
  - Straive has high spread of joining time. When joining Gitlab Pipelines Workshop, Straive starts meeting (e.g. Premlal) many minutes early. Gramener floods in (due to alert). Straive streams in slowly.
  - Gitlab Pipelines Workshop acceptances: Gramener 47, Straive 100
- 19 Mar 2024. Ways to expand mental models
  - DISCOVER mental models. Review beliefs diary.
  - DIVERSIFY. Find INFLUENTIAL (not dull) people with different backgrounds.
  - Experiment! New environment, approach, perspective
  - Be open. Change your mind.
  - APPLY. Practice regularly
- 19 Mar 2024. Ways to use inversion
  - "Pre-mortem" is an analysis at the _beginning_ of how a project failed. Then avoid that
  - "Red team" or "Black hat" are designated to contradict.
- 19 Mar 2024. Having a PoV IS a hypothesis. Always having a PoV allows us to detect anomalies and learn.
- 19 Mar 2024. [Control vectors in real-time](https://www.linkedin.com/posts/axsaucedo_ml-machinelearning-artificialintelligence-activity-7167058175127465985-EMy4/) lets you control response in real-time
- 18 Mar 2024. [OIDC](https://docs.planka.cloud/docs/Configuration/OIDC) is Open ID Connect. It's like OAuth2 but more. Azure and Google support it.
- 18 Mar 2024. [Planka](https://docs.planka.cloud/) is an open-source Trello
- 18 Mar 2024. There is a <https://myapplications.microsoft.com/> that serves as a starting point. Might be helpful
- 16 Mar 2024. DuckDB is 2-10 times faster than Pandas. ClickHouse is supposedly faster but doesn't run on Windows.
- 13 Mar 2024. [Tavily is a search API for LLMs](https://docs.tavily.com/docs/tavily-api/introduction)
- 13 Mar 2024. Interesting [model garden models](https://console.cloud.google.com/vertex-ai/model-garden)
- 13 Mar 2024. There are sites you TRULY cannot scrape even in the browser because of the `isTrusted` read-only property of events that you can never set to true. Oracle Service Cloud checks for isTrusted in mouse actions.
- 09 Mar 2024. Mughals just replaced the top of most temples with Mosque domes as part of the conquer or die policy
- 09 Mar 2024. "Math is racist". Because people who can't solve it can't because of their underprivileged background!
- 07 Mar 2024. Winners: commodity businesses, companies that own lots of data like Reddit and Stackoverflow, profitable bootstrapped businesses
- 03 Mar 2024. [Making a tool more usable, e.g. a video, can have a 10-100X impact](https://twitter.com/karpathy/status/1760388761349927356). Yet every developer thinks it's redundant
- 03 Mar 2024. All in one podcast. Can Google save itself?
  - the success of a developer platform is the number of people using it. But not everyone uses it equally. Some people create winning products which drives attention to the platform. Use llm proxy like that to measure weekly average users and cost saving through caching
  - one week ago, if someone at Google stood up and said we have too many black people in our images, the responsible AI team would have shut them down calling them racist. They had too much power and it was a one-way conversation. With the backlash now, there is a lot more awareness and acceptance of the balance. Security is like that. It's too easy to empower and shut things down until there is a backlash
  - the lawyer's job is to tell you what's not possible. But like Travis, your job is to decide whether it's worth the risk of running a taxi company without a license or not
  - Americans pronounce Sundar pichai's name as Sun Daar!
  - data licensing has become a business model. Reddit, Accel springer, stack overflow and many others are licensing their content to Google and open AI for several million dollars.
- 02 Mar 2024. [You can use slots to stream HTML out of order](https://lamplightdev.com/blog/2024/01/10/streaming-html-out-of-order-without-javascript/)!
- 01 Mar 2024. Shane Parrish. Short-term patience podcast
  - have a frame of reference to relate EVERY experience to. That helps you evaluate (measure) and learn. That's part of what Charlie Munger's lattice of frameworks is about
  - when there is a very high or very low interest scenario, low interest scenario then go ultra long term. Issued hundred years when the interest rate regime was very low
  - short term optimal is rally long term optimal. So you need to learn to take a loss and look like an idiot to play the long-term game
  - grit is a behavior that enables long-term thinking. Short term success gives you the luxury to think about long term
  - #IMP power is about optionality. It's about being in a position where you have the options that can affect the positive change rather than circumstances controlling you. Read Robert greene's book on the 48 laws of Power
  - low leverage enables that
  - begin with the end in mind. Always
  - how do you think about risk? Well, things do happen. It's as simple as that
  - autonomy and decentralization helps derisk
  - do more and more of what works. That's a powerful way of compounding
  - long-term investments are better than frequent trading because you get to reinvest the tax you otherwise would have paid. So unless the alternative is super compelling, stay invested
  - if you need to be the person who DOES the thing, you delegate less, leverage list, compound less, because you have to DO. BE A PERSON WHO SETS THE FIELD INSTEAD. The coach, the chess master, the director, patient strategist who Waits for the good hit

## Feb 2024

- 28 Feb 2024. Being in Control motivates #Lesson. my cycle tires were flat. I thought it was someone pulling out the air and felt very demotivated. But once I carried my cycle pump, I felt so much more in control and power and felt a whole lot better
- 28 Feb 2024. [SourceGraph](https://sourcegraph.com/) is the default platform for private code completion & search
- 25 Feb 2024. [demucs](https://github.com/adefossez/demucs) does an EXCELLENT job of splitting songs into drums, bass, vocals and others
- 24 Feb 2024. [Architecture.md](https://github.com/rust-lang/rust-analyzer/blob/d7c99931d05e3723d878bea5dc26766791fa4e69/docs/dev/architecture.md) is an [emerging standard](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)
- 24 Feb 2024. Managing wealth requires training.
- 23 Feb 2024. [htmz](https://leanrada.com/htmz/) is a fantastic way to load HTML into elements!
- 23 Feb 2024. Suguna Poultry is
  - Using robots to walk in their farms, use sound and bird eyes and movement to predict birth health over 1-2 weeks
  - Light on the back of the bird's back AND face => lays eggs in 14 days, else takes days later (girls and mobile phones?)
- 23 Feb 2024. Teknoturf is using Gen AI to
  - Improve prompts when teaching prompt engineering.
  - Pronounce languages better, identifying which words Tamilians and Malayalis will mis-pronounce.
- 23 Feb 2024. Explore IRBlaster. It can control AC and can automatically increase temperature at night.
- 21 Feb 2024. [ssyoutube.com](https://ssyoutube.com): Just add "ss" to "youtube.com" on the video and you can download YouTube videos
- 21 Feb 2024. Discussions with Sachin, AMAT
  - Microsoft said Indigo, Air India uses LLM based bookings
  - Meta invested $70bn in GPUs. Sam Altman is investing $7tn!
  - NVIDIA has a price PREMIUM not discount for bulk GPUs!
  - AMD is the next company to watch for
  - Numenta - Subutai Ahmad - deploys AI models on CPUs
  - #TODO Read A Thousand Brains by Subutai Ahmad
  - [Sanjeev Sharma](https://www.linkedin.com/in/sanjeevsharmaiitr/)
    - Swaayatt Robots: Autonomous driving in India
    - Deepeigen: Education
  - [Rohan Shravan](https://www.linkedin.com/in/rohanshravan/), Bangalore.
    - Likes sharing knowledge. Amazing teacher. IIT KGP 2008. Interested in exploring quantum computing
    - Tresa Motors, Inkers App, The School of AI
  - AMAT is working on
    - photon-based computing.
    - science research models. AI for science. Like Google: Deepmind Genome, Microsoft: Metagen
    - quantum: AMAT is actively in into this. Nagapati Banda is driving this
  - John Kelly is predicting a ChatGPT moment in quantum in a few years
- 20 Feb 2024. Adobe express has a forever free [video to GIF converter](https://new.express.adobe.com/tools/convert-to-gif)
- 19 Feb 2024. Edge workspaces let me keep the same tabs open across laptops!
- 19 Feb 2024. [Command line interface guidelines](https://clig.dev/)
- 19 Feb 2024. RAWGraphs has a [custom charts API](https://www.rawgraphs.io/custom-charts) that is worth learning from
- 19 Feb 2024. Python [fastcore](https://fastpages.fast.ai/fastcore/) has decorators like @typedispatch, Self, etc.
- 18 Feb 2024. [wddbfs](https://adamobeng.com/wddbfs-mount-a-sqlite-database-as-a-filesystem/) mounts SQLite as a file system. I had a bit of trouble, maybe with Python package versions.
- 18 Feb 2024. Google is using [LLM powered bug identification](https://security.googleblog.com/2023/08/ai-powered-fuzzing-breaking-bug-hunting.html)
- 18 Feb 2024. [HuggingFace Chat Assistants](https://huggingface.co/chat/assistants) has open source system prompts!!
- 18 Feb 2024. [OpenHermes training dataset](https://huggingface.co/datasets/teknium/OpenHermes-2.5) is available. 1M prompts!
- 18 Feb 2024. Jio has made IPL free. They make money on data and ads. That's Scale!
- 18 Feb 2024. Daniel Dennett [outsources thinking to students](https://behavioralscientist.org/ive-been-thinking-daniel-dennett-what-if-im-wrong/). Reviewing his books.
  - BUT: I don't take feedback. When someone sends a pull requests, I ignore it.
- 17 Feb 2024.Fine tuning makes economic sense only if the input tokens SAVED is twice the output token size on each call.
- 17 Feb 2024. Docker container memory usage on WSL2 `docker stats`
  - frolvlad/alpine-glibc:alpine-3.17: 540KB
  - ubuntu: 1MB (python3: +5MB)
  - nikolaik/python-nodejs:python3.10-nodejs18-bullseye: 1.4MB (python3: +5MB)
  - python:3-alpine: 612KB (python3: +7.5MB)
  - python:3: 500KB (python3: +11.2MB)
  - continuumio/miniconda3: 7.6MB (+6.5MB)
- 17 Feb 2024. Discussion with Vinu Yamunan
  - Databuck by FirstEigen. Autolysis plus monitoring
  - Quality council has the data steward (maintainer of each dataset) coming together with the uses on a weekly basis to understand what quality problems to users are facing. Data owners jaundice at a lower frequency to get an understanding
  - #TODO Automate rules for data quality in our projects and intranet
  - Convert a config rule into business language. Explain SQL. These are good use cases for llm's
  - Graph DBs are powerful for flexible data structures, but query generation needs AI or expertise. Check the Neo4J language cypher
  - Explore storing SAME data in relational DBs AND in graph DBs / document DBs for different use cases
  - Dallas rocketry challenge. Build a rocket that can take an egg to 800 feet exactly and land without breaking it
- 17 Feb 2024. Discussion with Karthik A
  - #TODO Ask IIT students to do internship tasks. Use advent of code is a qualifying criterion
  - Tata motors unionized DB admins for longevity. No one can take their jobs. Hires people who LIKE their jobs
  - Rust gives me typing. It's very efficient. Pola.rs is interesting but Pandas as good enough.
  - Explore alerts from CCTV feeds. Karthik sends email alerts with pictures for:
    - "Is the machine on or off"? for productivity
    - "Are people not wearing helmets?" for safety at Cummins
  - #TODO Integrate with WhatsApp. Use LLMs with function calling for responses
  - Use expiring links (to pictures or content). It increases engagement
  - Check Deno licensing. Is there a commercial clause? #ANS No - it's MIT license
  - Centre or excellence for zero emission tech at IIT. Karthik is part of it
  - Explore auth0. 7000 users are free
  - `toml` is part of the Python 3.11 standard library!
  - If copilot writes code we don't understand we are screwed. Hence expertise matters
- 17 Feb 2024. Discussion with Vikas Kedia
  - #TODO Plan an AMA
  - The mind becomes lazy with financial success. Vikas is treating his podcast as a startup
  - Hire a professional videographer for your content
  - Financial RoI in financial markets is the highest. Programming is high too but FS is even better
  - "Performative power" -- when you're forced to perform, you get better ideas
- 16 Feb 2024. [Observable 2.0 is an open source static site generator for data](https://observablehq.com/blog/observable-2-0)
- 16 Feb 2024. [Python dataclasses](https://docs.python.org/3/library/dataclasses.html)
- 15 Feb 2024. If Appa comes to Singapore even for a week, he will feel better and can boast to his friends. At over 90, it may be better to move Appa to where I am since many of his friends would be no more and shops, doctors, etc can be managed and getting an independent house nearby is not hard.
- 15 Feb 2024. There is an SEZ in Gujarat where Indians can invest like in Mauritius without forex restraint
- 15 Feb 2024. Shubha: Media sites are moving away from Vickrey auctions to first-price auctions for ads. That's because they send the auction price _forward_ to a search engine and the winning second-price value can lose even though the owner is willing to pay more. Second-price auctions don't work unless ALL bidders are in the SAME auction. Ad networks are a hierarchy of auctions!
- 13 Feb 2024. Embeddings in random forest are very effective at classification -- much better than dot product.
- 11 Feb 2024. To deploy apps with OAuth + templating support in a small Docker container, use Caddy
- 11 Feb 2024. Deno has native TypeScript, browser APIs, and compiles to multiple OSs
- 11 Feb 2024. Ruff is a MUCH faster flake8
- 10 Feb 2024. Dockerfile can have `FROM scratch` and you can add specific binaries rather than an entire OS. [via](https://berthub.eu/articles/posts/trifecta-technology/)
- 08 Feb 2024. Visualize the RANK of a token in a generated stream instead of logprob
- 07 Feb 2024. The Knowledge Project. Tomorrow Gayner
  - What I'd like in my obituary: Anand was happiness. A guru. Generous.
  - To get what we seek we must deserve this. Build, measure, learn
  - If you did the same thing daily for 50 years, would it be a great thing? If yes, do it. If not, stop. Do this in daily retrospectives
  - My new role should be productivity through technology innovation. That may mean a CTO role. But be specific otherwise no one will understand it
- 06 Feb 2024. Hidden brain podcast. Us 2.0. Win hearts, then minds
  - When in an interaction, ask yourself. Can I learn and change myself? Can I win their hearts, then mines, so their behavior will change. That identity will change
  - Notice when you get emotionally triggered. That's exactly when you should not get emotionally triggered
  - Try model humility and moral
  - Look for close to people's identities in our conversations. What are things they like? What does it mean for them? Simply ask. With that understanding of identity, it becomes easier to reframe things in a way they will understand
- 06 Feb 2024. Bard can talk to Gmail and Google Drive!
- 04 Feb 2024. #PREDICTION As automation takes over these mainstream activities, people will take over the niches. Since expertise like knowledge is fractal, there will be many more segments of one in the future and it will be easier to automate clusters of similar abilities. Recommenders and brands will become even more important
- 04 Feb 2024. [Stephen Osserman's Observables](https://observablehq.com/@osserman) have some nice notes.
  - [Visualizing partial election results](https://observablehq.com/@osserman/visualizing-partial-election-results)
  - [D3 Force Dilemmas: Data Distortion](https://observablehq.com/@osserman/d3-force-dilemmas-data-distortion)
- 04 Feb 2024. [Sandra Becker's 30 day D3 course](https://observablehq.com/@sandraviz/30_days_d3_dataviz)
- 03 Feb 2024. [Alzhara](https://alzahravfx.com/filmography/) is one of the VFX companies that worked on Leo's hyena scene. Their 3D modeling is incredible.

## Jan 2024

- 31 Jan 2024. Veda Srinivasan.
  - How does Google manage culture?
    - AMA sessions
    - Manager feedback. Entirely anonymous. Avoid taking feedback for teams less than 5
    - Workplace concerns team exists. Put managers on watch
  - Books
    - Mohammad Younus. Three zeroes book. Read about his social business theme
    - Pluriverse. Anti fragile. Aurobindo Vedas.
    - Barry Oshry. Seeing systems. Runs workshops but book is better
    - Raghu Anantanarayana has written about Indian archetypes based on Mahabharatha
    - India that is Bharath. Sai Deepak.
  - Podcasts
    - Listen to Nilesh Oak. Sugreeva's Atlas.
    - Pankaj Tripathi podcast on geography influences acting
  - Areas of focus
    - "I'm an Expert on synthesis and implementation"
    - Intersectionality is another word for complex failures. Also for deep segmentation. Swiss cheese model.
    - Dialogic self theory is about multiple voices in the head. How do we make meaning? Psychological rupture is when cognitive activity is maximum. At any point there are MULTIPLE voices in our heads that are sources of action. We don't listen to them.
    - Epistemology. Language determines thought. like the word productivity. How does appreciation of a rose become productive? Words from other languages may have incredible power. From other cultures.
- 31 Jan 2024. Paul Sloan. Lateral thinking podcasts from multiple sources
  - Deliberately engage with topics randomly.
  - Deliberately engage with random people
  - Read a random book from the library
  - Watch a random film in a different language
  - Consciously where the six thinking hats or look hard for the silent voices in your head and express them
  - Ask children. They tend to think of more creative and childlike solutions
  - He converted a hiring process into a contest
  - Constantly ask yourself. What if every assumption I'm making about this is wrong?
  - Scenario planning is really about this. List a few scenarios. They'd have high impact or high probability. What happens in this scenario? Ideate
- 30 Jan 2024. Hidden brain podcast. Making the most of your mistakes
  - FIX every small mistake. You never know how they might line up in the future
  - You also never know how small little things done well might line up to give you a boost in the future
  - The Toyota cord does not actually stop the production line. It brings a team lead over who quickly diagnoses the problem with you. The responsiveness of the league is a critical factor and so is encouragement
  - That isn't always a single bottleneck to stop that is the case of a simple failure. There can be a series of holes that happen to align perfectly.
  - These are events that lead to catastrophic failures or successes
  - Do as little as possible, waste as little as possible, until you know that the outcome is worthwhile.
  - Figure out what is the value of the outcome and the most important piece of information you need to discover that
  - Do full research before you try and fail. The aim of failure is learning at the least possible cost
- 29 Jan 2024. How I write podcast. 2023 summary
  - Ask for feedback from friends in a specific way.
  - What 20% should I retain no matter what? What 20% should I cut? This allows them to compliment while providing genuine feedback
  - Hire lawyer interns to proofread. They are the ones that find fault the best
  - Be in a segment of one. Where there is zero competition. Something only you can do
  - Don't try to do stuff faster. Try to do stuff you don't want to stop doing
  - Read books older than 50 years
  - Read Michael Collins book on things that sustain
  - Temp service make sure he has some energy to spare. Cuz Riley does the opposite. She waits till she can't stand it anymore and then writes like crazy until she drops dead. The former leads to thoughtful writing. The latter is emotionally powerful. Be able to do that
- 28 Jan 2024. Intel developer cloud has a liberal GPU in the free tier.
- 22 Jan 2024. Dan sends Google documents with essays instead of emails. This allows people to comment on it. But commenting is a culture and not many people do it. Adriano does it a lot and we'll. Dan and Adriano actively converse on GitHub issues
- 16 Jan 2024. #PREDICTION As humans have more conversations with LLMs, they will replace video watching and interactive gaming with conversation based role play. New game genres will evolve
- 15 Jan 2024. Lungs have a Hausdorff dimension of 2.97 -- giving them one of the highest surface area to volume ratio. Brains are 2.8. Sierpinski Pyramid is exactly 2 -- which is weird. To solid-paint twice the size, you need 4 times as much paint.
- 15 Jan 2024. [How I write podcast. Tim Ferriss](https://youtu.be/rXUuStdMeoE)
  - High bars are constraints. I set the strongest constraints against the scarcest resources. Like reputation
  - Being a category of one is more defensible than a competitive advantage
  - Content always beats presentation. When in doubt, push for more interesting content
  - Regular publishing improves thinking
  - To build a habit, do less than you think you can do. That makes it easier to build momentum on the habit and sustain during crunch times
  - There is a lot of mediocrity in the world. If you're doing something (in a winner take all ecosystem), be the best.
  - Top lawyers are exceptional proofreaders. They are able to see what is unclair, and what is redundant, and what has loop holes very quickly.
  - Forcing yourself to cut down from a thousand words to 200 to a paragraph to a sentence takes you through a phase transition where you discover something unexpected
  - The more outrageous the question, the more likely it is to be useful in generating a new perspective
- 14 Jan 2024. Practical AI podcast: AI predictions for
- 14 Jan 2024. AI by API is the norm today and will grow
  - Just having AI is no longer a differentiator
  - AI is part of life, not just work
  - #TODO Explore quickdrop from Stability for Maruti
  - #TODO Explore Codium VS Code plugin and Continue.dev
  - Hybrid systems that combine stats, ML, DL and AI models will grow
  - AGI and AutoGPT resurgence
  - RAG will continue to be a focus
  - GPT4 will be beaten by open source models. Special purpose models beat it already
  - Self hosted and cloud hosted models will grow for security
  - Small language models will grow
  - Productivity will be enhanced rather than replaced
  - Multi modal models will grow
  - Cost efficiency will grow in focus
- 13 Jan 2024. Transparent LED screens will be useful in windshieds to display maps as we drive.
- 13 Jan 2024. Marimo is a reactive alternative to Jupyter notebooks that saves files as pure Python.
- 10 Jan 2024. [Python 3.13 gets a store and copy JIT](https://tonybaloney.github.io/posts/python-gets-a-jit.html)
- 10 Jan 2024. If an npm package adds another package as a dependency with version "\*", target package cannot unpublish **ANY** version! So this is a way of freezing EVERY repo and preventing unpublishing of EVERY version -- an unintentional flaw in the npm design. [via](https://youtu.be/xnPNKRs5TVo)
- 07 Jan 2024. [In-browser playgrounds](https://antonz.org/in-browser-code-playgrounds/) has compiled WASM versions of Python, PHP, SQLite.
- 07 Jan 2024. Happiness Lab podcast. Happiness lessons of the ancients
  - Talking to strangers makes us happy
  - Giving money makes us happy
  - Free time makes us happier than working hard
- 06 Jan 2024. Raman Srinivasan:
  - IITM Profs and MTechs are spinning off deep tech startup.
    - Agnicool is an example. They 3D print rockets with ceramic composites from Germany
    - Sriram Krishnan (Facebook), Balaji Krishnan invested in pre-Series A
  - Govt is de-regulating space tech and geospatial. Talking of de-regulating nuclear.
    - ISRO seems to be focusing on cutting edge while others are doing commercial stuff
    - There are about 100 space tech startups in India
    - You can build your own modular reactor
  - Geospatial AI is a big opportunity
    - Have released a lot of 10m resolution geospatial data almost for free
  - success is about getting NO factor wrong. Failiure just requires one aspect to fail. Brand, business savviness, financial stability, tech superiority, deep pockets, managing Gvt, long-term mindset, etc. - all of these matter. That's what made TCS monopolize the exam business in India.
  - For deepening AI, we need, Talent, Data pipelines, Hardware
  - Next wave is LMMs, not LLMs
  - What's not captured in LLMs is verbal knowledge and tacit knowledge (in people's fingertips). India is rich in this. The road to tacit knowledge has to go through India
    - We can get a welder to train a simulator and pay the welder
    - We can get a storyteller to tell a few stories and train oral LLMs
  - Tacit knowledge will have to cover robotics. Train robots to bring coffee in just 50 demos!
  - "Project delays are within the 'rulebook'. Buyt paying skilled welders for ship building or nuclear pressure boilers needs breaking 100s of rules. Once they get certified, they abscond to Iran or somewhere."
  - TCS Ignite started in 2006 by Ramadorai. Before recession. "There is going to be a talent shortage. Recruit from next rung. Science not engineering graduates. Break HR monopoly and corruption - colleges became placement agencies. Fewer people per college. Across the country. Train them."
    - Tried in 2000. HR refused. Business refused. When Chandra was identified, Ramadorai took it up himself as a challenge.
    - Ramadorai had very precise attention. Sat 7 am calls. "What are you doing?" 2 min call. Enough to energize.
    - Would exchange and ask for brief updates. He reads and responds. You get a decision in a few hours early in the morning. No decision bottleneck
    - He wanted to know ALL the details. Very precise, small, frequent probes on what's happening.
    - E.g. one 6 am, he called. "What are the lectures planned for today?" He expected I would know this. If not, next time I would be prepared.
    - He would call another person and ask the same question. So I updated the others.
    - I've never seen anyone with that bility to ground-truth.
    - He wants 10 birds from 1 stone. Get BSc, but don't comprimize. Get the best 2 per college but a full batch size of 500.
    - We became the biggest training program as a single batch -- with 500 people. He wanted to demonstrate scale.
    - HR and CFO said, 'You recruit first. Then we'll give you money. We don't think it's possible."
    - We had anchor colleges and brought people from other campuses.
    - We did digitized exams. Took big servers to the campus. Fully digitized with full auditability. Plugged the laptops into the college LANs. Kids had never used a mouse. We had to teach them. We said, "Don't worry. These are logical questions, not questions. We'll pay a full salary."
    - We learned that 1 out of 2 didn't even join. Many took up a Masters. They didn't want to join the workforce. Unless they're desperate economically. Even poor parents, if they can afford to support you at home, they do that. It's weird.
    - Every weekend, we visited a few campuses. 71 locations across the country.
      - Found the NSS college in Ottapalam (Kumbakonam of Kerala. Cultural centre.) College had a nice nice Math dept website. I said "Mr Ramadorai, this looks promising." One Sat morning, he called and said, "When are you going to Ottapalayam?"
      - We landed in the college. There was an impromptu communist student strike. We made 38 offers out of 100 who took the exam. Never had such a high conversion. One girl, whose father was a coolie, jad communication issues. Had a colleague talk in Malayalam. She was an amazing success. My colleague Murali made a documentary about her.
    - We started in July. By Dec, we had 500 joinees.
  - No one is doing such a thing now.
    - You have to get dozens of things just right. Compromising on even one kills it.
    - Ramadorain loaded it with multiple objectives. Fresh talent. Low cast. Sustainable.
    - He kept pushing for innovation. I pushed back. But he was persistent. Over time, I came around and we started innovating.
    - We restructured training program around innovation. Like a YCombinator. That unleashed extraordinary energy. Several of the kids are running their own startups. Ramadorai was very supportive of that.
    - The assessment product came out of that.
    - First batch, everyone was very sceptical. We got a lot of pushback. They're dumb. Ethics issues. Communication issues. Lot of prejudice. So we got them to do internal recruitment till they were satisfied. An internal placement market. THEN reputation was set.
    - I told them, always stick to the dress code. One weaver's sone wore a bright yellow polyester T-shirt. I asked him why he didn't stick to the dress code. "Sir, it's my first T-shirt."
    - Ramadorai tracked how many became billable. We were unable to place 70. He said, give them 1 more month training. Then we placed 64 of the 70. He said "Do something about the 6. I want 100% placement." We absorbed them as a teaching assistant. One was a weaver's son. One was a PC's daughter. A mestri's son. A shopkeeper's daughter from North Madras. None could speak English. They learned to code and helped build the exam software, with Srikumar who was a brilliant Java coder. That gave us the confidence that these are good kids, just from the wrong part of town. With a good guide, they're very capable.
  - We bought a bunch of Nintendo Wiis. Kids have to play.
    - He asked for a welding simulator. "Velu the Welder". The kids built it using the Wii.
    - We got the most accomplished welder spend an afternoon at Ignite. He ripped us apart. 4 hrs non-stop. He told us EVERY thing wrong with it. Blasted us.
    - I told Murali, "Let's call it a toy. It's not a simulator. Let kids play." He said, "I want to show that it can be done!"
    - Murali churned out rapid iterations in a frenzy.
    - Ramadorai said, "Deploy it in the field." So we went to all kinds of remote places like Gondiya below Nagpur. Surprisingly cosmopolatan. Junction of EW and NS train lines. We set up welding institutes in each. It was on the cloud. We could track everything.
  - KPK killed the skills. Hard core bureaucrat. His view is colonial.
    - Ignite philosophy is about unleashing energy of people.
    - Colonoial model is about controlling people by keeping them poor. KPK and Chidambaram had that mindset.
    - Ramadorai brought him in as Secy of NSDC. he killed the policies
    - Modi did the first cut by creating a ministry. KPK ensured that it never gew. Like Yes Minister. Made sure nothing moved
    - Had Govt not changed, he would have been Secy Finance. He was seen as Chidambaram's blue eyed boy. People know he was associated with NSE scam. Ramadorai helped by bringing him into skills
    - He is very smart. Knows the IAS machinery in and out. Lives and breathes that. H
    - Ramadorai likes him though. Put him on board of Tata Consumers.
  - NSE Scam. He's part of the cabal with Ajay Shah. Private trading firms could co-locate within NSE and could make a huge amount of money. KPK ran some of this by proxy to fund Congress. But he left no fingerprints. But everyone knows it is him. He was running Chitra Ramakrishnan by proxy. He was the Himalayan Yogi.
  - Ignite continued with unwavering focus. Kept increasing the kind of focus. We had a 99.5% success rate in placements. Just a handful of failures.
  - Ramadorai has written about Ignite in "The TCS Story". My Dad translated it in Tamil. It's not a typical business biography. Worth reading. Should be a mandatory course in MBA courses in India. So many lessons.
    - You have to read it knowing how Mr Ramadorai speaks. What is NOT said is just as important. Ch 5 is the thinnest - on the IPO. It is packed with so much stuff. Unless you know, you won't understand.
    - "Tatas got the Govt to change a tax law to make the IPO meaningful." Behind that, there's a lot. You have to be alert to catch the sentene. He won't brag, or talk about the significance of some of these.
    - Book is packed with dense insights. Unless you ARE LOOKING FOR IT, you'll miss it. Worth reading SEVERAL times. You need a foot-noting.
  - Currently reading Pasquenelli -- Social History of Artificial Intelligence. Eye of the Master. Worth reading. I'm not Marxist by belief but they get some things right. Surprised how vibrant the European left is.
    - "If someone is doing manual work, there is tacit knowledge that automation captures."
  - India doesn't need self-driving cars. But a farmer would like a gaming controller that ploughs his fields while he sits under a tree. Semi-intelligent machines that removes the burden of hard labour in the country.
  - Once a year, for a few weeks, I do manual labour. People are under-nourished. People typically work 5 hours a day. Not enough muscle mass. So use them for what they're good at
  - I've seen the power tools. When Chinese power tools became cheap, the power welding became much more efficient. Everyone has become a monkey with power tools. They charge per inch. They know how to leverage the tech for economic benefit. Just bring in the power tools and rapidly finish and make money. But there are sections that are still poor and haven't made the transition. How can we create pathways for them? How can AI help?
  - Anand: Why not use a gimball. RS: Good idea.
  - Role modern psychologist DW Winnicott on ChatGPT (like Socrates)
    - E.g. You don't need a perfect mother. A good enough mother is better
    - Similarly, why not a "good enough" Bharat mata than a perfect one?
- 07 Jan 2024. Tangi
  - Domain-specific models being beaten by general purpose models is a phase. It will reverse towards domain.
    - AI will potentially help build and understand domain-specific models
  - Models are evolving so rapidly that humans cannot interpret models. We need a process to interpret models!
  - xAI, Responsible AI, Physics-guided or Knowledge-guided models (called grey box models) are therefore a trend
  - CS papers
    - Don't review other papers, certainly not other fields.
    - Disregard measurement errors.
  - When CS papers get applied to climate, manufacturing or biology, we'll worry about
    - Interpretability
    - Domain-specific mechanics. (Introduce that into the training as a constraint.)
      - Many domain experts are using AI to UNDERSTAND their process. Need to explore
    - Uncertainty
  - IB adds context to make learning applicable. But that distracts from the core learning, and if there's a gap it widens
  - Most data science courses teach "Python science", not data science. They teach a bunch of models. They don't teach how even one kind of model e.g. LSTM works.
  - Most coaching programs today teach FAMILIARITY with problems, not critical thinking
  - Most of current education will become redundant thanks to LLMs. For students AND teachers
    - Coding will become irrelevant
    - Cognitive thinking, reasoning, human relations, systems thinking will become more relevant
    - Troubleshooting will become more important. AI is not self-diagnosing. I would hire someone who can figure out something is going wrong, diagnose what's going wrong, and fix it
    - #TODO Hire for troubleshooting ability. Give a Q, an A, and ask them to figure out if it's wrong, why, and fix it
  - All my exams and quizzes are open book, open ChatGPT. Onus is on me to give a problem that forces you to think.
    - #TODO Write a question paper that is ChatGPT proof.
  - Exploring AI could be a ToK subject. "How to interact with an AI?"
    - We need a manual on how to use AI. Like Simon Willison says
    - Content doesn't suffice. You need pedegogy. What to serve you at what time, how, how to assess. Lots of businesses are filling this gap
    - Students get great confidence when a teacher points to online content and says, I"ll tell you WHAT to see" and COMPLEMENTS that in their class
  - "The map is not the territory." Most people confuse sample mean for the actual.
  - #ASK Parameter estimation -> Signal estimation -> State estimation
  - Stats vs DL differ in that
    - There is no notion of a defined "truth". Hence reliability is not measurable
    - Parameters have no value. Hence interpretability is ignored.
  - #TODO Read 2020 National Education Policy. It's quite modern.
    - We need a manual on self-learning too
    - Listening is not learning. You know only if you implement.
    - Levels for students:
      - I can solve it.
      - I can explain why it works.
      - I can find alternatives.
      - I can apply it to a new area, reformulating (requires imagination.)
    - For teachers, you also need:
      - Responsible learning (extra careful about what to teach and how to teach, to exceite them, to teach at THEIR level).
      - Show the universality and connecting to other concepts. E.g. noise reduction with FT is like using water to remove dirt. Transform to water domain, remove dirt, transform back to air domain. It's better than dusting clothes to remove clothes. Washing machine programs are just different models of removing noise in the water domain.
  - Teach people who WANT to learn **AND** who will APPLY it long-term. That's what maximizes impact
    - Grad students are more satisfying that way.
    - Else, it is WASTED effort. (Not that it's a bad thing for the student, but the effort _IS_ wasted for the teacher)
  - Therefore, I believe students should have general engineering first, and let students pick specialization later. Some universitie are doing that.
  - #THINK Students remember my philosophy more than my content. We impart character, not just knowledge.
  - Astrology and horoscopes serve a different function. They provide explainability, not predictive ability. As the world becomes less explainable, the need for astrology will grow.
    - Explainability is about creating STORIES that fits data plausibly. It has nothing to do with data or truth.
    - Explainability and predictive ability and reproducibility are all different. Maybe, Science is about the latter two, less about explainability.
    - Astrology is a model. The map is not the territory. It's an explanatory, not a predictive model.
    - #THINK Therefore, my lessons are just explanations. Stats about experiments are STILL explanations. They are NOT reproducible or predictive. Hence not yet science
  - The meaning of our life is the transformation we undergo in our lives
    - #TODO Read "The Journey of Souls" by Michael Newton. A hypnotherapist
  - #TODO Try regression therapy / hypnosis. Record it and listen to it. Just for fun!
- 07 Jan 2024. Rohini Deshpande
  - Slam book was the Facebook of the 1900s
  - Prepared mind is an extremely powerful tool for learning. Practice prepared mind
  - When women drop out of education or career, that is also a waste from the teacher and system perspective
  - The time for career growth is the same as child bearing time for women. That's not true for men. But child rearing can be done by either. That's not recognised. It's 0K for a man to raise the child and make the home and 0K to treat that as the default
  - Since men are more senior, it's usually logical for them to stay in their jobs. That's a systematic bias. When seniors advise women to step back. they respect it. That widens the barrier. Why not eliminate that situation?
  - Be proud of the working women in the family
  - Stats are just a symptom. They don't explain the cause. (Map is not the territory.) Explanations are what really helps us fix the cause. Hence stories are important.
  - Read Tinker Tailor Soldier Spy
- 07 Jan 2024. RV Athimber health tips:
  - Eat foods with low glycemic index
  - Eliminate free salt completely
- 05 Jan 2024. To persuade someone, align it with their identity. [ChatGPT](https://chat.openai.com/share/8e3da1b0-0acf-4cd3-b764-dbecac98b03c)
- 05 Jan 2024. 5 technologies of interest according to Gartner's latest hype cycle:
  - GitOps
  - [Internal Developer Platform](https://internaldeveloperplatform.org/)
  - Graph Data Science
  - Open Source Program Office
  - Value Stream Management Platforms
- 05 Jan 2024. [Gemini](https://geminiprotocol.net/) is an alternative to the Web. Sort of like Gopher, but recent
- 03 Jan 2024. [SALI](https://www.sali.org/) - Standards Advancement for the Legal Industry - has standards and ontology/taxonomy for legal documents, including patent litigation.
- 03 Jan 2024. Walking new routes habitualizes fighting fear and preferring novelty
- 01 Jan 2024. Dhyeya: Attack on Titan is as good at Death Note
- 01 Jan 2024. Jaidev:
  - Long car drives are a good place to explore new song genres. Try in taxis
  - Same radio channels may have different frequencies across cities. Vividh Bharati is 100.5 FM in Chennai and 106.4 in Delhi
  - Things to explore:
    - Radio for new songs
    - Clubhouse
    - Twitter Spaces
    - Instagram reels
    - YouTube reaction videos (e.g. atheist, Indian songs, etc.)
    - Stand-up comedies (Ricky Gervais, Louis CK, Jordan Peterson)

## Dec 2023

- 31 Dec 2023. Porn artists are at risk because of Gen AI
- 30 Dec 2023. Quantum computing is slow, has low transfer bandwidths, and only prime factorization has an exponentially faster algorithm. [via](https://spectrum.ieee.org/quantum-computing-skeptics)
- 27 Dec 2023. The hidden brain podcast. What would Socrates do? Also Philosophy Bites Podcast: why do philosophers use example. And: the happiness lab: happiness lessons of the ancients
  - How many of our beliefs are truly our own? How many are a product of our environment? Contrast these and identify your true beliefs
  - For every thought and action you have, even tiny ones, ask "Why am I doing that?" Dig deeper because it may not be intrinsic
  - One way to become memorable is to.write stuff others will reproduce for a long time. Plato and Aristotle did that
  - everyone has multiple personality. This is partly because different parts of the brain evolved independently for different functions. System one and system two thinking are just such one broad classification. e.g. We think our train is moving when the nearby train moves because our visual brain is faster than our somatic brain.
  - Good lessons and pitches cater to the rational AND the subconscious. Reason AND story. To activate different parts of the brain. That's why philosophers use examples
  - Philosophy brings change through reason. Revelations: through sudden insight. Rhetoric: through insight.
  - Act as if you already are what you want to become. Aristotle
  - Align your environment (including habits) to your beliefs. It will become easier to act your beliefs then.
  - All virtues are moderation. It's possible to take every virtue to the wrong extreme
  - Some Christians have wristband that reads WWJD. What would Jesus do? Explore yourself a reminder of what would X do. Maybe Benjamin Franklin, Socrates, Feynman, etc
  - People mistake their environment for their feelings. 1970s Experiment: People on a shaky bridge think they love each other. Experiment: people rationalize things irrespective of reality.
  - "The Unexamined Life" is about questioning theories or stories or maps constantly. It's also about questioning our thoughts and emotions constantly. Mindfulness is the VERBAL way of doing this. Meditation is the NON-VERBAL way of paying attention. Both are Processes to remove distraction and increase authenticity.
  - Learning about people is a good way to learn about ourselves. And vice versa.
- 26 Dec 2023. [Spillnot](https://www.youtube.com/watch?v=qEDvmvBbDBk) doesn't spill drinks even when you swing!
- 25 Dec 2023. Things super-intelligences could do that humans can't:
  - Solving complex mathematical problems
  - Advanced scientific discovery (quantum computing, nanotechnology, biotechnology)
  - Ultra-precise predictive modeling in complex systems (climate, economics, social dynamics)
  - Optimizing global systems at high precision (logistics, traffic, energy distribution, resource allocation)
  - Universal translation (unknown languages, animal communication, extraterrestrial signals)
  - Deep medical personalization: individualized medical treatments from genetics, environment, and lifestyle
  - Create new materials: Designing materials or chemicals with specific properties
  - Complex system integration: combining AI, bio tech, nano tech in new ways
  - Philosophical insights: new perspectives or solutions to age-old philosophical dilemmas
  - Space exploration and colonization
  - Predicting natural disasters
  - Customized education at scale
- 25 Dec 2023. Ways of working with them
  - Collaborative problem solving
  - Creative collaboration
  - Decision support
  - Personalized education
  - Establishing ethical and safety protocols
  - Recreational and leisure activities
- 24 Dec 2023. Book to read (again) about how to take a team beyond their abilities even if you're not the expert
  - "Measure What Matters" by John Doerr
  - "High Output Management" by Andy Grove
  - "The Checklist Manifesto" by Atul Gawande
  - "The Lean Startup" by Eric Ries
  - "Creativity, Inc" by Ed Catmull
  - "The Hard Thing About Hard Things" by Ben Horowitz
  - "The Four Disciplines of Execution" by Chris McChesney, Sean Covey, and Jim Huling
- 22 Dec 2023. [Name2Vec](https://github.com/foxcroftjn/CanAI-Name2Vec/) is a potential embedding for names.
- 21 Dec 2023. Google Knowledge Graph ID powers the Knowledge Graph. If it begins with /m/ it's the same as the FreeBase ID. This is now available as WikiData. e.g <https://www.wikidata.org/wiki/Property:P2671>
- 20 Dec 2023. The hidden brain podcast. the mystery of beauty
  - Evolution drove us to beauty as an efficient survival mechanism. Understanding the world is one such mechanism. Hence we enjoy maths and chess
- 17 Dec 2023. Lez Friedman Podcast: Jeff Bezos
  - Build stuff that is is ubiquitous that other people take it for granted. The initial idea needs to be that obvious and easy. Like one click purchase or customer reviews
  - Build stuff that other people can build on. Internet makes startups possible. Infrastructure is about enabling others at scale
  - Decision making approaches: single person decides on two way doors. Deliberate as a team on one way doors
  - Conflict resolution: disagree and COMMIT. NO sniping, I told you so, malicious compliance. Avoid compromise. Avoid decision by attrition (most persistent wins).
  - People are inherently biased towards hierarchy. So the senior most person should speak last
  - We have a happiness bias. Contracted by choosing the unhappier options first
  - The map is not the territory. The metric is not the objective. We need metrics. But make sure you know why
  - See the world through the eyes of the customer. Use your own product. It's living their lives that makes customer obsession real. Jeff Bezos called their own customer care to see how long the actual wait time was. It was much longer than the metric reported
  - How to prioritize. whatever problems customers will still face in 10 years are the big problems. These are worth putting time into because they are stable in time
  - People working on big problems will never get down to the small problems. So have a dedicated team that works only on the paper cuts. It should be a dedicated team
  - We co evolve with our tools. We build tools and then our tools change us. It reprograms our brains
  - Cut out 10 minutes to the beginning of each meeting for people to read the material. They never reread anyway. This makes the meetings more productive
  - Powerpoint is designed for persuasion, not truth seeking. It is also easier for the author than for the reader. Prefer narratives that are focused on finding the truth and are easier for the audience though tougher for the author
- 16 Dec 2023.
  - Grab. Improving last mile delivery in maps. When did people pick up the phone, when should driver be allocated to minimize waiting time, layer on top of OSM.
  - Singapore developers the Sea Lion 7b model
  - Try VLLM with AWQ format. Can do batch inferencing. Needs a good GPU
  - Amex prediction whether they can pay back in 1 year or 18 months. That choice is a business decision. In real time. Precompute individual score and use it as input to another model. Model must be explainable by regulation. Creates decision tree models therefore. Compliance team must agree if I can use a feature. Can't use gender. Age (in US, Canada);- high age is more risk. Can't use edu level in the US.
  - Capture information from camera and use LLMs. Like traffic cameras mapping. Explore GIS from video cameras
  - Grab tracks road closures and road accidents and whether a cycle can go on a road vs a bike vs a car
  - All drivers have a front facing camera
  - Drivers report road accidents by pressing a button
  - Amex prices individual loans when selling to a collection agency
  - #TODO buy a bike head camera!
  - [Playwright](https://playwright.dev/) is a browser-based test framework. Supports recording.
- 13 Dec 2023. Practical AI podcast
  - Advent of Gen AI is going on. Explore
  - add to tools in data science course. Model validation
  - write a book as an open source to github repository. Easier to evolve and easier to get feedback on..
  - Explore utterances as a GitHub commenting platform
  - automatically give credits to contributors who have center pull request that was accepted or an issue that was fixed. This encourages contribution
  - Visit book.premai.io
- 11 Dec 2023. ast-grep is a semgrep alternative that focuses on code refactoring rather than security. Comby is another such tool
- 10 Dec 2023. [Serply](https://serply.io/) is a Google Search API alternative to Google CSE

9 Dec 2023

ComicCon

- Shaved head tattoos. Led me to tattoo stickers. I'm buying one #surprise
- Hijab. Come in multiple colors and materials and shapes and with accessories. There are hijab models and hijab fashion #surprise
- Aging facial signs: marionette lines from corner of mouth downwards, nasolabial folds from side of nose downwards, perioral lines directly above the lips, loss of lip volume, oral commisure droop (lips droop) #surprise
- Cosplay can transform. Every kid was seeing Spiderman AS Spiderman. How does that make Spiderman feel? Try cosplay in real life. Create identities with costumes #surprise
- #MISS boy. Harry Potter look? Thick glasses? Side Shoulder bag with pocket umbrella?
- #MISS lady. Handbag? Dark lipstick?
- Security has an LED stick. Torch plus can poke or move stuff around #surprise
- "If you have undo, you are not creating art. You are SIMULATING art." Have a few different styles of art you know so that you can simulate them
- "If you're curious about everything, you should be an artist. We are more like art scientists"
- Resolume Arena is a projection software. MediaCorp used it #surprise
- Alloy moveable sculpture is a thing. Metal sculptures that you can bend and reshape #surprise
- "Nesting". Its when people make changes to something to make it their own. Like paint a house or add paintings or custimize the desktop
- An animated episode of Bluey is about 9-10K frames. takes 5 people 4 weeks. (Claire Renton, Bluey animation director)
- ComicCon has: Toys, games, figurines, 3d printing, colleges, comic artists, robots, chairs, clothes, books, light sabers, accessories, tablets, posters, keychains, stickers, magnets, glass paintings,

TODOs

- Explore BeyBladeX.
- Draw something with the tablet daily. Or in a sketch book
- Create 3D art. Just for the heck of it. Find software that is cool and play. Explore Blender, Wings 3D, Bforartists, Daz 3D, Houdini, etc.
- Buy plastic cards you can draw with markers on. Create your own oblique strategies and card games #surprise
- NTUC UTAP membership gives 50% off on courses #surprise ($9 per month, up to $500 rebate on courses)
- 3D printing is used by architects and interior designers.
- Join a design community. INTERACT with them regularly.
- Explore OVERLAYS. Transparent stickers like decals. Tattoos. Plu on on top of Lego that looks like tiles. Stickers. Post its. Paint. Glass painting. Markers. Glaze. Acrylic paintings. Lamination. Frames. Clothes! Extrusions? Magnets? What can we do with overlays? What other kinds of overlays are there? #surprise
- Visit State Courts and listen to a hearing. Work out of a courtroom. Place makes a huge difference! #surprise
- Explore design colleges' curriculums. Singapore Polytechnic Media Arts and Design. Raffles College. James Cook Institute
- Start wearing caps? Ear clips? Rudraksha? #surprise
- Try wearing only formals this month?

Hidden Brain podcast. The secret to great teams

- lack of diversity means shared blind spots. Everyone will make the same mistake and therefore support the same wrong move
- red team and blue team practices, case study interviews, these are all great practices
- findings from Team IQ tests
- individual intelligence does not matter
- individual personality does not matter
- team cohesion does not matter. People may feel good about nice teams. People may feel good about productivity teams. But feeling good does not impact productivity
- gender diversity helps. More women than men is the best recipe
- video calls are more disruptive than audio calls. Some people tend to dominate. There is a lack of synchronization between video and audio emotions perhaps because people are distracted
- the social attentiveness of the weakest socially attentive member is an excellent predictor. They tend to drag the team down

8 Dec 2023

- VS Code supports "codeActionsOnSave" that can be `{"source.fixAll": true, "source.organizeImports": true}`

7 Dec 2023

Art works for teachers #podcast. Lateral thinking

- Practicing lateral thinking puzzles is actually a good way of learning lateral thinking. But don't be deductive. Try and guess the answer at one shot
- questioning assumptions helps. For example I questioned if the car the man pushed was real. It was a toy car in Monopoly
- I tend not to develop alternate hypotheses. For example I assumed that the man living on the 30th floor jumped into his balcony. He actually jumped out from the first floor window.
- Confirmation bias is insidious. When was the last time you changed your mind on a major belief?
- Be in uncomfortable places! introduce randomness. Random place. Random channel. Random Wikipedia page. Random word. Random picture. Oblique strategies.
- Humour is a universal good. Be more funny
- magic words to make a person like you. What I really like about you is ...
- Ask people for what you are good at first. THEN ask where to improve. They will open up
- leadership. Only do what only you can do. Very powerful

How to be awesome at your job #podcast. How to think and innovate like a genius with Paul Sloane

- Explore diverse thinking modes
- command and control works for junior people. Guide them on what to do. Socratic questioning works for people with experience. Learn to leverage that
- questioning assumptions helps.
- as we grow older, we adopt the command and control thinking more. Actively questioning ourselves as we grow older is essential

Pranab

- Genius at: Gupta gold coins
- Greeks minted the best coins!
- XRF. XRay Flourescence. High end jewelers have it
- Script paths are different from language paths. Brahmi script evolution - explore.
- Sanjeev Kumar coin collector

Notes

- MySQL has a [natural language search mode](https://dev.mysql.com/doc/refman/8.0/en/fulltext-natural-language.html)

6 Dec 2023

Deep questions #podcast. Essential Tools.

- Get up kanban tool for visual studio code
- Use a daily plan post-it note. Better access than the phone, especially to disengage from phone
- Laminate and frame your systems (which are the same as habits). Changes our psychology
- When ideating features for a new software, never list features. List pain points with existing software. For that, you need an existing software or process first.
- Run your experiments on actual projects. These are effectively retrospectives
- Have a good shutdown routine after work or after activities
- Only learn from the best. In person since subconscious or-specific learning is highly underestimated. Intern, don't learn. Get the EXPERIENCE
- Learn from how Duolingo gamified learning. Watch the founders TED talk

5 Dec 2023

Andy McGinn

- Book: Drive. Atomic Habits
- Movie: Bio-pics of Sylvester Stallone, David Beckham, Arnold Schwarzenegger
- Gadget: Cycling and swimming
- Technology: APIs are revolutionizing banking

Ashwin and Kaviraj

- Book. Cuxin Lu, Three body problem. Look at Ashish Iyer's annual list of books on Facebook. Read Bengali short stories. Discourse on spices. Lessons in Chemistry.
- Arvind Subramanian is in Iron Mountain
- Catch up with Mitesh via Ravi
- What is TISS doing on AI?
- Explore IIHS Bangalore. Land use and land settlement prediction.
- Explore scenario modeling as a habit and as tree of thought
- Scrape traffic data across cities

IIT collaboration

- Support 5 women students from Orissa for example. Mentor them
- Hire from online BSc program
- Run a project collaboratively
- Exec education is under Andrew
- Internships

4 Dec 2023

IITM alumni meet

- Vinod Aachi heads the Singapore chapter
- Sridhar Boovaraghavan in Chennai, Secy IITMAA, Sanskrit enthusiast. Updating alumni database.
- Shiva Kannan. Ex GE. Runs a healthcare startup Fibronostics
- Ashwin Mahalingam runs the sustainability initiative. Explore

Meet alumni in Singapore

- Ravi Gopalan, Abilion
- Bharathi V, Suntory Holdings. CIO CDO FMCG data head
- Yadu Balehosur, Visualytics and CUBOT. We have interacted in 2012
- Sweatha Donkada. Standard Chartered. Global head of engineering and data
- Sreekumar Kottarath. PSA AI analyst.
- Sanath Duraiswamy, CIO Scotiabank
- Ankit Jain, Worldpanel by Kantar

Initiatives

- Research or consultancy projects with students
- Fund an ecosystem initiative you are keen on
- Coordinate with faculty for courses and labs
- Let Kaviraj know when visiting IITM for student interactions about career advice
- Setting up a seperate AI and Data Science department

How to write #podcast. Steven Pressfield

- Every story needs a villain.
- Every story needs a femme fatale. The sea in Moby Dick. The rice fields in Seven Samurai. The desert in Lawrence of Arabia. The unsolved mystery that pulls you in
- it needs an all is lost moment. The low point mid way
- #TODO "when divinity presents itself in front of us, we nail it to a cross." Lost opportunities
- #TODO saying no is about valuing what you do enough. Saying yes means you're not doing anything of value. discover the value in your work
- the chinese have a word for revenge bedtime procrastination full stop its when you don't like your work and come back at bed not sleeping and postpone your sleep
- practice subtraction or inversion. Always exclude things you should do less of
- Momentum is power in the early stages. When you find an obstacle, move around it even if it means losing 9 out of 10 tanks. Blitzkrieg strategy
- Copying practice is a very powerful learning technique. It is underrated
- reviewing your own code, blog, speeches is a highly underutilized way of improving. Having others review it helps even more
- Review writing from the perspective of a single specific person reading it. That perspective helps a lot
- Explore prayer. It has power but I am blind to it

3 Dec 2023

- The `<meter>` element has "low", "high" and "optimum" attributes and can serve as a bullet chart [via](https://css-tricks.com/html5-meter-element/)
- Most LLM paper pages are adapted from [this template](https://github.com/eliahuhorwitz/Academic-project-page-template)
- Big Think #podcast: the psychology of persuasion.
  - Ask for identities not actions. "Be a helper" not "Help me". "Be a citizen", not "vote".
  - Replace fillers with pauses
  - Record yourself and review. It's hard but very effective
- What's your problem #podcast. Using AI for creative work. It is more likely to lead to NEW creative forms than just augment existing ones. Character.ai being an example
- practical AI #podcast. Explore the advent of generative AI hackathon along with Intel
- how I write #podcast. Chamath Palihaitiya
  - Explore Buffet's annual reports
  - naked very clear what is objective and what is subjective. This builds trust and clarity
  - End conclusively. Provide a clear, confident takeaway
  - Text is logical. Voice is emotional. Shift between them based on intent

2 Dec 2023

- What do I spend time on? Sleep. Food. Exercising. Relaxing (TV, books, games). Talking to family. Talking casually to colleagues (eg lunch, mentorship). Learning (web, podcasts). Writing. Pitching. Delivering projects. Email and chat support.
- What these compound is health, relations, wisdom, fame, career, data decisioning (wealth TBD).
- We compound learning by DEEPENING (building on what we know) and CONNECTING (applying learning to another domain).
- We compound health by REPETITION. Good habits that build health by accumulation.
- Look at how Disney monetizes photos, lenses, ride time, hotel perks, stores, merchandise, restaurants. This feels like Product market fit inside a platform!
- Experience managers at Disney check how EVERYTHING is going all the time. Disney tailors ride experience very carefully. Shutting down rides for safety. Changing rides regularly for repeat visitors. Experimenting.

29 Nov 2023

- I _already_ have Paste as Rich Text in VS Code markdown!

28 Nov 2023

- #podcast Todd Herman: Unleashing Your Secret Identity (The Knowledge Project with Shane Parrish)
  - The most common bias is overconfidence.
  - The most common error is not researching before starting.
  - 90% of success is your environment. (The position.) People who coach mentor you are critical. Learn from the best.
  - Hope can be limiting. We hold on to its comfort and don't act. Fear can be limiting.
  - But courage to reach the goal can be overwhelming. Prefer the courage to figure it out
  - The goals our current selves set are limited by our current selves' vision. Be less blind and be open to external and impossible goals
  - Practice is a form of compounding. When we practice despite adversity, we learn how to handle adversity. Same with serendipity.
  - identities are a map to our territory. We get territorial about it and that is called ego!
  - Identities are not set in store. Switching identities helps. To solve hard problems, QUICKLY switch identity and QUICKLY solve them. Micro identity shifts are common.
  - Rituals help change identities. Attire helps too. Even a pair of glasses. Or a hat.
  - Give people a small.ritual.to.tamsform.identiries
- Manik Bhandari of Vulcan.ai: Uses CV to detect oil content in videos of palms. Intel helped find a rugged computer vendor. Found a Chinese camera vendor at 1/10th the price. Live feeds and monitors help leadership get a feel for live ops. Pricing is annual per system in each plant. Since it directly saves cost, high price is not a problem at all. Team of 12 software people - zero attrition. Have an investor. One CTO.
- Manik Bhandari also uses offline accelerometers to evaluate the effectiveness of fertilizer spreading. Client spends $300 mn on fertilizer. Efficiency improvement of 30% on that is huge.

27 Nov 2023

- #podcast William MacAskill: The Science of Doing Good
  - Effective altruism is about measuring outcomes of altruism. What is the impact, what is the gap, and what is the return on investment. Pick High impact, neglected, tractable areas

25 Nov 2023

- At Straive, every PE acquisition replaced CEO + EVERY business leader. You will be replaced in 2026 (or promoted).
- Project Planning is interpolation. Scenario planning is extrapolation. Both require practice (second order thinking, long term games).
  - Take TWO data points to interpolate / extrapolate.
  - For project planning, use current stage & goal to interpolate.
  - For scenario planning, use past & current stage to extrapolate.
- Great interactive introduction to CSS grids. [via](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

24 Nov 2023

- #podcast The Long Game. Ep 271 of Deep Questions
  - Use multi-time-scale planning - aligned across scales. Use compounding. Edge of competence - fail half the time.
  - Knowing you are at edge of competence requires a definition of success or failure upfront. Define and measure it multi scale.

22 Nov 2023

- OpenAI engineering. Give their teams their own repos and infrastructure - it speeds up iteration. Put then in the same room. All teams design engineering and product together
- [Hough Transform](https://en.wikipedia.org/wiki/Hough_transform) identifies whether points are in a straight line

21 Nov 2023

- #podcast Derek Sivers: No Wasted Words podcast
  - Don't write a book. Put ideas out on the Internet and get feedback. Then iterate. TAKEAWAY: Don't write a series of blog posts. Blog a series of book chapters!
  - Share everything you believe. That shares your personality and others can benefit
  - Brian Eno used to slow down his ambient music two times before shipping. That's because when crafting it we get too close and edit it to crisply compared to what the audience needs
  - Real conversation happens when someone laughs in surprise or delight
  - Artists have to pay close attention to detail and look at the world in a different way. Painters look actress far more closely. Stand up comedians look at people in situations far more closely. Picking up such an art changes the way we think
  - Summarize things I learned into book notes as well. Keep book notes active. Derek says it's the best thing he's done
  - Explore Louis CK the stand-up comedian. Explore Jordan Peterson for writing course
  - Musicians practicing must necessarily sound awful. They will be practicing the hard pieces. All practice involves doing the hard things. Practice is analytical. Performance is intuitive
  - Watch the inner game of tennis YouTube video

20 Nov 2023

- #podcast Decoding Five Traits of Successful Engineering Teams
  - Code cycle time: excellent measure of engineering team quality. Measure it. Reduce it
  - Good code reviews
    - Approach code reviews with curiosity, not critique. Learn from the reviews
    - Async collaboration via pull requests that is diverse and detailed
  - Low but not zero turnover.
  - Clear priorities with WHY and WHO to ask
    - What's expected of them
    - How they impacted the organization
    - Whom to ask when in doubt, clear resolution mechanisms
    - LACK OF CLARITY if repeated questions, delayed shipments, or overworked people
  - Team communication
    - All conversations in a public channel.
    - Excellent async multi scale communication is critical for engineering teams
- Parents are a big influence in whether children change jobs. Annamalai stayed in grandmother because of his mother.

19 Nov 2023

- ChatGPT costs 10 cents per 100 LoC. Programmers cost $1,000 per 100 LoC in a day. So ChatGPT is 10,000 times more productive. Our volume of output should reflect that!

18 Nov 2023

- Policy windows open briefly and you need to push through things. Keep materials handy. (That's what committee reports are.) This is how Mr Krishnan pushed through the Bankruptcy Court via MSME (Amit Verma podcast)

11 Nov 2023

- Marie Condo: "I love tidying. So I love a mess." A beautiful way of looking at challenges as opportunity
- Ajit: "Success will give me more autonomy".
- Ajit: "As a business leader, I didn't care if the innovation team gave me anything. So I need to create an expectation."
- [67 weird browser debugging tricks](https://alan.norbauer.com/articles/browser-debugging-tricks) mentions
  - `setTimeout(function() { debugger; }, 5000);` to debug hovers
  - `monitorEvents($0)` monitors all events on $0. `monitorEvents($0, ["control", "key"])` filters events
  - DOM subtree breakpoints
  - Conditional breakpoints
- [Pydantic is all you need](https://youtu.be/yj-wSRJwrrc) drives towards code = data = text!
  - LLM validators as part of normal code flow, as functions, e.g. `check_profanity(text)`
  - Prompt engineering inside the docstring, e.g. "Step by step reasoning". (10:04)
  - Extracting a knowledge graph via a prompt is cool. (14:15)

4 Nov 2023

- Gaurav Vohra on post-exit
  - **How did you respond?** "Very happy. Someone thinks we're worth buying. I felt responsible for team well being. Now we are no longer responsible - whew! I felt burned out."
  - It's been 3 years. My non-compete got over in March. Sarita continues for a while.
  - **What are your plans?** I quit and no plans of doing anything. Chilling.
    - Tired of EdTech.
    - Spending time with kids.
    - Travel. Mountain trips. Cycling. Teaching at Ladakh. Doing all the things I wanted to
    - Meeting people in my apartment complex. People with diverse interests! Connecting via circles of common interests
  - **What did you spend on?** Nothing change immediately post acquisition. Thought of buying and doing something. I bought speakers. No change.
    - Same school. Same house.
    - Bought land near Whitefield. Growing trees and vegetables
    - I'm spending on travel and I enjoy that. Listed all places I want to go to, times of the year, etc. Learning scuba diving
  - You owe it to live a good life
- The best commercializations happen when the user interface / consumption pattern changes. "Does it surprise the user?"
- [Internal Developer Platform](https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/) specs best practices for a developer platform.
- [Data Developer Platform](https://datadeveloperplatform.org/) tries to do the same for data platforms.

3 Nov 2023

- BRE: Train on the question log via RAG. Ask GPT to generate questions. Cost of GPT is far less than bigquery.
- GPT: Suggest alternate schema with pros and cons. Suggest production ready suggestions.
- Khan Academy is doing content translation in Sal's voice
- See MorningContext or TheKen
- GPT: Translate famous foreign books / series into English.
- Can Straive use Google Lens?
- Sagar: Benefits of CI/CD for Power BI: overcome network restrictions, collaboration, versioning. We tested on Jenkins using PowerShell commands to deploy. Sagar and Shweta know how to do this.

2 Nov 2023

- Try developer tools. Phind. Google IDX. Amazon CodeWhisperer.

29 Oct 2023

- [Sweep](https://github.com/sweepai/sweep) Sweep on Gramex and other repos. It creates PRs from issues
- Bloop is a code search engine on ChatGPT. #TODO Try on code.gramener.com
- Creating a prompt library of personalities will help. Find and tune these. Start with use case generator. Systems thinking consultant.
- AutoGPT can be used for group discussions. Create a team of AI with specific roles and prompts, discuss and build something. GPT engineer. Hollywood script. Ad campaign. #TODO Add to your toolkit. Give a talk on it
- [M4T](https://ai.meta.com/blog/seamless-m4t/) does text and audio translations. Explore!
- Hugging face has [language identifiers](https://huggingface.co/models?other=language-identification) and [translators](https://huggingface.co/models?pipeline_tag=translation&sort=trending>).
- [Anyscale guide on building RAG apps](https://www.anyscale.com/blog/a-comprehensive-guide-for-building-rag-based-llm-applications-part-1)
- [Sparsify](https://github.com/neuralmagic/sparsify) quantizes models
- DuckDB and chdb can query Parquet files faster than Pandas!

28 Oct 2023

- AI can build small things. So modularisation and integration STANDARDS will grow with network effects. How can a library expose itself to ChatGPT for others to build on? A doc and API spec standard is critical. Typing is critical. Schema. Query languages. Data descriptions and summaries. Model outputs.
- [How to coach by Adam Grant](https://podcasts.google.com/feed/aHR0cHM6Ly9saXN0ZW5ib3guYXBwL2YvbnVxazB2Zmd0ZWN5/episode/bnVxazB2Zmd0ZWN5OjZWZGdkeGQyWW1t?ep=14). Fantastic 9 min.
- Best leaders are not critics nor cheerleaders. They COACH. That means SEEING their POTENTIAL and ENERGIZING them to that. Share feedback IMMEDIATELY. Prefix "I have high expectations and I believe you can reach them."
- Black Holes may not be information sinks. If we collect all the Hawking radiation over time we might know everything that fell into the black hole (experts think). So information is really conserved in the universe. Also, time and space may not be fundamental. Quantum entanglement May give rise to time and space. That's a current thinking in the quantum theory of gravitation
- [DuckDB data](https://github.com/duckdb/duckdb-data/releases/tag/v1.0) cleverly uses Github releases to publish data!

26 Oct 2023

- Toastmasters Club of Singapore is the best. Sheraton at Scotts Road first 3 mondays of the month. Prepared speeches are only once a month. Large club - 400-500 speakers. Can do extempore every time. You can walk in. $25. Membership is $500/year

24 Oct 2023

- Stories are paths in parameter spaces.
- The person who writes something down first past tremendous power in an organization and community. Note taking is just one form of this

23 Oct 2023

- [Cloudflare Workers AI](https://blog.cloudflare.com/workers-ai/) lets you run GPU serverless. [Cloudflare Workers](https://workers.cloudflare.com/) is like Heroku. Has a strong free tier

21 Oct 2023

- [CRDT - Conflict-Free Replicated Datatypes](https://crdt.tech/) are distributed data structures. There are [good libraries](https://crdt.tech/implementations) for it.

20 Oct 2023

- Always be the person who records Teams meetings. They get edit access -- others don't! [via](https://learn.microsoft.com/en-US/microsoftteams/tmr-meeting-recording-change#permissions-or-role-based-access)

19 Oct 2023

- [That Sound Game](https://thatsoundgame.com/) - Dumb Charades but no hands, and sounds are allowed (not words)

18 Oct 2023

- Wealth can make you insensitive
- Obesity, smoking, suicidal tendencies, depression, happiness, wealth, they are all infectious. Read "Connected"

15 Oct 2023

- Magnus effect. Spinning ball moves due to air drag <https://youtu.be/1n-HMSCDYtM>

13 Oct 2023

- Bowrna: Pick RIGHT project to contribute (active, accepting contribs, welcoming). Teaches DevOps best practices (PR, Git, CI, Issue resolution). Make all discussions public, STRUCTURED.
- [Avoid documentation](https://blog.orsinium.dev/posts/misc/docs/). Use types, contracts, tests + doctests, variable names and auto-generate.
- Communication problems: [Don't ask to ask](https://dontasktoask.com/), [No hello](https://nohello.net/), [XY Problem](https://xyproblem.info/), [How to ask](https://stackoverflow.com/help/how-to-ask), [Smart questions](http://catb.org/~esr/faqs/smart-questions.html).

12 Oct 2023

- [Embedding DECODER](https://colab.research.google.com/drive/1CF5Lr1bxoAFC_IPX5I0azu4X8UDz_zp-?usp=sharing)!

11 Oct 2023

- You can send a message in WhatsApp without adding a contact!
- Airtags can track things. Get one for Android
- "Taylor Swift and Disney make money on experience not content"
- CoT prompt. Follow up prompt.

10 Oct 2023

- When a fair coin is flipped, it lands on the same side 51% of the time because of the physics of flipping a coin. Persi Diaconis theorized this and there is experimental evidence from 300K coin tosses.

7 Oct 2023

- USCS had duplicate customer names. ABC foods with the East Door facing one street, and ABC Foods with the North Door facicing another street. Logistics providers charge per stop. So when delivering to this customer, they got charged twice often. 25% of customers were duplicated.
- "As an evaluator, GPT-4 has been shown to adequately correlate to human judgments (Fu et al., 2023; Liu et al., 2023a), even potentially outperforming crowd-sourced workers on some annotation tasks (Gilardi et al., 2023)".
  - Fu et al: Gptscore: Evaluate as you desire. arXiv preprint arXiv:2302.04166.
  - Liu et al: . Gpteval: Nlg evaluation using gpt-4 with better human alignment. arXiv preprint arXiv:2303.16634.
  - Chatgpt outperforms crowd-workers for text-annotation tasks. arXiv preprint arXiv:2303.15056
- [Dialog explorer](https://leonora.app/a/dialogism?mc_cid=2b119aab53&mc_eid=62bd2d1bbb) is exactly like our Mahabharata. Consider having the topics fixed on the page.
- Sayan. Change in tech stacks gets overwhelming rather than focused on solving problems. Interested in back end than front end. Built a CGPA calculator.
- Improvements. need a good instructor. Stats 2 Andrew and Python Sudarshan Iyengar are the best. Madhavan for PDS and Java. System Commands too Gandham Phanikimar. Arun Rajkumar MLT is universally loved. They are expert teachers. It's fine in TDS. Tutorials need to be good quality. Like MLT and System Commands - video and audio clarity, content clarity, interactive and not monotonous with questioning. It's good to be practical. PEOPLE feel tools are used and not taught. Course is fun and interactive but should be 4 credits given projects. RoE and project questions are about doing stuff not theory and is useful. Maybe introduce a project - taken during or after course. Can take an entire term. Like BDM, MAD.
- PowerToys has some new tools #share
  - Text Extractor (🪟 Shift T) that does OCR. Very useful for screenshot text extraction
  - Mouse without borders can copy files across my laptops!
  - Crop and Lock sounds promising but is dangerous
  - Peek (Ctrl Space in file explorer) previews file
  - Screen Ruler (🪟 Shift M) is a slightly useful ruler. It's hard to use

6 Oct 2023

- LLM.stack has monitoring tools like PromptKey, Promptimize, Portkey, Promptlayer
- LLM stack has evaluation tools. Benchmarks and leaderboards don't help enough
- Explore OpenInstruct,
- advisory topics. How to discover and privatise level in use cases. How to put it into your product. How to optimise cost on LLMs
- Fine tuning is better for auto completion than Q&A. Also requires a LOT of labelled data.
- A chatbot for talking to school or family friends without human intervention
- Google Phone speaks on your behalf
- We can learn from Hackathons. See what people create. Evaluate against a criteria and see what works better. E.g. which RAG model and prompt works best?

5 Oct 2023

- [Dialogism](https://leonora.app/a/dialogism) is similar to my Mahabharatha and is better designed

3 Oct 2023

- humans evolved in high stress environments. They had dangers and had to rely on each other for support. Today, in the absence of danger, humans seek stimulation. That could be gambling addiction, shopping, social likes, whatever. Let's give people danger and stimulation safely
- Status determined survival in the past. They got more food. That's why we are status conscious. Exposure to people with higher status makes us feel bad. There are many dimensions of status and each can make people good or bad.

1 Oct 2023

- [StackOverflow survey - Admired and Desired](https://survey.stackoverflow.co/2023/#technology-admired-and-desired)
  - HTML/CSS/JS/TS is the most popular. (TS is admired.) Followed by Python/SQL. Then Shell, Java, C\* (Rust, Elixir are admired.)
  - PostgreSQL, MySQL / MariaDB, SQLite are the most popular. (PostgreSQL, Redis are admired.) MongoDB, SQL Server, Redis are next. (Datomic, DuckDB are admired.)
  - AWS, Azure, Google Cloud. Then it's Firebase, Cloudflare, Digital Ocean, Heroku, Vercel, Netlify. (Vercel is admired. Heroku is not.)
  - Node.js, React, jQuery, Express, Angular, Next.js, .NET, Vue.js, WordPress. (Svelte, Phoenix are admired.)
  - .NET, NumPy, Pandas, Spring, RabbitMQ, Tensorflow, sklearn, Flutter, Kafka, Pytorch, React Native, OpenCV. (.NET, Huggingface, Tauri are admired)
  - Docker, npm, pip, homebrew, Yarn, webpack, make, Kubernetes, NuGet. (Cargo, Vite, Docker are admired.)
  - VS Code wins. (Neovim is admired.)
  - Jira, Confluence, Markdown, Trello, Notion, Github discussions, Azure Devops, Miro. (Markdown, Linear, Github discussions)
  - Teams, Slack, Zoom, Discord, Google Meet, WhatsApp, Telegram, Skype, Signal, Google Chat are popular. (Discord, Signal, Matrix, Slack are admired.)
  - Windows, MacOS, Ubuntu, Android, WSL, iOS are popular.
  - ChatGPT wins. (Phind, WolframAlpha are admired.)
  - Github Copilot wins. (Whispr AI, AWS CodeWhisperer, Adrenaline are admired.)
  - 83% use AI to write code. 49% to debug. 34% to document. 30% to learn. 24% to test. 14% to plan. 10% to review. 5% to deploy. 4% to collaborate.
    - They believe debugging, documenting, learning wil be impacted most. Followed by testing, planning.

29 Sep 2023

- Meta released AI chatbots with personality. Also AI Studio to create chatbots. For e-commerce customer support mainly. #TODO TRY it
- AMAT has built 11 domain-specific searches on ChatGPT on. See [AMAT](applied-materials-amat.md)
- AMAT users want multi-page search results, not chat-based. Prompt engineering skills are weak
- Red-teaming (adversarial prompting) is ultra-powerful with ChatGPT
- "Our plane is not taking off because the winds are beyond the plane's limits!"
- Dhyeya uses
  - "Can you make this into a paragraph" and provides points.
  - "Can you improve this"
  - "Can you provide questions for ..."

28 Sep 2023

CeV

- Chain: generate multiple responses and ask the LLM to synthesize. Khanmigo generates multiple alternate responses to students questions. Then if the response is different from the students answer, it shares its answer but then ask students to explain their reasoning. That gives the LLM a lot more input
- ChatGPT gives answers. Khanmigo asked what you know, then asks you to try something out. Then shares feedback
- LLMs need memory to learn from content. That's the next big thing
- AutoGPT can write it's own code and heal itself. Existing use cases: sales prospecting, product research articles, prepare podcast, shoe market research. BabyAGI, TeenageAGI etc are evolving

27 Sep 2023

- Sal Khan uses a second AI to monitor whether the AI tutor is going shady
- LLM Blender synthesizes across LLMs
- Having one LLM validate another can be very effective. Or the same LLM (clarification)

26 Sep 2023

- Sal Khan uses ChatGPT to generate questions on a subject.
- RAG is actually quite ineffective. Tends to get to 80% Ok and stops. Improving the docs by restructuring is the #1 step here. Research ensemble retrieval (keyword vs embedding vs query:). Research chunk size. Research base prompts. Metadata filters help a lot - dates and other similarities. Research ensemble special purpose indices. Research re-ranking. Research query transformations - rephrasing, HyDE, sub-queries. Research fins-tuning. Research tools. #share [via](https://towardsdatascience.com/10-ways-to-improve-the-performance-of-retrieval-augmented-generation-systems-5fa2cee7cd5c)

24 Sep 2023

- Chain of thought prompting. Ask LLMs to write a plan. Then execute against it step by step. Or give it a plan and execute step by step. Or a set of examples of executing step by step.
- Water balance. Archimedes didn't measure volume displaced. That's too hard. Galileo feels he balanced the crown against an equal gold weight and immersed the entire balance in water. An impure crown would tilt the balance.

23 Sep 2023

- Windows snipping tool has a video recording option
- a16z believes there is no moat in ai. Incumbents have an advantage. But it's not sustainable in capturing value. Infra has gained the most but new startups building apps in non existent areas will gain a lot
- langchain.
  - Explore function calling for keyword extractions and Colgate use cases.
  - Explore recursive text splitter and the text splitter UI.
  - Explore self query retriever.
  - Explore dosu.
  - Explore langsmith.
  - Explore chains, then agents.
  - Accuracy is usually more important than cost unless you're doing something big like generative agents, or something cheap like text extraction at scale.
- explore dolly dataset from databricks. Understand how they approached it
- Explore prompt compression!
- use llm with prompt templates
- explore autogpt and babygirl and AgentGPT
- workshop on Azure open AI
- Retrieval Augmented Generation can build a "Sanderson-bot"
  - Reality: It answers factual questions well (e.g. "Who does Vin love?" "Elend") but not abstractions/implications ("List the shards mentioned." "None mentioned")
  - #Lesson: We need a different technique for abstractions

17 Sep 2023

- At hotels, Sushmitha had the hotel prepare dal kichdi, quinoa, hot water with lemon in the morning, etc customized for her. Hotel chefs accomodate dietary requirements happily. Ask for the chef and speak to them directly

16 Sep 2023

- HDBSCAN, DBSCAN, OPTICS, BIRCH remove outliers, not clustering noise. We often DON'T want outlier removal, since we want to classify EVERYTHING into a cluster. #share
  - K-Means (and Bisecting K-Means) is scalable
  - Ward hierarchical clustering is non-metric and scalable
  - Spectral clustering, Mean-shift, Affinity propagation, Gaussian Mixture Models are non-scalable
- [Command line tools can be 200x faster than your Hadoop cluster](https://adamdrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html) #share

15 Sep 2023

- 3CosAdd and 3CosMul and LRCos find analogies from vector embeddings #share

13 Sep 2023

- Traditional NLP is better at some things than LLM. Like NER. <https://news.ycombinator.com/item?id=37442574#37443921>

12 Sep 2023

- Always avoid boxplots. Like pie charts, they're sub-pareto #share <https://nightingaledvs.com/ive-stopped-using-box-plots-should-you/>
- Memory is optional. I forgot Lisa was working on the Pepsi analytics project and typed in my notes "... the data I shared with". I was about to type WhatsHerName. It auto-completed with "Lisa".

11 Sep 2023

[What's your Problem Podcast: Creative Technology at Pixar](https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvZTczYzk5OGUtNmU2MC00MzJmLTg2MTAtYWUyMTAxNDBjNWIxLzMyYzI1ZTg1LTE2NjctNGFjYi05OWZkLWFlM2MwMDIxZjMzZS9iZWFjZWY0OC0xOWQyLTRmNTItYjllOC1hZTNjMDAyMWYzNDcvcG9kY2FzdC5yc3M/episode/NmZkOTVkNTAtNzhhMS00ODhlLWIwMjAtYjA0YTAxMjYwNGJk?ep=14)

- Flexibility permits mistakes. At Pixar, in the early stages of graphics, they could configure a light with any properties. That led them to create several unnatural lightings. Now, lights reflect real lights better. Allowing artistes rather than coders to do stuff
- "What are the rules you're following that you're not even aware of?"
- "Hopefully, a lot of that is not tedious anymore. And that opens up different stories in different words." That's how the economics of optimization works.
- External shocks enable impossible changes. Chicago found it politically hard to increase parking prices. They privatized it to Morgan Stanley, losing a lot of flexibility and control (e.g. over Sunday Parking, green walkways) but improved parking and traffic dramatically.
- A GAN approach is a good way to reduce Gen AI hallucination. Ask it to critique itself
- Cost is the least of people's concerns when it comes Gen AI spending

9 Sep 2023

- If you can use open source you can build hardware. [via](https://redeem-tomorrow.com/if-you-can-use-open-source-you-can-build-hardware)
- Beware of stories. They over-simplify and we're biologically wired for them. <https://youtu.be/RoEEDKwzNBw> and <https://www.ian-leslie.com/p/stories-are-bad-for-your-intelligence>

## Aug 2023

- From The Power Law
  - Excel venture partners uses the "prepared mind" approach. Identify tech trends. Map impact on our business and client business. Invest appropriately
  - Postmortems are ultra helpful. Sequoia brought in an outside behavioral scientist to walk through possible cognitive biases. Bringing in an outsider helps reduce blindspota.
  - Skills that matter
    - Grit. Persevere where others give up. Hang in longer for compounded returns
    - Hustle. Enter early and decide quickly for market and mind share capture for network effects
    - Prepared mind. Study trends, make predictions, and leverage network effects
    - Postmortems. Learn from failures. Compounded benefits
    - Listening. Emotional intelligence or empathy to spot needs and lies
- From Srikanth Velamkani @ Fractal
  - Ways of remembering what you learn
    - Use it immediately
    - Teach someone immediately
    - Whiteboarding
  - Focus on bigger accounts. Easier to grow. Focus on few areas
- Apoorva Sharma
  - Sourabh Bhatia's yiriff.ai is using LinkedIn and Discord to get Zimbabwe coders at 1.5 USD per hour.
    - He has no funding so money matters a lot and he is not too concerned about time and quality.
    - Discord for daily checkin status. Proof hub. Pairing people.
    - "do you want to LEARN something? Show a certificate of work?"
    - Run contests in colleges. Examples: optimize this script, fix build errors, recruit from that pool
    - Pretend you don't know anything when you meet him.
  - Broadcom, VMWARE, Cisco are making EVERYTHING subscription based. Even hardware via the software layer on top

## Jun 2023

- Taxi driver: Biotech is a really hot area. Explore what companies like Genetenetech are doing. Who are the other players? ACTION: Explore the market map of biotech and tell a 1 min story
- Taxi driver: There are 30+ self driving car companies in California. Waymo funded by Google may be the best. ACTION: Explore the market map of self driving cars and tell a 1 min story
- Taxi Driver. California provides free housing to homeless. That's cheaper than Medicare. The government has a constant culture of review and improvement
- Mahesh Veerina: We sell $1.5 mn worth of logistics platform to Thermofisher. It runs on their tenant. $100K per month. We connect to their data. Run algorithms that used to be in Excel on Python from a catalogue or allow custom recipes they can code or we can code.
- Kutty Balaji: Apache Iceberg is fast incremental over Parquet is fast static
