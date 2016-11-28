/*
 * grunt-configlobal
 * https://github.com/fernando.castillo/configlobal
 *
 * Copyright (c) 2016 fr1j0
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('configlobal', 'Reads config json file, creates global vars from its content and injects it into a target bundle.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({}),
        config_file = grunt.file.read(options.config),
        target_file = grunt.file.read(options.target),
        generatedCode = '';

    const regex = new RegExp((options.es6 ? "const" : "var")+" "+options.global+" = ((.|\n)*?);", "g");

    if(regex.test(target_file))
    {
      target_file = target_file.replace(regex, '');
      target_file = target_file.replace(/^\s+|\s+$/g, '');
    }

    generatedCode += (options.es6 ? "const "+options.global : "var "+options.global)+" = "+config_file+";\n\n";

    grunt.file.write(options.target, generatedCode+target_file);

  });

};
