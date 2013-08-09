'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',

        'lint':{
            files: [
                "Gruntfile.js", 
                "bin/gebo",
                "tasks/init/gebo.js",
                "tasks/init/gebo/root/config/**",
                "tasks/init/gebo/root/lib/**",
                "tasks/init/gebo/root/routes/**"
            ]
        },

        jshint:{
            all: [
                "Gruntfile.js", 
                "bin/gebo",
                "tasks/init/gebo.js",
                "tasks/init/gebo/root/config/**",
                "tasks/init/gebo/root/lib/**",
                "tasks/init/gebo/root/routes/**"
            ],
            options:{
                asi: true,
                curly:true,
                laxcomma: true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                node:true,
                "strict":false
            },
            globals:{
                exports:true
            }
        }
    });

    // Npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load local tasks.
    grunt.loadTasks("tasks");

    // Default task.
    grunt.registerTask("default", "jshint");

};
