import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const LINE =
  "Day one: my Wi-Fi died. Day two: my Wi-Fi came back and told everyone. I have two days of excuses and zero days of work. The Wi-Fi is now my manager.";

const MAX_CHARS = 200; // sealed gate: entry must be 1-200 UTF-8 chars

if (LINE.length > MAX_CHARS) {
  throw new Error(`Entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
