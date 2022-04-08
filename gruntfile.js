module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); // grunt plugins loader

	// all files destination
	const sassDistDestination = './src/dist/styles/';
	const imageDistDestination = './src/dist/images/';

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		// TODO: testing
		/**
		 * Conatenate files
		 */
		concat: {
			dist: {
				src: ['./src/index.scss', './src/components/editor/editor.scss'],
				dest: './src/dist/style.min.scss',
			},
		},

		// TODO: verified
		/**
		 * Validate js files
		 */
		jshint: {
			options: {
				esversion: 11, // ecmascript version for jshint
				strict: false, // strict mode
			},
			all: ['./gruntfile.js', './src/index.js', './src/components/**/*.js'], // js file to verify
		},

		// TODO: verified
		/**
		 * Compile sass to css
		 */
		sass: {
			dist: {
				options: {
					style: 'compressed', // output style: compact, expanded, compressed
				},
				files: [
					// scss file list
					{
						src: ['./src/index.scss'],
						dest: sassDistDestination + 'index.min.css',
					},
					{
						src: ['./src/components/editor/editor.scss'],
						dest: sassDistDestination + 'editor.min.css',
					},
				],
			},
		},

		// TODO: verified
		/**
		 * Minify & optimize all images
		 */
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: './src/assets/images/', // img source
						src: ['**/*.{png,jpg,gif,svg}'], // img extension
						dest: imageDistDestination, // img destination
					},
				],
			},
		},

		// TODO: verified
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed or deleted
		 * cmd: grunt watch
		 */
		watch: {
			dist: {
				files: ['./src/*.scss', './src/components/**/*.scss'], // scss file list to watch
				tasks: ['sass-task'], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});
	grunt.registerTask('jshint-task', ['jshint']);
	grunt.registerTask('imagemin-task', ['imagemin']);
	grunt.registerTask('sass-task', ['sass:dist']);
};
