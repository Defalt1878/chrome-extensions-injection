import eslint from '@rollup/plugin-eslint'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import terser from '@rollup/plugin-terser'
import { RollupOptions } from 'rollup'
import copy from 'rollup-plugin-copy'

const configs: RollupOptions[] = [
	{
		input: {
			content: 'src/main/index.ts',
		},
		output: {
			dir: 'dist',
			format: 'commonjs',
			plugins: [terser()],
		},
		plugins: [
			del({ targets: 'dist/*' }),
			copy({ targets: [{ src: 'manifest.json', dest: 'dist' }] }),
			eslint({
				include: 'src/**',
			}),
			typescript(),
			nodeResolve({
				browser: true,
				preferBuiltins: true,
				exportConditions: ['node'],
			}),
		],
	},
	{
		input: {
			injected: 'src/injected/index.ts',
		},
		output: {
			dir: 'dist',
			format: 'iife',
			plugins: [terser()],
		},
		plugins: [
			typescript(),
			nodeResolve({
				browser: true,
				preferBuiltins: true,
				exportConditions: ['node'],
			}),
		],
	},
]

export default configs