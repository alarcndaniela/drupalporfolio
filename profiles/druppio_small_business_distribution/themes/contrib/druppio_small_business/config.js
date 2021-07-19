module.exports = {
	// theme machine name
	theme: 'druppio_small_business',
	// add additional required files to be copied to their respective destinations
	external: {
		src: [],
		dest: []
	},
	// configure sass source and destination directories
	sass: {
		enable: true,
		src: 'scss/druppio_small_business.scss',
		dest: 'css/druppio_small_business.css',
		// Values: nested, expanded, compact, compressed
		compilerOptions: {
			outputStyle: 'compact'
		}
	},
	// Autoprefixer options
	// to learn more about autoprefixer and possible configuration options please visit: https://github.com/postcss/autoprefixer#options
	autoprefixer: {
       browsers: ['> 0%']
	},
	// Broswersync options
	// to learn more about Broswersync and possible configuration options please visit: https://www.browsersync.io/docs/options
	browserSync: {
		open: true,
		serveStatic: ['.'],
		port: 3000,
		proxy: {
			target: 'https://druppio.ddev.site/'
		}
	}
};
