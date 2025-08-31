# Apps to build

Descriptions of apps I felt would be interesting or useful to build (or find).

<!--

- Policy-as-code app. Checklist from doc. Apply checklist to data / doc inputs.
- Deployable easy-to-use lightweight RAG chatbot.
- Code similarity checker library based on TDS Project evals.
- Continuous software engineer. Testing. Refactoring. Debugging. Extracting libraries.
- Continous researcher. Keeps researching, learning, adding to idea base.
- Interviewer gets (voice) inputs across the organization and does strategy consulting by solving individual & team bottlenecks, pain points.
- Learning gaps identifier. Given questions and student answers, identify concepts (features), and which of these students understand well / don't understand.

-->

- 19 Aug 2025. **Implement apply_patch in JS**. #MEDIUM GPT models are trained on a [specific diff format](https://cookbook.openai.com/examples/gpt4-1_prompting_guide#appendix-generating-and-applying-file-diffs) useful for code diff-patching. [PseudoPatch](https://github.com/12458/PseudoPatch) is a Python package that implements their `apply_patch()` function. Implement this in JavaScript
- 18 Aug 2025. **LLM Agent POC**. #MEDIUM Create a browser-based LLM agent proof-of-concept that calls LLMs + tools multiple times to achieve an action.

  - The core logic is provided by the Python loop below - but it needs to be in JavaScript.

    ```python
    def loop(llm):
        msg = [user_input()]  # App begins by taking user input
        while True:
            output, tool_calls = llm(msg, tools)  # ... and sends the conversation + tools to the LLM
            print("Agent: ", output)  # Always stream LLM output, if any
            if tool_calls:  # Continue executing tool calls until LLM decides it needs no more
                msg += [ handle_tool_call(tc) for tc in tool_calls ]  # Allow multiple tool calls (may be parallel)
            else:
                msg.append(user_input())  # Add the user input message and continue
    ```

  - For example, here's a sample conversation:
    - User: Interview me to create a blog post.
    - Agent: output = Sure! What's the post about?, tool_calls = []
    - User: About IBM
    - Agent: output = Let me search for IBM, tool_calls = [search("IBM")]
    - Agent: output = OK, IBM is a big company blah blah blah, tool_calls = []
    - User: ...
  - Include Google Search API (just snippets), [AI Pipe](https://github.com/sanand0/aipipe) proxy API, and JavaScript code execution as the 3 tools. Use the [API Agent code base](https://github.com/sanand0/apiagent) for a rough idea of how to implement these.
  - Keep the code _very_ simple and minimal. Use [bootstrap-llm-provider](https://github.com/sanand0/bootstrap-llm-provider) to pick the provider + model and use OpenAI tool calls. Use [bootstrap-alert](https://github.com/sanand0/bootstrap-alert) to show errors.

- 16 Aug 2025. **Browser Chat**. #VERY-HARD Command line chat app to interact with the browser. Like Claude Code + Edge Copilot.
  - The user opens a page on Chrome/Edge with remote debugging enabled (http://localhost:9222/json)
  - On the command line, they run `uv run llmform.py --dir ~/notes --dir ~/personal`
  - This uses the DevTools to list the open tabs and allows the user to pick the tab to interact with. (They can change that, or pick multiple tabs) The user can also specify the tab name partially/fully on the command line.
  - The user provides a task, e.g. "Fill the form". If so, it reads the form fields in the tab. For each of the fields, it searches through the provided directories (`--dir`) for text content useful to fill the field, and fills it and prints a report of what was filled (with level of confidence and possible alternatives) and what was not.
  - The user can continue the chat on the CLI to suggest additional sources to provide answers, that the app uses to search / fill in answers.
  - The user can suggest replying to the emails on GMail using the local notes.
  - Or adding calendar entries on Google Calendar using a conference agenda from another tab. etc.
- 16 Aug 2025. **DataGen**. #MEDIUM Create a synthetic data generator tool.
  1. User enters their scenario in textbox (e.g. "Synthetic data to demonstrate credit card fraud using transaction data. Mid-sized, multiple tables, complex. Excel file")
  2. Click "Submit". This should send the scenario to an LLM asking it to
     - Think carefully and identify a schema, stating assumptions (e.g. number of rows to generate, table/column inter-relationships, output file format, etc.)
     - List typical real-world behaviors that could be incorporated into the data and will lead to positive results when testing these hypotheses (e.g. transactions over $10,000 are more likely to be declined, overseas transactions in low-income countries have high failure rates, etc.)
     - Write Python code that generates a random dataset in line with the above, writes the output to a bytestream and returns the filename and bytestream
  3. Stream the response. Render it as markdown. Use highlightjs to syntax-highlight the code block using a dark theme.
  4. Run the code in the browser using Pyodide, generate the output, and allow the user to download it
  5. Allow the user to enter changes in their scenario. Have the LLM make changes to the code by sending the change and the original response. Repeat from step 3.
- 16 Aug 2025. **Table OCR Evals**. #MEDIUM Evaluate how well LLMs parse tables using [Promptfoo](http://promptfoo.dev/).
  - Generate a single image with a table containing
    - 20 rows x 20 columns of psuedo-random (seed-generated) numbers between -1 to +1 million, to 2 decimals.
    - Column & row headers with psuedo-random words
  - Send this to various vision models, e.g. gpt-5-mini, claude-4-sonnet, gemini-2.5-flash, etc. with the same prompt to convert the result into a CSV, re-running this 5 times
  - Compare the result against the original. For each value (text or number) in the original:
    - 0 if the value is in the correct cell
    - -1 if the value is present in an incorrect cell
    - -2 if the value is not present anywhere in the CSV
  - Show the results as a sortable table with columns: Model, Average score, Score in run 1, Score in run 2, ... and cell values are the score, colored on a white-red gradient (white=0, red=most negative score)
  - Next, measure the impact of resolution. Resize the same image to resolutions of 50%, 75%, 150%, and 200%.
  - Repeat the analysis with 3 runs each and compute the average score.
  - Show the results as a sortable table with columns: Model, Average score at 50% resolution, 75%, 100%, 150%, 200% ... with the same cell values and colors.
- 16 Aug 2025. **Document Update**. #HARD Update documents by patching diffs instead of fully regenerating.

  - GPT 4.1 (and presumably GPT 5) models have been trained on a [specific diff format](https://cookbook.openai.com/examples/gpt4-1_prompting_guide#appendix-generating-and-applying-file-diffs) useful for code diff-patching. [PseudoPatch](https://github.com/12458/PseudoPatch) is a Python package that implements their `apply_patch()` function.
  - Build a command line Python application `llmedit.py` that works as follows:

    ```bash
    # new_notes.md will have dates in YYYY-MM-DD format
    uv run llmedit.py --file notes.md 'Convert all dates to YYYY-MM-DD format' > new_notes.md
    ## new_program.py will have type hints and docstrings
    uv run llmedit.py --file program.py 'Add type hints and docstrings to all functions' > new_program.py
    ```

  - Note: the LLM should not emit the full output. It should only emit diffs, reducing output tokens and reducing output cost. (We are not reducing input tokens/cost -- we are sending the entire `--file` for now.)
  - (BTW, this is just one edit format. Aider supports multiple [edit formats](https://aider.chat/docs/more/edit-formats.html) that are commonly referenced as a standard. [Code Surgery](https://fabianhertwig.com/blog/coding-assistants-file-edits/) has a good walkthrough of various strategies.)
  - We would also want to do this in JavaScript. Here's a chat that has some specs: [ChatGPT](https://chatgpt.com/share/68adb239-c27c-800c-8342-f9da8ecb9122)

- 16 Aug 2025. **MCP in OpenAI API**. #EASY Explore [MCPs in the OpenAI API](https://platform.openai.com/docs/guides/tools-remote-mcp)
  - Create a static web app on GitHub pages
  - Let the user enter their OpenAI API key, e.g. via [bootstrap-llm-provider](https://npmjs.com/package/bootstrap-llm-provider)
  - Have it connect to any remote MCP - ideally that does not require any auth -- you can pick which MCP
  - ... and execute a task the user provides it.
  - Time permitting, try the same with the [Anthropic API](https://www.anthropic.com/news/agent-capabilities-api)
- 15 Aug 2025. **Impact analyzer**. #MEDIUM Analyze & prioritize service request categories based on impact and effort
  - You will get an dataset with 2 tables
    - **Types**: Category, Subcategory, Effort per issue, Impact per day. This table has one row for each category + subcategory of service request issues raised in an organization, along with the typical effort (USD) to fix it and typical cost impact (USD) to the organization if left unfixed.
    - **Summary**: Date, Category, Subcategory, Count, Days to fix. This table has the number (count) of service requests raised daily in each category + subcategory, along with how long it took to fix it. This can be used to compute the overall effort and impact on the organization.
  - Visualize this as a zoomable scatterplot.
    - X-axis has the effort. Y-axis has the impact. (Top-left = quick wins: low-effort, high-impact)
    - Show one circle for each category. Size = sqrt(count). Color = distinct, based on category
    - Clicking on any category "explodes" the category into subcategories, i.e.
      - Hide the category bubble
      - Show the subcategory bubbles in the same color as the category
      - Animate them so that they appear from the center of the category and move to their positions
    - Clicking on any subcategory "collapses" the subcategories into the category, i.e. the animated reverse of the explosion.
    - Hovering on any category or subcategory neatly shows the category name, subcategory name (if applicable), count of issues, effort per issue, total effort (count x effort), impact per day, total impact (count x impact x days)
  - Add a range slider that allows users to move two markers representing the start and end dates. This acts as filters. As the user moves these, the animation _smoothly_ resizes the bubbles to capture the count in this period.
  - Add a "play" button. Clicking on this steadily moves the range slider forward, 10 days per second.
    - When moving, the range slider preserves the duration, i.e. the start and end dates move at the same pace
    - When the end slider reaches the last date, stop the play button
    - When playing, the play button becomes a pause button that pauses playing when clicked
- 15 Aug 2025. **Embedding classifier** #HARD #TODO
  - Move LLM Foundry classify into a separate tool
  - Add a SOM, UMAP, or some 2D projection of embedding distances
