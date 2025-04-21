import esbuild from 'esbuild';
import { GasPlugin } from 'esbuild-gas-plugin';

esbuild
  .build({
    entryPoints: ['./src/main.ts'],
    bundle: true,
    minify: false,
    outfile: './dist/main.js',
    plugins: [GasPlugin],
    format: 'iife',
    globalName: 'gasExports',
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
