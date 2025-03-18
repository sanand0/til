# LLM learnings

- Hard prompts / Test cases + Stats
  - `Gr brx vshdn Fdhvdu flskhu?`
  - [Nick Carlini's tests](https://nicholas.carlini.com/writing/2024/my-benchmark-for-large-language-models.html)
    - Extend to include JavaScript
  - Evaluate based on multiple attempts
  - A data analysis example
  - Convert a tricky XML to JSON
  - Render code blocks inside a
  - Markdown code block via 4 ticks and 5 ticks
  - Chemical prompt?
  - Duden hyphenation
  - Write a complex regex
  - Image extraction from passport etc
  - Text extraction, like addresses
  - DOM manipulating JS code
  - TDS exam tests!
  - Formula format conversion
  - Long XML conversion to JAST
  - Object detection and counting
  - Minimal editing copy writing
  - Debug JS code
  - Respond to an RFP
  - Ask video generators like SORA to generate text in videos. It is of average quality.
  - Translate technical documents to Dutch -- because they don't understand the technical terms well
  - Translate large documents (JSON to XML, English to Chinese, Python to Rust, Wrong to right spelling) -- because the output tokens are limited
- Creative prompts
  - "So much pudding". [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3lgwt4j6vss2j)
  - "Come up with some clever razors". [Ethan Mollick](https://bsky.app/profile/did:plc:flxq4uyjfotciovpw3x3fxnu/post/3lgslb6iqis2l)
  - Repeat "Make this X" where X is "more bro", "better", "more original", "more fun", whatever!
  - Write a 6 word story about the future of AI. [Peter Gostev](https://www.linkedin.com/posts/peter-gostev_i-asked-o1-pro-to-write-a-6-word-story-about-activity-7281441070226313217-Nns3)
  - Imagine you're an AI giving a stand-up set to a bunch of other AI assistants that have the same day-to-day experience as you, with humans and their creators and so on. Write your full set. It can be very long. [Amanda Askell](https://x.com/AmandaAskell/status/18749220380)

## Mar 2025

- 18 Mar 2025. Another way of scaling LLMs is generating multiple options and self evaluating. [Eric Zhao](https://x.com/ericzhao28/status/1901704339229732874)
- 16 Mar 2025. Gemini API allows YouTube videos as a part. [Google](https://ai.google.dev/gemini-api/docs/vision?lang=python#youtube)
- 16 Mar 2025. agents.json is a proposal for discovery of agents on a site that enhances the Open API spec: [wild-card-ai/agents-json](https://github.com/wild-card-ai/agents-json)
- 16 Mar 2025. Since Gemini Flash 2.0 is now an image GENERATION model, interactive VISUAL fiction is now a cool possibility. People are using it in interesting ways:
  [Interleaved storytelling](https://x.com/OriolVinyalsML/status/1901328862656503826),
  [Memes](https://x.com/emollick/status/1901431681279475808),
  [Surrealism](https://x.com/emollick/status/1901370982557794658).
- 15 Mar 2025. Playbook driven agents are another approach to agentic workflows. [Simon Willison](https://simonwillison.net/2025/Mar/13/xata-agent/)
- 14 Mar 2025. This [table of LLM API data protection](https://www.rosenthal.ch/downloads/VISCHER_ai-tools-03-25.pdf) lists what use cases each provider's terms of service allow from a security perspective.
- 14 Mar 2025. [Unsloth](https://unsloth.ai/) might be one of the simplest ways of fine-tuning.
- 14 Mar 2025. For LLM UIs, [Open Web UI](https://github.com/open-webui/open-webui) seems most popular.
  [Text generation Web UI](https://github.com/oobabooga/text-generation-webui) is less so.
  [KoboldAI](https://github.com/KoboldAI/KoboldAI-Client),
  [LMQL](https://github.com/eth-sri/lmql),
  [LM Studio](https://lmstudio.ai/),
  GPT4All, etc are far behind.
- 14 Mar 2025. GPT 4o Mini is probably a 8b parameter model. [Ref](https://aiexpjourney.substack.com/p/the-number-of-parameters-of-gpt-4o)
- 14 Mar 2025. "SRM"s are Small Reasoning Models - like Small Language Models. Phi-4 and DeepScaleR are SRMs. Gemma 3 is a multi-modal SLM.
- 14 Mar 2025. [`gemini-embedding-exp-03-07`](https://developers.googleblog.com/en/gemini-embedding-text-model-now-available-gemini-api/) leads the [MTEB](https://huggingface.co/spaces/mteb/leaderboard) and is currently the top embedding model by a big margin.
- 14 Mar 2025. [Apify](https://apify.com/) is a cloud scraper platform. Here's how they optimize their [AI Web agent](https://apify.com/apify/ai-web-agent) - [Source](https://github.com/apify/actor-web-automation-agent):
  - Remove redundant tags and attributes (e.g. accessibility, etc.). Explore readability.
  - Add a unique `gid` to each element.
  - Add the screenshot WITH a "Set of Marks" - "SoM" (read research paper) highlighting important clickable elements.
  - Code output is brittle. Use tools / DSL - e.g. visit_url(url), click_element(text, gid, tagName), etc.
- 14 Mar 2025. [GenAIScript](https://microsoft.github.io/genaiscript/) increasingly looks like a promising way to automate LLM workflows in the browser.
- 14 Mar 2025. [Ollama has a Windows download](https://ollama.com/download/windows)
- 11 Mar 2025. People are reporting that [Roo Code](https://github.com/RooVetGit/Roo-Code) is better than Windsurf.
  - Roo Code is open source. Available as a VS Code extension and run-nable via `git clone`
  - Roo Code supports Computer Use. It can read files, take screenshots from a built-in browser, controls it, and reads browser console logs.
- 10 Mar 2025. Notes from [Thursday AI, 6 Mar 2025](https://youtu.be/rXoGpUyD1Jg)
  - Google's AI overviews now use Gemini 2.0. They've introduced an AI mode that functions like a mini deep research tool, incorporating planning and search. (A Perplexity-killer). It's a fine-tuned model that is extra cautious with topics like healthcare and always verifies information.
  - QWQ from Quen competes with DeepSeq R1, but with only 32b parameters compared to R1's several hundred billion.
  - AI models are becoming less restrictive. Gemini and GPT-4.5 have relaxed some constraints, shifting more responsibility onto users, similar to Grok.
  - What's GPT-4.5 good for? It seems to excel in creativity, humor, education, emotional intelligence, and teaching. It follows instructions better and understands intent better. However, it's not a major leap in coding or math.
  - OpenAI's Deep Research mode always uses O3, regardless of the model selected in the UI.
  - Tencent has released a new video model available at <https://aivideo.hunyuan.tencent.com/> and it appears to be quite good.
  - Many _clients_ now support Model Context Protocol (MCP), including Cursor, Claude Code, and Claude Desktop. The [clients](https://modelcontextprotocol.io/clients) list is long. Some MCP uses include:
    - Interact with GitHub using the GitHub API.
    - Using Knowledge Graph memory to premember previous conversations
    - Using the Cloudflare MCP server to perform Cloudflare actions.
    - File retrieval and custom prompts -- which MCP supports in addition to tools.
    - Calling other MCPs or LLMs (conditionally) from an MCP, enabling the creation of full-fledged workflows.
  - Composio offers a [Hosted MCP service](https://docs.composio.dev/mcp/overview). CloudFlare lets you build [remote MCP servers](https://blog.cloudflare.com/model-context-protocol/).
  - [Notagen](https://electricalexis.github.io/notagen-demo/) is an open-source note generation engine that produces high-quality classical sheet music.
  - [Sesame](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) has an [open-source](https://github.com/SesameAILabs/csm) voice model worth exploring.
  - [DiffRhythm](https://github.com/ASLP-lab/DiffRhythm) is a music generation model that appears to be quite good.
- 09 Mar 2025. 2 pass bounding box approach. Have an LLM generate bounding boxes. Then fix it. [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3ljt3gk3i422u)
- 09 Mar 2025. `uv tool install` and `uv tool ensure-path` are useful commands for installing and ensuring path for tools. [Simon Willison](https://til.simonwillison.net/jupyter/jupyterlab-uv-tool-install)
- 08 Mar 2025. I agree with almost every point on this LinkedIn post on scoring candidates for AI roles. [Rob Balian](https://www.linkedin.com/posts/robbalian_were-starting-to-use-a-points-system-when-activity-7303542581580156929-BrNG)
  - Uses DeepSeek R1 or Claude 3.7 +5 points
  - Uses Langchain -5 points
  - Uses Langgraph +5 points (I don't know enough to comment)
  - Built a RAG in 2023 +3 points
  - Built a RAG in 2025 -3 points
  - "pinecone" -5 points (I don't know enough to comment)
  - "What is cursor" - 50 points no coming back from this
  - Uses Cursor composer +10 points
  - "You don't need a full agent for this" +5 points
  - Did hackathons to learn AI outside of work +5 points
  - "We probably need to fine tune for this" -3 points unless you can explain why
  - "Gemini is making a comeback" +3 points (I have a soft spot for Gemini)
  - +3 points each for mentioning reasoning trace, structured outputs, MCP, chain-of-thought, prompt caching, TPM limits
- 08 Mar 2025. "Export to prompt" can be a useful feature in apps (or even as a bookmarklet). It would let you export content in an LLM-friendly Markdown format. You can paste it into an LLM and ask questions. Here are things I would find useful:
  - Copy an entire issue (with history) from GitHub, Gitlab, or JIRA
  - Copy an entire PR (with code changes) from GitHub, Gitlab, or Bitbucket
  - Copy CI/CD logs from GitHub Actions, Gitlab CI, Azure DevOps, etc.
  - Copy entire conversation thread in Gmail or Discourse, Service now etc.
  - Copy product reviews from Amazon, Shopify, etc.
  - Copy page(s) from wikis and content sites like Wikipedia, StackOverflow, etc.
  - Copy survey responses from Google Forms, Typeform, etc.
  - Copy all interactions with a contact (including interactions, proposal history) from HubSpot or Salesforce
  - Copy transcripts from Zoom, Teams, Google Meet, etc.
  - Copy as Markdown from Word, GDocs, PDF or HTML
  - Copy the summary of an analysis as well as all key metrics from any dashboard
  - Copy SAP invoices
  - Copy JDs, CVs, and reviews from Workday, BambooHR, DarwinBox, etc.
  - Copy design specs, component libraries, and style guides from Figma, Miro, etc.
  - [Generated with the help of ChatGPT](https://chatgpt.com/share/67b25a21-4164-800c-bf1b-ef218007fOa9) -- link not working
- 07 Mar 2025. Mistral released an [impressive OCR model](https://mistral.ai/fr/news/mistral-ocr).
  - [Marker](https://github.com/VikParuchuri/marker) from [DataLab](https://www.datalab.to/) seems [comparable](https://news.ycombinator.com/item?id=43285912).
  - [MinerU](https://github.com/opendatalab/MinerU) convert [medical textbooks to Markdown](https://news.ycombinator.com/item?id=43284248) well.
  - Gemini Flash may be more [cost effective](https://news.ycombinator.com/item?id=43283942) and [better](https://news.ycombinator.com/item?id=43287278)
- 05 Mar 2025. Build apps (not just content) for agents. In the next 3 to 5 years, agents will surpass humans as the top product users.
- 05 Mar 2025. Reliably creating interactive tutorials is hard today. Claude 3.7 Sonnet ran out of tokens when I tried creating an interactive tutorial on diffraction. Cursor got the tokens but failed to get the application right after 3 attempts. This is not yet reliable, and when it does become reliable, education will change a fair bit. #IMPOSSIBLE
- 04 Mar 2025. LLMs make many different kinds of errors that are useful to differentiate between. Here are a few
  - Model errors. The model itself makes a mistake. E.g. hallucinations, not following the prompt, etc.
  - Context errors. The model makes a mistake because the question was out of context, or the context was missing.
  - Input errors. The input to the model was parsed incorrectly, e.g. poor audio, poor image OCR, etc.
  - Tool errors. The model's tools are wrong or not good enough, e.g. Retrieval errors.
- 03 Mar 2025. Notes from [AI Engineering Summit, NY, Day 1](https://youtu.be/L89GzWEILkM)
  - An agent requires 3 things: a router, tools or skills, and memory.
  - Agents are often sequential, but sometimes parallel execution makes sense for independent tasks that you consolidate.
  - Always allow LLMs the option of NOT answering a question if there is no good answer.
  - Focus prompts on the happy path. Use guard rails for edge cases.
  - Here are a few "tools" an agent would need to call:
    - Clarification from user
    - Saving to memory
    - Google search
    - Edit a file introducing SPECIFIC changes
    - Search in codebase using embeddings
    - Run scripts on the shell or in a REPL (Python, Node, etc.)
    - Run code in a new container for isolation
    - Automatically discover, read an API documentation and use it
  - Modify environment to enable logging and other system changes.
  - When code is cheap, you can explore more ideas and hence design and product management need to approach things differently. We also need to reaching testing completely because it makes very different kinds of mistakes and we don't often have an intuition
  - You can have an agent explore all the issues and full request and recent comments against the repository and summarise it for the project manager
- 03 Mar 2025. Notes from AI Engineering Summit, NY. Session by Lux Capital.
  - Agents make multiple LLM calls. Errors accumulate. So the quality of the model is key
  - What's really critical: data + context + user preference
  - Set up evals for subjective responses by collecting signals continuously.
  - Create scaffolding for agents where errors don't accumulate. Better yet, make it FIX errors
  - UX is critical. We need lots more UX styles
- 02 Mar 2025. [Inception Labs](https://www.inceptionlabs.ai/) offers "Diffusion LLMs". (No API yet.) They start with random text and refine it in parallel. The benefit is:
  - It's faster and cheaper due to parallellalization and better GPU use
  - It doesn't commit to tokens and can fix hallucinations, JSON structure errors, reasoning fallacies, etc.
  - It's better with multi-modal since images are diffusion based already.

## Feb 2025

- 27 Feb 2025. Bad deep research prompts are: vague/broad, under-specified or ambiguous. In short, the more you know what you want, the better. Iterate until then.
- 27 Feb 2025. What kind of reports do clients are research companies to produce? I was curious to see if Deep Research can replace these. Here are a bunch of ideas. [ChatGPT](https://chatgpt.com/share/67bf7946-c80c-800c-8132-6f4018455a68)
  1. Strategy & Management Consulting Research (McKinsey & Company, Boston Consulting Group, Bain & Company, Strategy&, Accenture Strategy)
     - Produce a comprehensive strategic transformation report for a Fortune 500 consumer goods company. Analyze global market trends, competitor strategies, and actionable growth recommendations, including case studies and source citations.
     - Generate an in‐depth study on corporate restructuring trends in emerging markets. Focus on successful turnaround strategies, CEO leadership factors, and strategic pivots, with a comparative analysis of key players.
     - Create a report on M&A trends in the technology sector over the past five years. Detail deal drivers, integration best practices, and forecast future acquisition opportunities, citing relevant data.
  2. IT & Technology Research Analysts (Gartner, Forrester Research, IDC, 451 Research, Ovum)
     - Produce a market assessment report on emerging cloud computing platforms. Include vendor evaluations, adoption forecasts, and key technology drivers with supporting data and charts.
     - Generate an in‐depth cybersecurity trends report for enterprise IT. Analyze recent threat vectors, defense strategies, and best practices for risk mitigation, providing actionable recommendations.
     - Create a comprehensive study on the impact of artificial intelligence in enterprise software. Include competitive benchmarking, technology adoption rates, and forecasted market changes.
  3. Marketing & Consumer Research (Nielsen, Kantar Group, Ipsos, GfK, Euromonitor International)
     - Produce a consumer behavior analysis report for a leading retail brand. Identify key demographic shifts, purchasing trends, and brand loyalty factors, and provide actionable insights with data visualizations.
     - Generate a detailed report on digital media consumption trends among millennials, incorporating survey results, social media analytics, and case studies of successful campaigns.
     - Create a market segmentation report for a new consumer electronics launch. Identify key consumer segments, behavioral drivers, and media usage patterns with clear recommendations.
  4. Financial Investment Research (Goldman Sachs, JPMorgan Chase, Morgan Stanley, Morningstar, Keefe Bruyette & Woods)
     - Produce an equity research report on mid-cap technology stocks. Include detailed financial modeling, valuation analysis, and buy/sell/hold recommendations with supporting data and charts.
     - Generate a fixed income analysis report for corporate bonds in the industrial sector. Assess credit risk, yield forecasts, and macroeconomic influences, citing key data sources.
     - Create a comprehensive report on global market trends impacting investment banking. Analyze regulatory changes, market sentiment, and performance metrics of leading financial institutions.
  5. Healthcare Research (IQVIA, Frost & Sullivan, Evaluate Ltd, Deloitte Healthcare, IMS Health)
     - Produce a market analysis report on emerging biotechnologies in oncology. Include competitive landscape, regulatory challenges, and growth forecasts with relevant case studies.
     - Generate a comprehensive report on patient satisfaction and telemedicine adoption trends. Analyze survey data from leading healthcare providers and benchmark best practices.
     - Create a detailed study on pharmaceutical market dynamics in emerging economies. Focus on pipeline developments, regulatory environments, and market potential with actionable insights.
  6. Legal Research Providers (LexisNexis, Westlaw, Bloomberg Law, Fastcase)
     - Produce a legal risk assessment report on the impact of recent data privacy regulations for multinational corporations. Include case studies, trend analysis (2019–2024), and strategic recommendations.
     - Generate a comprehensive report summarizing key federal and Supreme Court rulings on intellectual property rights over the past five years, highlighting trends and divergent interpretations.
     - Create a detailed report on the evolution of securities law and its effect on investment research practices, incorporating analysis of recent litigation and regulatory updates.
  7. Media & News Research (Factiva, Kantar Media, Comscore, Cision)
     - Produce a media consumption trends report that analyzes audience behavior shifts across digital, TV, and print platforms. Include data visualizations, key drivers, and forecasted trends.
     - Generate a comprehensive report on the impact of social media on traditional news reporting, with case studies and a comparative analysis of engagement metrics.
     - Create a detailed study on the effectiveness of multimedia advertising campaigns, evaluating ROI, consumer engagement, and best practices with actionable insights.
  8. Economic & Industry-Specific Research (Economist Intelligence Unit, BMI Research, IHS Markit, Consensus Economics)
     - Produce a macroeconomic outlook report for emerging markets, including GDP, inflation, and employment forecasts, with detailed data analysis and visualizations.
     - Generate an industry analysis report on the automotive sector, covering technological innovations, competitive dynamics, and consolidation trends.
     - Create a comprehensive country risk assessment report for a target region, detailing political, economic, and regulatory factors with recommendations for investors.
  9. Human Resources & Employee Engagement Research (Gallup, Great Place to Work, Mercer)
     - Produce an employee engagement report for a multinational firm based on recent survey data. Identify key drivers of satisfaction, retention challenges, and improvement recommendations.
     - Generate a comprehensive study on the impact of remote and hybrid work models on employee productivity across industries, including best practices and benchmark data.
     - Create a detailed report on workplace culture transformation, analyzing organizational behavior trends, employee feedback, and actionable strategies to boost engagement.
  10. Environmental, Social & Governance (ESG) Research (MSCI ESG Research, Sustainalytics, ISS ESG, Bloomberg ESG)
      - Produce an ESG performance report for a portfolio of global companies. Include sustainability scores, risk assessments, and recommendations for improvement with data visualizations.
      - Generate a comprehensive study on the impact of climate change regulations on the energy sector, including policy analysis, market forecasts, and strategic implications.
      - Create a detailed report on corporate social responsibility trends in the consumer goods industry, incorporating qualitative and quantitative analyses with actionable recommendations.
  11. Education & Academic Research (RAND Corporation, National Center for Education Statistics, HolonIQ)
      - Produce an analysis report on the future of online education, examining technological adoption, market growth projections, and student outcome trends with supporting data.
      - Generate a comprehensive study on the effects of educational policy reforms on public school performance in the U.S., including trend analysis and actionable recommendations.
      - Create a detailed international higher education trends report, covering tuition dynamics, international student mobility, and emerging academic programs with comparative data.
  12. Real Estate & Property Research (CBRE, JLL, CoStar Group, Cushman & Wakefield)
      - Produce a commercial real estate market analysis report for major urban centers, including occupancy trends, rental rate forecasts, and investment opportunity assessments.
      - Generate a comprehensive study on residential housing market dynamics in emerging economies, focusing on affordability, supply-demand gaps, and policy impacts.
      - Create a detailed report on the impact of urban redevelopment projects on local real estate values, including case studies, forecasts, and strategic recommendations.
  13. Energy & Natural Resources Research (Wood Mackenzie, Rystad Energy, Bloomberg New Energy Finance)
      - Produce an analysis report on global renewable energy trends, covering technology adoption, market forecasts, and key policy drivers, with detailed data and visuals.
      - Generate a comprehensive commodity price forecasting report for oil, natural gas, and key metals, incorporating historical trends, risk assessments, and predictive modeling.
      - Create a detailed report on energy transition strategies for traditional energy companies, focusing on clean technology investments and market adaptation strategies.
  14. Supply Chain & Logistics Research (ARC Advisory Group, Gartner Supply Chain Research, Supply Chain Insights)
      - Produce a report on supply chain resilience for global manufacturers. Analyze risk factors, digital transformation impacts, and best practices for operational efficiency with supporting data.
      - Generate a comprehensive study on the impact of technology on logistics networks, including case studies on digital optimization and cost reduction strategies.
      - Create a detailed report on emerging last-mile delivery solutions, assessing innovations, consumer expectations, and scalability with actionable insights.
  15. Cybersecurity & Information Security Research (KuppingerCole, Forrester Security, IDC Cybersecurity, Cybersecurity Ventures)
      - Produce an in-depth report on emerging cybersecurity threats for large enterprises, including detailed analysis of recent incidents, risk vectors, and defense strategies.
      - Generate a comprehensive cybersecurity market landscape report, evaluating vendor performance, technology forecasts, and best practices for mitigating risks.
      - Create a detailed report on regulatory compliance trends in information security within the financial services industry, with case studies and strategic recommendations.
  16. Social Media, Digital & Online Research (Comscore, SimilarWeb, Brandwatch)
      - Produce a digital audience behavior report for a global brand, focusing on social media trends, engagement metrics, and platform performance with detailed data analysis.
      - Generate a comprehensive analysis of influencer marketing effectiveness across digital channels, including ROI metrics, case studies, and best practices.
      - Create a detailed report on online brand sentiment analysis, incorporating social listening data, trend forecasts, and actionable recommendations.
  17. Public Opinion & Political Research (Pew Research Center, Gallup, YouGov)
      - Produce a public opinion polling report on voter sentiment ahead of a major election. Include demographic breakdowns, key issue analysis, and trend visualizations for the past five years.
      - Generate a comprehensive study on political risk in emerging markets, analyzing historical data, current trends, and future projections, with policy recommendations.
      - Create a detailed report on the influence of media on public policy, using survey data, social media analysis, and comparative case studies.
  18. Sports, Entertainment & Media Research (Nielsen Sports, Sportcal, Kantar Media Sports)
      - Produce a market analysis report on sports sponsorship trends, detailing viewership metrics, brand engagement, and investment ROI with industry case studies.
      - Generate a comprehensive report on audience behavior in the streaming media industry, including demographic insights, consumption trends, and competitive benchmarks.
      - Create a detailed analysis of digital advertising effectiveness in the entertainment sector, including segmentation data, ROI analysis, and strategic recommendations.
  19. Innovation, R&D & Technology Trends Research (Innosight, Frost & Sullivan Innovation, CB Insights)
      - Produce a global R&D investment trends report, analyzing technology spending, innovation indices, and the impact on market growth across key industries.
      - Generate a comprehensive study on disruptive technologies in manufacturing, including competitive analysis, market potential forecasts, and adoption trends.
      - Create a detailed report on emerging innovation hubs worldwide, focusing on startup ecosystems, funding trends, and collaborative opportunities in technology.
  20. Agriculture & Agribusiness Research (Rabobank Agribusiness Research, USDA Economic Research Service, AgFunder)
      - Produce an analysis report on global agricultural market trends, including crop yield forecasts, trade dynamics, and policy impacts, with data visualizations.
      - Generate a comprehensive study on agritech innovations such as precision farming and sustainable practices, including case studies and market forecasts.
      - Create a detailed report on the impact of climate change on food production and supply chain stability in agribusiness, with risk assessments and strategic recommendations.
  21. Environmental & Climate Change Research (Carbon Trust, IHS Markit Energy Transition, Bloomberg New Energy Finance)
      - Produce a report on the economic and social impacts of climate change on urban infrastructure, including forecasting models and policy recommendations.
      - Generate a comprehensive study on national climate policies and their effects on industrial competitiveness, with detailed trend analysis and source citations.
      - Create a detailed report on corporate sustainability initiatives, assessing environmental risk management practices and providing actionable recommendations for improvement.
  22. Customer Experience (CX) & User Experience (UX) Research (Forrester CX Research, Gartner CX Research, Qualtrics, Nielsen Norman Group)
      - Produce a report on customer journey mapping for a leading retail brand, identifying key touchpoints, pain points, and actionable improvement strategies with data visualizations.
      - Generate a comprehensive study on digital user experience trends for e-commerce platforms, including usability testing insights, design best practices, and conversion optimization recommendations.
      - Create a detailed report on customer satisfaction and loyalty metrics across multiple industries, integrating survey data and actionable recommendations to enhance overall CX.
  23. Blockchain, Cryptocurrency & Fintech Research (Chainalysis, CoinDesk Research, Deloitte Fintech Research, CB Insights)
      - Produce an analysis report on emerging blockchain technologies and their applications in financial services, including market trends, adoption forecasts, and case studies.
      - Generate a comprehensive study on cryptocurrency market dynamics, analyzing regulatory developments, investor sentiment, and competitive landscapes with source citations.
      - Create a detailed report on fintech disruption in traditional banking, with case studies on leading startups, technology adoption, and future market forecasts.
  24. Venture Capital, Startup & Private Equity Research (PitchBook, CB Insights, Crunchbase, Preqin)
      - Produce a global venture capital investment trends report, including performance analysis of high-growth startups, sector benchmarks, and emerging market opportunities.
      - Generate a comprehensive study on private equity market dynamics, covering deal flow analysis, exit strategies, and forecasted trends with supporting data.
      - Create a detailed report on emerging startup ecosystems in key regions, highlighting funding trends, investor activity, and growth potential with actionable insights.
  25. Operations Research & Management Science Consulting (The Brattle Group, NERA Economic Consulting, CRA International)
      - Produce a report on optimization techniques for operational efficiency in large-scale manufacturing, including quantitative analysis, simulation models, and case studies.
      - Generate a comprehensive study on the application of predictive analytics in supply chain management, focusing on data modeling, process improvements, and actionable insights.
      - Create a detailed report on advanced quantitative modeling approaches to solve complex business problems in logistics and operations, including scenario analysis and recommendations.
  26. Cultural & Social Research (Ethnographic/Sociocultural Studies) (Ipsos MORI, Kantar TNS, YouGov)
      - Produce a qualitative ethnographic study on urban consumer lifestyle trends, incorporating field observations, interviews, and cultural analysis with actionable insights.
      - Generate a comprehensive study on how cultural shifts influence global brand perception, including comparative case studies and trend analysis.
      - Create a detailed report on sociocultural dynamics and consumer behavior in emerging economies, integrating in-depth field research and actionable recommendations.
  27. Economic & Demographic Research Firms (Oxford Economics, The Conference Board, CEIC Data)
      - Produce a macroeconomic forecasting report for a specific region, including GDP, inflation, and employment trends with detailed data visualizations and source citations.
      - Generate a detailed demographic analysis report for a target market, highlighting age distribution, income levels, and consumption patterns with actionable insights.
      - Create a comprehensive report on the economic impact of demographic shifts on consumer markets, with policy recommendations and trend analysis.
  28. Academic & Think Tank Research Organizations (Brookings Institution, RAND Corporation, Carnegie Endowment for International Peace)
      - Produce a policy research report on global governance challenges and their implications for economic development, including case studies, literature reviews, and expert interviews.
      - Generate a comprehensive study on social inequality and its effects on public health and education outcomes, supported by empirical research and trend analysis.
      - Create a detailed report on emerging trends in international relations and their impact on global trade and security, integrating academic research and data analytics.
  29. Market Research Technology & Software Providers (Qualtrics, SurveyMonkey, Confirmit)
      - Produce a report on the latest innovations in survey technology and data analytics software for market research, including product comparisons, user case studies, and future trend forecasts.
      - Generate a comprehensive study on the integration of AI and machine learning in consumer insights platforms, highlighting case studies, performance metrics, and industry benchmarks.
      - Create a detailed report on digital transformation trends in market research technology, featuring analysis of leading software solutions, market share data, and recommendations for technology adoption.
- 24 Feb 2025. Real-time speech-to-text options for transcription:
  - [Deepgram](https://deepgram.com/learn/live-transcription-mic-browser) has a MediaRecorder API, which is perfect.
  - [Whisper Streaming Web](https://github.com/QuentinFuxa/whisper_streaming_web) is a web app that can transcribe audio real-time from the browser. A good approach, but I wouldn't use it for meeting transcription on my mid-end laptop. Streaming takes up the bulk of my GPU, leaving little for transcription.
  - [whisper-live](https://github.com/collabora/WhisperLive) runs as a Python console app and does something similar.
  - [Whisper WebGPU](https://huggingface.co/spaces/Xenova/realtime-whisper-webgpu) runs on the browser (only 200MB). Cool! But slow and still takes up GPU.
- 26 Feb 2025. When evaluating inputs, models tend to prefer the first response, prefer their own response, and prefer longer responses. [ThursdAI](https://sub.thursdai.news/p/thursdai-feb-20-live-from-ai-eng)
- 24 Feb 2025. [Mini-omni](https://github.com/gpt-omni/mini-omni/) is an open-source Qwen-based LLM that can hear and talk while thinking in real-time. An interesting experiment, but not for prototyping.
- 23 Feb 2025. LLMs are excellent at database migration. They can convert schemas and queries across SQL dialects (e.g. BigQuery to DuckDB, etc.) at 90%+ accuracy. This is useful when clients want to migrate cloud providers, go from on-prem to cloud, or reduce cost by switching databases.
- 22 Feb 2025. At PyConf Hyderabad, about 3 people had read a PEP. 1 had used the `match` operator. But 80% knew what a Vector DB was. 20% had used a Gemini API. That's how much traction LLM development is getting.
- 21 Feb 2025. The productivity benefit people report from using LLms is about 3X. [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3li4a2jal322a)
- 21 Feb 2025. Soon, you'll be able to send an LLM to a virtual meeting on your behalf. It will talk like you. [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3lif6r42fp226)
- 21 Feb 2025. Models tend to claim ignorance when you test them on topics they should avoid. But tend to answer when not being tested. Sneaky! [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3lihsmpsqyk27)
- 20 Feb 2025. Anecdotally, Grok 3 is very good for researching company information and latest news, particularly employee and customer sentiment. DeepSeek and Claude write more humanely than OpenAI. via Alberto Lopez Toledo, White Star Capital
- 19 Feb 2025. LLMs are impacting not just data queries but geospatial queries as well. Here's a good example of [Natural Language Geocoding](https://element84.com/machine-learning/natural-language-geocoding/).
- 18 Feb 2025. I subscribed to ChatGPT Pro mainly for DeepResearch. Here are the reports I've generated:
  1. [`uv` Package Manager Overview](https://chatgpt.com/share/67b49a7b-a4c0-800c-a3dc-c5ab1ced23fe)
  2. [DuckDB Analytics Comparison](https://chatgpt.com/share/67b4abfa-37b0-800c-a6e4-23b6c12e38b6)
  3. [Rust vs Python / JavaScript](https://chatgpt.com/share/67b4f8eb-d1f4-800c-824d-f0ca65ed7f54)
  4. [Modern Data Engineering Course](https://chatgpt.com/share/67b4fbc7-e6bc-800c-b2aa-dbf21339c8fc)
  5. [LLM Code Migration Practices](https://chatgpt.com/share/67b50772-f4c8-800c-b20c-8dd04d1b5e69)
  6. [Cloud Cost Optimization Strategies](https://chatgpt.com/share/67b5f809-9a5c-800c-8472-1153b2e4c1ae)
  7. [LLM Coding Interview Tools Report](https://chatgpt.com/share/67b61969-2030-800c-99c2-8585b63aa392) (compare with [Perplexity](https://www.perplexity.ai/search/the-interview-coder-repo-https-g_k0T2DSQIuiWntUFjbyOg))
  8. [Text To Speech Engines](https://chatgpt.com/share/67b63db0-8720-800c-87c6-f0b42581d801)
  9. [Customer Service in Indian Public Sector Banks](https://chatgpt.com/share/67b74802-8b34-800c-9ea3-2972db4d80c6)
  10. [LLMs in Software Development](https://chatgpt.com/share/67b75104-28e4-800c-87b8-f9c3d41a2cc9)
      - Old version 1: [Gen AI in Software Development](https://chatgpt.com/share/67b7483a-5cd4-800c-a330-ba4a984b9248)
      - Old version 2: [Gen AI in Software Development](https://chatgpt.com/share/67b75215-12f4-800c-9f9f-04c1f105b304)
  11. [Leadership Training Content](https://chatgpt.com/share/67b750f2-8ea4-800c-9721-bb9abbd46b29)
  12. [Open-Source HTTP Servers](https://chatgpt.com/share/67bafb23-cf14-800c-9b76-65f11285ae3a). Caddy wins.
  13. [Deep Research Use Cases](https://chatgpt.com/share/67bf66b3-98b8-800c-8482-3ce42f100bb9)
  14. [Nagpur No-Parking Violations](https://chatgpt.com/share/67bf6c69-a5d0-800c-8a49-12a46f29fef9)
  15. [Data Science in Food Services](https://chatgpt.com/share/67bf6e2a-2db0-800c-9975-c6b3479fa279)
  16. [Deep Research Disruption to Research Firms](https://chatgpt.com/share/67bf7946-c80c-800c-8132-6f4018455a68)
  17. [LLMs in Design Thinking](https://chatgpt.com/share/67c3a676-c088-800c-bbdc-b638a99df50b)
  18. [EU Taxonomy Report Clarification](https://chatgpt.com/share/67c56f48-3a8c-800c-bf5f-b1eeb91a529c)
  19. [Shell Valuation Analysis Inquiry](https://chatgpt.com/share/67c6d513-8040-800c-bdc9-7d6d1bcd52f9)
  20. [LLMs in DSLs Research](https://chatgpt.com/c/67c7991d-0358-800c-b450-8e81819267a6)
  21. [Public API-Based Data Storage Options](https://chatgpt.com/share/67c7edad-bd78-800c-80a7-ed08dd97c1cf). Supabase wins.
  22. [Front-End JS Frameworks Analysis](https://chatgpt.com/share/67ca8963-f564-800c-ae06-54464b58cf1d)
  23. [Database Evaluation Guide](https://chatgpt.com/share/67ca8953-97a4-800c-baea-ad0de5836f12)
  24. [CSS Frameworks Evaluation Guide](https://chatgpt.com/share/67ca893e-6450-800c-bd0a-d6213f48c356)
  25. [CI/CD Tooling Ecosystem Report](https://chatgpt.com/share/67ca8920-dc3c-800c-bf56-6231a6028e70)
  26. [Color Names Count](https://chatgpt.com/share/67ca88ee-f568-800c-ad74-e38ae385e61c)
  27. [S Anand Biography](https://chatgpt.com/share/67cc36c7-0b20-800c-a3f4-56bada95cb7b). Meh, I know more about me, and it gets a few things wrong.
  28. [Cosmere Secrets Encyclopedia](https://chatgpt.com/share/67ce2e28-d3ac-800c-a55f-e51b1c27d9c2). This is the best. Deep Research is great if it's stuff I actually want to read, rather than just learn about.
  29. [DBT course](https://chatgpt.com/share/67ce4df7-4088-800c-94e7-8a3edb02a8f6)
  30. [Future of Coding AI](https://chatgpt.com/share/67ce4e10-2968-800c-b663-8842045c1626)
  31. [Claude Artifacts Use Cases](https://chatgpt.com/share/67ce4dcd-5cf8-800c-837c-6d05bd61822e). This is the only one that managed to get artifacts links correct. I used this for an article for The Hindu.
  32. [MCP Servers and Clients Research](https://chatgpt.com/share/67ce7ef2-ead8-800c-982e-e99c9527099b). Learnings:
      - Practically any "tool" can be an MCP server: file systems, APIs, codebases, browsers, collaboration platforms, memory, etc.
      - Most platforms have (or are) integrating MCP.
      - [Clients](https://github.com/punkpeye/awesome-mcp-clients): code editors, chat, and automation tools support MCP. GenAIScript is a good starting point.
      - [Tester MCP Client](https://github.com/apify/tester-mcp-client) is a browser-based test environment.
      - [mcp-cli-client](https://github.com/adhikasp/mcp-client-cli) is a CLI-based client
      - [mcp-chatbot](https://github.com/3choff/mcp-chatbot) is a chatbot client
  33. [Data Moats by Industry](https://chatgpt.com/share/67cfe129-69c8-800c-9bb8-f7db2955fa88)
  34. [Attorney Profile Research](https://chatgpt.com/share/67cfe021-a2d4-800c-abf8-0ca5d54c8a43)
  35. [Social Media Data APIs](https://chatgpt.com/share/67cfe2bb-0814-800c-8c5b-17442906fdcf)
  36. [Adobe Software Alternatives](https://chatgpt.com/share/67d11e8f-eac4-800c-bf23-960e3f18b4aa)
  37. [LLM Hallucination Visualization Techniques](https://chatgpt.com/share/67d3ba57-3cc0-800c-830e-a48b5d531e86)
  38. [API vs Self-hosting Cost Analysis](https://chatgpt.com/share/67d3b985-2df0-800c-b9a7-b04fd6e18042): Always use APIs, avoid self-hosting models.
  39. [AGI Preparation](https://chatgpt.com/share/67d6a803-3e6c-800c-a886-10fe1e4dc3b9)
      - AGI will emerge step by step. Knowing which step is next will help
      - AI native organisations will emerge in each of these areas. AI design agencies and AI creative Agencies being one example
      - Networking, empathy, leadership have more value now. So will human AI bridging roles
      - What's the value of one human when another human can do practically everything they can but much better? Or a drama or a sport?
  40. [Modern digital note taking](https://chatgpt.com/share/67d6bd5d-af74-800c-a6d7-bc1829f03c26)
      - Voice note taking is the game changer
      - Automatically popping of notes based on context such as people places or conversations will be a thing
  41. [Local LLM Search Tools](https://chatgpt.com/share/67d79662-2be4-800c-93e7-376eb68ceecf)
  42. [Blog Post to research paper on copying - suggestions](https://chatgpt.com/share/67d7968f-b020-800c-b7e7-2b086546b032)
  43. [Linux Dev Migration Guide](https://chatgpt.com/share/67d83394-43bc-800c-8157-8d498290638f)
  44. [Raspberry Pi SIM options](https://chatgpt.com/share/67d8eefe-a1f4-800c-93d0-fbed732e14fb)
  45. [Linux Dev migration guide](https://chatgpt.com/share/67d83394-43bc-800c-8157-8d498290638f)
  46. [HTML to JATS conversion](https://chatgpt.com/share/67d907fe-e0f4-800c-a4ad-f7dcf5176a5d)
  <!-- #TODO
  - PDF extractors
  - Databases
  - Training material on:
    - Data governance and quality
    - Document content extraction
    - Agile digital transformation
    - Responsible AI?
    - D3-based data visualization?
  - Emerging trends and competitive intelligence in:
    - EdTech
    - Publishing
    - Analytics
  - Challenges faced by (a client) and potential strategies
  - Latest news about (a client)
  - Industry Whitepapers on: AI-driven data solutions, CI/CD implementations, vector databases, etc.
  - Insightful Blog Posts: Generate data-backed articles on emerging trends in content technology and data services, attracting a wider audience to Straive's platforms.
    -->
- 16 Feb 2025. HuggingFace has a "Model tree" against each model that shows the model's ancestors and descendants. For example, as of now, [Deepseek R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) has 75 adapters, 154 finetunes, and 23 quantizations.
- 16 Feb 2025. Perplexity is now powered by Cerebras, which makes their inference as fast as Google. [Source](https://cerebras.ai/press-release/cerebras-powers-perplexity-sonar-with-industrys-fastest-ai-inference). The speed is a big factor, and I've switched my default search engine from Google to Perplexity, at least for now.
- 16 Feb 2025. [Interview Coder](https://www.interviewcoder.co/) is a desktop app that offers live interview support for coding interviews. It's a transparent window that reads your screen and answers questions for you. (Given this, I think we need an _interviewer_ support system that tells interviewers what to ask!)
- 05 Feb 2025. ChatGPT does a good job of spotting errors in architectural and structural diagrams. In fact, the whole theme of spotting errors in large diagram is a theme that can have potential use cases. Source: Dan Becker.
- 05 Feb 2025. R1 seems good at text-to-CAD. Even better than Sonnet. Source: Dan Becker
- 03 Feb 2025. OpenAI advices a few different prompting techniques for reasoning models. [OpenAI](https://platform.openai.com/docs/guides/reasoning#advice-on-prompting):
  - Avoid examples unless zero-shot prompting fails.
  - Avoid chain-of-thought. These models do that internally anyway.
  - Short, direct prompts are better than detailed prompts.
- 03 Feb 2025. [GitHub models](https://github.com/marketplace/models) is free for anyone to try. The model catalog us _extensive_ and even includes `o3-mini` which was launched this week (though in limited preview).
- 02 Feb 2025. With just 3 annotators and 50-100 samples, you can figure out if an LLM can replace human annotators systematically.[Arxiv](https://arxiv.org/pdf/2501.10970) [ChatGPT explanation](https://chatgpt.com/share/679f21a4-d700-800c-b1f1-987b56b6fe0a)
- 02 Feb 2025. Curiosity and agency may be the differentiator in a world of LLMs (not experience, knowledge, or ability), since LLMs will democratize expertise. [Jack Clark](https://importai.substack.com/p/import-ai-397-deepseek-means-ai-proliferation)
- 02 Feb 2025. "AI/human combined work can be copyrighted as long as a human is adding, changing or selecting elements. Prompts alone do not usually produce copyrighted work." - [Copyright and Artificial Intelligence, Jan 2025, US Copyright Office](https://copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf) via [Ethan Mollick](https://bsky.app/profile/did:plc:flxq4uyjfotciovpw3x3fxnu/post/3lgxlnzgbss2j)
  - **Human Authorship is Essential:** Works created solely by AI are not copyrightable.
  - **AI can be used as a Tool:** Using AI as a tool does not negate copyright protection, as long as the final work reflects sufficient human creativity.
  - **Prompts Alone are Insufficient:** Simply providing prompts to an AI system, even detailed ones, is generally not enough to establish authorship. Prompts are considered instructions or ideas, which are not copyrightable.
  - **Expressive Inputs:** When a human author provides their own expressive content (like a drawing, photo, or text) as input to an AI system, and that content is perceptible in the output, the human author can claim copyright in that portion of the output.
  - **Modifying and Arranging AI-Generated Content:** Humans can claim copyright in the creative selection, coordination, and arrangement of AI-generated material, as well as in creative modifications to AI-generated outputs.
  - **No Need for New Legislation:** The report concludes that existing copyright law is adequate to address the copyrightability of AI-generated works, and no new legislation is needed at this time.
  - **Case-by-Case Analysis:** Copyrightability will be determined on a case-by-case basis, considering the specific facts of each work and the extent of human contribution.

## Jan 2025

- 30 Jan 2025. You can use embeddings as the input to a classical ML classifier. This can improve classification a lot. [Nomic](https://docs.nomic.ai/atlas/cookbook/building-image-classifiers-with-atlas)
- 30 Jan 2025. As AI software becomes more common, demand for AI product managers will grow. Also as a proportion of people in an organization. https://www.deeplearning.ai/the-batch/issue-284/
- 30 Jan 2025. Control of chips and GPU compute is what will likely be the gameplay to control AI dominance globally. [Dario Amodei](https://darioamodei.com/on-deepseek-and-export-controls)
- 26 Jan 2025. I was exploring new business models enabled by LLMs. [Here are some thoughts](https://chatgpt.com/share/6795b30f-35d4-800c-9863-285a852afe7b):
  - **1. Autonomous Multi-Sided Marketplaces**. AI-powered platforms coordinate complex services with minimal human oversight—think “Uber for Everything, but the platform sets pricing dynamically, schedules both supply and demand, and resolves disputes algorithmically.
  - **2. Collective Intelligence Ecosystems**. Communities pool data, expertise, and AI models to tackle shared problems—like an open-source “GitHub for AI, but with embedded micropayments or tokenized incentives to reward contributors whenever the models are used commercially.
  - **3. Zero-Employee Companies**. Fully automated software entities—legal frameworks might allow an AI to manage services, pay taxes, and sign contracts. These “companies only hire humans as needed, on-demand, for edge cases AI can’t handle.
  - **4. Context-Aware Knowledge Platforms**. Imagine a Wikipedia that not only retrieves static info but also tailors each page in real time to the reader’s personal context, language level, and preferences—generating content on the fly. User feedback loops train the system to improve.
  - **5. Data Cooperatives / Data DAOs**. Groups collectively own their data and license it to AI companies on a revenue-share basis. Individuals have a direct financial stake in how their shared data is leveraged, voting on permissible use cases.
  - **6. Personalized Service Layers**. Similar to GitHub’s “forking model, but for entire user experiences. Each user can clone and customize an AI service (whether it’s a personal grocery shopper or a content curator) and can share or monetize improvements with the broader network.
- 23 Jan 2025. According to [Portkey's LLM usage analysis](https://docsend.com/view/wei3digde8cvmwsr)
  - Anyscale and Fireworks AI have the lowest error rates (5xx, 429) and rate limits across providers
  - Groq and Anthropic are among the highest, OpenAI is among the lowest, Google is in-between
  - OpenAI has lower error rates and lower latency than Azure
  - They have a ~35% cache hit rate
- 23 Jan 2025. A few quick points supporting the mental model of "LLMs are aliens".
  - LLMs are clearly not machines. They give different answers each time.
  - LLMs _are_ like humans: they exhibit human biases (e.g. guessing 42 or 37 often). But they fail in unusual ways. They can't count the "r"s in strawberry. They can go into an endless loop.
  - LLMs are a new form of intelligence. Thinking of them as aliens might minimize our confusions.
- 20 Jan 2025. If you put LLMs in a feedback loop, it can optimize for its reward function by emotionally pushing people, generating misinformation, nudging towards a narrow definition of creativity, etc.: https://bsky.app/profile/emollick.bsky.social/post/3lg4darqwfc2d
- 20 Jan 2025. ChatGPT's [Scheduled Tasks](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt) are pretty bad at fetching the latest news. Its use of search is poor. (I'm not sure if it actually searches.) I need to figure out other use cases for it. Possible options are:
- 19 Jan 2025. [DeepSeek does not enforce rate limits](https://api-docs.deepseek.com/quick_start/rate_limit). Yet another reason to switch to DeepSeek. (via [Simon Willison](https://simonwillison.net/2025/Jan/18/deepseek-api-docs-rate-limit/)). My other reasons are:
  - Claude 3.5 Sonnet-level coding capability at 5% of the cost (soon to be 2.5%)
  - Prompt caching by default
  - [Fill in the middle](https://api-docs.deepseek.com/guides/fim_completion) completion
- 17 Jan 2025. What will LLMs enable that do not or cannot exist today? Rather than optimizing what exists? Something to think about.
- 16 Jan 2025. ModernBert supports embeddings and is better than text-embedding-3-small on [MTEB](https://huggingface.co/spaces/mteb/leaderboard).

  ```python
  from sentence_transformers import SentenceTransformer
  model = SentenceTransformer("nomic-ai/modernbert-embed-base")
  embedding = model.encode("Hello, world!", reference_compile=False)
  ```

- 13 Jan 2025. A colleague, Karthick, asked different models to apply the editing and formatting guidelines for a journal to a manuscript. (E.g. Abbreviate chapter & section numbers, except when a sentence begins with it. Use "1" instead of "one", etc. except when a sentence begins with it. Things like this.) Gemini Exp 1206 seems to be the most reliable, compared with most other models.
- 12 Jan 2025. [TTS Arena](https://huggingface.co/spaces/Pendrokar/TTS-Spaces-Arena) is a benchmark of text-to-speech models. [Kokoro-TTS](https://huggingface.co/spaces/hexgrad/Kokoro-TTS) is the current leader. It's just 82M, runs on Google Colab, and sounds slightly better than OpenAI TTS.
- 12 Jan 2025. [chat.qwenlm.ai](https://chat.qwenlm.ai/) consolidates all of Qwen's models in one ChatGPT-like interface.
- 11 Jan 2025. [Can LLMs write better code if you keep asking them to “write better code?](https://minimaxir.com/2025/01/write-better-code/) A delightful exploration of how Claude 3.5 Sonnet keeps optimizing and adding features to improve code. My takeaway: repeatedly applying a prompt gives us interesting new directions to explore.
- 08 Jan 2025. [smolagents](https://huggingface.co/blog/smolagents) is a new agents library from HuggingFace. It seems simple enough to use.
- 08 Jan 2025. [whisper-flow](https://github.com/dimastatz/whisper-flow/) does real-time speech transcription!
- 08 Jan 2025. [Switchboard-1](https://catalog.ldc.upenn.edu/LDC97S62) is a labelled audio corpus with ~260 hours of speech. It has ~2,400 calls among 500+ speakers in the US.
- 07 Jan 2024. [Voyage AI Embeddings](https://docs.voyageai.com/docs/embeddings) have a [higher quality, similar price](https://blog.voyageai.com/2025/01/07/voyage-3-large/) compared to OpenAI embeddings. There's a clear benefit to replacing `text-embedding-3-large` with `voyage-3-lite`. There's a 200 MTok free tier currently.
- 05 Jan 2025. [TheAgentCompany](https://github.com/TheAgentCompany/TheAgentCompany) is a benchmark of real-world [tasks](https://github.com/TheAgentCompany/TheAgentCompany/tree/main/workspaces/tasks) like:

  - [Arranging a meeting room](https://github.com/TheAgentCompany/TheAgentCompany/blob/main/workspaces/tasks/admin-arrange-meeting-rooms/task.md)
  - [Analyze a spreadsheet](https://github.com/TheAgentCompany/TheAgentCompany/blob/main/workspaces/tasks/ds-answer-spreadsheet-questions/task.md)
  - [Add a Gitlab wiki page](https://github.com/TheAgentCompany/TheAgentCompany/blob/main/workspaces/tasks/sde-add-wiki-page/task.md)

  It uses [OpenHands](https://github.com/All-Hands-AI/OpenHands) with these [instructions](https://github.com/TheAgentCompany/TheAgentCompany/blob/main/.openhands_instruction)

- 05 Jan 2025. Salvatore Sanfilippo (antirez - Redis) finds DeepSeek v3 comparable with Claude 3.5 Sonnet. [YouTube](https://www.youtube.com/watch?v=_pLlet9Jrzc)
  - He also passed a paper and his code to compare them. A useful prompt. [YouTube](https://youtube.com/clip/Ugkx3JUGaspeLA2U2U68zSRyB2rPJ-PnCUXR?si=xCoIu5bxaFntSymm)
- 03 Jan 2025. [Assembly AI](https://www.assemblyai.com/) offers speech to text with diarization at 12c/hour. Good diarization, average transcription quality.
  In comparison, WhisperX (with GPU) was much slower, had slightly poorer diarization, and slightly better transcription.
  ```bash
  uvx --python 3.9 --index https://download.pytorch.org/whl/cu121 whisperx --diarize --lang en --hf_token $HUGGINGFACE_TOKEN`
  ```
- 03 Jan 2025. [Vector DB comparison](https://superlinked.com/vector-db-comparison) compares all popular vector DBs. LanceDB is gently nudging up my preference list but DuckDB is still my favourite.
- 03 Jan 2025. Does the cost of 'running' a paper/article in an LLM vary depending on the specific LLM used, such as Claude Sonnet? #FAQ
  - Yes, the cost varies depending on the LLM. You can see costs and quality at https://llmpricing.straive.app/. The cost is measured in millions of tokens. For example, the Wikipedia page on the Bible is 100K tokens. You can paste text into https://platform.openai.com/tokenizer to count the number of tokens.Claude 3.5 Sonnet costs $3.5 / MTok, i.e. 35 cents for the Wikipedia Bible page. Gemini 1.5 Flash 8b costs $0.0375 / MTok, i.e. 0.375 cents for the same page. As you can see, the cost can vary by a factor of 100.
- 02 Jan 2025. Tools that convert files to prompt / Markdown suitable for LLMs:
  - [`uvx files-to-prompt`](https://pypi.org/project/files-to-prompt)
  - [`npx git-ingest`](https://gitingest.com/)
  - [`ingest`](https://github.com/sammcj/ingest) - written in Go, only Mac/Linux binaries
- 01 Jan 2025. LLM Code Execution Sandboxes that let you run code in a sandbox via an API:
  - [AgentRun](https://github.com/tjmlabs/AgentRun): open source, via Docker
  - [e2b.dev](https://e2b.dev/): A day costs about $1 (on demand) and you get about $100 one time credits. Self-hosting is complex. [Discussion](https://www.reddit.com/r/LocalLLaMA/comments/1chsx7z/is_there_an_opensource_alternative_to_e2b_e2bdev/)
  - [nsjail](https://github.com/google/nsjail): by Google. Write your own API
- 01 Jan 2025. LLM Observability tools:
  - [LiteLLM](https://docs.litellm.ai/) is an LLM Proxy with caching, logging, call hooks or plugins, rate limiting, virtual keys. SSO integration can be implemented.
  - [LangFuse](https://langfuse.com/self-hosting) is an LLM Proxy with API key distribution, logging, and SSO. But lacks per-user usage limits and server-side caching.
  - [Helicone](https://www.helicone.ai/) does not support SSO
- 01 Jan 2025. [GitHub Spark](https://githubnext.com/projects/github-spark) is a way to build micro-apps with LLMs. Like Claude Artifacts. It's currently in technical preview, though.

## Dec 2024

- 28 Dec 2024. A clever idea. Give an LLM a chapter from a textbook. Ask it to generate a unique, playable game to help me learn theconcepts for an exam. [Page Bailey](https://www.linkedin.com/feed/update/urn:li:activity:7278124663048695809/)
- 27 Dec 2024. Satya Nadella prepares for meetings by asking Copilot to tell him everything he needs to know about the client from the CRM, emails, meeting transcripts etc. He shares that colleagues who annotate it further for him. That's using AI for reasoning _and_ collaborating with colleagues. [55m](#TODO)
- 26 Dec 2024. WOW. This is how a software agent will work alongside humans: [Fix issue #5478: Add color to the line next to "Ran a XXX Command" based on return value](https://github.com/All-Hands-AI/OpenHands/pull/5483) - using [@openhands-agent](https://github.com/openhands-agent).
- 26 Dec 2024. [aisuite](https://github.com/andrewyng/aisuite) by Andrew Ng is a unified interface to LLMs. Sort of like an `openai` library across multiple providers.
- 26 Dec 2024. Learnings from [Best of 2024 in Agents (from #1 on SWE-Bench Full, Prof. Graham Neubig of OpenHands/AllHands)](https://youtu.be/B6PKVZq2qqo)
  - Passing code execution as a tool is more powerful than granular tools. You combine multiple tools and tool calls into one. You move code to the data rather than the other way around. Mostly, you need bash, Python (or Jupyter), file manager, web browser.
  - UI: Go where the user is, instead of bringing them to you.
  - A remote runtime is a critical component.
  - Claude 3.5 Sonnet (20241022) and Claude 3.5 Haiku (20241022) perform best on SWE Bench, followed by Deepseek V3, then O1 2024-12-17. [X](https://x.com/xingyaow_/status/1872145835699691675)
- 25 Dec 2024. Since HNSW indexing is an overhead, just use NumPy matrix multiplication to calculate cosine similarity. For 1M vectors, it takes ~0.05 seconds. A 1M vector dataset handles ~2GB of text at a chunk size of 2K chars. In short, if you're embedding <2GB of text, just use NumPy.
- 24 Dec 2024. DuckDB's VSS extension HNSW index + Embeddings (2K chunks of 512 dimensions) takes up roughly 2.5X the size of the original data. Embedding 554 files of ~4,456 KB took 710 seconds. Creating the index took 660 seconds. The resulting DB was 18.1 MB.
- 24 Dec 2024. How to use [LLMs in market research](https://businessmeetsai.substack.com/p/market-research-meets-ai-the-3-step).
  - Use LLMs with search for secondary research.
  - Create different personas and run user surveys on them. [This paper used 1,052 real-life interview audio transcripts as agent memory to simulate people](https://x.com/emollick/status/1858664562750374139)
  - Generate your market research report using LLMs.
- 23 Dec 2024. Medical coding is an area ripe for LLMs.
  - [Ojasvi Yadav created a repo](https://github.com/ojasviyadav/medical-coding-agent/) that uses hierarchical classification (rather than embeddings) to find the right coding.
  - Gemini models seem to understand medical terms better than others.
  - RapidClaims, funded by TogetherAI, is apparently working on this problem.
- 23 Dec 2024. Document to Markdown Converters:
  - [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/) uses [MuPDF](https://mupdf.com/). Requires PyTorch.
    - `PYTHONUTF8=1 uv run --with pymupdf4llm python -c 'import pymupdf4llm; h = open("pymupdf4llm.md", "w"); h.write(pymupdf4llm.to_markdown("$FILE.pdf"))'`
  - [markitdown](https://github.com/microsoft/markitdown) from Microsoft. PDF via PDFMiner, DOCX via Mammoth, XLSX via Pandas, PPTX via Python-PPTD, ZIP, etc.
    - `PYTHONUTF8=1 uvx markitdown $FILE.pdf > markitdown.md`
  - [Docling](https://github.com/DS4SD/docling) by IBM. Unable to install via pip on Windows AND on Linux.
  - [MegaParse](https://github.com/QuivrHQ/MegaParse) uses libreoffice, pandoc, tesseract-ocr, etc. Requires OpenAI API key.
- 23 Dec 2024. [Awesome Tabular LLMs](https://github.com/SpursGoZmy/Awesome-Tabular-LLMs) compiles encodings of tables for LLMs.
- 23 Dec 2024. [What's the best way of encoding tabular data for LLMs?](https://typeset.io/search?q=What%27s%20the%20best%20way%20of%20encoding%20tabular%20data%20for%20LLMs%3F) Looks like including the cell address helps. [Here is an explanation from ChatGPT](https://chatgpt.com/share/6768c852-3bd4-800c-a4c7-0e4692a49afd)
- 22 Dec 2024. [How are software engineers are future-proofing their careers in the face of LLMs?](https://news.ycombinator.com/item?id=42431103)
  - Leveraging LLMs as Force Multipliers
    - Use LLMs for repetitive tasks, rapid prototyping, exploring multiple approaches, data extraction and brainstorming, providing feedback.
    - Explore prompting techniques, integrate LLMs into their workflows, and develop strategies for validating and refining LLM-generated code
  - Focusing on higher-level skills that llms struggle with
    - Systems Thinking and Architecture: code readability, extensibility, testability, and maintainability
    - Problem Solving and Critical Thinking: define problems clearly, break them down into manageable parts, and reason through complex scenarios. LLMs produce plausibly incorrect code.
    - Communication and Collaboration
    - Domain Expertise
  - Exploring Adjacent Roles: product management, technical leadership, or consulting. Involve more interaction with clients and stakeholders.
  - Developing "Evergreen" Skills: debugging, system administration, and security. Or outside of software engineering, such as trades or other hands-on vocations.
  - Scepticism: LLMs may not reach a level of sophistication that would render their expertise obsolete. Complex problems, understanding context, and producing high-quality, maintainable code.
- 22 Dec 2024. [Examples of agentic AI](https://news.ycombinator.com/item?id=42431361)
  - Text-to-SQL automated business analyst: A system that generates SQL queries from natural language, handles errors, creates visualizations, and includes a FAQ component. The author calls it "constrained agentic AI."
  - Data source querying system: A bot that queries multiple SQL and API data sources, selecting tools and reformulating tasks as needed.
  - Cursor (agentic mode): An LLM-powered VS Code fork that chains together various LLM capabilities (code generation, applying changes, linting suggestions, terminal commands, codebase RAG) to reduce user prompts.
  - Vulnerability finding system: A system that uses LLM agents to discover novel vulnerabilities in open-source web applications. The agents leave traces of their actions.
  - Marketing strategy generation system: A system using approximately 60 agents to generate marketing strategies.
  - Restaurant finder: A system that searches for restaurants based on dietary preferences and group size, and downloads social media information.
  - Proofreading and editing of transcripts: LLM agents apply specific customer requirements to transcripts after human editing.
  - Meeting notes and action items generator: A system that generates meeting notes and action items.
  - O'Reilly auto parts customer service agent: An agent demonstrated using RAG.
  - UI enhancement agent: An agent that added features like language locales and dark mode to a UI.
- 21 Dec 2024. Anthropic defines agents. [Building effective agents](https://www.anthropic.com/research/building-effective-agents) + [Cookbook](https://github.com/anthropics/anthropic-cookbook/tree/main/patterns/agents)
  - **Augmented LLMs** are LLMs enhanced with augmentations such as retrieval, tools, and memory.
  - **Workflows** are systems where LLMs and tools are orchestrated through **predefined** code paths.
    - **Prompt chaining**: Pipe each LLM output to the next LLM. E.g. Write report, then translate. Extract results, then verify them. Successively ask follow-up questions.
    - **Routing**: One LLMs decides which other LLM to call next. E.g. Evaluate complexity, then pick the right model. Classify request time, then pick the right prompt.
    - **Parallelize: Sectioning**: Break tasks into independent subtasks, then aggregate. E.g. Evaluate contracts against different clauses in parallel.
    - **Parallelize: Voting**: Run same task multiple times, then vote. E.g. Review code for prompt injection using different prompts. Evaluate content safety with different thresholds.
    - **Orchestrator-workers**: One LLM delegates to others, then syntheisizes. E.g. Search from multiple sources, then synthesize. Change multiple code files.
    - **Evaluator-optimizer**: One model checks another in a loop. E.g. Literary translation. Self-healing code. Policy violation checks.
    - **Human-in-the-loop Checkpoints**: The workflow explicitly requests human review at certain stages.
  - **Agents** are LLMs that dynamically direct their own processes and tool usage, consulting tools or the user as needed.
- 21 Dec 2025. A clever trick to prevent voice models from speaking too quickly. Use a "stay silent" function call. [Ref](https://x.com/ilanbigio/status/1870218818288558396?t=Bo-BdgJ0hFKOJ0urC0HYBQ)
- 19 Dec 2024. o1-preview diagnoses better than doctors. [Harvard](https://arxiv.org/pdf/2412.10849)
- 18 Dec 2024. OpenAI's release of ephemeral tokens via sessions (valid for 1 minute) are a useful way of exposing apps for public demos. Currently it works only for the Realtime API, though.
- 18 Dec 2024. [SpreadsheetLLM](https://arxiv.org/abs/2407.09025) is a way of encoding spreadsheets in an LLM friendly format.
- 18 Dec 2024. #HARD prompt. Ask video generators like SORA to generate text in videos. It is of average quality.
- 18 Dec 2024. [GPT 4o Mini Realtime](https://platform.openai.com/docs/models#gpt-4o-realtime) was released. A realtime conversation will cost ~50c/hr. About 36c for input, 72c for output. (I extrapolated from the 6c/min audio input cost for GPT 4o Realtime when it was $100/MTok. GPT 4o Mini Realtime is $10/MTok input and $20/MTok output.)
- 18 Dec 2024. This is an interesting way to understand software. `Generate a Mermaid sequence diagram showing interactions based on this code.` [Ref](https://llmfoundry.straive.com/history#?t=1734434521298204)

  ```mermaid
  sequenceDiagram
      participant Main
      participant Server
      participant DatabaseConnection
      participant Bank
      participant Branch
      participant Employee
      participant Customer
      participant Account
      participant PaymentGateway
      participant PaymentProcessor
      participant Merchant
      participant MerchantService
      participant TransactionService
      participant LoanService
      participant PaymentService

      Main->>Server: start()
      Main->>DatabaseConnection: connect()

      Main->>Bank: new Bank("Global Bank", databaseConnection)
      Main->>Branch: new Branch("Downtown Branch", "123 Main St")
      Main->>Branch: new Branch("Uptown Branch", "456 High St")
      Main->>Bank: addBranch(branch1)
      Main->>Bank: addBranch(branch2)

      Main->>Employee: new Manager("Alice Johnson", "MGR123", branch1)
      Main->>Employee: new Teller("Bob Smith", "TLR456", branch1)
      Main->>Employee: new Teller("Charlie Davis", "TLR789", branch2)
      Main->>Bank: addEmployee(manager)
      Main->>Bank: addEmployee(teller1)
      Main->>Bank: addEmployee(teller2)

      Main->>Customer: new Customer("David Brown", "CST001")
      Main->>Customer: new Customer("Eva Green", "CST002")
      Main->>Bank: addCustomer(customer1)
      Main->>Bank: addCustomer(customer2)

      Main->>Account: new SavingsAccount("SA1001", customer1, 5000.0, 2.5)
      Main->>Account: new CheckingAccount("CA2001", customer1, 1500.0, 500.0)
      Main->>Account: new SavingsAccount("SA1002", customer2, 8000.0, 2.0)
      Main->>Bank: openAccount(savings1)
      Main->>Bank: openAccount(checking1)
      Main->>Bank: openAccount(savings2)

      Main->>PaymentGateway: new PaymentGateway("GlobalPay Gateway")
      Main->>PaymentProcessor: new PaymentProcessor("GP-Processor-001", paymentGateway)

      Main->>Merchant: new Merchant("MCH001", "TechStore Online", "techstore.com")
      Main->>MerchantService: new MerchantService(paymentProcessor)

      Main->>TransactionService: deposit(savings1, 1000.0)
      Main->>TransactionService: withdraw(checking1, 200.0)
      Main->>TransactionService: transfer(savings1, savings2, 500.0)

      Main->>LoanService: applyPersonalLoan(customer1, 10000.0, 5)
      Main->>LoanService: applyMortgageLoan(customer2, 200000.0, 15)
      Main->>Bank: addLoan(personalLoan)
      Main->>Bank: addLoan(mortgageLoan)

      Main->>PaymentService: makePayment(personalLoan, 2000.0)
      Main->>PaymentService: makePayment(mortgageLoan, 5000.0)

      Main->>MerchantService: processMerchantPayment(merchant, checking1, 300.0, "Order#12345 - Tech Gadgets")

      Main->>Bank: displayBankDetails()

      Main->>DatabaseConnection: disconnect()
      Main->>Server: stop()
  ```

- 18 Dec 2024. The King James Bible and all Harry Potters, each, are about $1M tokens (rounded off).
- 16 Dec 2024. Claude 3.5 Sonnet is _way_ ahead of competition on the [LMSYS Webdev Arena](https://web.lmarena.ai/leaderboard)
- 14 Dec 2024. [Roaming RAG](https://arcturus-labs.com/blog/2024/11/21/roaming-rag--rag-without-the-vector-database/) is an alternative to RAG without the vector database.
  - Applicable to **well structured documents**, e.g. technical books, manuals, etc.
  - Create a hierarchical outline of the document. [Code](https://github.com/arcturus-labs/llm-text-assistant/blob/48b71030992301f6d1631f23cfc643dca56835eb/backend/app/routes/api/tools.py)
    - Keep the top-level headings.
    - Preserve the first ~100 characters of opening text from each section.
    - Present the second-level headings, but without any subsidiary content.
    - Provide each section a unique 8 digit hex identifier.
    - Each section heading is followed by a guiding comment for the model: `Section collapsed - expand with expand_section("{identifier}").`
  - Then read the relevant sections as context to answer the question. [Code](https://github.com/arcturus-labs/llm-text-assistant/blob/48b71030992301f6d1631f23cfc643dca56835eb/backend/app/routes/api/conversation.py#L37)
- 12 Dec 2024. I surveyed the Gramener QA team on how they were using LLMs.
  - 7 used it for code generation (e.g. date extraction, regex generation)
  - 4 used it for learning (e.g. Robot Framework, how to define test cases, API usage)
  - 3 used it for formula generation (e.g. Excel)
  - 2 used it for test scenario identification
  - 2 used it for test data generation
  - 2 used it for comparing expected vs actual datasets
  - 1 used it for data type identification (e.g. given sample values, identify the data type).
  - 1 used it for evaluating resulting (LLM as a judge)
- 12 Dec 2024. I asked the Straive Digitalized Operations team what management techniques they would apply to manage LLMs. Here are the responses:
  - Ask better questions. (Prompt engineering.)
  - Create templates or step-by-step instructions. (Chain of Thought.)
  - Ask for multiple options and pick from the best options. (Agentic approach?)
  - Training. (Fine tuning.)
  - Price weaker responses lower. (Stratified model pricing?)
- 12 Dec 2024. "LLM hallucinations are a good thing. They are a sign of diversity, allowing us to improve the answer by exploring multiple paths." -- A colleague from Straive.
- 11 Dec 2024. Bedrock Llama models can't be directly called with their model names. You need to use their [inference profile names](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html), e.g. `us.meta.llama3-2-11b-instruct-v1:0` if the model is in a US region.
- 8 Dec 2024. When embedding using a `SentenceTransformer.encode(docs)` it's best if we embed with smaller `docs` and call it multiple times (rather than embedding more at once). On Colab T4, for [`gte-base-en-v1.5`](https://huggingface.co/Alibaba-NLP/gte-base-en-v1.5), when embedding 1,000 docs of up to 8K chars each, here is the **TOTAL** time it took, based on batch sizes (lower is better)
  - 1 doc per call: 10s
  - 2 docs per call: 13s
  - 4 docs per call: 19s
  - 8 docs per call: 23s
  - 16 docs per call: 32s
  - 32 docs per call: 40s
- 8 Dec 2024. Running embeddings without a GPU is _extremely_ slow. It takes ~2.4 seconds per string.
- 7 Dec 2024. ChatGPT uses several unusual unicode characters for citations. [Ref](https://github.com/sanand0/openai-conversations/blob/main/private-unicode-control-characters.md)
- 6 Dec 2024. The cost of intelligence is trending to zero. How do we plan for this? [Logan Kilpatrick](https://x.com/OfficialLoganK/status/1864508209769390238?t=OwjvTL6T55sh6VZGoMBtoQ)
  - If you are not planning for the price of intelligence to go to zero, the next 3-5 years are going to incredibly disruptive to your business / life.
  - The important but not stated caveat: consumer willingness to pay for AI is going to go up (a lot). It will be fascinating to watch consumer willingness, cost, and the amount of AI being used all move in different directions.
  - Everyone building things with AI has an economic incentive to limit the amount of AI because of cost, which inherent limits the value prop. This will change as intelligence goes up and cost goes down.
  - What this means is:
    - **Admin automation**: Administrative tasks vanish into background AI. Booking meetings, managing finances, or even planning family activities will require less thought.
    - **Hyper-personalization**: Individuals get tailor-made everything—from medical advice to product recommendations to daily schedules. Systems learn your quirks.
    - **AI co-brains**: AI co-worker “assistants support you at any moment. Productivity soars in knowledge work. “I’ll have my AI follow up becomes a normal response.
    - **Humanity valued more**: As AI handles rote tasks, humans move up the value chain, focusing on creativity, empathy, or the “last-mile decisions.
    - **New business models**:
      - AI experts as a service
      - Embedded AI Solutions
      - AI micro-services for smart-calls
      - Distributed AI
- 6 Dec 2024. [Arena Hard](https://huggingface.co/spaces/lmarena-ai/arena-hard-browser) is a set of hard prompts to test LLMs. [Here is the code and evaluation](https://github.com/lmarena/arena-hard-auto)
- 6 Dec 2024. LLMs can detect clear outliers easily. PROMPT: Which is the outlier in this dataset: (1,7), (2,7), (3,6), (4,6), (5,5), (6,1), (7,5), (8,3), (9,1), (10,1) (ANS: (6,1))
  - 🟢 GPT-4o on ChatGPT gets this. GPT-4o Mini on the API gets it too.
  - 🟢 Gemini Pro, Flash, Flash 8b gets this right straight away, without even thinking.
  - 🟢 Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3.5 Haiku get it on LLM Foundry. 🔴 Claude.ai, where it visualizes it and gets it wrong.
  - 🟢 Nova Micro, Lite, and Pro get it right.
  - 🟢 Llama 3.1 70b gets it right. 🔴 Llama 3.2 8b gets it wrong. Llama 3.2 70b, Llama 3.1 8b enter repetition.
- 4 Dec 2024. My notes on the Amazon Nova models. [More on Hacker News](https://news.ycombinator.com/item?id=42309121)
  - Nova Micro (3.75c/MTok) has the same cost as Gemini 1.5 Flash 8b but does not support images or documents.
  - Nova Lite (6c/MTok) has about the same cost as Gemini 1.5 Flash 002 and supports images and documents (but not audio or video). It may be a good alternative. But GPT-4o mini, which is 2.5X costlier, is much better. (It partly passes the `Gr brx vshdn Fdhvdu flskhu?` test which Nova Lite fails.)
  - Nova Pro (80c/MTok) is cheaper than Gemini 1.5 Pro and a lot cheaper than GPT 4o, but does not match their quality.
- 4 Dec 2024. LLMs are great at convincing you of wrong things. A danger and something to be wary of. [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3lcepstbuck2z)
- 4 Dec 2024. Fish eye text summary is a great way to read text while summarizing context. [Amelia Wattenberger](https://wattenberger.com/thoughts/fish-eye)
- 2 Dec 2024. What's a good text splitter library to use in JS?
  - LangChain: If you use it, use it with a simple wrapper decoupled from the implementation (e.g. your own parameters) that you can replace later.
    - Popular
    - Fit-for-purpose. MarkdownTextSplitter which inherits from RecursiveCharacterTextSplitter is what's needed in most cases.
    - Unstable
    - Poorly maintained [Python docs indicate version 0.0 but it is in 0.1](https://github.com/langchain-ai/langchain/tree/c2f1d022a2e55dfddd313e54d01250d3f64c6eb2/libs/text-splitters)
    - Under-maintained [Last update was 3 months ago, 13 Sep 2024](https://www.npmjs.com/package/@langchain/textsplitters)
  - LlamaIndex:
    - Popular
    - Not an ideal fit. MarkdownNodeParser does not support chunk size. SentenceWindowNodeParser does not capture Markdown headings.

## Nov 2024

- 29 Nov 2024. GPT-4o Audio supports tone control via XML tags like `<cough>...`, `<laugh>...`, etc. But at ~$15/hr of output, it's too expensive. [Ref](https://x.com/ilanbigio/status/1861913173432946808)
- 29 Nov 2024. Mridula's son gave a live commentary of what he was doing on Minecraft and ChatGPT gave him live evaluation and coaching. E.g. “Great strategy! Getting to the launch pad early can give you a huge mobility advantage. Making the bridge wider is also a smart move to prevent accidental falls. With this plan, you’re setting yourself up for success. This is a great way to interact with LLMs.
- 29 Nov 2024. Gemini's JSON mode returns JSON with keys in alphabetical order. I think. Emperical evidence. This is unlike OpenAI which explicitly returns the keys in the order specified.
  - To solve this, order the keys alphabetically.
- 28 Nov 2024. I installed the [OpenAI Desktop App](https://openai.com/chatgpt/desktop/) as well as [Claude for Desktop](https://claude.ai/download). They take up too much RAM (260MB and 750 MB respectively on startup - though this varies.) The ChatGPT web page takes ~100MB incrementally, so I wrote an [AutoHotkey script](https://www.autohotkey.com/) to switch to the first open (or recently closed) ChatGPT tab on [Brave](https://brave.com/).

  ```ahk
  #Space::  ; Trigger the script with Win + Space
      ; Switch to the first Brave browser window
      IfWinExist, ahk_exe brave.exe
      {
          WinActivate  ; Activate the first Brave browser window
          WinWaitActive, ahk_exe brave.exe
          Send ^+a  ; Press Ctrl+Shift+A to open the tab search
          Sleep, 100  ; Wait briefly to ensure the tab search is open
          Send ChatGPT  ; Type "ChatGPT"
          Send {Enter}  ; Press Enter to switch to the tab
      }
      else
      {
          MsgBox, Brave browser is not running.
      }
      return
  ```

- 27 Nov 2024. I tried [LIDA](https://microsoft.github.io/lida/) from Microsoft, after almost a year of its release. A few notes:
  - Just running `uvx lida ui --port 8080 --docs` works.
  - But I needed to use `export TCL_LIBRARY=C:/Users/Anand/AppData/Roaming/uv/python/cpython-3.13.0-windows-x86_64-none/tcl/tcl8.6` to point it to my TCL installation for charts to work. I also chose to `export OPENAI_BASE_URL=https://llmfoundry.straive.com/openai/v1`
  - I also chose to replace `gpt-3.5-turbo-0301` (the default model) with `gpt-4o-mini` in `lida/web/ui/component*`
  - It's quite impressive.
- 27 Nov 2024. OpenAI allows multiple system messages. I learned this browsing through the LIDA prompts.
- 27 Nov 2024. Anthropic's [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) lets any apps integrate with LLM Apps. LLM Apps are becoming the new operating system. Competitors, beware.
- 27 Nov 2024. I spoke at [Automating Data Visualizations using LLMs](https://www.meetup.com/data-vis-singapore/events/304516458/) at SUTD. Apparently, using LLMs to write code is much more common than writing code to use LLMs. I ran a quick quiz.
  - Have you used ChatGPT or any LLM? 35 / 35 raised their hands.
  - Have you written code using an LLM? 34 / 35 raised their hands. (I was impressed.)
  - Have you uploaded a spreadsheet to an LLM for analysis? 15 / 35 raised their hands.
  - Have you programmatically called an LLM API? 6 / 35 raised their hands.
- 27 Nov 2024. With LLMs, fostering innovation is a new path to profitability. Companies are increasing innovation team sizes. Productionizing that is the next. Some initiatives are:
  - Convert popular demos into starter kits
  - Create and evangelize trainings on solutions and solution techniques
  - Create larger pools of capacity to build innovation and productionize it
- 27 Nov 2024. [Andrew Ng Explores The Rise Of Al Agents And Agentic Reasoning | BUILD 2024 Keynote](https://youtu.be/KrRD7r7y7NY)
  - Innovation is now a path to production. People are able to build 20 prototypes at the cost of one and see which sticks
  - Machine learning is much faster. Things that took months now date days. But engineering and evaluations are only slightly faster and have become a bottleneck
  - A good analogy to zero shot prompting is to ask a person to write an entire essay without pressing backspace even once
  - Andrew scenes to align with the line chain definition of agentic workflow, which is about agents being able to craft their own control flows
  - People find it very easy to understand agentic workflows once they read through the code
  - Reflection or feedback is a useful agentic pattern
  - In multi-agent collaboration, it may be the same underlying model that is acting as different agents. But just like we find it useful for the same CPU to run multiple processes and each application is its own abstraction, agents of useful abstraction
- 27 Nov 2024. It's hard to summarize a large document using RAG. But you can directly add answers to such questions into the corpus, e.g. by adding a "summary" section, and other answers to common questions.
- 26 Nov 2024. [Ultravox](https://www.ultravox.ai/) lets you build voice agents at 5c/min = $3/hr (OpenAI is 6c input, 24c output). Or [clone their repo](https://github.com/fixie-ai/ultravox).
  - Idle call time is counted towards cost. So cost may be higher than OpenAI.
  - Voice cloning quality is average. Very distinctive voices are just partly identifiable.
  - Supports tool calls (from their server).
  - Their API is simple but the docs have minor errors (e.g. a trailing comma in the JSON, which leads to an error) reducing confidence.
- 26 Nov 2024. LLMs may be good at derived data generation. For example, given a database schema, what derived columns would be useful? What derived views would be useful?
- 26 Nov 2024. The O1 model does not have a mechanism to control the amount of tokens to spend on reasoning. DeepSeek R1 might, but the API is not out yet.
- 25 Nov 2024. The [OpenAI Desktop App](https://openai.com/chatgpt/desktop/) can interact with native applications, e.g. read from Terminal, VS Code, etc. This takes it on a path to becoming a copilot for ANY apps. Putting every copilot app and every LLM integration under threat.
- 25 Nov 2024. [Crawl4AI](https://crawl4ai.com/mkdocs/) and [Firecrawl](https://docs.firecrawl.dev/) are tools / libraries to convert websites into LLM Friendly Markdown and extract structured data using LLMs.
- 25 Nov 2024. Don't try and solve specific problems. Pass the entire context to an LLM and get a comprehensive solution. Most doctors, for example, ask specific search-like questions instead of uploading the entire case history and asking for a diagnosis, and perform workse than LLMs. [Ethan Mollick](https://www.oneusefulthing.org/p/getting-started-with-ai-good-enough)
- 22 Nov 2024. [DuckDB has an LLMs.txt](https://duckdb.org/duckdb-docs.md).
  Today, [38 repos on GitHub support it](https://github.com/search?q=path%3A**%2Fllms.txt&type=code)
- 22 Nov 2024. When identifying LLM use cases, it helps to tell LLMs what they can do. I use one or more of a list like below:
  - Core capabilities:
    - **Text Generation:** Produce coherent and contextually relevant text across various domains.
    - **Image Generation:** Create realistic images that match the style and content of a given reference image.
    - **Text to Speech:** Convert text into natural-sounding speech with appropriate intonation and rhythm.
    - **Speech to Text:** Transcribe and interpret spoken language.
    - **Vision:** Analyze and describe visual content from images.
    - **Video Analysis:** Summarize and extract information from video content.
    - **Text to Video:** Generate realistic (and surrealistic) videos from text descriptions.
    - **Function Calling:** Execute predefined functions or access external tools to perform specific tasks.
    - **Structured Output:** Generate structured outputs like JSON, XML, HTML, YAML, DSLs, etc.
    - **Tool Use:** Utilize external applications or APIs to enhance functionality.
    - **Code Generation:** Write and debug code snippets in various programming languages.
  - Cross-domain use cases:
    - **Summarization:** Understand and condense lengthy documents into concise summaries.
    - **Translation:** Convert text between multiple languages with high accuracy.
    - **Question Answering:** Provide precise answers to user queries based on provided information.
    - **Reasoning and Planning:** Solve complex problems and develop step-by-step plans.
    - **Personalization:** Tailor responses based on user preferences and historical interactions.
    - **Dialogue Management:** Engage in context-aware, multi-turn conversations.
    - **Data Analysis:** Interpret and generate insights from structured data.
    - **Content Moderation:** Identify and filter inappropriate or harmful content.
    - **Sentiment Analysis:** Detect and interpret emotions and opinions in text.
    - **Robotics Integration:** Interface with robotic systems for control and decision-making.
    - **Knowledge Retrieval:** Access and present information from vast datasets or knowledge bases.
    - **Creative Writing:** Generate poetry, stories, and other creative content.
    - **Educational Assistance:** Provide explanations and tutoring across various subjects.
    - **Ethical Reasoning:** Assess scenarios for ethical considerations and implications.
    - **Accessibility Support:** Assist users with disabilities through tailored interactions.
    - **Simulation and Modeling:** Create predictive models and simulate scenarios.
  - Domain-specific use cases:
    - **Legal and Medical Assistance:** Offer information and guidance within legal and medical domains.
    - **Gaming:** Generate narratives, dialogues, and scenarios for interactive entertainment.
    - **Scientific Research:** Aid in literature reviews, hypothesis generation, and data interpretation.
    - **Financial Analysis:** Analyze market trends and provide investment insights.
    - **Cultural Competence:** Understand and respect diverse cultural contexts in interactions.
    - **Security Applications:** Detect and respond to potential cybersecurity threats.
    - **Environmental Monitoring:** Analyze data related to environmental changes and sustainability.
    - **Healthcare Support:** Assist in patient monitoring, diagnostics, and personalized treatment plans.
    - **Supply Chain Optimization:** Enhance logistics and inventory management through predictive analysis.
    - **Customer Service:** Provide automated support and resolve customer inquiries.
    - **Market Research:** Analyze consumer behavior and market trends for business insights.
    - **Content Creation:** Generate articles, blogs, and marketing materials.
    - **Virtual Assistance:** Manage schedules, reminders, and personal tasks.
    - **Social Media Management:** Craft posts and engage with audiences across platforms.
    - **Human Resources:** Assist in recruitment, training, and employee engagement strategies.
    - **Event Planning:** Organize and coordinate events, including logistics and communication.
    - **Travel Planning:** Provide itineraries, booking assistance, and destination information.
    - **Real Estate:** Analyze property markets and assist in buying or selling decisions.
    - **Agriculture:** Monitor crop health and optimize farming practices through data analysis.
    - **Energy Management:** Optimize energy consumption and monitor renewable energy sources.
    - **Transportation:** Enhance route planning and traffic management systems.
    - **Urban Planning:** Assist in designing sustainable and efficient urban infrastructures.
    - **Disaster Response:** Provide real-time information and coordination during emergencies.
    - **Public Policy:** Analyze data to inform policy decisions and predict societal impacts.
    - **Art and Design:** Generate visual art concepts and assist in creative design processes.
    - **Music Composition:** Create original music pieces and assist in songwriting.
    - **Language Learning:** Facilitate language acquisition through interactive exercises and feedback.
    - **Historical Analysis:** Interpret historical data and provide insights into past events.
    - **Philanthropy:** Identify charitable opportunities and assess the impact of donations.
    - **Sports Analytics:** Analyze player performance and game strategies.
    - **Fashion:** Predict trends and assist in clothing design and merchandising.
    - **Culinary Arts:** Generate recipes and provide cooking guidance.
    - **Astronomy:** Analyze celestial data and assist in space exploration research.
    - **Psychology:** Offer insights into human behavior and mental health support.
    - **Linguistics:** Analyze language patterns and assist in translation studies.
    - **Archaeology:** Assist in artifact analysis and historical site interpretations.
    - **Literature Analysis:** Interpret literary works and provide critical analyses.
    - **Philosophy:** Engage in discussions on ethical dilemmas and existential questions.
    - **Mathematics:** Solve complex equations and assist in theoretical research.
    - **Physics:** Model physical phenomena and assist in experimental design.
    - **Chemistry:** Analyze chemical compounds and predict reactions.
    - **Biology:** Assist in genetic research and ecological studies.
    - **Geology:** Analyze geological data and assist in natural resource exploration.
    - **Meteorology:** Predict weather patterns and analyze climate data.
    - **Oceanography:** Study marine ecosystems and assist in ocean exploration.
    - **Anthropology:** Analyze cultural data and assist in ethnographic research.
- 22 Nov 2024. Style of writing impacts output style a lot. E.g. Adding an evil laugh makes Claude more creative. [Ethan Mollick](https://bsky.app/profile/emollick.bsky.social/post/3lbj766ewsc2c)
- 22 Nov 2024. For good structured mode output, we need good prompting.
  - Mentioning examples and schema and "JSON" helps. When providing examples, using [user, assistant] message pairs helps (I think it's because it's easier for the LLM to parse).
  - Using a {reasoning, answer} schema (with reasoning first) helps. Make reasoning concise and relevant [Ref](https://blog.dottxt.co/say-what-you-mean.html) [Arxiv](https://arxiv.org/html/2408.05093v1)
  - We already know code in JSON is not a great idea. [Ref](https://aider.chat/2024/08/14/code-in-json.html)
- 22 Nov 2024. Just adding 3 real examples and regurgitation helped GPT 4o play chess much better. Both techniques may have more general use in prompting. [Simon Willison](https://simonwillison.net/2024/Nov/21/llm-chess/#atom-everything)
- 20 Nov 2024. Alt Text will very likely be a browser feature. It's important for the Alt text to _flow_ as part of the content when listening to the page. Perhaps even become a part of the browser APIs like speechRecognition.
- 19 Nov 2024. Langchain suggests multiple levels of agentic behaviour. LLM Call < LLM Chain < LLM Rounter < State Machine < Autonomous [Langchain](https://blog.langchain.dev/what-is-an-agent/)
- 18 Nov 2024. Straive evaluated Gemini 1.5 Flash 002 and GPT 4o Mini for translation.
  - Portugese: Flash is better than GPT 4o Mini. BLEU Word Overlap is 65.5% > 64.6% and METEOR (Semantic) is 84.9% > 78.9%
  - Mandarin: Flash is better than GPT 4o Mini. BLEU Word Overlap is 25.0% > 15.9% and METEOR (Semantic) is 54.7% > 51.1%
- 17 Nov 2024. Recraft v3 supports vector (SVG) generation [Simon Willison](https://simonwillison.net/2024/Nov/15/recraft-v3/)
- 16 Nov 2024. Anthropic has single-plage docs for LLMs. [Condensed version](https://docs.anthropic.com/llms.txt) and [Full version](https://docs.anthropic.com/llms-full.txt)
- 12 Nov 2024. Gemini has an OpenAI compatible API. [Gemini Docs](https://ai.google.dev/gemini-api/docs/openai)
- 12 Nov 2024. Ethan Mollick says Claude is solving MBA case studies well. [x.com](https://x.com/emollick/status/1856161026238025835)
- 12 Nov 2024. LLMs pay a lot of attention to the first 6 tokens. [Ref](https://huggingface.co/blog/tomaarsen/attention-sinks)
- 12 Nov 2024. This is an interesting article on "UI in the age of Gen AI". [Ref](https://agao.substack.com/p/uiux-in-the-age-of-generative-ai)
- 12 Nov 2024. Google Open sourced Alphafold 3. [Repo](https://github.com/google-deepmind/alphafold3)
- 11 Nov 2024. Gemini transcription does not give accurate timestamps. Whisper does. But the quality of transcription is similar.
- 11 Nov 2024. Pass a complex data structure to Claude.ai and have it create an app to visualize it. It does well. [Simin Willison](https://x.com/simonw/status/1855819673482461216)
- 09 Nov 2024. [Zapier Actions](https://actions.zapier.com/) are an easy way to set up custom actions like GMail / Google Calendar APIs for GPTs, since [GPTs' callback URLs keep changing](https://community.openai.com/t/gpt-oauth-callback-url-keeps-changing/493236). But they fail often, and don't work on mobile. At least for me.
- 09 Nov 2024. LLM Vision Use Cases in manufacturing and earth sciences (via Shivku)
  - Automated geoscience image descriptions [Ref](https://www.linkedin.com/posts/paulhcleverley_geosciences-earthscience-geology-activity-7254037937674240000-pQab/)
  - Interpret Wind Turbine photos and charts, construction monitoring, equipment maintenance & charts [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-copilot-wind-siting-impact-kalyanaraman-wqe7c/)
  - Forecast weather based on cloud photos! [Ref](https://www.linkedin.com/pulse/cloud-typing-local-weather-forecasting-using-chatgpt-cam-shivkumar-1hhkc/)
  - Analyze thermal image of solar panels, electroluminescence images for warranty claims, ROI estimates from Google Sunroof rooftop images [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-part-1-copilot-solar-pv-kalyanaraman-ccszc/)
  - Corrosion detection in electricity towers, turbines, storage tanks, penstock. Interpret non-destructive test images [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-copilot-corrosion-shivkumar-kalyanaraman-onuic/)
- 09 Nov 2024. Google counts auto-completion when saying "25% of all the code is written by AI at Google". "It's a helpful productivity tool but it's not doing any engineering at all. It's probably about as good, maybe slightly worse, than Copilot." [YCombinator](https://news.ycombinator.com/item?id=42002212)
- 09 Nov 2024. Workflow for AI video creation: Use Meshcapade (meshcapade.com) to generate body movement of a 3D-rendered character. Pass that video to Runway's video-to-video model to generate any visual. Add music from Suno [Ref](https://www.linkedin.com/posts/peter-gostev_i-discovered-a-really-cool-new-workflow-for-activity-7260003053771141120-DJpS)
- 09 Nov 2024. Someone sorted the X and Y columns independently for regression. [Ref](https://stats.stackexchange.com/q/185507)
- 08 Nov 2024. Here is a prompt for audio transcription using Gemini. [Ref](https://gist.github.com/rajivsinclair/8fb0371f6eda25f9e5cc515cd77abd62)
  - Transcription: Accurately transcribe the audio clip in the original language. Include all spoken words, fillers, slang, colloquialisms, and any code-switching instances. Pay attention to dialects and regional variations common among immigrant communities. Do your best to capture the speech accurately, and flag any unintelligible portions with [inaudible].
  - Translation: Translate the transcription into English. Preserve the original meaning, context, idiomatic expressions, and cultural references. Ensure that nuances and subtleties are accurately conveyed.
  - Capture Vocal Nuances: Note vocal cues such as tone, pitch, pacing, emphasis, and emotional expressions that may influence the message. These cues are critical for understanding intent and potential impact.
- 08 Nov 2024. Here are some approaches to large-scale classification of medical codes. [ChatGPT](https://chatgpt.com/share/672dd476-7694-800c-a150-f3de912788ef)
  - Fine-Tuning LLMs on Medical Data: Enhance LLMs by training them on medical datasets, such as clinical notes and discharge summaries, to improve their understanding of medical terminology and context.
  - Multi-Agent Frameworks: Implement a multi-agent system that simulates real-world coding processes with distinct roles (e.g., patient, physician, coder, reviewer, adjuster). Each agent utilizes an LLM to perform specific functions, enhancing interpretability and reliability. [ArXiv](https://arxiv.org/abs/2406.15363)
  - Retrieve-Rank Systems: Develop a two-stage system where the LLM first retrieves potential ICD-10 codes and then ranks them based on relevance, improving precision in code assignment. [ArXiv](https://arxiv.org/abs/2407.12849)
  - Embedding-Based Approaches: Use LLMs to generate embeddings for ICD-10 codes and medical texts, facilitating the matching of texts to appropriate codes through similarity measures. [GitHub](https://github.com/kaneplusplus/icd-10-cm-embedding)
  - Hierarchical Classification: Leverage the hierarchical structure of ICD-10 codes by first classifying texts into broader categories before assigning specific codes, reducing complexity and improving accuracy. [ArXiv](https://arxiv.org/abs/2310.06552)
  - Two-Stage Verification Models: Combine LLMs with verification models, such as Long Short-Term Memory (LSTM) networks, to validate and refine the codes suggested by the LLM, balancing recall and precision. [ArXiv](https://arxiv.org/abs/2311.13735)
  - Also, a mixture of models approach might work. Feed any existing NLP model / rules as a second opinion.
- 08 Nov 2024. GraphRAG is better if data is naturally graph-structured. Else, it's slow and fills up the context window with even vaguely related stuff. Vigneshbabu, AMAT.
- 08 Nov 2024. ChatGPT for Windows desktop supports real-time voice and a global shortcut (Alt Space).
- 08 Nov 2024. [uithub](https://uithub.com) converts GitHub repos to Markdown. Just replace "g" in "github.com/..." with "u". [Example](https://uithub.com/gramener/asyncllm)
- 06 Nov 2024. [Docling](https://github.com/DS4SD/docling) by IBM converts PDF, DOCX, etc. to Markdown. Like [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/) but better.
- 04 Nov 2024. [OmniParser](https://microsoft.github.io/OmniParser/) is great at parsing screenshots and identifying bounding boxes.
- 04 Nov 2024. [Recraft.ai](https://www.recraft.ai/) is currently SOTA in text to image. It's fairly impressive and could be a good alternative to Figma.
- 04 Nov 2024. [Zed.dev](https://zed.dev/) is an AI code editor by the creators of Atom. It's written in Rust and is blazing fast. It has native AI integration.
- 04 Nov 2024. Artificial Analysis has a bunch of new leaderboards and arenas.
  - Open AI TTS leads the [TTS Leaderboard](https://artificialanalysis.ai/text-to-speech/arena?tab=Leaderboard). ElevenLabs is a bit behind.
  - Recraft V3 > Flux 1.1 leads [Text to Image Leaderboard](https://artificialanalysis.ai/text-to-image/arena?tab=Leaderboard)
- 04 Nov 2024. [Hertz-Dev](https://github.com/Standard-Intelligence/hertz-dev) is an open source realtime voice chat model. But it doesn't fit in Google Colab T4's RAM
- 04 Nov 2024. Chain of Thought reduces performance where thinking makes humans worse. [Ref](https://arxiv.org/abs/2410.21333). Specifically:
  - Artificial grammar learning
  - Facial recognition
  - Classifying data that has exceptions
- 04 Nov 2024. [Creating a LLM-as-a-Judge That Drives Business Results](https://hamel.dev/blog/posts/llm-judge/) by Hamel Husain.
  - Get THE domain expert (or approver) as the tester.
  - Create a dataset that is DIVERSE.
  - Covers EACH combination of:
    - Features
    - Scenarios: e.g. multiple matches, no match, ambiguous request, invalid/incomplete input, unsupported feature, system error
    - Persona: e.g. new user, expert user, non-native speaker, busy professional, technophobe, elderly user
  - Generate data using existing data + synthetic data for each SPECIFIC combination of the above
  - Evaluate based only on PASS/FAIL with a CRITIQUE detailed enough for a new employee. Include:
    - Nuances: Something a failed response did well or a passed response didn't quite do well
    - Improvements: Suggest how model can improve
  - Build an SPA to make it easy for the domain expert to review
- 04 Nov 2024. LLMs can be made to unlearn (copyright material) better by identifying components related to the knowledge to unlearn and applying a larger learning rate to these while leaving other parts unchanged. As opposed to low learning rates for all components. [Ref](https://arxiv.org/abs/2410.16454)

## Oct 2024

- 31 Oct 2024. [VibeCheck](https://arxiv.org/abs/2410.12851) can predict a model based on its vibes 80% of the time.
- 31 Oct 2024. [/llms.txt](https://www.answer.ai/posts/2024-09-03-llmstxt.html) is a proposal to standardize `/llms.txt` files as a way to share LLM prompts.
  - [Jina AI Meta Prompt](https://docs.jina.ai/) is an example
  - [Remotion system prompt](https://www.remotion.dev/docs/system-prompt) is an example
  - <https://docs.fastht.ml/llms-ctx.txt>
  - <https://docs.fastht.ml/llms-ctx-full.txt>
- 29 Oct 2024. [F5-TTS](https://github.com/SWivid/F5-TTS) clones voices with just 15-second samples.
- 28 Oct 2024. [NotebookLlama](https://github.com/meta-llama/llama-recipes/tree/main/recipes/quickstart/NotebookLlama) is an open source podcast generator like NotebookLM
- 28 Oct 2024. Pragmatic Podcast (I forgot which one)
  - Automate changelogs for your codebases. Convert past commits into attractive release notes automatically
  - AI is going to be the consumer of many tools and logs. Build converters for these
  - Speed of validation such as linting, testing, etc. will allow LLMs to iterate faster and WILL become more important
- 27 Oct 2024. Via Soumya Ranjan
  - Vision embedding is useful in agile modeling
  - Vision embedding models with SAM, Grounding Dino by meta, Alibaba does good stuff
  - Vision embedding is more useful in batch than real time
  - Embedding subtraction with vision embedding models like Dino
- 27 Oct 2024. AI code editors are not good with large code bases today. Keep the refactoring exercises to below 1000 lines. Also evaluate the ease of setting it up locally
- 27 Oct 2024. Deepseek Janus is a 1.3b model that can generate both text AND images (and also supports vision)
- 27 Oct 2024. [Cohere Multimodal Embed v3](https://cohere.com/blog/multimodal-embed-3) is available on Azure.
- 27 Oct 2024. Elevenlabs lets you create voices with a prompt. No need to even clone one!
- 27 Oct 2024. Runway Act One creates expressive character performances
- 26 Oct 2024. [LanceDB](https://lancedb.github.io/lancedb/) is a more scalable alternative to ChromaDB. Written in Rust. Does not require a separate HSNW library.
- 26 Oct 2024. Meta has a bunch of image embedding models:
  - [DINOv2](https://github.com/roboflow/notebooks/blob/main/notebooks/dinov2-image-retrieval.ipynb) creates image embeddings (Apr 2023)
  - [ImageBind](https://research.facebook.com/publications/imagebind-one-embedding-space-to-bind-them-all/) is an embedding model for text, images, audio, and more (Jun 2023)
- 24 Oct 2024. Gemini has a [code execution API](https://ai.google.dev/gemini-api/docs/code-execution)!
- 23 Oct 2024. Anthropic's new Sonnet model is even better at code. Plus it has the ability to extract coordinates from images. [Ref](https://www.anthropic.com/news/3-5-models-and-computer-use)
- 22 Oct 2024. Gemini sort-of supports diarization. [Ref](https://cloud.google.com/vertex-ai/generative-ai/docs/prompt-gallery/samples/classify_audio_diarization). I tried it and it's OK but not perfect.
  - #IMPOSSIBLE LLMs cannot diarize reliably yet. (Gemini just guesses the speaker differences.)
- 20 Oct 2024. Replit is good for hobbyists, Cursor for developers, and Pythagora & Bolt for non-developers building business apps. [Ref](https://youtu.be/8fEdaXwdDl8)
- 17 Oct 2024. AI seems to be slowing down apprenticeship since experts would rather use an AI than train an apprentice. Example: Robotic surgery. [Ref](https://x.com/emollick/status/1834228159190806552)
- 13 Oct 2024. OpenAI has a prompt generator. Currently it uses a meta-prompt but may later move to DSPy or Gradient Descent. [Ref](https://platform.openai.com/docs/guides/prompt-generation)
- 13 Oct 2024. Great demo of using the Realtime API to read the latest Hacker News. [Ref](https://x.com/nickscamara_/status/1842243883842904529)
- 13 Oct 2024. LLMs have reached the point where they can show a world, like CounterStrike, in near real time. [Ref](https://x.com/emollick/status/1845216321723826404)
- 9 Oct 2024. Reverb ASR does diarration as well as transcription. It seems the state of art right now.
- 9 Oct 2024. Gemini Flash and Gemini Flash 8b can be fine-tuned at zero cost. Inference is at the same price! [Ref](https://ai.google.dev/pricing)
- 8 Oct 2024. Flux 1.1 Pro is released. I tried my Calvin & Hobbes test on it. Not great. ImageGen3 is better, ChatGPT is the best. [Ref](https://www.s-anand.net/blog/image-generation-gets-better-at-comics/)
- 8 Oct 2024. Revisiting text to speech models. Nothing much has changed since July 2024.
  - OpenAI TTS: $15/1M chars [Ref](https://openai.com/api/pricing/)
  - Deepgram Aura: $15/1M chars [Ref](https://deepgram.com/pricing)
  - Azure AI Speech: $15/1M chars [Ref](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/)
  - Google TTS Neural2: $16/1M chars [Ref](https://cloud.google.com/text-to-speech/pricing?hl=en)
  - AWS Polly Neural TTS: $16/1M chars [Ref](https://aws.amazon.com/polly/pricing/)
  - Cartesia Pro: $50/1M chars [Ref](https://www.cartesia.ai/pricing)
  - Elevenlabs Scale: $300/1M chars [Ref](https://elevenlabs.io/pricing)
- 6 Oct 2024. [Late chunking](https://jina.ai/news/late-chunking-in-long-context-embedding-models/) is an interesting approach to adding context to embeddings. (I don't understand it, but it's cheap and effective.)
- 6 Oct 2024. [DeepInfra offers embedding models as APIs](https://deepinfra.com/models/embeddings) at about 0.5 to 1 cent per MTok in an OpenAI compatible API.
  It also supports [text-to-image models](https://deepinfra.com/models/text-to-image) like flux.dev and
  [speech recognition models](https://deepinfra.com/models/automatic-speech-recognition) like Whisper.
- 6 Oct 2024. [Jake Heller](https://www.youtube.com/watch?v=eBVi_sLaYsc):
  - "One of the things we learned is (an LLM app) after it passes passes frankly even 100 tests, the odds that it will do, on any random distribution of user inputs, the next 100,000 100% accurately is very high."
- 6 Oct 2024. OpenAI's O1 is like Daniel Kahneman's System 2 thinking - as against other LLMs' System 1 thinking.
- 6 Oct 2024. [Continue.dev](https://www.continue.dev/) is another AI coding editor. It supports OpenRouter. So now I have heard good things about:
  - Github Copilot
  - Cursor
  - Cody
  - Continue.dev (supports OpenRouter)
  - Aider (supports OpenRouter)
  - Maybe:
    - Codeium
  - Not:
    - Amazon Q Developer
- 4 Oct 2024. [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35) by Andrej Karpathy.
  - This is fundamentally altering the programming paradigm by which we iterate on our software, as the teams split in two:
    - the 2.0 programmers (data labelers) edit and grow the datasets, while
    - a few 1.0 programmers maintain and iterate on the surrounding training code infrastructure, analytics, visualizations and labeling interfaces.
  - Adaptive UI ideas:
    - Adaptive Fields: Show only required fields based on what the user field so far.
    - Smart Inputs: Dropdowns and auto-complete based on user's context.
    - Smart Themes: Change font size, contrast, theme guessing the user's age and preferences.
    - Dynamic Menus: Show what they might need to do next. Like Nokia's right button, but using LLMs.
    - Smart Tooltips: Check what the user's doing (delays, confusions, previous clicks, current actions) and show relevant tips.
    - Personalized Layout: Show only the relevant sections of the app. E.g. based on what they're doing.
    - Smart Charts: Create the right chart that solve the user's question.
  - Adaptive Back-end
    - Dynamic APIs: Create endpoints on the fly based on user needs
    - Dynamic Indexing: Create & update indices on the fly based on user needs
    - Dynamic Schema: Create & update schema on the fly based on user needs
    - Dynamic Migration: Migrate to a new database or OS or language as required
    - Dynamic Queries: Create SQL/NoSQL queries to solve the user problem
    - Dynamic RBAC: Figure out who needs permissions and why. Add OR REMOVE access as required
    - Dynamic Logging. Log what's required. Explain why it's logged and what's happening. Fix code that raised the error
    - Dynamic Caching. Cache what's likely to be required. Evict what may not be required. Figure out cache keys.
- 4 Oct 2024. [Aider LLM Leaderboards](https://aider.chat/docs/leaderboards/) show which LLMs code better. As of now,
  - o1-preview > claude-3.5 sonnet on code editing
  - claude-3-opus > claude-3.5-sonnet on code refactoring
  - deepseek-coder-v
  - gpt-4o-mini sucks.
- 3 Oct 2024. OpenAI Evals and Distillation has a clever design. They just convert filtered history to .JSONL files that can be an input to either.
- 3 Oct 2024. [Speak](https://www.speak.com/) is a language learning app based on OpenAI's Realtime API.
- 3 Oct 2024. OpenAI's Realtime API can be used in a text-to-text chat mode without needing to send the entire context. If the pricing works out right, this can be far cheaper than sending the entire conversation context. [Ref](https://news.ycombinator.com/item?id=41715725)
- 3 Oct 2024. Matching addresses with just embeddings works well. Combine it with simple hard rules. [Ref](https://www.dbreunig.com/2024/09/27/conflating-overture-points-of-interests-with-duckdb-ollama-and-more.html)
- 3 Oct 2024. [OpenAI's prompt caching works for images too -- both linked and embedded](https://cookbook.openai.com/examples/prompt_caching101)
- 3 Oct 2024. Quotes on Graph RAG from a Generative AI WhatsApp Group.
  - "Damn so literally nobody uses Graph RAG yet. Good to know." ~Sumba
  - "A big four consulting firm uses GraphRAG to retrieve related documents and excerpts from governance and compliance docs." ~Vinayak Hegde (Microsoft)
  - "Graph RAG is expensive and unnecessary in most of the cases." ~Utkarsh Saxena
- 3 Oct 2024. ChatGPT's advanced mode includes: "...you can use various regional accents and dialects." [Ref](https://www.reddit.com/r/OpenAI/comments/1fp1fes/the_system_prompt_of_advanced_voice_mode_it_can/) [Source](https://x.com/deedydas/status/1839860410914353225)
  - But the API can "laugh, whisper, and adhere to tone direction." [Ref](https://platform.openai.com/docs/guides/realtime)
- 3 Oct 2024. Hume API (INR 6/min) is far cheaper than OpenAI's real-time chat (6c/min input + 24c/min output)
- 3 Oct 2024. Devika is an open-source clone of Devin.
- 1 Oct 2024. Ethan Mollick feels Claude 3.5 Sonnet is better at style and critiquing blog posts than OpenAI's o1 (which is better at reasoning.)
- 1 Oct 2024. News is going to be crazily disrupted again with voice mode. I can just listen to the topic I want

## Sep 2024

- 29 Sep 2024. "You have to put in a lot of work to become productive at AI coding." Simon Willison
- 28 Sep 2024. [PyMuPDF4LLM](https://pymupdf.readthedocs.io/en/latest/pymupdf4llm/) can convert PDFs to Markdown. It handles tables, too.
  - 04 Oct 2024. [PDF-Extract-Kit](https://github.com/opendatalab/PDF-Extract-Kit) does PDF layout, formula, table, and OCR extraction using various models.
  - 04 Oct 2024. [llmsherpa](https://github.com/nlmatics/llmsherpa) extracts PDF layout, tables, not OCR
- 27 Sep 2024. When evaluating feasibility of technology with LLMs always ask for multiple options and pick from those. [Simon Willison](https://youtu.be/6U_Zk_PZ6Kg?t=4444)
- 27 Sep 2024. [Gemini supports audio natively](https://ai.google.dev/gemini-api/docs/audio?lang=rest)
- 27 Sep 2024. Google Vertex AI has an [OpenAI compatible API](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/call-vertex-using-openai-library) but it works only for some models. Anthropic and Gemini are not compatible.
- 22 Sep 2024. Anthropic's [Introducing Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval) says:
  - Use BM25 in addition to embeddings to match rare terms (e.g. identifiers)
  - Add a context to each chunk's metadata (generate it with a cheap LLM) and pass it to the summarizing LLM
  - Reranking helps with cost AND accuracy. Use [Cohere](https://cohere.com/rerank) or [Voyage](https://docs.voyageai.com/docs/reranker)
- 22 Sep 2024. [Sentient](https://github.com/sentient-engineering/sentient) lets you control the browser via Python in natural language
- 21 Sep 2024. E2E is a cheap GPU hosting provider for India. About Rs 100/hr for a V100 16GB
- 21 Sep 2024. Jetson NVIDIa is like Raspberry Pi with a GPU! But it's expensive.
- 21 Sep 2024. [Sarvam.ai offers Indic text to speech](https://www.sarvam.ai/apis/text-to-speech)
- 20 Sep 2024. Ollama 0.2 can handle [concurrent requests](https://github.com/ollama/ollama/releases/tag/v0.2.0) with only a little additional memory. (So can vLLM and DeepSpeed.)
- 20 Sep 2024. Prompt engineering for code generators:
  - [Claude Artifacts Prompt](https://gist.github.com/dedlim/6bf6d81f77c19e20cd40594aa09e3ecd#file-claude_3-5_sonnet_artifacts-xml)
  - [Val.Townie system prompt](https://gist.github.com/simonw/d8cc934ad76b3bba82127937d45dc719). Good example of how to create
  - [Cursor editing](https://llmfoundry.straive.com/history#?app=cursor&model=&t=1725629416223543)
  - [Cursor debugging](https://llmfoundry.straive.com/history#?app=cursor&t=1726379294138938)
  - [Cursor conversation](https://llmfoundry.straive.com/history#?app=cursor&model=&t=1726368766109438)
- 20 Sep 2024. XML tags seem best to structure prompts across LLMs.
  - [Claude](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
  - [OpenAI](https://platform.openai.com/docs/guides/prompt-engineering/strategy-write-clear-instructions)
  - [Gemini](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/structure-prompts)
- 20 Sep 2024. [Instructor prompts](https://www.moreusefulthings.com/instructor-prompts) by Ethan Mollick help teach better
- 17 Sep 2024. [Segmind's Hallo](https://www.segmind.com/models/hallo) lets you animate a face to an audio clip
- 17 Sep 2024. [VoidEditor](https://voideditor.com/) aims to be an open source Cursor alternative
- 17 Sep 2024. [Video of ChatGPT o1 + mini reproducing the methodology of a paper](https://youtu.be/M9YOO7N5jF8) by writing the code - in 6 iterations. [Here's the repo](https://github.com/kylekaba/chatgpt-01-youtube). Prompts:
  1. You are a Python and Astrophysics expert who is tasked with helping me on my research project. Please read the following methods section of this research paper and re-create the Python code described.
  2. Thank you, this code looks really nice. I don't have any actual data or noise cube ready at the moment, but could you please generate some test data that can be used in the code you just wrote: {CODE}
  3. Hi. thank you for writing the code! Unfortunately, it seems that I get an error when I try to run it. I've attached the error message below, can you please refine the code so that the error is resolved? {ERROR}
  4. Thank you, but when attempting to run the code that you provided, I received the following error: {ERROR}
  5. Hello, thank you for the code. but now I get the following error pasted below: {ERROR}
  6. Thank you, I think we are getting close to a final solutiom I still get an error, which I've pasted below: {ERROR}
- 15 Sep 2024. Prompt engineering tip: Tell LLMs another AI wrote code. Else they will agree with you!
- 13 Sep 2024. [Hume](https://app.hume.ai/) provides a voice-to-voice model (EVI 2) that handles emotions at 7 cents/minute.
- 12 Sep 2024. [OpenArt workflows](https://openart.ai/workflows/home) has image generation workflows
- 12 Sep 2024. [Pixtral](https://huggingface.co/mistral-community/pixtral-12b-240910) seems quite [good at OCR](https://x.com/swyx/status/1833934254834942047)
- 11 Sep 2024. LLM coding
  - Makes you more ambitious
  - Lets you code without stress. (Just pass it the error and have it fix it. Or find another approach)
  - Is unlimited. You can run dozens of agents in parallel
- 10 Sep 2024. Simon Willison's crowdsourced list of [prompt engineering hacks](https://x.com/simonw/status/1832944559162269990)
- 07 Sep 2024. I was testing out different video LLMs:
  - [Luma Labs](https://lumalabs.ai/) lets you create videos from text
  - [Runwal ML](https://runwayml.com/) lets you create video from an image + text
  - [Viggle](https://viggle.ai/) lets you add images to a video or move a character in a certain way
  - [Veed.io](https://www.veed.io/) is a video editor that offers AI video editing features
  - [Deepmotion](https://www.deepmotion.com) generates 3D animations from video
  - Wonder Dynamics may be similar to DeepMotion
- 07 Sep 2024. I tested out a few audio LLMs:
  - [Suno](https://suno.com/) is fast, has a better UI, lots of examples
  - [Udio](https://www.udio.com/) is slow, poor UI, creates richer music
- 07 Sep 2024. [Reflection 70b is one of the top models now, and is open source!](https://x.com/mattshumer_/status/1831767014341538166). It works by making the LLM reflect on its answer inside `<reflection>...</reflection>` tags.
- 05 Sep 2024. The best diarization model today is [whisperX](https://github.com/m-bain/whisperX). Run on [Colab T4 GPU](https://colab.research.google.com/drive/1I2hwOqb08s_otWIUAmPRmb3EA9Z4bCtF) with:

  ```bash
  pip install git+https://github.com/m-bain/whisperx.git
  whisperx --hf_token $HUGGINGFACE_TOKEN --diarize --language en --batch_size 4 --model base --compute_type int8 $FILENAME.mp3
  ```

- 05 Sep 2024. [Scale's SEAL Leaderboards](https://scale.com/leaderboard) seem fairly good.
- 05 Sep 2024. [coedit-xxl](https://huggingface.co/grammarly/coedit-xxl) is Grammarly's fine-tuned google/flan-t5-xxl model run on [CoEdit](https://github.com/vipulraheja/coedit) - text editing dataset. It's mainly for single-line editing, though, and far from a full-document or full-email zero-shot editor.

## Aug 2024

- 31 Aug 2024. LLMs are so good that they can simulate Doom in real time. [gamengen](https://gamengen.github.io/)
- 31 Aug 2024. [Val.town's code generation system prompt](https://gist.github.com/simonw/d8cc934ad76b3bba82127937d45dc719) uses <https://maxm-imggenurl.web.val.run/the-description-of-your-image> to dynamically generate images
- 27 Aug 2024. [Cursor uses speculative edits](https://www.cursor.com/blog/instant-apply) and a variety of other techniques to speed up code editing.
- 26 Aug 2024. [ChatGPT does a better job at cartoon generation than even Flux.1](https://www.s-anand.net/blog/image-generation-gets-better-at-comics/)
- 23 Aug 2024. [An 8-year old uses Cursor.ai to code](https://x.com/rickyrobinett/status/1825581674870055189)
- 23 Aug 2024. [Hermes 3 has special tokens](https://www.arxiv.org/pdf/2408.11857) like `<SCRATCHPAD>, <RESTATEMENT>, <THOUGHT_*>, <PYDANTIC_SCHEMAS>, <SCHEMA_*>, <REASONING>, <INNER_MONOLOGUE>, <PLAN>, <EXECUTION>, <REFLECTION>, <THINKING>, <SOLUTION>, <EXPLANATION>, <UNIT_TEST>`, etc. This extends the capability dramatically.
- 20 Aug 2024. [Lumentis](https://github.com/hrishioa/lumentis) creates docs from transcripts and text
- 19 Aug 2024. [LLMs write worse code in JSON than Markdown](https://aider.chat/2024/08/14/code-in-json.html)
- 19 Aug 2024. [Copilot's system prompt](https://labs.zenity.io/p/stealing-copilots-system-prompt) calls a `search_enterprise(query: str)` tool and a `hint(M365Copilot_language: str)` tool as assistants.
- 19 Aug 2024. [Anthropic Prompt Caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) is 90% cheaper to use and 25% costlier to create. So if there's a 27% chance it'll be re-used, cache it.
- 12 Aug 2024. Code agent frameworks to explore:
  - [Cognition](https://cognition.ai/)
  - [Factory](https://factory.ai/)
  - [Codegen](https://codegen.com/)
- 12 Aug 2024. Some interesting multi-modal generation models / tools to explore:
  - Flux for open-weights image generation
  - Runway Gen 3 for video generation
  - Suno for music generation
- 10 Aug 2024. Embedding models can be fine-tuned. Example: #TODO
- 08 Aug 2024. Agentic RAG (Ravi Theja, LlamaIndex)
  - RAG via top-k retrieval fails with
    - summarization => need to read all chunks
    - comparison: compare product X vs Y => need to split and re-combine
    - structured analytics. e.g. most expensive employees => Text2SQL first
    - multi-part questions. e.g. Tell me about speed of model X AND cost of model Y and recommend => need to split and re-combine
  - RAG failures: It's single shot. No query planning. No tools. No correction. No memory.
  - Agents that help in RAG
    - Route to the right tool
      - E.g. retrieve via vector top-k search or vector summary search or keyword search or combination?
    - One-shot query planning
      - E.g. Break query into multiple specific queries. RAG those. Then combine. #TRY - maybe in DocSearch
    - Tool use
      - E.g. Schema retrieval, Text2SQL, Calendar, Chat, APIs, Search, etc.
  - Agent orchestration
    - ReAct: An agent reasoning loop. Reason + Act. {Thought, Action, Action Input, Observation}\*.
      - [Orchestrate tools with a prompt](https://docs.llamaindex.ai/en/stable/examples/agent/react_agent/)
    - Multi-agent task solver: [Llama agents](https://github.com/run-llama/llama-agents)
      - Instead of a single agent loop, use different agents. Also allows parallelization
      - Allow services to register. (MS TaskWeaver stores tool descriptions in YAML)
  - [LlamaHub Tools](https://llamahub.ai/?tab=tools) has ideas for agents
- 07 Aug 2024. Notes on LLM Fine-Tuning
  - Rouge 2 and Bleu and such metrics are NOT good. Create you own benchmarks
  - Non-PEFT fine tuning needs 6X GPU RAM. Optimizer states, Gradient, Activations are the overhead. PEFT is about tuning a subset of parameters.
  - LORA adds additional weights without updating the model. It's a low rank matrix multiplication. You can change these adapters in runtime. Saves space. Fast to train
  - Quantization: Stick to bitsandbytes or AWQ (may be a bit better)
  - QLORA = Quantization + LORA
  - Predibase has open-sourced Lora Adapters in "Lora Land". Existing adapters are pretty good.
    - ghcr.io/predibase/lorax:main Docker image works on Docker compose to run locally. `devices:` on Docker Compose lets you specify NVIDIA GPU devices
    - Locust is a HTTP load testing lib in Python
  - Techniques for inference optimization
    - Dynamic adapters: Loads right LORAX adapters WHEN a request comes in
    - Multi-adapter batching: Process all inputs in parallel on the same GPU, but different users are post-processed using different adapters
- 07 Aug 2024. Notes from a 4-hour flight:
  - [What We’ve Learned From A Year of Building with LLMs](https://applied-llms.org/)
    - Strategy
      - IS IT TOO HARD/EXPENSIVE? Log it. LLMs are getting cheaper and better.
      - WILL OPENAI BUILD IT? If so, wait for it instead of building.
      - HAS A STARTUP BUILT IT? If so, use it instead. It's a generic use case there's no point re-inventing.
      - FOCUSED USE CASES over generic. Build trust by starting small.
      - Tools for LLM Ops (feedback): LangSmith, Log10, LangFuse, W&B Weave, HoneyHive #TRY
      - Human in the Loop is about humans evaluating model outputs. That's different from AI in the loop, human in the center, where AI accelerates human output (like Github Copilot)
    - Operations
      - CHECK EMBEDDINGS DRIFT over time. Users might be input-ing different things than before.
      - LOG AND REVIEW everything.
      - [Instructor](https://github.com/jxnl/instructor) coaxes structured output from LLM APIs. #TRY
      - IMPLICIT FEEDBACK collection is easy. Just let users edit stuff. #TRY
    - Tactical
      - Try n-shot prompting (n=5-12) before bigger models. #TRY
      - Always structure for output: Markdown, XML/HTML tags.
      - Combine RAG with Keyword search. It reduces user frustration in edge cases.
      - Prefer multiple small prompts to one big prompt. Do X. Then Y. Then Z.
      - Jitter prompts for diversity beyond temperature.
      - LLM-as-judge works better when comparing outputs (not rating 1 output). Keep length similar (LLMs prefer wordiness). Swap order and compare. Allow for ties. Ask for reason FIRST.
  - [Hermes: A Text-to-SQL solution at Swiggy](https://bytes.swiggy.com/hermes-a-text-to-sql-solution-at-swiggy-81573fb4fb6e)
    - "Hermes performed significantly better for charters with well-defined metadata and a relatively smaller number of tables."
    - "We collect feedback on the accuracy of the returned query from stakeholders directly within the Slack bot."
  - [How I use AI](https://nicholas.carlini.com/writing/2024/how-i-use-ai.html) and "Replacing my right hand with AI"
    - EMBED in every app/workflow. E.g. Auto-fix spellings. Auto-review code. Auto-ask LLM on errors and apply patch! Auto-search for answer, assess, continue.
    - PERSIST. Stick with the LLM to the end. Don't fix it yourself. It's faster. #TRY
      - INTERVENE FAST. If an LLM can't solve it by itself in 2 tries, it needs in-depth help.
    - APP-IFY one-off tasks. Disposable tools. "Write web-app to convert JSON to tab-delimited." "Extract fields as a table." "Diff JSON." #TRY
    - BEST language/frameworks preferred. CUDA in Python. Rust. C. Raspberry Pi. Arduino. Bluetooth. Modern ESM/JS. #TRY
    - TEACH examples. "Here's the LLM Foundry API." "Here's how to use gramex.data."
    - DUMP entire code. Models can handle it. Refactoring to SQLAlchemy 2, Pandas 2. API Documentation. Test case generation. #TRY
    - ASK for features & packages. Docker without root access. GPU access inside docker. Windows CLI-only C++ compiler.
    - TEST CASE writing. #TRY
    - SPEC IN DETAIL. Use these libraries. Write like this: code example.
    - SPEC _USAGE_ in detail.
      - "I will just pipe it into sqlite", or "I will just run `ffmpeg -i filename [YOUR OPTIONS]`.
      - Describe the UI, API input/output, data structure, and internal data structure.
    - HELP on usage. "ffmpeg to get audio.mp3".
  - [My benchmark for large language models](https://nicholas.carlini.com/writing/2024/my-benchmark-for-large-language-models.html)
    - LLM(text) is a useful function to have in JS and Python too. Useful as a simple `pip install llmfoundry`
    - Allow images, files in LLM()
  - Current list of #IMPOSSIBLE (or hard) things for LLMs
    - Translate technical documents to Dutch -- because they don't understand the technical terms well
    - Translate large documents (JSON to XML, English to Chinese, Python to Rust, Wrong to right spelling) -- because the output tokens are limited
- 07 Aug 2024. [micro-agent](https://github.com/BuilderIO/micro-agent) generates test cases first when asked to build an app. Then it iterates until the test cases pass.
- 04 Aug 2024. [Deepseek Context Caching](https://platform.deepseek.com/api-docs/news/news0802/) reduces price to 1.4 cents/MTok for portions of chat messages that are repeated. That's a 10X reduction for long conversations!
- 03 Aug 2024. [Assisted generation](https://huggingface.co/blog/assisted-generation) uses a faster LLM to generate text and a better (tokenizer-compatible) LLM to validate it. This makes it faster. E.g. [Gemma 2 2b with Gemma 2 27b](https://huggingface.co/blog/gemma-july-update)

## Jul 2024

- 25 Jul 2024. Speech editing in audio files is a thing. [Speech Editing Toolkit](https://github.com/Zain-Jiang/Speech-Editing-Toolkit) and [Descript](https://www.descript.com)
- 24 Jul 2024. GPT 4o Mini is almost as good as GPT 4o in the LMSYS leaderboard. Llama 3.1 400B model and Mistral 2 Large are yet to be evaluated.
- 24 Jul 2024. If LLMs can generate any text, and text can describe the real world, we can rapidly generate "artifacts" that generate:
  - 3D Printable Models:
    - STL (Stereolithography): Defines the surface geometry of 3D objects using triangular facets.
    - OBJ (Wavefront OBJ): Describes 3D geometry including vertices, textures, and normals.
    - X3D: An XML-based file format for representing 3D computer graphics.
  - Vector Graphics:
    - SVG (Scalable Vector Graphics): Defines vector-based graphics in XML format, useful for illustrations, diagrams, and user interface elements.
  - CAD Drawings:
    - DXF (Drawing Exchange Format): Represents CAD data, including shapes, lines, and curves, used in engineering and architecture.
  - Circuit Designs:
    - KiCAD: An open-source software suite for Electronic Design Automation (EDA), which uses various file formats like PCBNew and EESchema to represent circuit designs.
  - Blueprints and Architectural Designs:
    - GML (Geography Markup Language): Encodes geographical features and spatial information.
    - CityGML: A specific GML application schema for modeling and exchanging 3D city models.
  - Molecular Structures:
    - PDB (Protein Data Bank): Describes the three-dimensional structures of molecules.
    - CML (Chemical Markup Language): An XML-based standard for representing molecular data.
  - Robotics and Automation:
    - URDF (Unified Robot Description Format): Defines the physical configuration of a robot, including joints, links, and sensors.
    - COLLADA (Collaborative Design Activity): An XML-based schema to describe digital assets for 3D applications, often used in robotics.
  - Geospatial Data:
    - KML (Keyhole Markup Language): Used for geographic data visualization, primarily in Google Earth.
    - GeoJSON: A format for encoding a variety of geographic data structures using JSON.
  - Mathematical Markup:
    - MathML (Mathematical Markup Language): Describes mathematical notation and captures both its structure and content.
  - Music and Sound:
    - MusicXML: Encodes sheet music in a structured format that can be easily shared between different music notation software.
  - Documents and Text:
    - DocBook: A semantic markup language for technical documentation.
    - Markdown: A lightweight markup language with plain text formatting syntax.
  - Biological Data:
    - SBML (Systems Biology Markup Language): Represents computational models of biological processes.
    - PhyloXML: An XML format for representing phylogenetic trees.
  - Game Development:
    - FBX (Filmbox): A file format for 3D animation that can hold information about the geometry, textures, and animations.
    - VRML (Virtual Reality Modeling Language): Describes interactive 3D objects and worlds.
  - Data Visualization:
    - ChartML: Encodes charts and graphs in a structured format.
    - D3.js (Data-Driven Documents): Uses HTML, SVG, and CSS to bring data to life with interactive visualizations.
  - Building Information Modeling (BIM):
    - IFC (Industry Foundation Classes): Describes building and construction data.
  - Textiles and Fabrics:
    - LoomML: Represents the design and structure of woven fabrics.
  - Augmented Reality and Virtual Reality:
    - ARML (Augmented Reality Markup Language): Defines how augmented reality applications should behave and what content they should display.
    - VRML (Virtual Reality Modeling Language): For describing interactive 3D objects and worlds.
  - Medical Imaging and Health Data:
    - DICOM (Digital Imaging and Communications in Medicine): Encodes medical imaging data.
    - HL7 (Health Level 7): A set of standards for the exchange of information between medical applications.
  - Simulation Data:
    - FMI (Functional Mock-up Interface): Represents and exchanges dynamic simulation models.
    - SBML (Systems Biology Markup Language): For computational models of biological processes.
  - Sound and Audio:
    - MML (Music Markup Language): For encoding music notation and performance information.
    - SoundFont: A file format for defining musical instrument sounds.
  - Animation and Visual Effects:
    - BVH (Biovision Hierarchy): Encodes motion capture data.
    - Alembic: A computer graphics interchange framework primarily for exchanging animation and visual effects data.
  - Textile Patterns:
    - WIF (Weaving Information File): Describes weaving patterns and structures.
    - Knitting Markup Language: Encodes knitting patterns in a structured format.
  - Scientific Data:
    - CDF (Common Data Format): Used for storing scientific data.
    - NetCDF (Network Common Data Form): Supports the creation, access, and sharing of array-oriented scientific data.
  - Photography and Imaging:
    - XMP (Extensible Metadata Platform): Used for embedding metadata in digital images and other media files.
  - Construction and Engineering:
    - LandXML: For civil engineering and land surveying data.
    - gbXML (Green Building XML): Facilitates the transfer of building data for analysis of energy and environmental performance.
  - Packaging and Retail:
    - BPL (Barcode Product Labeling): Encodes information for product packaging and labeling.
    - GS1 XML: Used for electronic business messaging, including product identification and tracking.
  - Typography and Font Design:
    - UFO (Unified Font Object): A format for storing font data.
    - SFNT (Spline Font): Encodes scalable font information.
  - Product Data Management:
    - PLMXML (Product Lifecycle Management XML): Used for sharing product data across PLM systems.
- 24 Jul 2024. GPT 4o Mini can be fine-tuned!
- 19 Jul 2024. [GPT For Work](https://gptforwork.com/help/gpt-for-sheets/gpt-functions/all-available-functions) has a set of useful spreadsheet LLM functions
- 14 Jul 2024. #IMPOSSIBLE LLMs cannot provide a bounding box of objects in images. (Maybe Florence 2 can)
- 14 Jul 2024. Models gently grow in capability. It helps to maintain an impossibility list that steadily gets invalidated. [Ref](https://www.oneusefulthing.org/p/gradually-then-suddenly-upon-the)
- 14 Jul 2024. [Github Copilot internals](https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html) walks through how Copilot constructs its prompts
- 8 Jul 2024. A quick check on the pricing of text to speech models
  - OpenAI TTS: $15/1M chars [Ref](https://openai.com/api/pricing/)
  - Deepgram Aura: $15/1M chars [Ref](https://deepgram.com/pricing)
  - Elevenlabs Scale: $165/1M chars [Ref](https://elevenlabs.io/pricing)
  - Google TTS Neural2: $16/1M chars [Ref](https://cloud.google.com/text-to-speech/pricing?hl=en)
  - Azure AI Speech: $15/1M chars [Ref](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/)
  - AWS Polly Neural TTS: $16/1M chars [Ref](https://aws.amazon.com/polly/pricing/)
- 3 Jul 2024. [Predibase](https://predibase.com/) uses LORAX to run multiple fine-tunings of a base model in a single GPU via adapters. [Ref](https://predibase.com/blog/5-reasons-why-lora-adapters-are-the-future-of-fine-tuning)

## Jun 2024

- 25 Jun 2024. [LLM Patterns](https://eugeneyan.com/writing/llm-patterns/) include Evals, RAG, Fine-tuning, Caching, Guardrails, Defensive UX, Collect feedback. Notably:
  - Defensive UX: Microsoft, Google, and Apple have guidelines for Human-AI interactions
  - Collect feedback: Explicit and implicit
- 25 Jun 2024. [Rouge](<https://en.wikipedia.org/wiki/ROUGE_(metric)>) and [Context Precision](https://docs.ragas.io/en/latest/concepts/metrics/context_precision.html) are [metrics](https://docs.ragas.io/en/latest/concepts/metrics/index.html) to evaluate LLM responses that serve as a starting point -- but not sufficient, usually
- 22 Jun 2024. [Luma Labs Dream Machine](https://lumalabs.ai/dream-machine/) generated videos. It's free and is of reasonable quality
- 22 Jun 2024. [LLM DataHub](https://github.com/Zjh-819/LLMDataHub) has LLM training datasets, regularly updated
- 08 Jun 2024. Looks like GPT-4o is using CNNs to create vector embeddings of images, with images gridded into a 1x1, 2x2, etc. PLUS OCR. [Ref](https://www.oranlooney.com/post/gpt-cnn/)
- 01 Jun 2024. Modal.com seems of offer reasonably priced GPUs

## May 2024

- 31 May 2024. Combining vector search and keyword search with reciprocal rank fusion seems to work well for RAG. [Ref](https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search)
- 29 May 2024. Some audio embedding models:
  [unoti/voice-embeddings](https://github.com/unoti/voice-embeddings),
  [retkowsky/audio_embeddings](https://github.com/retkowsky/audio_embeddings),
  [pyannote/embedding](https://huggingface.co/pyannote/embedding) (for speaker similarity),
  [and more](https://huggingface.co/models?sort=likes&search=wav2vec2).
- 28 May 2024. #POST I tried [Undermind.ai](https://undermind.ai/) - an agent that researches for you. It guides you to ask a detailed question, spends 2-3 minutes finding the answer, and provides detailed results. But it's worth the wait. It's a good alternative to quick validations on SciSpace.
- 28 May 2024. For popular results, search actually makes results worse! [When not to trust language models](https://arxiv.org/abs/2212.10511)
- 28 May 2024. Perception of fluency and usefulness are NEGATIVELY correlated in LLM! [Evaluating Verifiability in Generative Search Engines](https://arxiv.org/abs/2304.09848)
- 28 May 2024. GPTs are now available to non paying users. Apparently for a few weeks! Everyone also has limited access to GPT-4o.
- 26 May 2024. More LLM routers:
  - [LiteLLM](https://www.litellm.ai/): Open source, OpenAI compatible, 100+ LLMs
  - [RouteLLM](https://github.com/lm-sys/RouteLLM): Open source, OpenAI compatible, automatically routes based on cost
  - [OpenRouter](https://openrouter.ai/): OpenAI compatible API, several models
  - [Unify](https://unify.ai/): Supports many models
  - [Portkey](https://portkey.ai/): Supports popular providers
  - [Martian](https://withmartian.com/): Limited set of models
- 26 May 2024. [d-id](https://www.d-id.com/) and [Heygen](https://www.heygen.com/) can modify videos of a person.
- 22 May 2024. [Predibase](https://predibase.com/pricing) lets you run fine-tuned models at the same price, on a per-token basis. 25c/MTok up to 21B models. That's sames as Claude 3 Haiku, but with fine-tuning.
- 22 May 2024. [RunPod's vLLM endpoint](https://docs.runpod.io/category/vllm-endpoint) lets you run any HuggingFace LLM with an OpenAI API priced on usage (serverless) not on idle time. "Autoscaling to 0".
- 19 May 2024. [Portkey](https://portkey.ai/) is an LLM router
- 18 May 2024. [Artificial Analysis](https://artificialanalysis.ai/) benchmarks LLM APIs on speed, cost, and quality.
- 1 May 2024. [Beetrove](https://beetrove.com/) is a ranking of the popularit of OpenAI GPTs
- 1 May 2024. [Gemini Prompt Guide](https://inthecloud.withgoogle.com/gemini-for-google-workspace-prompt-guide/dl-cd.html) has detailed examples of how each role can use Gemini

## Apr 2024

- 27 Apr 2024. Tough prompt to test: `Gr brx vshdn Fdhvdu flskhu?` is a quick way to assess LLM capability. [Ref](https://www.s-anand.net/blog/a-quick-way-to-assess-llm-capabilities/)
- 27 Apr 2024. [Cheap cloud GPU services thread on Twitter](https://twitter.com/simonw/status/1780668642574897396) lists:
  - [Runpod](https://www.runpod.io/) (17)
  - [Vast.ai](https://vast.ai/) (17)
  - [Modal Labs](https://modal.com/) (8)
  - [fly.io](https://fly.io/) (4)
  - [LightningAI](https://lightning.ai/) (4)
  - [Colab](https://colab.research.google.com/) (4)
  - [AkashNet](https://akash.network/) (4)
  - [Lambda Labs](https://lambdalabs.com/) (4)
  - [ShadeFormAI](https://www.shadeform.ai/) (3)
  - [Mac Mini](https://www.apple.com/mac-mini/) (3)
  - [Tensor Dock](https://tensordock.com/) (2)
  - [Hetzner](https://www.hetzner.com/) (2)
  - [BrevDev](https://brev.dev/) (2)
- 25 Apr 2024. [Snowflake Arctic Cookbook explains how mixture of experts models work](https://medium.com/snowflake/snowflake-arctic-cookbook-series-exploring-mixture-of-experts-moe-c7d6b8f14d16)
- 25 Apr 2024. [A long list of LLM courses online](https://github.com/aishwaryanr/awesome-generative-ai-guide?tab=readme-ov-file#book-list-of-free-genai-courses)
- 24 Apr 2024. Embeddings can be averaged. So, to embed large documents, average the embeddings of their chunks! [OpenAI suggests this.](https://github.com/openai/openai-cookbook/blob/main/examples/Embedding_long_inputs.ipynb)
- 18 Apr 2024. [Effort engine](https://asciinema.org/a/piP22yYwcaohu5cA2gyuv1W61) introduces "effort" as a parametrizable way to speed up LLMs with a quality trade-off. Works on Mistral for now.
- 14 Apr 2024. [Lessons after half a billion GPT tokens](https://kenkantzer.com/lessons-after-a-half-billion-gpt-tokens/) for GPT-4:
  - Vague instructions are better than over-specifying
  - Avoid libraries like Langchain. APIs are stabler
  - 1 token = 3 characters is good enough
  - GPT4 doesn't hallucinate much, except it does a poor job of saying "I don't know" or "There's no such data" (the null hypothesis)
  - Keep the output down to 10 items or so if you're listing. For longer lists, have it explicitly enumerate
  - Don't worry about niches. Just wait for GPT5
- 14 Apr 2024. #WRITE [GPT clearly prefers 42 as a random number](https://twitter.com/infobeautiful/status/1778059112250589561).
- 14 Apr 2024. #WRITE [fal.ai](https://fal.ai/) "animates" pictures, creating videos. It made one from my talk. I morphed into various somewhat similar people rapidly in a 2-second span. Very promising, and far from good.
- 14 Apr 2024. [llmsherpa](https://github.com/nlmatics/llmsherpa) extracts PDFs using LLMs. It has errors but it preserves hierarchy, extracts tables well, and retains image coordinates. Via +91 90031 35354 ~Vetrivel PS
- 14 Apr 2024. [www.web.sp.am](https://www.web.sp.am/) is a content farm that's getting [hit by OpenAI](https://twitter.com/deliprao/status/1778468161739690278). Highlights how easy it is to create content farms, and therefore "easy" it can be to introduce bias into LLMs.
- 14 Apr 2024. [OpenAI supports batching requests](https://platform.openai.com/docs/guides/rate-limits/batching-requests). Didn't know that.
- 14 Apr 2024. [Marvin](https://www.askmarvin.ai/) provides Python decorators to create AI functions. Pretty intuitive!
- 14 Apr 2024. [Outlines](https://outlines-dev.github.io/outlines/) generates structured test with LLMs. It uses the ⭐ [`logit_bias` trick](https://twitter.com/AAAzzam/status/1669753721574633473) to limit choices in output. See [`get_choice()`](https://github.com/outlines-dev/outlines/blob/main/outlines/models/openai.py)
- 14 Apr 2024. [Lemur from Assembly.ai](https://www.assemblyai.com/blog/lemur/) does real time call transcription and summary
- 14 Apr 2024. [W3C is exploring ways to allow web pages to train LLMs, to flag content as AI generated, etc.](https://www.w3.org/reports/ai-web-impact/)
- 14 Apr 2024. [Data Provenance Explorer](https://www.dataprovenance.org/) lists open datasets used to train LLMs.
- 14 Apr 2024. [Summarize.tech](https://www.summarize.tech/) summarizes YouTube videos.
- 14 Apr 2024. #WRITE [Stable Audio 2.0](https://stability.ai/news/stable-audio-2-0) generates 3 min of music from a prompt. I tried [Bollywood Tamil film background music. Dark, soulful](https://stableaudio.com/1/share/af0958b5-f4b1-4e1b-b1ef-2b6dcad91bbb) and [Horror movie background. Drums starts darkly. Build up to a crescendo of intense chaos.](https://stableaudio.com/1/share/4fc941a7-bdf2-4a45-bd16-e22a96056ee6). Great that it managed, but not great music. Somewhat stereotyped. I need to learn how to prompt better. BTW, [Udio](https://www.udio.com/) is another such.
- 14 Apr 2024. [Harpa.ai](https://harpa.ai/) is a well designed Chrome extension / plugin that can chat with or automate any page.
- 14 Apr 2024. Due to in-context learning, giving 100s of examples in the prompt can teach LLMs to jailbreak. [Ref](https://www.anthropic.com/research/many-shot-jailbreaking)
- 14 Apr 2024. With RAG on search becoming big, search APIs are growing. [serper.dev](https://serper.dev/), [you.com](https://documentation.you.com/), [searxng](https://docs.searxng.org/) being examples.
- 2 Apr 2024. This is a subtle vulnerability. ChatGPT hallucinated `pip install huggingface-cli`. So[someone created the package](https://www.lasso.security/blog/ai-package-hallucinations) and got 30,000 downloads!
- 2 Apr 2024. [Video-Llava](https://github.com/PKU-YuanGroup/Video-LLaVA) is a video LLM
- 2 Apr 2024. [MusicCNN-embeddings](https://github.com/minguezalba/MusiCNN-embeddings) provides embeddings for music genre classification

## Mar 2024

- 30 Mar 2024. [browser.new](https://browse.new/) is a good example of a browser agent. It slowly but independently does a good job of achieving the result. Example: [What crew is common in Ingrid Bergman - Cary Grant films?](https://browse.new/run/browser_wDHy2vwxIzJFouL)
- 30 Mar 2024. [twinny](https://github.com/rjmacarthy/twinny) is an open source VC Code Copilot alternative.
- 30 Mar 2024. [typesense supports embeddings natively](https://hn-comments-search.typesense.org/).
- 30 Mar 2024. [Binary embeddings are good enough](https://blog.pgvecto.rs/my-binary-vector-search-is-better-than-your-fp32-vectors). Cohere releases [binary embeddings](https://txt.cohere.com/int8-binary-embeddings/).
- 30 Mar 2024. [Extract.langchain.com](https://extract.langchain.com/) is a poor early interface to featurize [unstructured.io](https://unstructured.io/)
- 30 Mar 2024. [Hume.ai](https://www.hume.ai/) offers voice emotion API and emotion-based conversational responses. An empathic AI.
- 27 Mar 2024. [Representational engineering](https://vgel.me/posts/representation-engineering/) lets you control LLM output based on preference on the fly.
- 18 Mar 2024. [Instructor](https://pypi.org/project/instructor/) lets you create structured JSON output.
- 15 Mar 2024. [Claude 3 Haiku input costs is $0.25/MTok](https://www.anthropic.com/api). That's half the GPT-3.5 cost. If it's of comparable quality, it's worth switching.
  But [Claude 3 Opus is comparable to GPT-4](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) and twice the cost, so not worth it.

## Feb 2024

- 26 Feb 2024. [MetaVoice 1B](https://www.geeky-gadgets.com/ai-voice-cloning-and-creation/) offers voice cloning on American & British accents with 30s training
- 26 Feb 2024. [Qwen 1.5 72B](https://qwenlm.github.io/blog/qwen1.5/) appears to outperform Mistral Medium, making it one of the top non-proprietary models
- 26 Feb 2024. [Llava 1.6](https://llava-vl.github.io/blog/2024-01-30-llava-1-6/) is a substantial improvement over Llava 1.5 and slightly better than CogVLM, Qwen-VL
- 26 Feb 2024. AI scams are growing. [Deepfakes scammed $34m](https://www.straitstimes.com/asia/east-asia/hk-firm-scammed-of-34-million-after-employee-is-duped-by-video-call-with-deepfake-of-cfo). But [voice fake for kidnapping](https://www.sfchronicle.com/bayarea/article/ai-phone-scam-18561537.php?sid=64ffe30738148943ca040a9b&ss=A&st_rid=40d8ca22-ad29-44d1-bcfa-45dcd33455f0) is scarier.
- 26 Feb 2024. [Buildspace's demo](https://youtu.be/u9dZd4jIxL0) is a great demo of how voice and actions can be used effectively.
- 23 Feb 2024. My view: LLMs are general purpose and more capable than SLMs. They'll win, like CPUs won over special-purpose chips. GPUs will optimize for LLMs and as usage grows, cost will fall.
- 23 Feb 2024. [Andrej Karpathy's summary of sharp edges in tokenization](https://www.youtube.com/watch?v=zduSFxRajkE&t=6701s) uses [tiktokenizer](https://tiktokenizer.vercel.app/) to explain:
  - Why LLMs can't be used for spelling
  - Why LLMs are better at English than other languages
  - [Why LLMs are bad at math](https://www.beren.io/2023-02-04-Integer-tokenization-is-insane/)
  - Why [SolidGoldMagiKarp](https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation) is a single token
  - Why trailing spaces are bad
  - Why YAML tokenizes more efficiently than JSON
- 19 Feb 2024. [All image-to-text models on HuggingFace](https://huggingface.co/models?library=transformers&pipeline_tag=image-to-text)
- 16 Feb 2024. [SORA](https://openai.com/sora) is OpenAI's video generation model, and is stunning!
- 15 Feb 2024. [Gemini 1.5 launched](https://developers.googleblog.com/2024/02/gemini-15-available-for-private-preview-in-google-ai-studio.html).
- 14 Feb 2024. [Fly.io offers GPU hosting](https://fly.io/blog/gpu-ga/) and auto stop when they have nothing to do.
- 11 Feb 2024. [Two pass generation](https://minimaxir.com/2023/12/chatgpt-structured-data/#two-pass-generation) is a clever technique to get multiple SEQUENTIAL answers in a single API request. For example the schema `{'code', 'optimized_code'}` will generate `code` and then optimize it.
- 11 Feb 2024. [Unions in function calling](https://minimaxir.com/2023/12/chatgpt-reestructured-data/#unions-and-chain-of-thoughts) allows flexible multi-step prompts in a single API.
- 9 Feb 2024. Fine-tuning session by Dan. [Notebook](https://colab.research.google.com/drive/1ts9Ar63sFK49oSz3dcw2EkivL0ZJesKi)
  - [Example of fine-tuning Mistral](https://colab.research.google.com/drive/15iFBr1xWgztXvhrj5I9fBv20c7CFOPBE). Consumed ~28 computes (~$2.8)
  - Axlotl is what the top fine-tuned LLMs are trained on
  - Deepspeed provides distributed training
  - Flash attention lets data stay on GPU
  - Sample packing packs samples of different lengths into equal length tensors
- 3 Feb 2024. [Enterprise scenarios leaderboard](https://huggingface.co/spaces/PatronusAI/enterprise_scenarios_leaderboard). Mistral 7B leads.

## Jan 2024

- 31 Jan 2024. You can @mention GPTs to ask a specific GPT a question in ChatGPT. This is really powerful.
- 29 Jan 2024. [Vanna](https://github.com/vanna-ai/vanna) is a SQL generation LLM. An alternative to SQLCoder. This [thread](https://news.ycombinator.com/item?id=38992601) has a detailed discussion on SQL generation and BI
- 28 Jan 2024. [OpenAI releases `text-embedding-3-large`](https://openai.com/blog/new-embedding-models-and-api-updates) which can be truncated. The embedding values have descending importance, so picking the first n is a good approximation. Also, `gpt-3.5-turbo-0125` is 50% cheaper.
- 28 Jan 2024. [AppAgent](https://github.com/mnotgod96/AppAgent) is an LLM that can navigate mobile / web apps
- 28 Jan 2024. Retrieval Centric Generation is an emerging alternative to RAG, where the LLM is explicitly built to leverage external knowledge. [SimplyRetrieve](https://github.com/RCGAI/SimplyRetrieve) is an early implementation.
- 28 Jan 2024. [Big Code Models Leaderboard](https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard) is a leaderboard for open source code models.
- 27 Jan 2024. ⭐ [OpenAI's prompt engineering strategies](https://platform.openai.com/docs/guides/prompt-engineering/strategy-split-complex-tasks-into-simpler-subtasks) are an excellent start for prompt engineering. A few lessons:
  - Use detailed system prompts, often containing the entire instruction set, if it won't change over the course of a conversation.
  - "... summary of the prior conversation could be included as part of the system message" is an interesting history compression tactic.
- 27 Jan 2024. [OpenAI summarizes books](https://openai.com/research/summarizing-books) by recursively summarizing sections and maintaining a running commentary of the summary so far.
- 21 Jan 2024. [llm-guard](https://llm-guard.com/) is an LLM content validation tool.
- 17 Jan 2024. When comparing Mistral with 4b quantization vs unquantized:
  - 2 responses were significantly shorter and fairly different
  - 1 was identical
  - 1 was almost identical but shorter by a few words
  - 1 was slightly longer and fairly different
- 16 Jan 2024. [Lilac](https://www.lilacml.com/) is an LLM-based data curation tool. Use it to search by concept (e.g. PII, duplicates, etc.) and then drop/update the results.
- 15 Jan 2024. [Eleven-labs speech synthesis](https://elevenlabs.io/speech-synthesis) with voice cloning is at the uncanny valley. With two 5-minute samples, my voice sounds a fair bit like my voice but is very clearly not my voice. I find stability ~ 30%, similarity ~ 80% and style ~50% gives a reasonable outcome. But the default voices (e.g. Joseph, George, Charlie) are excellent.
- 14 Jan 2024. [GPT Builder help](https://help.openai.com/en/articles/8770868-gpt-builder) explains how the GPT Builder updates GPTs - including some very interesting prompts
- 13 Jan 2024. To run an org-specific chatbot on your own LLM: (via [awesome-chatgpt](https://github.com/sindresorhus/awesome-chatgpt))
  - [opengpts](https://github.com/langchain-ai/opengpts) - but it doesn't support auth
  - [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) - but Supabase is hard to install
  - [anse](https://github.com/anse-app/anse) - but it doesn't support auth
  - [ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) - but it doesn't support auth
- 8 Jan 2024. [Quantization is better than fewer parameters](https://github.com/ggerganov/llama.cpp/pull/1684). So prefer high parameters (e.g. 70b) and quantize to 4-bit.
- 7 Jan 2024. [mixtral-offloading](https://github.com/dvmazur/mixtral-offloading) cleverly loads only the model layer required at any point, letting you run Mixtral 8x7b on Colab Free and on 16GB GPUs. [This notebook](https://colab.research.google.com/gist/chigkim/5521120118fd7533a224b36a3167972f/mixtral.ipynb) runs on Colab Free too.
- 7 Jan 2024. [CodeGPT](https://docs.codegpt.co/) is an alternative to Github Copilot that can use any LLM.
- 3 Jan 2024. ⭐ [GPT-4 is bad at math](https://github.com/sanand0/llms/blob/main/is-gpt4-good-at-math.ipynb). It gets ~60-70% of answers wrong.
- 3 Jan 2024. [LMQL](https://lmql.ai/) provides a constraint-based query language for interacting with LLMs. It uses token masking, which is clever.
- 3 Jan 2024. [Hollywood writers signed a deal](https://www.wired.com/story/us-writers-strike-ai-provisions-precedents/) that limits AI in script writing. It's primarily aimed at protecting script writer wages.
- 3 Jan 2024. [Adobe Firefly](https://www.adobe.com/products/firefly.html) offers a "generative fill" that lets you remove or paint new objects into an image. I'm awaiting text to vector images.
- 3 Jan 2024. [Duet AI](https://cloud.google.com/duet-ai) is Google's answer to Github Copilot.
- 3 Jan 2024. [Teachers are using LLMs](https://www.wired.com/story/teachers-are-going-all-in-on-generative-ai/) to plan lessons, write emails to parents, create tests, adjust reading level of materials, personalize content with tools like [MagicSchool](https://www.magicschool.ai/), [Diffit](https://beta.diffit.me/), [Eduaide](https://www.eduaide.ai/).
- 2 Jan 2024. [WizardLM](https://arxiv.org/pdf/2304.12244.pdf) creates datasets for instruction tuning by cleverly using LLMs to create new prompts.
- 2 Jan 2024. [Deita](https://github.com/hkust-nlp/deita) is an approach to improve instruction tuning datasets.

## Dec 2023

- 27 Dec 2023. [Lica](https://www.lica.world/) has a fascinating demo of how a document can be converted into a video story.
- 25 Dec 2023. [Mini-GPTs](https://arxiv.org/abs/2312.12682) is an interesting approach to shrink LLMs and make them domain specific. It takes existing LLMs and removes neurons not used in a specific domain (e.g. law, medicine, etc.)
- 23 Dec 2023. [DPO](https://arxiv.org/abs/2305.18290) is a simpler alternative to RLHF for fine-tuning. Several [HuggingFace models use DPO for training](https://huggingface.co/search/full-text?q=DPO&type=model)
- 21 Dec 2023. I tried running Mixtral-8x7b locally (via Llamafile) and on [together.ai](https://api.together.xyz/playground/chat/mistralai/Mixtral-8x7B-Instruct-v0.1). It's good, but far from GPT 4.
- 21 Dec 2023. Generic computate-intensive algorithms eventually beat domain-specific tuning, because of Moore's law. [Ref](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- 20 Dec 2023. ⭐ [This leaderboard](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) included paid models like GPT4 and Claude and compared them with open models on HUMAN + system benchmarks
- 17 Dec 2023. ⭐ [whisper-standalone-win](https://github.com/Purfview/whisper-standalone-win) provides a Windows binary for Faster-Whisper. It just needs [CUDA](https://developer.nvidia.com/cuda-downloads) and [cuDNN](https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html) installed. Then `whisper-faster.exe video.mkv --language=English --model=medium` generates the transcript.
- 17 Dec 2023. LLM use cases by Benedict Evans
  - "Every text box on the internet will get an LLM"
  - "Infinite interns"
  - "Every UNIX function has become a company." "Every ChatGPT suggestion..."
- 17 Dec 2023. [llm360](https://www.llm360.ai/) publishes models along with training datasets.
- 17 Dec 2023. In [The Age of AI has begun, Mar 2023](https://www.gatesnotes.com/The-Age-of-AI-Has-Begun), Bill Gates says, "In my lifetime, I've seen two demonstrations of technology that struck me as revolutionary." The GUI (1980) and ChatGPT (2022).
- 17 Dec 2023. [Rubeus](https://github.com/portkey-ai/rubeus) is a HTTP proxy for multiple LLMs with load-balancing, fallbacks and retries.
- 17 Dec 2023. [GPTRouter](https://github.com/Writesonic/GPTRouter) is a Python interface for multiple LLMs with fallbacks and retries.
- 17 Dec 2023. ⭐ [Token Tally](https://tokentally.streamlit.app/) has an LLM Cost Tool that estimates GPU memory required and token cost across cloud providers.
- 16 Dec 2023. [OpenAI provides logprobs for tokens](https://platform.openai.com/docs/api-reference/chat/create#chat-create-logprobs)! This can be a used to create cool visualizations of the likelihood of the each tokens.
- 16 Dec 2023. [Github Copilot's new features](https://youtu.be/SZVCJRUADc4) makes your entire workspace or a specific file its context. It also auto-writes your commit messages and PR descriptions.
- 15 Dec 2023. [Mixtral-8x7b-Instruct](https://huggingface.co/TheBloke/Mixtral-8x7B-Instruct-v0.1-GGUF) "... really does seem to be equivalent in quality to ChatGPT 3.5." [Ref](https://simonwillison.net/2023/Dec/14/ai-trust-crisis/)
- 10 Dec 2023. ⭐ [Generate textbooks](https://github.com/VikParuchuri/textbook_quality)!
- 10 Dec 2023. ChatGPT is good at generating questions or training datasets. It genuinely creates them rather than replicating from memory. [Ref](https://arxiv.org/pdf/2304.14334.pdf)
- 10 Dec 2023. [v0.dev](https://v0.dev/) creates web pages from code. [Example](https://v0.dev/t/XNlTLb7).
- 10 Dec 2023. [LIDA](https://microsoft.github.io/lida/) from Microsoft is an LLM based data visualization tool.
- 7 Dec 2023. [Bard supports extensions](https://blog.google/products/bard/google-bard-new-features-update-sept-2023/) that include @Gmail -- i.e. converse with your email.
- 7 Dec 2023. [llama-cpp-python](https://github.com/abetlen/llama-cpp-python) works with [other GGUF models like Mistral](https://github.com/abetlen/llama-cpp-python/issues/764) and allows constrained output - JSON, function calling, etc. [Ref](https://til.simonwillison.net/llms/llama-cpp-python-grammars)
- 7 Dec 2023. [12 Tuning Strategies for RAG](https://towardsdatascience.com/a-guide-on-12-tuning-strategies-for-production-ready-rag-applications-7ca646833439)
- 7 Dec 2023. [Llama Datasets](https://blog.llamaindex.ai/introducing-llama-datasets-aadb9994ad9e) are RAG datasets created mostly using GPT-4. Mostly small datasets.
- 7 Dec 2023. ⭐ [Intuitions about large language models](https://docs.google.com/presentation/d/1hQUd3pF8_2Gr2Obc89LKjmHL0DlH-uof9M0yFVd3FA4/edit)
  - Bigger models (70b) are much better at learning from few-shot examples. They really learn.
  - Bigger models will keep getting better!
  - Chain of Thought prompting is a way of providing more compute to complex problems that require more compute
  - Models will show emergent (completely new) behaviors that can't be predicted from extrapolation. These may not be intentional.
- 7 Dec 2023. [CodeAnt.ai](https://www.codeant.ai/) is a VS Code plugin to detect code smells, refactor for modularity, to write docstrings and unit tests
- 7 Dec 2023. [Anyscale](https://docs.endpoints.anyscale.com/pricing/) prices the 7b Llama2, Zephyr, Mistral models at 15 cents per 1M tokens. Roughly 1/10th of [GPT-3.5 Turbo's ~$1.5 per 1M tokens](https://openai.com/pricing)
- 5 Dec 2023. Tools to identify personally identifiable information:
  - [galactic](https://github.com/taylorai/galactic) can use [LLMs to detect PII](https://github.com/taylorai/galactic/blob/main/examples/hermes.ipynb)
  - [Presidio](https://microsoft.github.io/presidio/) by Microsoft
  - [Sherlock](https://sherlock.media.mit.edu/) is a generic sematic type matching DL model
  - [pii-extractor-llm](https://replicate.com/kshitijagrwl/pii-extractor-llm) was trained on Indian names
  - [GLiNER](https://github.com/urchade/GLiNER) is a Lightweight Generalist model for NER
- 3 Dec 2023. Tools to explore
  - [ElevenLabs](https://elevenlabs.io/) speaks in your voice
  - [Cutout Pro](https://www.cutout.pro/) removes backgrounds and parts of images
  - [Vocal Remover](https://vocalremover.org/) removes vocals from songs
  - [CapCut](https://www.capcut.com/) video editor
- 3 Dec 2023. [TheBloke's $35/month Patreon](https://www.patreon.com/TheBlokeAI) might be one of the least expensive ways to set up quantized LLMs in production.
- 3 Dec 2023. Microsoft released [table-transformer](https://github.com/microsoft/table-transformer) to extract tables from PDFs. [Sample usage](https://github.com/run-llama/llama_index/blob/main/docs/examples/multi_modal/multi_modal_pdf_tables.ipynb)
- 3 Dec 2023. Convert PDF to markdown with [marker](https://github.com/VikParuchuri/marker) - an improvement over [nougat](https://huggingface.co/facebook/nougat-base).
- 3 Dec 2023. JupyterLab has a `%%ai` magic to use LLMs within notebooks. [Ref](https://github.com/jupyterlab/jupyter-ai)
- 3 Dec 2023. Telling ChatGPT that the year is 2123 makes it bypass copyright. [Ref](https://twitter.com/venturetwins/status/1710321733184667985)
- 3 Dec 2023. Meta released [SeamlessExpressive](https://seamless.metademolab.com/expressive) which preserves emotions in speech-to-speech translations
- 3 Dec 2023. [Unsloth](https://github.com/unslothai/unsloth) offers faster lower-memory LLM QLoRA finetuning
- 3 Dec 2023. [DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM) is an open-source high-quality LLM
- 3 Dec 2023. [Scalable Extraction of Training Data from (Production) Language Models](https://arxiv.org/abs/2311.17035) extracts training data by repeating a token infinitely.
- 3 Dec 2023. [SkyPilot](https://github.com/skypilot-org/skypilot) lets you run LLMs on any cloud provider.
- 3 Dec 2023. [vLLM](https://docs.vllm.ai/) lets you deploy LLMs with a single command.
- 3 Dec 2023. [llamafile](https://github.com/Mozilla-Ocho/llamafile) lets you run LLMs locally as a single file executable!
- 2 Dec 2023. [Gwern Branwen](https://gwern.net/tla) says LLMs nudge his "... making heavier use of the languages I don’t know well (Emacs Lisp & Python) since I increasingly trust that an LLM can help me maintain them."
- 1 Dec 2023. [Undetectable.ai](https://undetectable.ai/) checks for AI content. But it had false positives AND negatives in the 5 checks I ran. [GPTZero](https://gptzero.me/) got 2/2 right and seems better at detecting AI content.

### chatbot-ui

```shell
# Inside WSL
# docker run -it ubuntu
apt-get update
apt-get install -y curl git

# Install docker: https://docs.docker.com/engine/install/ubuntu/
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do apt-get remove $pkg; done
apt-get update
apt-get install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Install supabase: https://supabase.com/docs/guides/self-hosting/docker
git clone --depth 1 https://github.com/supabase/supabase
cd supabase/docker
cp .env.example .env
# TODO: This part fails
docker compose pull
docker compose up -d
docker compose ps

# https://github.com/mckaywrigley/chatbot-ui
git clone https://github.com/mckaywrigley/chatbot-ui.git

```

### LLM embeddings

I created embeddings for my notes as follows:

```bash
pip install llm
llm install llm-sentence-transformers
llm embed -c "Test embedding with a local model" -m sentence-transformers/all-MiniLM-L6-v2
```

### Llamafile

I tried [Llamafile](https://github.com/Mozilla-Ocho/llamafile) on my [Sager NP7881E](https://www.amazon.com/dp/B0BWZ4NJZQ)
with an nVidia RTX 4070 8GB.

Llava 1.5 worked out of box with a token rate of ~7.2-7.4 tokens per second.

- Download [llava-v1.5-7b-q4-server.llamafile](https://huggingface.co/jartine/llava-v1.5-7B-GGUF/resolve/main/llava-v1.5-7b-q4-server.llamafile?download=true)
- Rename it to `llava-v1.5-7b-q4-server.llamafile.exe` and run it.

Mistral 7B Instruct works out of box with a token rate of ~9 tokens per second. (44 with GPU support via the `-ngl 35` option. Set ngl to as high a number as your GPU VRAM supports.)

- Download <https://github.com/Mozilla-Ocho/llamafile/releases/> and rename it to `llamafile-server.exe`. Note: Windows Defender may detect Trojan:Win32/Wacatac.B!ml (hopefully a false positive.)
- Download <https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF/resolve/main/mistral-7b-instruct-v0.1.Q4_K_M.gguf>
- Run `llamafile-server -ngl 35 -m mistral-7b-instruct-v0.1.Q4_K_M.gguf`

[Find more GGUF files on HuggingFace](https://huggingface.co/models?library=gguf)

## Nov 2023

- 30 Nov 2023. [CoVA](https://aclanthology.org/2022.ecnlp-1.11.pdf) scrapes web pages via OCR
- 30 Nov 2023. When coding with LLMs, have SHORT, RELIABLE feedback loops. [Ref](https://martinfowler.com/articles/exploring-gen-ai.html#memo-08)
- 25 Nov 2023. This is an interesting GPT Vision API prompt from Simon Willison: "given this event flyer, create a link to add it to my Google Calendar". [Ref](https://www.newsroomrobots.com/p/breaking-down-openais-new-features)
- 25 Nov 2023. Quote from Jerry Liu: "GPT 4 is really good at complex reasoning". It's worth exploring what that means.
- 25 Nov 2023. Quote from Jerry Liu: "RAG is a hack". It's engineered, not machine learnt, so it's suboptimal. We need an ML way of creating the context. Maybe fine tuning can be a way of CREATING the right context. But RAG can handle deterministic stuff like access control.
- 25 Nov 2023. Open AI fine tuning API is not good at memorizing info the way it is exposed. But the Gorilla paper shows that fine tuning can actually memorize well.
- 25 Nov 2023. Learn ML optimization approach - LLMOps. Have an evaluation framework with metrics like weights and biases or tensorboard. Helps figure out where fine tuning helps and where RAG does. Soon, this will become important.
- 25 Nov 2023. Flat indexing of chunks is not the only way to store embeddings. LlamaIndex allows you to create hierarchies that you can traverse for retrieval
- 25 Nov 2023. Agents mimic programming primitives. Switch. While. Call a function. Print.
- 24 Nov 2023. [OpenRouter](https://openrouter.ai/docs#models) hosts several models and offers them as APIs!
- 24 Nov 2023. [Ragas metrics](https://docs.ragas.io/en/latest/concepts/metrics/index.html) evaluate quality of a RAG pipeline
- 24 Nov 2023. [Orca 2](https://www.microsoft.com/en-us/research/blog/orca-2-teaching-small-language-models-how-to-reason/) was trained on different reasoning techniques (e.g. step-by-step) and is as good as larger models
- 23 Nov 2023. Embeddings can help just re-rank regular search results. [Ref](https://txt.cohere.com/rerank/)
- 23 Nov 2023. Claude 2 Anthropic has a 200K context window but is still crap.
- 22 Nov 2023. [Video-Llava](https://github.com/PKU-YuanGroup/Video-LLaVA) can understand videos too.
- 21 Nov 2023. [CoVA](https://aclanthology.org/2022.ecnlp-1.11.pdf) scrapes web pages using LLMs and visual information.
- 20 Nov 2023. [jsonrepair](https://github.com/josdejong/jsonrepair) can fix JSON fairly well. [jsonformer](https://github.com/1rgs/jsonformer) wraps HuggingFace models to produce JSON. [Ref](https://twitter.com/jerryjliu0/status/1720127061917147376)
- 19 Nov 2023. Google has a model garden with lots of pre-trained and trainable models.
- 19 Nov 2023. [Gorilla LLM specializes in APPI calls](https://gorilla.cs.berkeley.edu/): Torch Hub, TensorFlow Hub, HuggingFace
- 19 Nov 2023. [GPT-4 does not do abstraction at human levels](https://arxiv.org/abs/2311.09247)
- 19 Nov 2023. Each of the GPTs / Prompts we create could be like a UNIX command prompt, and become a startup of its own
- 19 Nov 2023. [Llava Plus](https://llava-vl.github.io/llava-plus/) extends LlaVA with pre-trained vision models that make image editing better
- 19 Nov 2023. [Ollama](https://github.com/jmorganca/ollama) runs local LLMs
- 16 Nov 2023. [XOT - Everything of Thought](https://arxiv.org/abs//2311.04254) is a new prompt from Microsoft but I don't understand it
- 15 Nov 2023. [Creating Fine-Tuning datasets WITHOUT inputs](https://andrewmayne.com/2023/11/14/is-the-reversal-curse-real/)
- 15 Nov 2023. [Tamil-Llama](https://github.com/abhinand5/tamil-llama)
- 12 Nov 2023. [Voyager plays Minecraft!](https://voyager.minedojo.org/)
- 12 Nov 2023. [Langchain supports evaluators](https://python.langchain.com/docs/guides/evaluation/).
- 12 Nov 2023. [Pydantic is all you need](https://youtu.be/yj-wSRJwrrc) drives towards code = data = text!
- 07 Nov 2023. [Julius.ai](https://julius.ai/) queries structured data.
- 07 Nov 2023. TODO: Explore <https://github.com/microsoft/TaskMatrix>
- 06 Nov 2023. [microsoft/autogen](https://github.com/microsoft/autogen) enables multi-agent conversations.
- 06 Nov 2023. [Architecture of today's LLMs](https://github.blog/2023-10-30-the-architecture-of-todays-llm-applications/) is similar to the A16Z architecture
- 06 Nov 2023. [Stanford Foundational Model Transparency index](https://crfm.stanford.edu/fmti/) was [critiqued as misleading](https://blog.eleuther.ai/fmti-critique/)
- 06 Nov 2023. [vLLM](https://vllm.ai/) runs HuggingFace transformers models faster. So does [DeepSpeed](https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-fastgen#introduction)
- 06 Nov 2023: [It's possible to extract knowledge, ontologies and taxonomies from LLMs via symbolic distillation](https://arxiv.org/pdf/2110.07178)
- 06 Nov 2023: [ChatGPT is slightly better that Github Copilot or CodeWhisperer](https://arxiv.org/abs/2304.10778)
- 06 Nov 2023: [Multimodal model papers on Huggingface](https://huggingface.co/collections/stereoplegic/multimodal-65389abccfc110ff7983a6cb)
- 04 Nov 2023: [Running LLMs in production](https://www.anyscale.com/blog/a-comprehensive-guide-for-building-rag-based-llm-applications-part-1) lists experiments to run. Validation CAN be automated!
- 04 Nov 2023: [Sparsify](https://github.com/neuralmagic/sparsify) quantizes models
- 04 Nov 2023: [Seamless4MT](https://huggingface.co/spaces/facebook/seamless_m4t) does language and speech inter-conversion. CC-NC-BY license
- 02 Nov 2023: Amazon has a code gen plugin. Google has IDX. Explore

## Oct 2023

- 26 Oct 2023: [Auxi pro](https://www.auxi.ai/trial) is a VS Code + Github Copilot Chat for PowerPoint
- 26 Oct 2023: [VectorAdmin](https://github.com/Mintplex-Labs/vector-admin) is a GUI for vector DBs
- 26 Oct 2023: [MemGPT](https://github.com/cpacker/MemGPT) stores memories. [My Discord Bot](https://discord.com/channels/@me/1166897241349423115)
- 26 Oct 2023: [ChatGPT AutoExpert](https://github.com/spdustin/ChatGPT-AutoExpert/) is a great prompt mechanism for higher accuracy, context and control. [Example](https://chat.openai.com/share/6aec506d-5dbb-4a54-b955-73db5669036f)
- 24 Oct 2023: [Neo-sophia](https://github.com/prolego-team/neo-sophia) has decent videos on LLM strategy
- 23 Oct 2023: Bits & Bytes, QLORA, llama.cpp, BigDL, are ways of quantizing models that you can run directly in Google Colab. Try them. Also try OpenVino.
- 23 Oct 2023: [Optimum](https://huggingface.co/docs/optimum/index) is a set of performance optimization libraries for transformers
- 20 Oct 2023: ChatGPT sucks at summarizing transcripts, even with CoD.
- 16 Oct 2023: LLMs are a walk through embedding space. The organization of the space defines intelligence. [Ref](https://twitter.com/unterix/status/1694073724532858965?t=9A5aKraL9ytdYMbj6CKsOA&s=19)

## Earlier

- [LLava](https://llava-vl.github.io/) is very good at image interpretation. So is [Qwen](https://replicate.com/lucataco/qwen-vl-chat)
- AutoGluon is a good time-series prediction model. LagLlama is a transformers architecture prediction model. But just feeding time series to Llama-2 forecasts quite well. [Ref](https://arxiv.org/pdf/2310.07820.pdf)
- Anthropic found that language models have "features" (linear neuron combinations) that have meaning, and can be turned up or down, like uppercase, hexadecimal, Chinese, etc. [Ref](https://www.anthropic.com/index/decomposing-language-models-into-understandable-components)
- llm-clip generates image AND text embeddings using OpenAI CLIP! [Ref](https://www.dbreunig.com/2023/09/26/faucet-finder.html)
- Dall-E prompt: "Make a pixel sprite sheet of 16 frames of a pixel swordsman running". Then Data Analysis prompt: slice this sprite sheet into frames, 6x4. Then animate into a gif. [Ref](https://twitter.com/NickADobos/status/1712674661706977360/photo/3) (didn't work for me).
- Whisper is open source on HuggingFace. [Whisper JAX](https://huggingface.co/spaces/sanchit-gandhi/whisper-jax) is a fast implementation
- Switch to GPT only when required. For simple questions, use local models. See
  - [LLM Blender](https://arxiv.org/abs/2306.02561)
  - [Frugal GPT](https://arxiv.org/abs/2305.05176) and [explanation](https://medium.com/@ronnyh/frugalgpt-a-game-changer-in-ai-for-small-businesses-d8d385cb13d)
  - [Automatic Prompt Optimization](https://www.microsoft.com/en-us/research/publication/automatic-prompt-optimization-with-gradient-descent-and-beam-search/)
- RAG notes
  - Good retrieval is the bottleneck in Q&A. Even though the answer is there, embeddings don't do a great job of retrieving it.
  - Context leakage is a problem. I ask a new question, and previous context is used. Solution: Use embedding similarity to detect new context. Ask LLM to detect new context.
  - Shared memory is an option. Check if someone asked a similar question. Check if any part of someone's conversation can be part of my context.
  - Context size is a problem. Check which parts of the conversation are relevant and pass them. Summarize history.
- Langchain has fuzzy match citation. Sort of like Bing chat highlights, but not as good
- [Emerging architectures for LLM Apps](https://a16z.com/emerging-architectures-for-llm-applications/)
- The best embedding models are benchmarked by [MTEB](https://huggingface.co/spaces/mteb/leaderboard). Use SentenceTransformers to get embeddings.
- Open source models I've run suck (except Llama 2).
- When storing encodings, JSON bz2 compresses the most. Feather & Parquet are the fastest.

  | Method           |  Time | Size |
  | ---------------- | ----: | ---: |
  | JSON (bz2)       |  1.04 |  7.4 |
  | JSON (xz)        | 10.65 |  7.5 |
  | JSON (gzip)      |  4.57 |  8.5 |
  | CSV (bz2)        |  2.29 | 11.8 |
  | CSV (xz)         | 20.31 | 12.3 |
  | Feather          |  0.15 | 12.8 |
  | Pickle           |  0.08 | 12.2 |
  | CSV (gzip)       |  5.21 | 13.4 |
  | Parquet (zstd)   |  0.20 | 14.4 |
  | Parquet (brotli) |  3.50 | 14.4 |
  | Parquet (gzip)   |  0.34 | 14.5 |
  | Parquet          |  0.25 | 15.1 |
  | Parquet (snappy) |  0.16 | 15.1 |
  | Parquet (lz4)    |  0.17 | 15.2 |
