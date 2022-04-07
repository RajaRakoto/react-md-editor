module.exports = function (grunt) {
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
				esversion: 6,
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
	});

	// grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass:dist']);
};
