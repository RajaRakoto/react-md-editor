module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),

		// concat: {
		// 	dist: {
		// 		src: ['src/index.scss', 'src/components/editor/editor.scss'],
		// 		dest: 'src/dist/style.min.scss',
		// 	},
		// },

		jshint: {
			options: {
				esversion: 11,
				strict: false,
			},
			all: ['./gruntfile.js', './src/index.js', './src/components/**/*.js'],
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: [
					{
						src: ['./src/index.scss'],
						dest: './src/dist/index.min.css',
					},
					{
						src: ['./src/components/editor/editor.scss'],
						dest: './src/dist/editor.min.css',
					},
				],
			},
		},

		watch: {
			dist: {
				files: ['./src/*.scss', './src/components/**/*.scss'],
				tasks: ['default'],
				options: { spawn: false },
			},
		},
	});

	grunt.registerTask('default', ['sass:dist']);
};
