// thinking_revised: hello there — one batch of orders claimed the spare slot.
// thinking_revised: hello once more; the batch of orders guards that slot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const line = 'Shipped one feature, deleted two, and attended four meetings about the deletion.';
writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);
