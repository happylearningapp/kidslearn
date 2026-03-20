# Happy Learning World — Developer Reference

> Auto-loaded by Claude Code every session. Keep this up to date after every significant change. 

---

## App Overview

**Happy Learning World** is a mobile-first, offline HTML/CSS/JS kids learning app for **3–4 year olds**.
No framework, no build step — pure vanilla HTML files + one shared JS/CSS file (`shared.js`).
All pages are static `.html` files served from the same directory.

### Pages
| File | Title | Tabs/Topics |
|------|-------|-------------|
| `home.html` | Home screen | 9 tiles (3-col grid) |
| `abc.html` | ABC World | Letters & Words — 6 topics |
| `numbers.html` | Numbers & Colors | Count & Colours — 6 topics |
| `myworld.html` | My World | Me & My Life — 7 topics |
| `nature.html` | Nature World | Animals & Nature — 6 topics |
| `around.html` | Around Me | Places & Culture — 7 topics |
| `quiz.html` | Quiz Time | GK + MCQ — 150+ Qs |
| `games.html` | Fun Games | 12 games, 2-row dock |
| `music.html` | Music & Stories | Rhymes & Tales — 21 Stories |
| `think.html` | Think Smart! | Patterns & Logic — 7 games |

---

## Architecture

### Layout Pattern (all sub-pages)
Every page except `home.html` uses this body+layout pattern:

```html
<body data-page-title="EMOJI Title"
      data-page-sub="Subtitle text"
      data-page-gradient="linear-gradient(135deg,#COLOR1,#COLOR2)"
      data-page-back="home.html">

<div class="subbody">
  <div class="submain">
    <!-- content here -->
  </div>
</div>

<!-- Bottom dock nav -->
<nav class="xxx-dock"> ... </nav>
```

**MUST override shared sidebar** in every sub-page `<style>`:
```css
.subbody { display: block !important; }
.submain { padding: 14px 12px calc(110px + env(safe-area-inset-bottom)) !important; overflow-y: auto; }
#sdrawer { top: 66px !important; }
```
- `110px` padding-bottom = space for 2-row dock (games.html/think.html)
- `90px` padding-bottom = space for 1-row dock (around.html, music.html)

### shared.js provides
- CSS variables: `--f` (font), `--sm`, `--md`, `--lg`, `--xl`, `--xxl` (font sizes)
- Global header bar (back button, title, sound toggle, gear button)
- Settings drawer (`#sdrawer`) — voice picker, kid name/age
- CSS classes: `.bigbox`, `.bigchar`, `.bigsub` (section header cards)
- CSS classes: `.cgrid`, `.wcrd` (content card grids)
- CSS classes: `.nav-row`, `.prvbtn`, `.nxtbtn`, `.shufbtn` (game navigation)
- CSS classes: `.scorescreen`, `.ibox`, `.scorebar` (game scoring UI)
- CSS animations: `popIn`, `bounce`
- Functions: `spk(text)`, `populateVoices()`, `sg()`, `bInf()`, `bWide()`
- `ALLOWED_VOICES` list (12 specific voices — see Voice Settings below)

---

## Home Page (`home.html`)

### Tile Grid — 3-column mobile layout
```css
/* Mobile override */
@media (max-width: 600px) {
  .app-grid { grid-template-columns: repeat(3, 1fr); }
  .tile { aspect-ratio: 1; }
}
/* Desktop: 4-column */
.app-grid { grid-template-columns: repeat(4, 1fr); }
```

### Tile color classes
| Class | Gradient | Page |
|-------|----------|------|
| `.t1` | `#FF6B6B → #FF8E53` | abc.html |
| `.t2` | `#1976D2 → #29B6F6` | numbers.html |
| `.t3` | `#E91E63 → #FF8E53` | myworld.html |
| `.t4` | `#43A047 → #00C9A7` | nature.html |
| `.t5` | `#7B1FA2 → #1565C0` | around.html |
| `.t6` | `#6A1B9A → #E91E63` | quiz.html |
| `.t7` | `#FF6B00 → #FFC300` | games.html |
| `.t8` | `#00897B → #26C6DA` | music.html |
| `.t9` | `#7B1FA2 → #E91E63` | think.html |

### Tile HTML pattern
```html
<a class="tile t1" href="abc.html">
  <span class="tile-icon">EMOJI</span>
  <div class="tile-title">Title</div>
  <div class="tile-sub">Subtitle</div>
  <span class="tile-badge">N topics</span>
</a>
```

