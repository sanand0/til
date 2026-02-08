# TDS Jan 2026

## Instrumentation

- [x] Add Ask AI button to each question
- [x] `/score` shows each student's exam-wise score
- Ask AI: Add a data-prompt="longer detailed prompt" that's sent
- [x] Track "Ask AI" clicks
- Track engagement + performance
  - Identify concept gaps
- Project Milestones!
- Content
  - Use a bookmarklet for chatbot verification or Codex Web verification?
  - Add prompt engineering.
  - Add Business communication, e.g. tool evaluation.
  - Drop notebooks
- Project ideas: Teach them to automate boring stuff (real life decisions). Maybe have a portfolio of these as part of the project.
  - Analyse Discourse to find the most helpful students in each course, tricky questions in exams, etc.
  - Research salaries of different companies across professions. Give a proxy for convenience
  - Optimize resumes. Get selected by my resume filter.
  - Find the most helpful LinkedIn connect on your network.
  - Predict interview questions via Glassdoor and Ambitionbox etc.
  - Research companies to join and what jobs they might have to offer.
  - Negotiate for a higher salary.

## Prompt patterns

- What problem does this solve?
- What are its failure modes?
- What should I learn vs. delegate?
- Explain this with an analogy, then show me what happens to the data.
- What would a broken implementation look like?
- What sanity checks did I run?
- How would I validate this if I couldn't run the code?
- What would a skeptical reviewer question?

---

I'd like prompts that students can paste into an AI agent to learn a topic.
I'll give you a topic.
Think about what they REALLY need to know (in the AI age) about it.
Think about what prompts will align with the questions in their mind AND teach them the most of what they need to know.
Then suggest the 3 best prompts to teach this concept/tool/technique.
Write them in the form of a SHORT question or instruction that a student can paste into an AI agent.

Topic: ...

## Proposed curriculum

Owners:

- [ ] Tools: Sujal
- [ ] Deploy: Mayank
- [ ] Source: Hritik, Jivraj

---

