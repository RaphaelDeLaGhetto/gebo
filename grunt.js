module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        lint:{
            files: [
                "grunt.js", 
                "bin/grunt-express-bootstrap-oauth2",
                "tasks/init/grunt-express-bootstrap-oauth2.js",
                "tasks/init/grunt-express-bootstrap-oauth2/root/config/**",
                "tasks/init/grunt-express-bootstrap-oauth2/root/lib/**",
                "tasks/init/grunt-express-bootstrap-oauth2/root/routes/**"
            ]
        },

        jshint:{
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

    // Load local tasks.
    grunt.loadTasks("tasks");

    // Default task.
    grunt.registerTask("default", "lint");

};
