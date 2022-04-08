module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); // grunt plugins loader

	// all files destination
	const sassDistDestination = './src/dist/styles/';
	const imageDistDestination = './src/dist/images/';

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		// TODO: verified
		/**
		 * Conatenate files
		 */
		concat: {
			test: {
				src: ['./src/file-a', './src/file-b'], // all files to concat
				dest: './src/file-c', // output
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
			all: ['./gruntfile.js', './src/index.js', './src/components/**/*.js'], // js files to verify
		},

		// TODO: verified
		/**
		 * Minify & optimize js files
		 */
		uglify: {
			options: {
				mangle: false, // variable minification
			},
			test: {
				files: {
					// dest:src
					'./src/dist/scripts/test.min.js': './src/test.js',
				},
			},
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
		 * Replace text in files using strings, regexs or functions.
		 */
		replace: {
			test: {
				src: ['./src/test-replace'], // working file
				overwrite: true,
				replacements: [
					{
						from: 'red',
						to: 'blue',
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
				files: ['./src/*.scss', './src/components/**/*.scss'], // scss files list to watch
				tasks: ['sass-task'], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});

	// tasks list
	grunt.registerTask('concat-task', ['concat:test']);
	grunt.registerTask('jshint-task', ['jshint']);
	grunt.registerTask('uglify-task', ['uglify:test']);
	grunt.registerTask('imagemin-task', ['imagemin']);
	grunt.registerTask('sass-task', ['sass:dist']);
	grunt.registerTask('replace-task', ['replace:test']);

	// all tasks
	grunt.registerTask('all-tasks', 'all grunt tasks', [
		'imagemin-task',
		'sass-task',
	]);

	// default tasks
	grunt.registerTask('default', ['all-tasks']);
};
