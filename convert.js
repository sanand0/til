import { marked } from "https://deno.land/x/marked/mod.ts";

const DATE_FORMAT = {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
};

const SITE_TITLE = "Anand S - Things I Learned";
const SITE_SUBTITLE = "Weekly Notes and Discoveries";
const SITE_BASE = "https://til.s-anand.net";
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
const OPENAI_BASE_URL = Deno.env.get("OPENAI_BASE_URL") || "https://api.openai.com/v1";

const tags = [
  "agents",
  "ai-art",
  "ai-coding-tools",
  "automation",
  "best-practices",
  "business",
  "chatgpt",
  "cloud",
  "code-agents",
  "dev",
  "document-conversion",
  "database",
  "education",
  "embeddings",
  "features",
  "future",
  "github",
  "gpu",
  "hosting",
  "html",
  "huggingface",
  "image-generation",
  "investment",
  "llm-ops",
  "markdown",
  "models",
  "networking",
  "optimization",
  "pricing",
  "prompt-engineering",
  "python",
  "search",
  "server",
  "speech-to-text",
  "tts",
  "voice-cloning",
  "web-dev",
];

const renderHeader = (title) => /* html */ `
<header class="text-bg-warning py-5 mb-4">
  <div class="container text-center">
    <h1 class="display-4 fw-bold">${title}</h1>
    <p class="lead mb-0">
      <a class="link-dark link-offset-3" href="${SITE_BASE}">${SITE_SUBTITLE}</a> |
      <a class="link-dark link-offset-3" href="https://s-anand.net">S Anand</a>
    </p>
  </div>
</header>`;

const renderHtmlWrapper = (content, title) => /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${SITE_TITLE} | s-anand.net</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  ${content}
</body>
</html>`;

const renderContainer = (content) => /* html */ `
<div class="container py-4" style="max-width: 40rem;">
  <style scoped>
    a:not([href^='http']) code {
      color: var(--bs-danger);
    }
  </style>
  ${content}
