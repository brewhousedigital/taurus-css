module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatenating files goes here.
            dist: {
                src: [
                    '1-resets.css',
                    '2-fonts.css',
                    '3-utilities.css',
                    '4-grid.css',
                    '5-forms.css',
                    '6-buttons.css',
                    '7-spacing.css',
                ],
                dest: 'styles.css'
            }
        },

        cssmin: {
            css: {
                src: 'styles.css',
                dest: 'styles.min.css'
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin']);

};