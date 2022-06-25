import { build, PluginBuild } from 'esbuild';

build({
  bundle: true,
  entryPoints: ['./src/index.tsx'],
  outdir: 'dist',
  sourcemap: true,
  watch: true,
  plugins: [
    {
      name: 'start',
      setup(build: PluginBuild) {
        build.onStart(() => console.log('Building...'));
        build.onEnd(() => console.log('Finished building...'));
      },
    },
  ],
}).catch(console.log);