</div>`;

/**
 * Represents a single note entry
 * @typedef {Object} Note
 * @property {Date} date - Note's date
 * @property {string} content - Note's content including sub-bullets
 */

/**
 * Extracts dated notes from markdown content
 * @param {string} markdown - Raw markdown content
 * @returns {Note[]} Array of parsed notes
 */
const extractNotes = (markdown) => {
  const notes = [];
  let currentNote = null;

  markdown.split("\n").forEach((line) => {
    // Main notes are ONLY those lines that begin like `- 3 Dec 2023`
    const match = line.match(/^- (?<day>\d{1,2}) (?<month>[A-Za-z]{3}) (?<year>\d{4})/);

    if (match) {
      if (currentNote) notes.push(currentNote);
      const { day, month, year } = match.groups;
      currentNote = {
        date: new Date(`${month} ${day}, ${year}`),
        content: line,
      };
    }
    // Add everything indented under the current note
    else if (currentNote)
      if (line.startsWith("  ")) currentNote.content += "\n" + line;
      else currentNote = null;
  });

  if (currentNote) notes.push(currentNote);
  return notes;
};

// Helper to get week end date in ISO format
const getWeekEnd = (date) => {
  const weekEnd = new Date(date);
  weekEnd.setDate(weekEnd.getDate() - weekEnd.getDay() + 7);
  weekEnd.setHours(0, 0, 0, 0);
  return weekEnd.toISOString().split("T")[0];
};

/**
 * Groups notes by week
 * @param {Note[]} notes - Array of notes
 * @returns {Map<string, Note[]>} Notes grouped by week (yyyy-mm-dd key)
 */
const groupByWeek = (notes) => {
  const weeks = new Map();
  notes.forEach((note) => {
    const weekKey = getWeekEnd(note.date);
    if (!weeks.has(weekKey)) weeks.set(weekKey, []);
    weeks.get(weekKey).push(note);
  });
  return weeks;
};

// Navigation component shared between pages
const renderNav = (prevWeek, nextWeek) => /* html */ `
  <nav class="d-flex justify-content-between mb-5">
    ${prevWeek ? `<a href="${prevWeek}.html">← Previous Week</a>` : "<span></span>"}
    <a href="index.html">Home</a>
    ${nextWeek ? `<a href="${nextWeek}.html">Next Week →</a>` : "<span></span>"}
  </nav>`;

// Converts each bulleted point into markdown, removing the date prefix and adding tags
const noteToMarkdown = (note, showDate) => {
  const lines = note.content
    .replace(/^- \d{1,2} [A-Za-z]{3} \d{4}\.\s*/, "- ")
    .trim()
    .split("\n");
  // Add date to the first line if requested
  if (showDate === true) lines[0] = `- **${note.date.toLocaleDateString("en-US", DATE_FORMAT)}**. ${lines[0].slice(2)}`;
  // Add tags as Markdown to the end of the first line as [#tag](tag.html)
  lines[0] += ` ${note.tags.map((tag) => `[\`#${tag}\`](${tag}.html)`).join(" ")}`;
  return marked(lines.join("\n"));
};

/**
 * Generates HTML content for a week's notes
 * @param {Note[]} notes - Notes for the week
 * @param {string} weekEnd - Week end date
 * @param {string[]} allWeeks - All available week dates
 * @returns {string} HTML content
 */
const generateWeekHTML = (notes, weekEnd, allWeeks) => {
  const weekIndex = allWeeks.indexOf(weekEnd);
  const formattedDate = new Date(weekEnd).toLocaleDateString("en-US", DATE_FORMAT);

  const content = /* html */ `
    ${renderHeader(formattedDate)}
    ${renderContainer(/* html */ `
      <div class="notes mb-4">${notes.map(noteToMarkdown).join("\n")}</div>
      ${renderNav(
        weekIndex > 0 ? allWeeks[weekIndex - 1] : null,
        weekIndex < allWeeks.length - 1 ? allWeeks[weekIndex + 1] : null
      )}
    `)}`;

  return renderHtmlWrapper(content, formattedDate);
};

/**
 * Generates HTML content for the home page
 * @param {string[]} weeks - Array of week end dates
 * @returns {string} HTML content
 */
const generateIndexHTML = (weeks) => {
  const linksHtml = weeks
    .sort((a, b) => b.localeCompare(a))
    .map((week) => {
      const date = new Date(week);
      const formattedDate = date.toLocaleDateString("en-US", DATE_FORMAT);
      return /* html */ `
        <a href="${week}.html" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <h2 class="h5 my-2">${formattedDate}</h2>
          <span class="text-muted">→</span>
        </a>`;
    })
    .join("\n");

  const content = /* html */ `
    ${renderHeader(SITE_TITLE)}
    ${renderContainer(/* html */ `
      <div class="text-center mb-4">
        <a href="recall.html" class="btn btn-primary btn-lg">Recall</a>
      </div>
      <div class="list-group mb-4">
        ${linksHtml}
      </div>
      <footer class="text-center">
        <a href="feed.xml" class="btn btn-outline-secondary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill mb-1" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
          Subscribe to RSS
        </a>
      </footer>
    `)}`;

  return renderHtmlWrapper(content, SITE_TITLE);
};

/**
 * Generates HTML content for a tag page
 * @param {string} tag - Tag name
 * @param {Note[]} notes - Notes with this tag
 * @returns {string} HTML content
 */
const generateTagHTML = (tag, notes) => {
  const content = /* html */ `
    ${renderHeader(`#${tag}`)}
    ${renderContainer(/* html */ `
      <div class="notes mb-4">${notes.map((note) => noteToMarkdown(note, true)).join("\n")}</div>
      <nav class="text-center"><a href="index.html">← Home</a></nav>
    `)}`;

  return renderHtmlWrapper(content, `#${tag}`);
};

/**
 * Generates RSS feed content
 * @param {Map<string, Note[]>} weeklyNotes - Notes grouped by week
 * @returns {string} RSS XML content
 */
