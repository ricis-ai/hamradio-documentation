# Manuals index — link manifest

First edition of the Visually Inconvenienced Hams manuals index
(`index.html`, 32,440 bytes). Every link below was checked with a real HTTP
request on **15 November 2026, 20:00–20:45 Central** (16 November 2026,
02:00–02:45 UTC), and every link in the finished page was re-checked a second
time after the page was written.

- **Links in the page:** 62 unique external URLs (59 returned HTTP 200 to
  curl; the 3 exceptions are documented below and were verified by other
  means).
- **Links tried and left out:** 14 (listed at the bottom with reasons).
- **Text-layer spot checks:** 5 PDFs downloaded and run through `pdftotext`
  to confirm a real text layer (see "Format flags" below).

## How each link was checked

- Default method: `curl` with a browser user agent, following redirects,
  `--max-time 30–40`. A link counts as verified when the final response is
  HTTP 200.
- Two hosts block automated requests with HTTP 403 but serve browsers
  normally (Kenwood, ManualsLib). Those two links were verified with a
  browser text fetch, which returned the full live page (HTTP 200).
- The Facebook back-to-group link returns HTTP 400 to curl (Facebook needs a
  signed-in session). It is the same address used by the HamClock page, whose
  return path was tested on a real phone on 2026-11-15.
- mods.dk brand pages were checked for real content, not just HTTP 200: a
  made-up brand returns a small near-empty page (~9.6 KB), while real brand
  pages run 25–490 KB. Every brand page linked here is a real content page.

## Format flags

- **Text PDF** — the PDF carries a real text layer a screen reader can read.
  Basis is a `pdftotext` spot check on a manual from the same maker/series,
  except where noted:
  - Icom: IC-7300 Basic Manual, 181,221 non-space characters extracted.
  - Yaesu: FT-991A CAT Manual, 29,338 characters extracted.
  - Elecraft: KX2 Owner's Manual, 126,616 characters extracted.
  - Xiegu/Radioddity: G106 User Manual, 23,409 characters extracted.
  - Ailunce: HS1 User's Manual, 190,227 characters extracted.
- **Scanned image PDF** — the PDF is pictures of paper pages; a screen reader
  cannot read it. Basis: the archives are scan archives (survey findings),
  and the Drake W-4 manual from BAMA was confirmed image-only in the OCR
  proof of concept on 2026-11-15 (11 characters extractable before OCR).
- **Format not checked** — the target's format was not verified; the page
  says so rather than guessing.
- **Web page** — the link opens a web page that lists manuals, not a manual
  itself.

## Links in the page

### Return path (top and bottom of the page)

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://m.facebook.com/groups/742838019382868 | Return path (×2) | 400 to curl (session required); works in browsers | Web page | Same address as the HamClock page; return path tested on a real phone 2026-11-15. Inside Facebook's webview this becomes a close button (see index.html). |

### Icom

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.icomjapan.com/support/manual/ | Icom — library | 200 | Web page | Searchable library; 236 amateur documents counted in the survey (verified live 2026-11-16). |
| https://www.icomjapan.com/support/manual/2271/ | Icom — IC-7300 Full Manual (English) | 200 | Text PDF | Download page for IC-7300_ENG_FM_12b.pdf (filename decoded from the page's download link). Text layer confirmed on the same model's Basic Manual (181,221 chars). |
| https://www.icomjapan.com/support/manual/2272/ | Icom — IC-7300 Basic Manual (English) | 200 | Text PDF | Download page for IC-7300_ENG_BM_12.pdf. File downloaded and spot-checked: 181,221 non-space chars extracted. |
| https://www.icomjapan.com/support/manual/3060/ | Icom — IC-705 Basic Manual (English) | 200 | Text PDF | Download page for IC-705_ENG_Basic_10.pdf. Same born-digital series as the checked IC-7300 manual. |
| https://www.icomjapan.com/support/manual/3063/ | Icom — IC-705 Advanced Manual (English) | 200 | Text PDF | Download page for IC-705_ENG_Advanced_5.pdf. Same born-digital series. |
| https://www.icomjapan.com/support/manual/2156/ | Icom — IC-9700 Basic Manual (English) | 200 | Text PDF | Download page for IC-9700_ENG_Basic_7.pdf. Same born-digital series. |
| https://www.icomjapan.com/support/manual/2166/ | Icom — IC-9700 Advanced Manual (English) | 200 | Text PDF | Download page for IC-9700_ENG_AM_3.pdf. Same born-digital series. |

