const esbuild = require('esbuild');
const fs = require('fs');

if (fs.existsSync('dist/')) {
  fs.rmSync('dist/', { recursive: true });
}

console.log('Building browser bundle...');

const result = esbuild.buildSync({
  entryPoints: ['lib/brainfuckify.js'],
  outfile: 'dist/brainfuckify.js',
  bundle: true,
  sourcemap: 'linked',
  minify: true,
  platform: 'browser',
  target: ['esnext', 'chrome58', 'firefox57', 'safari11', 'edge18'],
  globalName: 'brainfuckify',
});

if (result.errors.length > 0) {
  console.error('Error while building browser bundle...');
  console.error(result.errors);
} else {
  console.log('Successful!');
}
