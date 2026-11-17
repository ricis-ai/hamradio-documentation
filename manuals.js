/* VIH amateur radio manuals index -- search and grouping logic.
 *
 * Pure logic, no DOM and no network calls: the page (index.html) owns the
 * form handling and calls these functions. This file also runs under Node
 * for testing: `node test_manuals.js`.
 *
 * Search matches across an entry's name, maker, and keywords. A query with
 * several words matches only entries containing every word. Matching is
 * case-insensitive. A query word matches a token exactly, or as part of a
 * token when the word is at least 3 letters long, so "991" finds FT-991A
 * and "manual" finds "manuals", while a short word like "hf" only matches
 * the word itself and never hides inside "vhf".
 */
(function (root) {
  "use strict";

  /* Lowercase words: split on anything that is not a letter or a digit,
   * so "IC-7300" becomes ["ic", "7300"] and "mods.dk" becomes ["mods", "dk"]. */
  function tokenize(text) {
    return String(text || "").toLowerCase().split(/[^a-z0-9]+/).filter(function (t) {
      return t.length > 0;
    });
  }

  /* All the searchable words for one entry: its name, its maker, and its
   * keywords, tokenized the same way as the query. */
  function entryTokens(entry) {
    var text = entry.name + " " + entry.maker + " " + (entry.keywords || []).join(" ");
    return tokenize(text);
  }

  function wordMatches(word, tokens) {
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i] === word) return true;
      if (word.length >= 3 && tokens[i].indexOf(word) !== -1) return true;
    }
    return false;
  }

  /* Every query word must match. A blank query matches everything, in
   * data order, which is the full browse list. */
  function searchManuals(data, query) {
    var words = tokenize(query);
    if (words.length === 0) return data.slice();
    var out = [];
    for (var i = 0; i < data.length; i++) {
      var tokens = entryTokens(data[i]);
      var ok = true;
      for (var w = 0; w < words.length; w++) {
        if (!wordMatches(words[w], tokens)) { ok = false; break; }
      }
      if (ok) out.push(data[i]);
    }
    return out;
  }

  /* Group entries by section, keeping the page's section order: the order
   * a section first appears in the data. Returns an array of
   * { section: name, entries: [...] }. */
  function groupBySection(data) {
    var groups = [];
    var seen = {};
    for (var i = 0; i < data.length; i++) {
      var section = data[i].section;
      if (!seen[section]) {
        seen[section] = { section: section, entries: [] };
        groups.push(seen[section]);
      }
      seen[section].entries.push(data[i]);
    }
    return groups;
  }

  var api = {
    searchManuals: searchManuals,
    groupBySection: groupBySection
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.ManualsSearch = api;
  }
})(typeof self !== "undefined" ? self : this);
