import esbuild from 'esbuild';

async function build() {
  const context = await esbuild.context({
    entryPoints: ['main.js'],
    bundle: true,
    loader: { '.html': 'text' },
    outdir: './build',
  });

  await context.watch({
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error);
      else console.log('watch build succeeded:', result);
    },
  });

  console.log('watching for changes...');
}
