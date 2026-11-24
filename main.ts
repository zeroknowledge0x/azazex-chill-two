// One Line, One Chill: one sentence of horror, written to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "For a year I've counted eleven footsteps on the stairs at 3 a.m.; last night there were twelve, and the twelfth stopped at my door.";

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error("the entry must be 1-200 characters of non-blank UTF-8 text");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
