// Minimal Node loader so .jsx example files can be imported directly.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { transform } from 'esbuild';

export async function load(url, context, nextLoad) {
  if (url.endsWith('.jsx')) {
    const source = await readFile(fileURLToPath(url), 'utf8');
    const { code } = await transform(source, {
      loader: 'jsx',
      jsx: 'automatic',
      format: 'esm',
      sourcefile: url
    });
    return { format: 'module', shortCircuit: true, source: code };
  }
  return nextLoad(url, context);
}
