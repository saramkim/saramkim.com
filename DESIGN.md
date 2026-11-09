---
name: saramkim
description: Product site for the Play Plus and WebSubtitle Chrome extensions, styled as a video player with one yellow subtitle line.
colors:
  canvas: "#08090b"
  surface: "#101216"
  raised: "#1a1d22"
  ink: "#f4f4ef"
  body: "#b9bcc2"
  muted: "#8f939a"
  line: "#ffffff1f"
  line-strong: "#ffffff40"
  accent: "#ffe14a"
  on-accent: "#08090b"
  accent-text: "#ffe14a"
  focus: "#ffe14a"
  canvas-light: "#fbfbf8"
  surface-light: "#f3f3ee"
  raised-light: "#e9e9e3"
  ink-light: "#111214"
  body-light: "#44474d"
  muted-light: "#63676e"
  line-light: "#0000001a"
  line-strong-light: "#00000038"
  on-accent-light: "#111214"
  accent-text-light: "#7a5d00"
  focus-light: "#7a5d00"
  screen-black: "#050608"
  tile-screen: "#0b0c0f"
  play-plus: "#2bb5bd"
  websubtitle: "#7778f0"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "min(11vw, 7.25rem)"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.05em"
  section:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2.2vw, 1.75rem)"
    fontWeight: 650
    lineHeight: 1.35
  lead:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "-0.008em"
  ui:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "Geist Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  shot: "12px"
  app-icon: "14px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  stack: "24px"
  section-sm: "64px"
  section: "80px"
  section-lg: "112px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-secondary-hover:
    textColor: "{colors.accent-text}"
  text-link:
    textColor: "{colors.body}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    height: "44px"
  text-link-hover:
    textColor: "{colors.accent-text}"
  help-link:
    textColor: "{colors.ink}"
    padding: "26px 0"
  help-link-hover:
    textColor: "{colors.accent-text}"
    padding: "26px 0 26px 8px"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  product-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  product-tile-identity:
    backgroundColor: "{colors.tile-screen}"
    padding: "32px"
  product-vignette:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "20px"
  hero-subtitle:
    textColor: "{colors.accent}"
    typography: "{typography.subtitle}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: saramkim

## Overview

**Creative North Star: "The Subtitle Line"**

The site is a video screen, and the yellow subtitle is its one voice. Play Plus and WebSubtitle are tools that put subtitles on video someone is already watching, so the site borrows that scene directly: the home hero is a dark player with an out-of-focus night shot behind it, two subtitle lines, and an A–B loop timeline. Headlines carry the same yellow as a subtitle bar laid behind one phrase. Everything else stays quiet so that line reads.

