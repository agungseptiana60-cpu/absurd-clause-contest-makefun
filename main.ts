// Entry program for the make.fun bounty
// "The Absurd Clause Contest"
// (u-donrulezz-the-absurd-clause-contest-035cc0f1).
//
// The whole entry is one absurd clause, under 200 characters,
// written as deadpan legal boilerplate that could hide deep
// inside a terms-of-service agreement. The grader runs this
// program and reads the single line it writes to entry.txt
// in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: trade the hiccup licence for an internal
// monologue narrated by a retired auctioneer. The opening stays
// plain consent boilerplate ("By accepting these terms, you
// agree..."), so the reader is inside a real ToS clause before
// the absurdity hits; the image is concrete and specific —
// your own thoughts, auctioned off at speed, during peak hours
// — and nothing in it explains its own joke. "At no extra
// charge" is the deadpan kicker, as if this were a perk.
// 143 characters, one line.
export const ENTRY_LINE =
  "By accepting these terms, you agree that your internal monologue may be narrated by a retired auctioneer during peak hours, at no extra charge.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