Note: Icom download pages ask the reader to agree to short terms and press a
download button; the page text says so. Direct PDF URLs under
icomjapan.com/uploads/ return 403 and are not linked (see left-out list).

### Yaesu

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.yaesu.com/ | Yaesu — website | 200 | Web page | Yaesu has no central manual library; manuals sit under the Files tab of each product page (survey). |
| https://yaesu.com/Files/4CB893D7-1018-01AF-FA97E9E9AD48B50C/FT-991A_OM_ENG_EH067M205_2111A-KS-1.pdf | Yaesu — FT-991A Operating Manual (36 MB) | 200 | Text PDF | Born-digital Yaesu manual; full text indexed by search engines. Same series as the spot-checked CAT manual. |
| https://yaesu.com/Files/4CB893D7-1018-01AF-FA97E9E9AD48B50C/FT-991A_CAT_OM_ENG_1711-D.pdf | Yaesu — FT-991A CAT Manual (1.4 MB) | 200 | Text PDF | Downloaded and spot-checked: 29,338 non-space chars extracted. |
| https://www.yaesu.com/Files/4CB893D7-1018-01AF-FA97E9E9AD48B50C/FT-710_OM_ENG_EH080H201_2307N-GS.pdf | Yaesu — FT-710 Operation Manual (30 MB) | 200 | Text PDF | Born-digital Yaesu manual; full text indexed by search engines. Same series as the spot-checked CAT manual. |

### Kenwood

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.kenwood.com/i/products/info/amateur/software_download.html | Kenwood — software and manual downloads | 403 to curl (bot-blocked); 200 via browser text fetch | Web page | Full live page returned by the browser fetch (models TS-990S, TS-890S, TS-590SG, TM-D750A, TH-D75A and more, with in-depth manuals listed). Excluded from lychee — see .lychee.toml. |
| https://manuals.jvckenwood.com/ | Kenwood — manual portal | 200 | Web page | JVC Kenwood manual search portal. The old manual.kenwood.com address redirects here (meta refresh). |

### Elecraft

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://Elecraft.com/pages/manuals-downloads | Elecraft — library | 200 | Web page | Single page listing ~200–250 documents (estimated in the survey; 264 PDF links counted in the fetched page). |
| https://ftp.elecraft.com/K4/Manuals%20Downloads/K4BuiltInOperatingManualrevD14%28printable%29.pdf | Elecraft — K4 Operating Manual, printable (1.8 MB) | 200 | Text PDF | Same born-digital series as the spot-checked KX2 manual. |
| https://ftp.elecraft.com/K3S/Manuals%20Downloads/K3S%20Owner's%20man%20A1.pdf | Elecraft — K3S Owner's Manual (5.3 MB) | 200 | Text PDF | Same born-digital series as the spot-checked KX2 manual. |
| https://ftp.elecraft.com/KX3/Manuals%20Downloads/E740163%20KX3%20Owner's%20man%20Rev%20C5.pdf | Elecraft — KX3 Owner's Manual (3.5 MB) | 200 | Text PDF | Same born-digital series as the spot-checked KX2 manual. |
| https://ftp.elecraft.com/KX2/Manuals%20Downloads/KX2%20owner's%20man%20B2.pdf | Elecraft — KX2 Owner's Manual (3.3 MB) | 200 | Text PDF | Downloaded and spot-checked: 126,616 non-space chars extracted. |
| https://ftp.elecraft.com/KH1/Manuals%20Downloads/KH1%20Owner's%20Manual,%20rev%20B7.pdf | Elecraft — KH1 Owner's Manual (2.6 MB) | 200 | Text PDF | Same born-digital series as the spot-checked KX2 manual. |
| https://cdn.shopify.com/s/files/1/2029/4979/files/E740301_KPA1500_Owner_s_Manual_Rev_B1.pdf?v=1790877878 | Elecraft — KPA1500 Owner's Manual (2.1 MB) | 200 | Text PDF | Same born-digital series as the spot-checked KX2 manual. Hosted on Elecraft's Shopify CDN (link taken from Elecraft's own manuals page). |

### Alinco

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://alinco.com/download-archive/?download-tab=instructions | Alinco — download archive, Instructions tab | 200 | Web page | Alinco's manual list. Direct PDF links load through JavaScript and could not be extracted/verified, so none are linked directly. |

### FlexRadio

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.flexradio.com/documentation/ | FlexRadio — documentation | 200 | Web page | FlexRadio's documentation index. |
| https://www.flexradio.com/software/ | FlexRadio — software | 200 | Web page | Software and release notes. The old /downloads/ address returns 403 to bots (see left-out list). |

