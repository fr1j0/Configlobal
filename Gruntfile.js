/*
 * grunt-configlobal
 * https://github.com/fernando.castillo/configlobal
 *
 * Copyright (c) 2016 fr1j0
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).

    configlobal: {
      dev: {
        options: {
          target: 'js/bundle.js',
          config: 'config.dev.json',
          global: 'CONFIG',
          es6: false
        }
      },
      dist: {
        options: {
          target: 'js/bundle.js',
          config: 'config.dist.json',
          global: 'CONFIG',
          es6: false
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'configlobal', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('dev', ['configlobal:dev']);
  grunt.registerTask('dist', ['configlobal:dist']);

};
