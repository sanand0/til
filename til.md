# Things I learned

## Feb 2025

- 01 Feb 2025. You can add any content at the end of a PDF file. It's ignored. It's an interesting way to send additional information (or just blow up the file size if you don't like them.)
- 01 Feb 2025. [JavaScript introduces a `Temporal` object](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/) that will replace the `Date` object.

## Jan 2025

- 26 Jan 2025. The cost of a cream biscuit packat in India has fallen about 25 _times_, adjusted for inflation, between 1981 - 2024. How do I know this?
  - [In 1981, a cream biscuit packet cost Rs 25](https://youtube.com/clip/UgkxCF90vppUV01qz0Wila-9meADPord26kc?si=3LLQ5fgRzwG_wUO-)
  - [In 2025, it's available for Rs 21](https://www.amazon.in/Sunfeast-Dark-Fantasy-Bourbon-120g/dp/B0BSX9N69D/)
  - [India Inflation Calculator](https://www.in2013dollars.com/india/inflation/1981?amount=25) - a rare inflation calculator with annual inflation rates baked in - shows that Rs 25 in 1981 is equivalent to Rs 540 in 2024. That's about 25 times more than the Rs 21 it costs today.
- 26 Jan 2025. [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/) deconstructs a piece of JS that creates a tiny WebAssembly calculator. It's a great walk-through of JavaScript compression tricks and how WebAssembly works. [Simon Willison](https://simonwillison.net/2025/Jan/25/a-webassembly-compiler-that-fits-in-a-tweet/#atom-everything)
- 26 Jan 2025. Brandon Sanderson has a [series of YouTube videos](https://www.youtube.com/watch?v=-6HOdHEeosc) where he teaches a course on magic systems.
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
- 05 Jan 2025. There is little reason to use Redis. There are several clones like [Microsoft's Garnet](https://microsoft.github.io/garnet/) or [DragonFly](https://www.dragonflydb.io/) (only Linux) that are better. [Databases in 2024: A Year in Review
  ](https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html)
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
  > In the face of disruptive technologies, moats created by closed source are temporary. Even OpenAI’s closed source approach can’t prevent others from catching up. So we anchor our value in our team — our colleagues grow through this process, accumulate know-how, and form an organization and culture capable of innovation. That’s our moat.
  >
  > Open source, publishing papers, in fact, do not cost us anything. For technical talent, having others follow your innovation gives a great sense of accomplishment. In fact, open source is more of a cultural behavior than a commercial one, and contributing to it earns us respect. There is also a cultural attraction for a company to do this.
  >
  > Why is Silicon Valley so innovative? Because they dare to do things. When ChatGPT came out, the tech community in China lacked confidence in frontier innovation. From investors to big tech, they all thought that the gap was too big and opted to focus on applications instead. But innovation starts with confidence, which we often see more from young people.
- 04 Jan 2025. [mitmproxy](https://mitmproxy.org/) is an open source tool to intercept, modify, and replay HTTP requests. An alternative to [Charles](https://www.charlesproxy.com/), [Fiddler](https://www.telerik.com/fiddler), and partly [WireShark](https://www.wireshark.org/). [Guide](https://earthly.dev/blog/mitmproxy/). Like the others, it requires installing a trusted root certificate on your machine.
  - [mitmproxy2swagger](https://github.com/alufers/mitmproxy2swagger) digs through the mitmproxy flows and generates an OpenAPI schema. A clever idea to reverse-engineer APIs.
- 03 Jan 2025. [Matomo](https://matomo.org/), [PostHog](https://posthog.com/), [Umami](https://umami.is/) and [Plausible](https://plausible.io/) are open source web analytics tools (like Google Analytics).
- 03 Jan 2025. [Redash](https://redash.io/) and [Metabase](https://www.metabase.com/) are new open source data visualization tools sitting alongside [Grafana](https://grafana.com/) and [Apache Superset](https://superset.apache.org/).
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

  ... which and then compressed it (via [svgomg](https://svgomg.net/)) into a data URL included like this:

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
- 14 Nov 2024. Use a standardized password strategy, e.g. use the month like GramNov2024 (via Namit)
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

# Jul 2024

- 31 Jul 2024. Interest Turing complete languages:
  - [find + mkdir](https://ogiekako.vercel.app/blog/find_mkdir_tc), maybe
  - sed and awk
  - Minecraft's Redstone Circuits
  - Conway's Game of Life
  - [Cellular Automata Rule 110](https://conwaylife.com/wiki/OCA:Rule_110)
  - Magic: The Gathering
  - SQL
  - Excel
- 28 Jul 2024. [Rev.ai](https://rev.ai/) does a good job of diarization. Cost: 2 cents per minute.
- 22 Jul 2024. [Awesome PaaS](https://github.com/debarshibasak/awesome-paas) lists self-hosted deployment platforms. [Piku](https://github.com/piku/piku) - similar to [Dokku](https://dokku.com/) -- is promising.
- 15 Jul 2024. [Xata](https://xata.io/docs/rest-api) offers a free PostgreSQL tier with REST API
- 14 Jul 2024. Mamba now uses mambaforge as the default installation, i.e. conda-forge is the default and only channel!
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

# May 2024

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

# Apr 2024

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

# Mar 2024

- 31 Mar 2024. How I write podcast. Paul Graham essays
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
- 15 Jan 2024. How I write podcast. Tim Ferriss
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
- #todo "when divinity presents itself in front of us, we nail it to a cross." Lost opportunities
- #Todo saying no is about valuing what you do enough. Saying yes means you're not doing anything of value. discover the value in your work
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
- Big Think #Podcast: the psychology of persuasion.
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

- #PODCAST Todd Herman: Unleashing Your Secret Identity (The Knowledge Project with Shane Parrish)
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

- #PODCAST William MacAskill: The Science of Doing Good
  - Effective altruism is about measuring outcomes of altruism. What is the impact, what is the gap, and what is the return on investment. Pick High impact, neglected, tractable areas

25 Nov 2023

- At Straive, every PE acquisition replaced CEO + EVERY business leader. You will be replaced in 2026 (or promoted).
- Project Planning is interpolation. Scenario planning is extrapolation. Both require practice (second order thinking, long term games).
  - Take TWO data points to interpolate / extrapolate.
  - For project planning, use current stage & goal to interpolate.
  - For scenario planning, use past & current stage to extrapolate.
- Great interactive introduction to CSS grids. [via](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

24 Nov 2023

- #PODCAST The Long Game. Ep 271 of Deep Questions
  - Use multi-time-scale planning - aligned across scales. Use compounding. Edge of competence - fail half the time.
  - Knowing you are at edge of competence requires a definition of success or failure upfront. Define and measure it multi scale.

22 Nov 2023

- OpenAI engineering. Give their teams their own repos and infrastructure - it speeds up iteration. Put then in the same room. All teams design engineering and product together
- [Hough Transform](https://en.wikipedia.org/wiki/Hough_transform) identifies whether points are in a straight line

21 Nov 2023

- #PODCAST Derek Sivers: No Wasted Words podcast
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

- #PODCAST Decoding Five Traits of Successful Engineering Teams
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