const generateRSS = (weeklyNotes) => {
  const items = [...weeklyNotes.entries()]
    .sort(([a], [b]) => b.localeCompare(a)) // Most recent first
    .slice(0, 10) // Last 10 weeks
    .map(([weekEnd, notes]) => {
      const content = notes.map(noteToMarkdown).join("\n");

      return /* xml */ `
        <item>
          <title>Things I Learned: Week of ${weekEnd}</title>
          <link>${SITE_BASE}/${weekEnd}.html</link>
          <guid>${SITE_BASE}/${weekEnd}.html</guid>
          <pubDate>${new Date(weekEnd).toUTCString()}</pubDate>
          <description><![CDATA[${content}]]></description>
        </item>`;
    })
    .join("\n");

  return /* xml */ `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Things I Learned</title>
    <link>${SITE_BASE}/</link>
    <description>Weekly collected notes and learnings</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;
};

// Read all Markdown files in the current directory
const paths = [...Deno.readDirSync("./")]
  .filter((entry) => entry.name.endsWith(".md") && entry.name !== "README.md")
  .map((entry) => entry.name);

// Extract notes from all files until the start of the current week
const currentWeekStart = getWeekEnd(new Date() - 7 * 24 * 60 * 60 * 1000);
const allNotes = paths
  .map((path) => Deno.readTextFileSync(path))
  .flatMap((content) => extractNotes(content))
  .filter((note) => note.date.toISOString() < currentWeekStart);

// Get tags
const docs = allNotes.map((note) => note.content);
const response = await fetch(`${OPENAI_BASE_URL}/embeddings`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${OPENAI_API_KEY}` },
  body: JSON.stringify({ model: "text-embedding-3-small", input: [...docs, ...tags] }),
});
if (!response.ok) throw new Error("Failed to fetch embeddings: " + (await response.text()));
const result = await response.json();
if (!Array.isArray(result?.data)) throw new Error("OpenAI result.data not an array");

const embeddings = result.data.map((d) => d.embedding);
const docEmbeddings = embeddings.slice(0, docs.length);
const topicEmbeddings = embeddings.slice(docs.length);

const similarity = docEmbeddings.map((docEmb) => {
  const docMagnitude = Math.sqrt(docEmb.reduce((sum, val) => sum + val * val, 0));
  return topicEmbeddings.map((topicEmb) => {
    const topicMagnitude = Math.sqrt(topicEmb.reduce((sum, val) => sum + val * val, 0));
    const dotProduct = docEmb.reduce((sum, val, i) => sum + val * topicEmb[i], 0);
    return dotProduct / (docMagnitude * topicMagnitude);
  });
});
similarity.forEach((row, index) => {
  allNotes[index].tags = row
    .map((v, i) => [i, v])
    .filter(([_, v]) => v > 0.3)
    .map(([i]) => tags[i]);
});

// Group notes by week
const weeklyNotes = groupByWeek(allNotes);
const allWeeks = [...weeklyNotes.keys()].sort();

// Create the target directory
await Deno.mkdir("public", { recursive: true });

// Generate HTML files for each week
weeklyNotes.forEach((notes, weekEnd) => {
  const html = generateWeekHTML(notes, weekEnd, allWeeks);
  Deno.writeTextFileSync(`public/${weekEnd}.html`, html);
});

// Generate index page
const indexHtml = generateIndexHTML(allWeeks);
Deno.writeTextFileSync("public/index.html", indexHtml);

// Generate tag pages
const notesByTag = new Map();
allNotes.forEach((note) => {
  note.tags.forEach((tag) => {
    if (!notesByTag.has(tag)) notesByTag.set(tag, []);
    notesByTag.get(tag).push(note);
  });
});

notesByTag.forEach((notes, tag) => {
  const sortedNotes = notes.sort((a, b) => b.date - a.date);
  const html = generateTagHTML(tag, sortedNotes);
  Deno.writeTextFileSync(`public/${tag}.html`, html);
});

// Generate RSS feed
const rssContent = generateRSS(weeklyNotes);
Deno.writeTextFileSync("public/feed.xml", rssContent);

// Copy recall page
Deno.copyFileSync("recall.html", "public/recall.html");
