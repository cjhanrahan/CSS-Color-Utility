module.exports = function(grunt) {
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: 'last 2 versions'
          }).postcss
        ],
      },
      dist: {
        expand: true,
        src: 'dev/css/*.css',
        dest: 'build/css/'
      }
    }
  
  });

  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
};