### Xiegu

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://xiegu.eu/downloads | Xiegu — Europe downloads | 200 | Web page | Redirects to /downloads/. |
| https://www.cqxiegu.com/zlxz | Xiegu — downloads (China site) | 200 | Web page | The bare cqxiegu.com host fails to connect; the www host works (see left-out list). |
| https://radioddity.com/pages/xiegu-download | Xiegu — Radioddity mirror | 200 | Web page | Radioddity's English Xiegu download page. |
| https://radioddity.s3.amazonaws.com/Radioddity_G90_User_Manual_V5_June_2025.pdf | Xiegu — G90 User Manual v5 (2.3 MB) | 200 | Text PDF | Same born-digital series as the spot-checked G106 manual. |
| https://radioddity.s3.amazonaws.com/2024-09-09_Extended_manual_for_Xiegu_X6100_-_V1.1.8.pdf | Xiegu — X6100 Extended Manual (6 MB) | 200 | Text PDF | Same born-digital series as the spot-checked G106 manual. |
| https://radioddity.s3.amazonaws.com/Radioddity_G106_User_Manual_V1.4.pdf | Xiegu — G106 User Manual v1.4 (1.1 MB) | 200 | Text PDF | Downloaded and spot-checked: 23,409 non-space chars extracted. |

### AnyTone

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.anytone.net/download | AnyTone — download page | 200 | Web page | Manuals, firmware, and programming software. Direct file links use opaque CDN file IDs that could not be matched to named manuals, so none are linked directly. |

### Radioddity, Ailunce, and Retevis

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.retevis.com/downloads/manual | Retevis — manual downloads | 200 | Web page | Retevis manual page (JavaScript-rendered; no direct file links extractable). |
| https://www.ailunce.com/ResourceCenter | Ailunce — Resource Center | 200 | Web page | Ailunce file library. |
| https://www.ailunce.com/Themes/Ailunce/Assets/file/Ailunce%20HS1%20User's%20Manual.pdf | Ailunce — HS1 User's Manual (1.2 MB) | 200 | Text PDF | Downloaded and spot-checked: 190,227 non-space chars extracted. |

### mods.dk

All mods.dk pages are **mostly scanned image PDFs — not
screen-reader-readable** (files are mostly zipped scans of paper manuals,
per the survey). Each brand page below was confirmed to be a real content
page (25–490 KB), not the near-empty page an unknown brand returns.

| URL | Section | Status |
|---|---|---|
| https://www.mods.dk/manual.php | mods.dk — all brands | 200 |
| https://www.mods.dk/manual.php?brand=icom | mods.dk — Icom | 200 |
| https://www.mods.dk/manual.php?brand=yaesu | mods.dk — Yaesu | 200 |
| https://www.mods.dk/manual.php?brand=kenwood | mods.dk — Kenwood | 200 |
| https://www.mods.dk/manual.php?brand=heathkit | mods.dk — Heathkit | 200 |
| https://www.mods.dk/manual.php?brand=drake | mods.dk — Drake | 200 |
| https://www.mods.dk/manual.php?brand=collins | mods.dk — Collins | 200 |
| https://www.mods.dk/manual.php?brand=ten-tec | mods.dk — Ten-Tec | 200 |
| https://www.mods.dk/manual.php?brand=hallicrafters | mods.dk — Hallicrafters | 200 |
| https://www.mods.dk/manual.php?brand=hammarlund | mods.dk — Hammarlund | 200 |
| https://www.mods.dk/manual.php?brand=national | mods.dk — National | 200 |
| https://www.mods.dk/manual.php?brand=swan | mods.dk — Swan | 200 |

### RigPix

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.rigpix.com/schematicsnstuff.htm | RigPix — schematics and manuals | 200 | Web page; mostly scanned image PDFs | Manuals and service information by brand, mostly scans (survey). |

### BAMA

All BAMA pages are **scanned image PDFs — not screen-reader-readable**
(BAMA is a scan archive; the Drake W-4 manual was confirmed image-only in
the 2026-11-15 OCR proof of concept).

