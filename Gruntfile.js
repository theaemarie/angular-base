module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: '\n\n'
            },
            build: {
                dest: '_build/js/scripts.js',
                src: [
                    'app/js/app.js',
                    'app/js/**/*.js'
                ]
            },
            dist: { 
                dest: '_dist/js/scripts.min.js', 
                src: [
                    'node_modules/angular/angular.min.js',
                    '<%= uglify.dist.dest %>'
                ]
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                dest: '_build/js/scripts.min.js',
                src: ['app/**/*.js']
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'app', src: ['*.html'], dest: '_dist/', filter: 'isFile'}
                ]
            }
        },
        jshint: {
            // define the files to lint 
            files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jasmine: true,
                    console: true,
                    module: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true,
                logLevel: 'ERROR',
                colors: true
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    cacheLocation: 'app/sass/.sass-cache'
                },
                src: ['app/sass/global.scss'],
                dest: '_build/css/build.css'
            } 
        },
        postcss: {
            options: {
              map: true, // inline sourcemaps
              processors: [
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
              ]
            },
            dist: {
                src: '<%= sass.dist.dest %>',
                dest: '_dist/css/style.css'
            }
        },
        watch: {
            js: {
                files: ['<%= jshint.files %>', '<%= concat.dist.src %>'],
                tasks: ['jshint', 'concat', 'uglify', 'copy']
            },
            css: {
                files: ['<%= sass.dist.src %>'],
                tasks: ['sass', 'postcss']
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('test', ['karma']);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['sass', 'postcss', 'jshint', 'concat', 'uglify', 'copy', 'watch']);

};