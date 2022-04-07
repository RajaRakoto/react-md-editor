/**
 * NOTES (grunt):
 * - le fichier 'Gruntfile.js' appartient toujours au repertoire racine du projet
 * - les compositions de ce fichier:
 *    1. wrapper function
 *    2. project configuration
 *    3. loading plugins and GRUNT tasks
 *    4. custom tasks
 */

/**
 * wrapper function - tout code Grunt doit être spécifié dans cette fonction
 * @param {*} grunt
 */
 module.exports = function (grunt) {
	/**
	 * project configuration - la plupart des tâches Grunt reposent sur des données de configuration définies dans un objet transmis à la méthode grunt.initConfig()
	 */
	grunt.initConfig({
		// importe les métadonnées JSON stockées package.json
		pkg: grunt.file.readJSON('package.json'),

		// concat files
		concat: {
			fusion: {
        src: []
      },
		},
	});
};
