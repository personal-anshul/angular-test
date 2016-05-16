/*
Steps to generate -
* install grunt-cli
* install grunt-init
* Add template using github url
* Generate template using command: grunt-init TEMPLATE
*/

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Paths.
    paths: {
      base: '.',
      build: 'build',
      styles: 'app/assets/stylesheets',
      scripts: 'app/assets/javascripts'
    },
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['<%= paths.scripts %>/**/*.js'],
        dest: '<%= paths.build %>/main.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['<%= paths.build %>/main.js'],
        dest: '<%= paths.build %>/main.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: ['<%= paths.scripts %>/script.js']
      }
    },
    karma: {
      options: {
        banner: '<%= banner %>'
      },
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    sass: {
      dist: {
        src: '<%= paths.styles %>/main.scss',
        dest: '<%= paths.build %>/main.css'
      }
    },
    cssmin: {
      dist: {
        src: '<%= paths.build %>/main.css',
        dest: '<%= paths.build %>/main.min.css'
      }
    },
    watch: {
      sass: {
        files: '<%= paths.styles %>/**/*.{scss,sass}',
        tasks: ['sass', 'cssmin']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['default']
      },
      js: {
        files: '<%= paths.scripts %>/**/*.js',
        tasks: ['concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-karma');

  // grunt task.
  grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'concat', 'uglify']);
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin', 'concat', 'uglify', 'watch' ]);
  grunt.registerTask('prod', ['sass', 'cssmin', 'concat', 'uglify']);
  grunt.registerTask('karma', ['karma']);
};
