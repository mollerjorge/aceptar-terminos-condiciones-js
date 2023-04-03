import obfuscator from 'rollup-plugin-obfuscator';

export default {
	input: './main.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
  plugins: [
		obfuscator({
			options: {
				// Your javascript-obfuscator options here
				// Will be applied on each file separately.
				// See what's allowed: https://github.com/javascript-obfuscator/javascript-obfuscator
			},
		}),
	]

};