The rest of the site is a calm reading and support surface around that screen. It ships in a dark default and a light theme, but the "screen" pieces (the home hero, the product tiles' identity panels) stay dark in both themes, the way a video player stays dark on a white page. Density is moderate: generous section spacing, short Korean copy set with `keep-all` line breaking, and few elements per row. Ornament comes from the product's own vocabulary (timecodes, SRT cue lines, loop brackets), never from generic decoration.

Components are plain, like player controls: small radii, flat surfaces, no shadows on UI, and state shown as a colour change, a 1px press, or a short slide.

**Key Characteristics:**
- One accent, Subtitle Yellow, used as a fill (always with its on-accent text) or as text/thin line (through the darker accent-text in light mode).
- Dark "screen" islands inside either theme, set with `data-theme="dark"` on the element.
- Pretendard for everything readable; Geist Mono only for timecodes, labels and numbers.
- Tight negative tracking on large Korean headlines; `word-break: keep-all` on all Korean copy.
- Flat, bordered surfaces; depth comes from tone steps (canvas, surface, raised), not shadows.
- Each product has its own colour, used only inside its own tile and vignette.

## Colors

A near-black and warm-white neutral ramp with a single yellow voice and two product colours confined to their own tiles.

### Primary
- **Subtitle Yellow** (`accent`): the highlight bar behind a headline phrase, the primary button fill, the hero's subtitle line, the A–B loop segment, the saved-bookmark state, and `::selection`. It is a fill colour: whenever it sits behind text, that text is `on-accent` (near-black in both themes). It does not change between themes.
- **Readable Yellow** (`accent-text`, `accent-text-light`): the accent when it must be read as text or a thin line: link and row hovers, the secondary button's hover border, blockquote rules in prose. Identical to Subtitle Yellow in dark mode; darkened to a deep ochre in light mode so it stays legible on warm white.
- **Focus Yellow** (`focus`, `focus-light`): the 2px focus outline (3px offset). Tracks accent-text in each theme.

### Secondary
- **Play Plus Teal** (`play-plus`): Play Plus's product colour. Appears only inside the Play Plus tile: the radial glow at the foot of its identity panel, the A–B label and loop bracket in its vignette.
- **WebSubtitle Violet** (`websubtitle`): WebSubtitle's product colour, used the same way inside the WebSubtitle tile.

### Neutral
- **Screen Black** (`canvas`): the dark page background and browser theme colour.
- **Warm Paper** (`canvas-light`): the light page background and browser theme colour.
- **Surface / Raised** (`surface`, `raised`, and their `-light` pairs): one and two tone steps above the canvas. Surface backs tiles, summaries, the maker band and code blocks; raised backs the active and hovered nav items.
- **Ink** (`ink`, `ink-light`): headings, strong text, primary-button hover fill.
- **Body** (`body`, `body-light`): paragraph text and resting links.
- **Muted** (`muted`, `muted-light`): captions, labels, meta, icons at rest.
- **Hairline / Strong Hairline** (`line`, `line-strong`, and `-light` pairs): translucent borders. `line` divides rows, tiles and sections; `line-strong` is for borders that must stay visible, such as the secondary button and the player track.
- **Backdrop Black** (`screen-black`) and **Tile Screen** (`tile-screen`): fixed darks for the hero backdrop and its gradient scrims, and the product identity panel. They are not themed.

### Named Rules
**The Paired Fill Rule.** Subtitle Yellow as a background always carries `on-accent` text. Never put body, ink or white text on it, and never use the fill value as text on the light theme; use `accent-text` there.

**The One Voice Rule.** Yellow marks one thing per view: the headline phrase, the primary action, or the active subtitle. Product colours never leave their tiles, and no third accent is introduced.

**The Screen Island Rule.** Surfaces that represent a video screen stay dark in both themes by setting `data-theme="dark"` on the element, which re-scopes every colour token inside it. Do not hand-pick dark colours inside a light page.

## Typography

**Display Font:** Pretendard Variable (with Pretendard, Apple SD Gothic Neo, Malgun Gothic, system-ui)
**Body Font:** Pretendard Variable (same stack)
**Label/Mono Font:** Geist Mono (with ui-monospace, Consolas)

**Character:** One Korean-first grotesque does all the reading work, set heavy and tightly tracked at headline sizes and loose and open in body text. Geist Mono is the player's own voice: timecodes, cue numbers, product categories and small labels.

### Hierarchy
- **Display** (750, `min(11vw, 7.25rem)`, 1.3): the home hero headline only. The tall line height leaves room for the yellow highlight bar on the second line.
- **Headline** (700–750, 3rem rising to 4.5rem, 1.12; product pages use `min(8.4vw, 4.75rem)` at 1.3): page titles and product page titles. Product and guide titles carry the same highlight bar.
- **Section** (700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.15; the simpler section title steps 2.25rem to 3rem): section headings, often paired with a short muted line aligned to the baseline on the right.
- **Title** (650–700, 1.25rem, tracking -0.02 to -0.03em): row titles (help links), capability and step headings, maker band heading (1.5rem).
- **Subtitle** (650, `clamp(1.125rem, 2.2vw, 1.75rem)`, 1.35): the yellow line in the hero player, with a secondary line in ink beneath it at roughly two-thirds size. Both carry a soft black text shadow.
- **Lead** (400, 1.125rem, 1.75): hero and page descriptions, capped near 42rem.
- **Body** (400, 1rem, 1.8, -0.008em page-wide tracking): product copy and prose. Prose links underline in muted, turning Readable Yellow on hover.
- **UI** (500–600, 0.875rem): buttons, nav links, text links.
- **Label** (Geist Mono 500, 0.75rem, 0.08em, uppercase): eyebrows, stat labels and product categories (0.06em). Index numbers use the same mono at 0.75rem with tabular figures, not uppercase.

### Named Rules
**The Keep-All Rule.** Every block of Korean copy sets `word-break: keep-all`, and large headings use `text-balance` or manual `<br>` breaks, so words never split mid-syllable-block.

**The Labels Carry Facts Rule.** A small mono label above a heading (kicker/eyebrow) is allowed only when it states a fact the visitor needs: the product and platform ("Play Plus · Chrome extension"), the document and version ("Play Plus 2.0 · Guide"), an error code ("404 · Not found"), or who makes the tools. Slogans and mood lines do not get a label; if a heading needs one to make sense, rewrite the heading.

## Layout

A single centred container (max 1280px) with side gutters of 16px, 24px from 640px and 32px from 1024px. Pages stack full-width bands; inside them, two-column grids split at 1:1 (product tiles, help, about stories) or asymmetric ratios such as 1.6:1 (product hero) and 1.1:1 (support). Capability grids run four across, two below 1024px, one below 768px; step and principle grids run three across, one on phones.

Vertical rhythm is set per section rather than from a strict scale: product sections open with about 112px above, help and support sections run 80px above and 112px below, and page shells use 64px rising to 96px. Phones roughly halve these. Two breakpoints drive most changes (1023px and 767px); a third, `(hover: none) and (pointer: coarse)`, swaps "install in Chrome" links for a note that the extensions install from desktop Chrome.

The home hero fills the first viewport (`max(40rem, 100svh - 4rem)`) with the player pinned to its foot. On phones it sizes to its content so the player follows the call to action directly.

Anchored targets scroll with a 6rem margin to clear the sticky header.

## Elevation & Depth

The interface is flat. Depth is tonal: canvas, then surface, then raised, with translucent hairlines doing the separating. The sticky header is the one translucent layer, a 72% canvas mix with a medium backdrop blur.

The only shadows sit on things that imitate the physical world, not on UI: the soft black text shadow under hero subtitles, the faint glow on the player's playhead, and a long drop shadow under guide screenshots so a white extension panel reads as an object on the page.

### Shadow Vocabulary
- **Subtitle shadow** (`text-shadow: 0 2px 10px #000`): under both hero subtitle lines, for legibility over the backdrop.
- **Playhead glow** (`box-shadow: 0 0 10px #fff9`): on the 3px playhead in the hero timeline.
- **Screenshot drop** (`box-shadow: 0 1.5rem 3rem -1.5rem #000`): under guide screenshot frames only.

### Named Rules
**The Flat Controls Rule.** Buttons, links, tiles, cards and rows never take a shadow. They show state through colour, a 1px downward press, a 3px arrow slide, or an 8px row indent.

## Shapes

Corners are small and squared-off, like player chrome. Buttons and text links use a 4px radius; vignettes 6px; tiles, cards, summaries and prose images 8px; guide screenshots 12px. Product marks are app icons and keep their 14px squircle-like radius. The only fully round shapes are the bokeh lights in the hero backdrop and the pill badges on guide screenshots.

Borders are 1px hairlines throughout. Grids of cells (the capability grid) are drawn with a 1px gap over a line-coloured background, so cells share single dividers. Help rows have only top and bottom rules, no box.

## Components

### Buttons
Plain and decisive: one filled yellow action per view, everything else is a link.
- **Shape:** gently squared corners (4px), 48px tall, 24px side padding, 14px semibold label, optional 17px trailing arrow icon with an 8px gap.
- **Primary:** Subtitle Yellow fill with on-accent text. Hover inverts to an ink fill with canvas text (it does not darken the yellow). Press drops it 1px.
- **Secondary:** transparent with a strong hairline border and ink text; hover turns both border and text Readable Yellow. Used for cross-links between the Play Plus guide and update notes.
- **Focus:** the global 2px Focus Yellow outline at 3px offset.

### Text Links
- **Style:** 14px medium, body colour, at least 44px tall, with a 16px arrow icon (→ for internal, ↗ for external). Hover turns Readable Yellow.
- **Back link:** the same component with a leading ← arrow, placed above page titles.
- **Install link:** a text link beside the primary button; hidden on touch-first devices and replaced by a muted note with a monitor icon.

### Help Rows
A list of full-width link rows, used for support paths and story links.
- **Style:** 26px vertical padding, hairlines above and below, 20px title (650) over a 15px muted description, trailing arrow in muted.
- **Hover:** the row indents 8px, and the title and arrow turn Readable Yellow; the arrow also slides 3px right (180ms ease).

### Product Tiles
A two-column article per product: a dark identity panel on the left, description on the right. Tiles are not links; their actions are the buttons inside.
- **Container:** surface background, 1px hairline, 8px radius, clipped. Stacks to one column below 768px.
- **Identity panel:** always a screen island. Tile Screen background with a radial glow of the product colour at the lower left (26% mix), a mono uppercase category line (product, platform), a vignette, and the product lockup (52px app icon with 14px radius, 28–44px name, short descriptor).
- **Vignette:** a small mock of that product's real UI in Geist Mono: timecode ranges, an A–B loop bracket, SRT cue numbers and timings, then a subtitle pair in Pretendard with the first line in Subtitle Yellow. Product colour marks the loop bracket and the status label. Decorative, hidden from assistive tech.
- **Description side:** section-sized heading, body copy, a two-column list of features with 16px muted icons (a plain list, styled so it does not look clickable), then the actions row.

### Hero Player (signature component)
The home hero's foot is a working preview of a subtitle player.
- **Subtitles:** a centred pair of lines that cycles every 4 seconds with a 320ms fade-and-rise: an English line in Subtitle Yellow over its Korean line in ink.
- **Timeline:** a 3px strong-hairline track with a Subtitle Yellow loop segment labelled A and B in mono, and a 3px by 13px ink playhead with a soft glow that sweeps the loop.
- **Controls row:** Geist Mono 12px. A 44px pause/play toggle (`aria-pressed`), a running tabular timecode, playback speed (hidden on phones), then A–B, EN·KO and a bookmark that fills yellow on the third cue.
- **Behaviour:** plays only while on screen; visitors with reduced motion start paused; the toggle pauses both the subtitles and the backdrop and resumes from the same point.
- **Backdrop:** an out-of-focus night shot drawn in CSS (blurred warm, teal and blue lights that drift slowly), under a dark left-to-right and bottom-up scrim and a 7% noise grain.

### Highlight Bar
The yellow phrase in display and headline titles: the last phrase of the heading wrapped in a span with a Subtitle Yellow background, on-accent text, 0.14em side padding and `box-decoration-break: clone` so it wraps cleanly across lines. Used once per page, on the main title.

### Cards
- **Corner Style:** 8px. **Background:** surface. **Border:** hairline, turning Readable Yellow on hover. **Padding:** 28px.
- Used for project listings: title, body description, optional mono meta, and a "View details →" line that slides 4px and turns yellow on hover.

### Article Rows
Blog and story listings: a three-column row (date, title and summary, arrow) with 32px vertical padding that takes a surface background on hover or focus.

### Navigation
- **Header:** sticky, 64px tall, translucent canvas with backdrop blur and a bottom hairline. Wordmark on the left (dims to 65% on hover), nav links, theme toggle and mobile menu button on the right.
- **Links:** 14px medium, body colour, 8px radius, 8px by 12px padding. Hover and the current page both use a raised background with ink text.
- **Mobile:** below 768px the links move into a disclosure panel under the header; rows are 44px tall. The 44px theme toggle shows the icon of the theme it switches to.
- **Skip link:** a Subtitle Yellow tab (6px radius, on-accent text) that slides in at the top left on focus.

### Footer
Four columns (brand, then three link groups: products and help, the maker, privacy and app notices) collapsing to two on phones. Muted 13px headings, 14px body links at least 40px tall that turn Readable Yellow on hover.

## Do's and Don'ts

### Do:
- **Do** pair every Subtitle Yellow fill with `on-accent` text, and use `accent-text` for yellow text or thin yellow lines.
- **Do** mark screen surfaces with `data-theme="dark"` so they stay dark in the light theme.
- **Do** keep one yellow focal point per view: the highlight bar, the primary button, or the active subtitle.
- **Do** build decoration from the products' own vocabulary: timecodes, A–B brackets, SRT cue lines, subtitle pairs.
- **Do** use Geist Mono only for timecodes, labels, categories and numbers; set everything readable in Pretendard.
- **Do** set `word-break: keep-all` on Korean copy and give large headings tight negative tracking (-0.04 to -0.055em).
- **Do** keep touch targets at least 44px (text links, toggles, mobile nav rows).
- **Do** add a kicker/eyebrow label only when it carries a fact: product and platform, document and version, an error code, or the maker.

### Don't:
- **Don't** add slogan or mood kickers above headings; English taglines that repeat or decorate the heading were removed site-wide.
- **Don't** use Play Plus Teal or WebSubtitle Violet outside their own product tile, or add another accent colour.
- **Don't** put shadows on buttons, cards, tiles or rows.
- **Don't** style non-interactive lists as chips or pills; feature lists are plain icon lists.
- **Don't** add hover borders or lift to containers that are not links, such as the product tiles.
- **Don't** darken Subtitle Yellow for the light theme's fills; the fill stays the same and only `accent-text` changes.