- [Jan 2026: Tools in Data Science](README.md)
- [System Requirements](system-requirements.md)
- [Marks Dashboard](marks-dashboard.md)
- [Tools](https://exam.sanand.workers.dev/tds-2026-01-ga1-tools)
  - **AI**
  - [x] [Prompt engineering](prompt-engineering.md)
  - [TDS TA Instructions](tds-ta-instructions.md)
  - [TDS GPT Reviewer](tds-gpt-reviewer.md)
  - [x] [AI coding in the CLI](ai-coding-cli.md)
  - **AI coding**
  - [x] [Vibe coding](vibe-coding.md)
  - [x] [AI coding online](ai-coding-online.md)
  - [x] [AI coding in IDEs](ai-coding-ide.md)
  - [x] AI debugging
  - [x] AI tool evaluation
  - **Core tools**
  - [x] [Editor: VS Code](vscode.md)
  - [x] [Terminals](bash.md)
  - [x] [Python tools: uv](uv.md)
  - [x] [JavaScript tools: npx](npx.md)
  - [Spreadsheet: Excel, Google Sheets](spreadsheets.md)
  - [x] [Database: SQLite](sqlite.md)
  - [x] [Vector databases](vector-databases.md)
  - **Supporting tools**
  - [x] [Browser: DevTools](devtools.md)
  - [AI Terminal Tools: llm](llm.md)
  - [x] [Version Control: Git, GitHub](git.md)
  - [HTTP Requests: Curl, Postman](http-requests)
  - Utilities: PDF, ImageMagick, FFMpeg, ...
  - **Supporting formats**
  - [x] [Unicode](unicode.md)
  - [x] [CSS Selectors](css-selectors.md)
  - [x] [JSON](json.md)
  - [x] [Markdown](markdown.md)
  - [x] [REST APIs](rest-apis.md)
  - [x] [Base 64 Encoding](base64-encoding.md)
- [Deploy](deployment-tools.md)
  - **Hosting services**
  - [Static hosting: GitHub Pages](github-pages.md)
  - 🔴 [Notebooks: Google Colab](colab.md)
  - [Serverless hosting: Vercel](vercel.md)
  - [HuggingFace Spaces](huggingface-spaces.md)
  - [Local LLMs: Ollama](ollama.md)
  - **Deployment techniques**
  - [CORS](cors.md)
  - [Tunneling: ngrok](ngrok.md)
  - [CI/CD: GitHub Actions](github-actions.md)
  - [DevContainers: GitHub Codespaces](github-codespaces.md)
  - [Web Framework: FastAPI](fastapi.md)
- [Source](data-sourcing.md)
  - **AI Scraping**
  - [Function Calling](function-calling.md)
  - [LLM Website Scraping](llm-website-scraping.md)
  - [LLM Video Screen-Scraping](llm-video-screen-scraping.md)
  - AI API crawling (pagination, caching)
  - AI browser scraping (CDP)
  - AI PDF parsing (PDF tools)
  - **Spreadsheet Scraping**
  - 🟡 [Scraping with Excel](scraping-with-excel.md)
  - 🟡 [Scraping with Google Sheets](scraping-with-google-sheets.md)
  - **Advanced Techniques**
  - [Scheduled Scraping with GitHub Actions](scheduled-scraping-with-github-actions.md)
  - 🔴 [Scraping emarketer.com](scraping-emarketer.md)
  - 🔴 [Scraping: Live Sessions](scraping-live-sessions.md)
  - 🔴 [Making Open Data Useful](making-open-data-useful)
- [Wrangle](data-preparation.md)
  - **AI Wrangling**
  - `=AI()` in Google Sheets
  - [LLM Sentiment Analysis](llm-sentiment-analysis.md)
  - [LLM Text Extraction](llm-text-extraction.md)
  - **Excel Preparation**
  - [Data Cleansing in Excel](data-cleansing-in-excel.md)
  - [Data Transformation in Excel](data-transformation-in-excel.md)
  - [Splitting Text in Excel](splitting-text-in-excel.md)
  - [Data Aggregation in Excel](data-aggregation-in-excel.md)
  - **Command Line Tools**
  - [Data Preparation in the Shell](data-preparation-in-the-shell.md)
  - [Data Preparation in the Editor](data-preparation-in-the-editor.md)
  - **Database Tools**
  - [Data Preparation in DuckDB](data-preparation-in-duckdb.md)
  - [Data Transformation with dbt](dbt.md)
  - **Specialized Tools**
  - [Cleaning Data with OpenRefine](cleaning-data-with-openrefine.md)
  - [Parsing JSON](parsing-json.md)
  - **Media Processing**
  - [Transforming Images](transforming-images.md)
  - [Extracting Audio and Transcripts](extracting-audio-and-transcripts.md)
- [Analyze](data-analysis.md)
  - **AI Analysis**
  - [Embeddings](embeddings.md)
  - [Multimodal Embeddings](multimodal-embeddings.md)
  - [Topic modeling](topic-modeling.md)
  - [Vibe Analysis](vibe-analysis.md)
  - **Excel Analysis**
  - [Correlation with Excel](correlation-with-excel.md)
  - [Regression with Excel](regression-with-excel.md)
  - [Forecasting with Excel](forecasting-with-excel.md)
  - [Outlier Detection with Excel](outlier-detection-with-excel.md)
  - **Code Analysis**
  - [Data Analysis with Python](data-analysis-with-python.md)
  - [Data Analysis with SQL](data-analysis-with-sql.md)
  - **Database Analysis**
  - [Data Analysis with Datasette](data-analysis-with-datasette.md)
  - [Data Analysis with DuckDB](data-analysis-with-duckdb.md)
  - **Specialized Analysis**
  - [RAG with the CLI](rag-cli.md)
  - [Hybrid RAG with TypeSense](hybrid-rag-typesense.md)
  - [Geospatial Analysis with Excel](geospatial-analysis-with-excel.md)
  - [Geospatial Analysis with Python](geospatial-analysis-with-python.md)
  - [Geospatial Analysis with QGIS](geospatial-analysis-with-qgis.md)
  - [Network Analysis in Python](network-analysis-in-python.md)
- Test
  - [LLM Evals](llm-evals.md)
  - [Tests in AI coding](ai-coding-tests.md)
- [Present](data-visualization.md)
  - **AI Generation**
  - [Vision Models](vision-models.md)
  - [LLM Image Generation](llm-image-generation.md)
  - [LLM Speech](llm-speech.md)
  - **Presentation Tools**
  - [Data Storytelling](data-storytelling.md)
  - [HTML Slides: RevealJS](revealjs.md)
  - [Markdown Presentations: Marp](marp.md)
  - [Interactive Notebooks: Marimo](marimo.md)
  - **Excel Visualization**
  - [Visualizing Forecasts with Excel](visualizing-forecasts-with-excel.md)
  - **Static Visualization**
  - [RAWgraphs](rawgraphs.md)
  - [Data Visualization with Seaborn](data-visualization-with-seaborn.md)
  - **Animated Visualization**
  - [Visualizing Animated Data with PowerPoint](visualizing-animated-data-with-powerpoint.md)
  - [Visualizing Animated Data with Flourish](visualizing-animated-data-with-flourish.md)
  - **Network Visualization**
  - [Visualizing Network Data with Kumu](visualizing-network-data-with-kumu.md)
  - [Actor Network Visualization](actor-network-visualization.md)
  - **AI Visualization**
  - [Data Visualization with ChatGPT](data-visualization-with-chatgpt.md)
  - [Data Storytelling with LLMs](data-storytelling-with-llms.md)
- Ops
  - [Images: Compression](image-compression.md)
  - [Authentication: Google Auth](google-auth.md)
  - [Containers: Docker, Podman](docker.md)
- Drop
  - [3. AI Coding](ai-coding.md)
    - [Code context engineering](ai-coding-context.md)
    - [AI coding strategies](ai-coding-strategies.md)
    - [AI coding Tools](ai-coding-tools.md)
  - [4. Large Language Models](large-language-models.md)
    - [LLM Agents](llm-agents.md)
    - [Pydantic AI](pydantic-ai.md)
  - [Live sessions](live-sessions.md)

## Ideas

Random ideas for the TDS Jan 2026 course iteration, collected Dec 2025.

- TDS. https://chatgpt.com/c/693a9ab6-2cb8-8330-9327-97c890be0e65
  - Add Instructor insight pages (on teamwork, localizing data, misconceptions about storytelling) are basically meta-pedagogy docs you could adapt as pre-reads for TAs or co-instructors.
  - Assignments force students to build a small dataset from their own campus lives (e.g. drinking fountains, sunny days) plus write full documentation and reflections on what that reveals.
  - “Data visceralization”: students must invent a physical or otherwise visceral representation of their data – very stealable for geospatial, networks, or RAG explanations.
  - debugging/profiling → metaprogramming → security
  - Test with bash in browser!
  - Rewrite course in your style and update
  - Course synchronized with a live conference: students attend / intersect with the Cooperative AI Conference, with conference participants appearing as guest speakers. That’s a powerful pattern for you: run a TDS “conference-shadow” module keyed to PyCon, data science meetups, or your own AI clinics.
  - Share prompts rather than content. Suggest styles to write, points to learn, questions or alternative tools to evaluate and compare, etc. E.g. When would I use Cloudflare and not AWS? Which is easier to learn?
- TDS Strand. https://chatgpt.com/c/683bfefd-7100-800c-95e4-0780b3f4c2f5
  - Teach intuition via GAs.
  - ⭐ The GAs are your blog and podcast and video!! Connect theory to real-world applications from day one. Live code solution scaffolding! Embed the question in AV!
  - Strang "acts like a student himself encountering it for the first time." Add a Simplicio style FAQ to each question! Concrete mathematics style asides. Share failure stories and bloopers.
  - Use constant, low-stakes questioning to keep attention. Click to reveal answer to non evaluated, simple, questions. Use xkcd style titles
  - Add a termwise changelog at the top of each README.
  - Write JS code to draw histogram. LLM vision verification.
  - Code understanding from a public repo. Find the line that does X.
  - Win board game.
  - You have the answer to another student's question: email SHA. Another email SHA has yours.
  - ⭐ TDS. Run playwright script in students machine. Test their personalized app. Crypto secure.
  - Incorporate logging & observability in the curriculum.
  - Incorporate robustness, reliability, try except, etc.
- TDS Jan 2026 ideas, Dec 2025
  - Convince a virtual agent to give you extra marks.
  - Have students create content. Most valuable addition gets marks.
  - ⭐ LLM continuous evaluation of the niceness of Discourse posts - social policing score. Helpfulness, etc.
  - Bootcamp: Basic Linux command, FastApi + httpx, Git, Docker/Podman, Basic App HuggingFace Deployment
- Bonus Mark: Get a PR solving an existing issue accepted by any open source data science repo with 1,000+ stars?
