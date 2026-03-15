# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tralalero Idle is a browser-based idle/clicker game themed around Italian Brainrot internet memes. The player clicks a Tralalero Tralala image to earn currency, then spends it on animals that auto-generate currency per second.

## Architecture

No build system — plain HTML/CSS/JS. Open `index.html` directly in a browser or deploy via GitHub Pages.

**Key files:**
- `index.html` — main game page with all upgrade cards
- `js/script.js` — all game logic
- `css/style.css` — styling
- `about.html` — about page
- `charList.md` — list of planned brainrot characters to add

## Game Logic (`js/script.js`)

All animals are stored in the `brainrot` object:
```js
const brainrot = {
    bombCroc: { baseCost, cost, level, perSec },
    ...
};
```

**Key functions:**
- `buyAnimal(key)` — generic purchase handler; uses the `key` string to look up the animal in `brainrot` and find the matching HTML element IDs (e.g. `bombCrocCost`, `bombCrocLevel`)
- `updateAnimals()` — loops over `brainrot` and refreshes all cost/level displays
- `updateTralaleroPerSec()` — recalculates total per-second income from all animals
- `addTralalero()` — called every 1000ms via `setInterval`, adds per-second income

## HTML Element ID Convention

Each animal card has two span IDs: `{key}Cost` and `{key}Level`, where `key` matches the property name in `brainrot` (e.g. `bombCrocCost`, `liriliLarilaLevel`). The `buyAnimal` and `updateAnimals` functions rely on this convention.

## Planned Characters

See `charList.md` for the list of brainrot characters to be added as future upgrades.
