import { marked } from "https://deno.land/x/marked/mod.ts";

const DATE_FORMAT = {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
};

const BASE_URL = "https://til.s-anand.net";

// Common HTML wrapper to avoid duplication
const wrapHtml = (title, content) => /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | TIL | s-anand.net</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container py-4" style="max-width: 40rem;">
    ${content}
  </div>
</body>
</html>`;

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
    <h1 class="mb-4">${formattedDate}</h1>
    <div class="notes">
      ${notes
        .map((note) => {
          const content = note.content.replace(/^- \d{1,2} [A-Za-z]{3} \d{4}\.\s*/, "- ");
          return marked(content.trim());
        })
        .join("\n")}
    </div>
    ${renderNav(
      weekIndex > 0 ? allWeeks[weekIndex - 1] : null,
      weekIndex < allWeeks.length - 1 ? allWeeks[weekIndex + 1] : null
    )}`;

  return wrapHtml(formattedDate, content);
};

/**
 * Generates HTML content for the home page
 * @param {string[]} weeks - Array of week start dates
 * @returns {string} HTML content
 */
const generateIndexHTML = (weeks) => {
  const linksHtml = weeks
    .sort((a, b) => b.localeCompare(a)) // Reverse chronological order
    .map((week) => {
      const date = new Date(week);
      const formattedDate = date.toLocaleDateString("en-US", DATE_FORMAT);
      return `<li><a href="${week}.html">${formattedDate}</a></li>`;
    })
    .join("\n");

  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="alternate" type="application/rss+xml" title="Things I Learned | s-anand.net" href="/feed.xml">
  <title>Things I Learned | s-anand.net</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container py-4" style="max-width: 40rem;">
    <h1>Things I Learned</h1>
    <ul class="list-unstyled">
      ${linksHtml}
    </ul>
    <a href="feed.xml">RSS Feed</a>
  </div>
</body>
</html>`;
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
      const content = notes.map((note) => note.content).join("\n");

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

// Generate HTML files for each week
weeklyNotes.forEach((notes, weekStart) => {
  const html = generateWeekHTML(notes, weekStart, allWeeks);
  Deno.writeTextFileSync(`${weekStart}.html`, html);
});

// Generate index page
const indexHtml = generateIndexHTML(allWeeks);
Deno.writeTextFileSync("index.html", indexHtml);

// After generating index.html, add:
const rssContent = generateRSS(weeklyNotes);
Deno.writeTextFileSync("feed.xml", rssContent);
