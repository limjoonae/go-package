module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'dist/gomodule.umd.js': ['dist/gomodule.js'],
                    'dist/libmodule.umd.js': ['dist/libmodule.js'],
                }
            }
        }
    });
    grunt.registerTask('default', ['uglify']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
};