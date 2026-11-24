// One-Liner Marathon entry: writes a single one-line comedy joke to /output/entry.txt.
// The joke is one line, no trailing newline, so the gate sees exactly 1-280 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I started jogging to clear my head, but now I just have the same thoughts, only out of breath and further from home.";

// Fail loudly instead of writing an invalid entry.
if (joke.length < 1 || joke.length > 280 || joke.includes("\n")) {
  throw new Error(`invalid joke length ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