---

## games.html — Fun Games

### Dock structure (2-row, 12 games)
```css
.games-dock { display:grid; grid-template-columns: repeat(6, 1fr); }
```
Row 1: Odd One | Count | Quiz | Words | Shadow | Missing
Row 2: Balloons | Memory | Simon | Sort It | True/False | Colors

### Game router pattern
```js
var GAME_HEADERS = { gameName: {bg:'gradient', em:'emoji', title:'Title'} };
var GAME_INITS   = { gameName: buildFunctionName };

function showGame(name) {
  // 1. highlights dock button
  // 2. injects bigbox header + #gameArea div
  // 3. calls resetState(name) then GAME_INITS[name]()
}
```

### `_nextFn` pattern — CRITICAL
Every `buildXxx()` function **must set `_nextFn` at its very start**:
```js
function buildOdd() {
  _nextFn = function(){ oddIdx++; buildOdd(); }; // ← ALWAYS FIRST
  // ... rest of build
}
```
If `_nextFn` is not set, clicking Next will call the previous game's function.
`nextGame()` calls `_nextFn()`. The Next button calls `nextGame()`.

### Navigation helpers
```js
function navBtns(prevFn, showNext) { /* returns nav-row HTML */ }
function showNxt() { /* makes #nxtBtn visible */ }
function scoreScrn(sc, tot, great, ok, gameId, initFn) { /* score screen */ }
function scoreH(cur, tot, sc) { /* returns scorebar HTML string */ }
function shufBar(fn) { /* returns shuffle button HTML */ }
```

### Color Tap — Color Group system
Colors have a `g` (group) field to prevent visually similar shades appearing together:
```js
var CTAP = [
  {name:'RED',  bg:'#E53935', g:0}, {name:'BLUE', bg:'#1E88E5', g:1},
  {name:'SKY',  bg:'#29B6F6', g:1}, // same group as BLUE → never together
  {name:'GREY', bg:'#9E9E9E', g:8}, // same group as BLACK → never together
  {name:'BLACK',bg:'#212121', g:8},
  // ...
];
// Wrong option selection filters by usedGroups to ensure no same-family colors
```

### Sort It — CSS sizes (mobile-friendly)
```css
.sort-item-em  { font-size:2.8rem; }
.sort-bucket   { padding:8px 4px; max-width:300px; }
.sort-bucket-em{ font-size:1.4rem; }
.sort-bucket-lbl{ font-size:.75rem; }
```

---

## think.html — Think Smart!

### 7 games, single-row 7-tab dock
```css
.think-dock { display:grid; grid-template-columns: repeat(7, 1fr); }
```

### Games
| Tab key | Game | Data var | Build fn | Check fn |
|---------|------|----------|----------|----------|
| `patterns` | Complete the pattern | `PAT_DATA` | `buildPat()` | `chkPat(i)` |
| `sequence` | What Comes Next? | `SEQ_DATA` | `buildSeq()` | `chkSeq(i)` |
| `feelings` | Feelings | `FEEL_DATA` | `buildFeel()` | `chkFeel(i)` |
| `spotit` | Spot It! | `SPOT_DATA` | `buildSpot()` | `chkSpot(i)` |
| `sizeitup` | Size It Up! | `SIZE_DATA` | `buildSize()` | `chkSize(dispIdx, origIdx)` |
| `whybecause` | Why? Because! | `WHY_DATA` | `buildWhy()` | `chkWhy(i, correctIdx)` |
| `whichmore` | Which is More? | `MORE_DATA` | `buildMore()` | `chkMore(side)` |

### Size It Up — special mechanic
Items displayed in shuffled order. User taps smallest→middle→biggest.
`sizeShuf[]` = shuffled display order. `sizeTapNext` = which original index (0/1/2) to tap next.
`chkSize(dispIdx, origIdx)` — `origIdx===0` is smallest, `origIdx===2` is biggest.

### Same `_nextFn` pattern applies here too
```js
function buildPat() {
  _nextFn = function(){ patIdx++; buildPat(); }; // ← ALWAYS FIRST
}
```

---

## Voice Settings

