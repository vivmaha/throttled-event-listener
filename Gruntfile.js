module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'build/module.js': ['src/**/*.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './build',
                    livereload: true,
                    hostname: 'localhost',
                },
            },
        },
        clean: {
            build: {
                src: ["build/"]
            }
        },
        copy: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**',
                        '!**.scss',
                        '!**.js',
                    ],
                    dest: 'build/'
                }]
            },
            node: {
                files: [{
                    expand: true,
                    cwd: 'node_modules',
                    src: [
                        'angular/angular.js',
                        'angular-route/angular-route.js',
                    ],
                    dest: 'build/node_modules'
                }]
            }
        },
        jscs: {
            src: 'src/**/*.js',
            options: {
                preset: 'airbnb', 
                fix: true, // Autofix code style violations when possible.
                validateLineBreaks: "CRLF"
            }
        },
        jshint: {
            all: ['src/**/*.js'],
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                ]
            },
            dist: {
                src: 'build/index.css'
            }
        },
        sass: {
            dist: {
                files: {
                    'build/index.css': 'src/index.scss',
                },
            },
        },
        sasslint: {
            target: ['src/**/*.scss'],
        },
        watch: {
            rebuild: {
                files: [
                    'src/**/*.*',
                ],
                tasks: [
                    'build',
                ],
                options: {
                    livereload: {
                        host: '0.0.0.0',
                        port: 35729
                    },
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.registerTask('build', [
        'clean',
        'copy',
        'browserify',
        'sass',
        'postcss',
    ])

    grunt.registerTask('lint', [
        'jshint',        
        'jscs',
        'sasslint',
    ])

    grunt.registerTask('serve', [
        'build',
        'connect',        
        'lint',
        'watch',        
    ])
};