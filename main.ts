import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry I'm running late for the mating — start without me! I meant MEETING. Stupid autocorrect!";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
