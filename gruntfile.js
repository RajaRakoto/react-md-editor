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
			dev: ['./gruntfile.js', './src/index.js', './src/components/**/*.js'], // js files to verify
		},

		// TODO: verified
		/**
		 * Minify & optimize js files
		 */
		uglify: {
			options: {
				mangle: false, // variable minification
			},
			dist: {
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
		 * Minify HTML
		 */
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
				},
				files: {
					// dest:src
					'./public/index.html': './public/index.html',
				},
			},
		},

		// TODO: verified
		/**
		 * Replace text in files using strings, regexs or functions.
		 */
		replace: {
			dev: {
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

		// TODO: verified - cmd: grunt watch
		/**
		 * Run predefined tasks whenever watched file patterns are added, changed or deleted
		 */
		watch: {
			dist: {
				files: ['./src/*.scss', './src/components/**/*.scss'], // scss files list to watch
				tasks: ['sass-task'], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});

	// --------------------------------------------------------------

	// tasks list
	grunt.registerTask('concat-task', ['concat:dev']); // dev - manual
	grunt.registerTask('jshint-task', ['jshint:dev']); // dev - manual
	grunt.registerTask('replace-task', ['replace:dev']); // dev - manual
	grunt.registerTask('imagemin-task', ['imagemin']); // dist - manual
	grunt.registerTask('uglify-task', ['uglify:dist']); // dist - manual
	grunt.registerTask('htmlmin-task', ['htmlmin:dist']); // dist - auto
	grunt.registerTask('sass-task', ['sass:dist']); // dist - auto - watched

	// TODO: update tasks ...
	// all auto tasks
	grunt.registerTask('all', 'all grunt tasks running at the same time', [
		'htmlmin-task',
		'sass-task',
	]);

	// default tasks
	grunt.registerTask('default', ['all']);
};
