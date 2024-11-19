# LLM learnings

## Nov 2024

- 18 Nov 2024. Straive evaluated Gemini 1.5 Flash 002 and GPT 4o Mini for translation.
  - Portugese: Flash is better than GPT 4o Mini. BLEU Word Overlap is 65.5% > 64.6% and METEOR (Semantic) is 84.9% > 78.9%
  - Mandarin: Flash is better than GPT 4o Mini. BLEU Word Overlap is 25.0% > 15.9% and METEOR (Semantic) is 54.7% > 51.1%
- 17 Nov 2024. Recraft v3 supports vector (SVG) generation [Ref](https://simonwillison.net/2024/Nov/15/recraft-v3/)
- 16 Nov 2024. Anthropic has single-plage docs for LLMs. [Condensed version](https://docs.anthropic.com/llms.txt) and [Full version](https://docs.anthropic.com/llms-full.txt)
- 12 Nov 2024. Gemini has an OpenAI compatible API. [Ref](https://ai.google.dev/gemini-api/docs/openai)
- 12 Nov 2024. Ethan Mollick says Claude is solving MBA case studies well. [Ref](https://x.com/emollick/status/1856161026238025835)
- 12 Nov 2024. LLMs pay a lot of attention to the first 6 tokens. [Ref](https://huggingface.co/blog/tomaarsen/attention-sinks)
- 12 Nov 2024. This is an interesting article on "UI in the age of Gen AI". [Ref](https://agao.substack.com/p/uiux-in-the-age-of-generative-ai)
- 12 Nov 2024. Google Open sourced Alphafold 3. [Ref](https://github.com/google-deepmind/alphafold3)
- 11 Nov 2024. Gemini transcription does not give accurate timestamps. Whisper does. But the quality of transcription is similar.
- 11 Nov 2024. Pass a complex data structure to Claude.ai and have it create an app to visualize it. It does well. [Ref](https://x.com/simonw/status/1855819673482461216)
- 09 Nov 2024. [Zapier Actions](https://actions.zapier.com/) are an easy way to set up custom actions like GMail / Google Calendar APIs for GPTs, since [GPTs' callback URLs keep changing](https://community.openai.com/t/gpt-oauth-callback-url-keeps-changing/493236). But they fail often, and don't work on mobile. At least for me.
- 09 Nov 2024. LLM Vision Use Cases in manufacturing and earth sciences:
  - Automated geoscience image descriptions [Ref](https://www.linkedin.com/posts/paulhcleverley_geosciences-earthscience-geology-activity-7254037937674240000-pQab/)
  - Interpret Wind Turbine photos and charts, construction monitoring, equipment maintenance & charts [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-copilot-wind-siting-impact-kalyanaraman-wqe7c/)
  - Forecast weather based on cloud photos! [Ref](https://www.linkedin.com/pulse/cloud-typing-local-weather-forecasting-using-chatgpt-cam-shivkumar-1hhkc/)
  - Analyze thermal image of solar panels, electroluminescence images for warranty claims, ROI estimates from Google Sunroof rooftop images [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-part-1-copilot-solar-pv-kalyanaraman-ccszc/)
  - Corrosion detection in electricity towers, turbines, storage tanks, penstock. Interpret non-destructive test images [Ref](https://www.linkedin.com/pulse/vision-ai-energy-use-cases-copilot-corrosion-shivkumar-kalyanaraman-onuic/)
- 09 Nov 2024. Google counts auto-completion when saying "25% of all the code is written by AI at Google". "It's a helpful productivity tool but it's not doing any engineering at all. It's probably about as good, maybe slightly worse, than Copilot." [Ref](https://news.ycombinator.com/item?id=42002212)
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
- 04 Nov 2024. Artificial Intelligence has a bunch of new leaderboards and arenas.
  - Open AI TTS leads the [TTS Leaderboard](https://artificialanalysis.ai/text-to-speech/arena?tab=Leaderboard). ElevenLabs doesn't have enough votes yet
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
- 27 Oct 2024. Deepseek Janus is a 1.3b model that can generate both text AND images (and also supports vision)
- 27 Oct 2024. [Cohere Multimodal Embed v3](https://cohere.com/blog/multimodal-embed-3) is available on Azure.
- 27 Oct 2024. Elevenlabs lets you create voices with a prompt. No need to even clone one!
- 27 Oct 2024. Runway Act One creates expressive character performances
- 26 Oct 2024. [LanceDB](https://lancedb.github.io/) is a more scalable alternative to ChromaDB. Written in Rust. Does not require a separate HSNW library.
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
- 3 Oct 2024. Matching addresses with just embeddings works well. Combine it with simple hard rules. [Source](https://www.dbreunig.com/2024/09/27/conflating-overture-points-of-interests-with-duckdb-ollama-and-more.html)
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
- 22 Sep 2024: [Sentient](https://github.com/sentient-engineering/sentient) lets you control the browser via Python in natural language
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
- 08 Aug 2024
  - Agentic RAG (Ravi Theja, LlamaIndex)
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
- 07 Aug 2024
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

- 27 Apr 2024. `Gr brx vshdn Fdhvdu flskhu?` is a quick way to assess LLM capability. [Ref](https://www.s-anand.net/blog/a-quick-way-to-assess-llm-capabilities/)
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