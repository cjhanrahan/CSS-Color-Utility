module.exports = function(grunt) {
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ['build/**']
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'dev/',
          src: '*.html',
          dest: 'build/'
        }, {
          expand: true,
          cwd: 'dev/scripts/',
          src: '*.js',
          dest: 'build/scripts'
        }, {
          expand: true,
          cwd: 'dev/lib/',
          src: '*.js',
          dest: 'build/lib'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: true
        },
        files: [{
          expand: true,
          cwd: 'dev/css',
          src: ['*.scss'],
          dest: 'build/css/',
          ext: '.css'
        }]
      }
    },

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
        cwd: 'build/css/',
        src: '*.css',
        dest: 'build/css/'
      }
    }
  
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['clean', 'copy', 'sass', 'postcss']);
};