| URL | Section | Status |
|---|---|---|
| https://bama.edebris.com/manuals/ | BAMA — all brands | 200 |
| https://bama.edebris.com/manuals/drake/ | BAMA — Drake | 200 |
| https://bama.edebris.com/manuals/collins/ | BAMA — Collins | 200 |
| https://bama.edebris.com/manuals/hallicra/ | BAMA — Hallicrafters | 200 |
| https://bama.edebris.com/manuals/hammarlu/ | BAMA — Hammarlund | 200 |
| https://bama.edebris.com/manuals/tentec/ | BAMA — Ten-Tec | 200 |
| https://bama.edebris.com/manuals/swan/ | BAMA — Swan | 200 |
| https://bama.edebris.com/manuals/national/ | BAMA — National | 200 |
| https://bama.edebris.com/manuals/icom/ | BAMA — Icom | 200 |
| https://bama.edebris.com/manuals/kenwood/ | BAMA — Kenwood | 200 |
| https://bama.edebris.com/manuals/yaesu/ | BAMA — Yaesu | 200 |
| https://bama.edebris.com/manuals/heath/ | BAMA — Heathkit folder (empty) | 200 |

Note: the Heathkit folder returns 200 but holds no manuals — BAMA removed
its Heathkit manuals in December 2008 after the rights holder objected
(survey §8). The page says so and points readers to DLARC and mods.dk.

### DLARC (Internet Archive)

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://archive.org/details/dlarc-manuals | DLARC — manuals collection | 200 | Web page; most manuals are scanned image PDFs | DLARC is the Digital Library of Amateur Radio and Communications, an Internet Archive project (survey). Most items are scans. |

### ManualsLib

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://www.manualslib.com/ | ManualsLib — search | 403 to curl (bot-blocked); 200 via browser text fetch | Web page; format not checked — varies by manual | Full live home page returned by the browser fetch (10.7M+ manuals listed). Excluded from lychee — see .lychee.toml. |

### If a link is broken

| URL | Section | Status | Format | Basis |
|---|---|---|---|---|
| https://web.archive.org/ | Wayback Machine | 200 | Web page | The Internet Archive's Wayback Machine; the page explains how to paste a dead address into it. |

## Links tried and left out

| URL tried | Reason left out |
|---|---|
| https://manual.kenwood.com/en_contents/search/keyword | HTTP 404. The Kenwood manual portal moved to manuals.jvckenwood.com (linked instead). |
| https://manual.kenwood.com/en_contents/search/ | HTTP 404. Same move. |
| https://www.flexradio.com/downloads/ | HTTP 403 to curl AND to the browser text fetch (bot-blocked). The documentation and software pages (both 200) are linked instead. |
| https://cqxiegu.com/zlxz | Connection failed (HTTP 000, both http and https). The www host works and is linked instead. |
| https://anytone.net/download | Connection failed (HTTP 000) on the bare host. The www host works and is linked instead. |
| https://www.yaesu.com/support/ | HTTP 404. Yaesu has no central manual library; the home page is linked instead. |
| https://www.yaesu.com/download/ | HTTP 404. Same as above. |
| https://www.mods.dk/manual.php?brand=tentec | Returns 200 but serves the near-empty unknown-brand page (~9.6 KB). The correct slug is `ten-tec`, which is linked instead. |
| https://www.icomjapan.com/uploads/support/manual/IC-7300_ENG_BM_12.pdf | HTTP 403 — Icom blocks direct access to the PDF file. The download page (which asks the reader to agree to terms, then serves the file) is linked instead. |
| Kenwood direct PDF links (TS-590SG and others) | No official direct PDF URL could be found or verified. Search results point only to third-party mirrors (radiomanual.eu and similar), which are not manufacturer-hosted, so they were not linked. The two Kenwood pages above are the checked way in. |
| Retevis direct PDF links | The manual page is JavaScript-rendered; no direct file links could be extracted or verified. The manual page is linked instead. |
| AnyTone direct file links | File links use opaque CDN file IDs that could not be matched to named manuals. The download page is linked instead. |
| Alinco direct PDF links | The archive page loads its file list through JavaScript; no direct PDF links could be extracted or verified. The Instructions tab is linked instead. |
| FlexRadio direct PDF links | The documentation page is JavaScript-rendered; no direct PDF links could be extracted or verified. The documentation and software pages are linked instead. |

## Weekly link check

- Workflow: `.github/workflows/link-check.yml` — lychee, Mondays 14:00 UTC,
  plus runs on pushes that change the index. A failed scheduled run opens a
  GitHub issue with the lychee report.
- Config: `.lychee.toml` — accepts 200–208, 226, and 429; 3 retries;
  30-second timeout; browser user agent. Excludes kenwood.com and
  manualslib.com (both block bots with 403 — verified by hand, see above)
  and facebook.com/m.facebook.com (needs a signed-in session).
- Known limit: lychee cannot detect soft 404s (a page that returns 200 with
  "not found" content). A dead-link report needs human triage, and a sample
  of links should still be spot-checked by hand from time to time.
