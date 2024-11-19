import { marked } from "https://deno.land/x/marked/mod.ts";

const DATE_FORMAT = {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
};

const SITE_TITLE = "Things I Learned";
const SITE_SUBTITLE = "Weekly notes and discoveries";
const SITE_BASE = "https://til.s-anand.net";

const renderHeader = (title) => /* html */ `
<header class="bg-primary text-white py-5 mb-4">
  <div class="container">
    <h1 class="display-4 fw-bold">${title}</h1>
    <p class="lead mb-0">${SITE_SUBTITLE}</p>
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
    // Simplified date matching using named groups
    const match = line.match(/^- (?<day>\d{1,2}) (?<month>[A-Za-z]{3}) (?<year>\d{4})/);

    if (match) {
      if (currentNote) notes.push(currentNote);
      const { day, month, year } = match.groups;
      currentNote = {
        date: new Date(`${month} ${day}, ${year}`),
        content: line,
      };
    } else if (currentNote && line.trim().startsWith("-")) {
      currentNote.content += "\n" + line;
    }
  });

  if (currentNote) notes.push(currentNote);
  return notes;
};

// Helper to get week start date in ISO format
const getWeekStart = (date) => {
  const weekStart = new Date(date);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  return weekStart.toISOString().split("T")[0];
};

/**
 * Groups notes by week
 * @param {Note[]} notes - Array of notes
 * @returns {Map<string, Note[]>} Notes grouped by week (yyyy-mm-dd key)
 */
const groupByWeek = (notes) => {
  const weeks = new Map();
  notes.forEach((note) => {
    const weekKey = getWeekStart(note.date);
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

// Converts each bulleted point into markdown, removing the date prefix
const noteToMarkdown = (note) => marked(note.content.replace(/^- \d{1,2} [A-Za-z]{3} \d{4}\.\s*/, "- ").trim());

/**
 * Generates HTML content for a week's notes
 * @param {Note[]} notes - Notes for the week
 * @param {string} weekStart - Week start date
 * @param {string[]} allWeeks - All available week dates
 * @returns {string} HTML content
 */
const generateWeekHTML = (notes, weekStart, allWeeks) => {
  const weekIndex = allWeeks.indexOf(weekStart);
  const formattedDate = new Date(weekStart).toLocaleDateString("en-US", DATE_FORMAT);

  const content = /* html */ `
    ${renderHeader(formattedDate)}
    ${renderContainer(/* html */`
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
 * @param {string[]} weeks - Array of week start dates
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
    ${renderContainer(/* html */`
      <div class="list-group mb-4">
        ${linksHtml}
      </div>
      <footer class="text-center">
        <a href="feed.xml" class="btn btn-outline-secondary btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
          Subscribe to RSS
        </a>
      </footer>
    `)}`;

  return renderHtmlWrapper(content, SITE_TITLE);
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
    .map(([weekStart, notes]) => {
      const content = notes.map(noteToMarkdown).join("\n");

      return /* xml */ `
        <item>
          <title>Things I Learned: Week of ${weekStart}</title>
          <link>https://til.s-anand.net/${weekStart}.html</link>
          <guid>https://til.s-anand.net/${weekStart}.html</guid>
          <pubDate>${new Date(weekStart).toUTCString()}</pubDate>
          <description><![CDATA[${content}]]></description>
        </item>`;
    })
    .join("\n");

  return /* xml */ `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Things I Learned</title>
    <link>https://til.s-anand.net/</link>
    <description>Weekly collected notes and learnings</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;
};

// Main execution
const paths = [...Deno.readDirSync("./")]
  .filter((entry) => entry.name.endsWith(".md") && entry.name !== "README.md")
  .map((entry) => entry.name);

const allNotes = paths.map((path) => Deno.readTextFileSync(path)).flatMap((content) => extractNotes(content));

const weeklyNotes = groupByWeek(allNotes);
const allWeeks = [...weeklyNotes.keys()].sort();

// Add this near the start of the file
await Deno.mkdir("public", { recursive: true });

// Modify file writing operations
weeklyNotes.forEach((notes, weekStart) => {
  const html = generateWeekHTML(notes, weekStart, allWeeks);
  Deno.writeTextFileSync(`public/${weekStart}.html`, html);
});

// Generate index page
const indexHtml = generateIndexHTML(allWeeks);
Deno.writeTextFileSync("public/index.html", indexHtml);

// Generate RSS feed
const rssContent = generateRSS(weeklyNotes);
Deno.writeTextFileSync("public/feed.xml", rssContent);