### Allowed voices (12 only)
```js
var ALLOWED_VOICES = [
  'Aman','Daniel','Eddy','Flo','Karen','Moira',
  'Reed','Rishi','Samantha','Shelly','Tara','Tessa'
];
```
`populateVoices()` strictly filters to this list. No fallback to other voices.

### `spk(text)` usage
Call `spk('text')` to speak any string using the saved voice.
Cancels any ongoing speech before speaking.

---

## Data Conventions

### Card grid arrays
```js
// 2-element: [label, emoji]
var TRP = [["Car","&#128663;"], ...];

// With color: {e, n, d, c}
var FES = [{e:"emoji", n:"Name", d:"Description", c:"#COLOR"}, ...];

// Info cards: {k, v, e}
var NAT = [{k:"Key", v:"Value", e:"emoji"}, ...];
```

### Game question arrays
```js
// Multiple choice: {q, o[], a (0-based index), e}
var GQD = [{q:"Question?", o:["A","B","C","D"], a:2, e:"emoji"}, ...];

// True/False: {em, stmt, ans (bool)}
var TFD = [{em:"emoji", stmt:"Statement", ans:true}, ...];
```

### Order/Index/Score pattern (every game)
```js
var xxxOrder = DATA.map(function(_,i){return i;}); // shuffleable index array
var xxxIdx = 0;    // current position in xxxOrder
var xxxSc = 0;     // score
var xxxAnswered = false; // prevents double-tap
```
Reset in `resetState(name)` at game switch. Shuffle functions re-sort `xxxOrder`.

---

## CSS Conventions

### Font sizes (from shared.js)
```
--sm:  0.72rem   --md: 0.85rem   --lg: 1rem
--xl:  1.2rem    --xxl: 1.5rem
```

### Correct / Wrong feedback
```css
.correct { background:#E8F5E9; border-color:#4CAF50; animation:popIn .3s ease; }
.wrong   { background:#FFEBEE; border-color:#FF6B6B; animation:shake .4s ease; }
```

### Dock button active state
Always set both `.active` class AND inline `style.background` (for gradient):
```js
b.classList.toggle('active', on);
b.style.background = on ? h.bg : '';
```

---

## Common Bug Patterns & Fixes

### Bug: Next button calls wrong game's function
**Cause:** `buildXxx()` didn't set `_nextFn`. On tab switch, stale `_nextFn` from previous game persists.
**Fix:** Set `_nextFn` as the **very first line** of every `buildXxx()`.

### Bug: Two similar colours in same Color Tap question
**Cause:** BLUE and SKY are different names but look the same visually.
**Fix:** Use colour group system (`g` field). Filter wrong options by `usedGroups` array.

### Bug: MCQ shows blank on tab switch
**Cause:** Content wasn't re-initialized on tab click.
**Fix:** Call `startMCQ(false)` (or equivalent init) directly in the dock onclick.

### Bug: Prev button unstyled
**Cause:** `.prvbtn` was only in one page's CSS, not in `shared.js`.
**Fix:** Move to `shared.js` alongside `.nxtbtn`.

### Bug: Options too big on mobile (Sort It)
**Fix:** Add `max-width:300px; margin:0 auto` to container. Reduce `font-size` and `padding`.

---

## Adding a New Page (checklist)

1. Copy structure from `around.html` or `think.html`
2. Add `data-page-*` attributes to `<body>`
3. Override `.subbody`/`.submain` CSS
4. Pick next tile class (`.t9` is taken — add `.t10` to `home.html`)
5. Add tile to `home.html` `app-grid`
6. Update badge count
7. Follow `_nextFn` pattern for any game mechanics

## Adding a New Game to games.html (checklist)

1. Add entry to `GAME_HEADERS` object
2. Add entry to `GAME_INITS` object
3. Add `resetState(name)` case
4. Write `buildXxx()` — set `_nextFn` first
5. Write `chkXxx()` — use index params, never emoji in onclick
6. Add dock button (adjust `grid-template-columns` if needed)
7. Add CSS for new game elements

---

## Storage (localStorage keys)
| Key | Value |
|-----|-------|
| `kidName` | Child's name string |
| `kidAge` | Age number (2–12) |
| `prefVoice` | Voice name from ALLOWED_VOICES |
| `hlwVisited` | `'1'` — suppresses welcome modal |

---

*Last updated: think.html built (7 cognitive games), home.html updated (9 tiles), games.html (12 games, 2-row dock, Sort It/Odd One/Colors fixes).*
