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
      scripts: 'app/javascripts',
      angular: 'app/javascripts/angular'
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
        src: ['<%= paths.angular %>/**/*.js', '<%= paths.scripts %>/*.js'],
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
        src: ['<%= paths.scripts %>/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    sass: {
      dist: {
        src: '<%= paths.styles %>/main.scss',
        dest: '<%= paths.styles %>/master.css'
      }
    },
    cssmin: {
      files: [{
        expand: true,
        cwd: '<%= paths.styles %>/',
        src: [ 'master.css' ],
        dest: '<%= paths.styles %>',
        ext: '.min.css'
      }]
    },
    watch: {
      sass: {
        files: '<%= paths.styles %>/**/*.{scss,sass}',
        tasks: ['sass']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: '<%= paths.angular %>/**/*.js',
        tasks: ['concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // grunt task.
  grunt.registerTask('default', ['jshint', 'sass']);
  grunt.registerTask('develop', ['jshint', 'sass', 'concat', 'uglify', 'watch' ]);
  grunt.registerTask('prod', ['qunit', 'jshint', 'sass', 'cssmin', 'concat', 'uglify']);
};
