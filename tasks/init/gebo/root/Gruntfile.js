var db = require('./config/dbschema');

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        lint: {
            files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        },
        jshint: {
            options: {
                asi: true,
                laxcomma: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                "strict": false,
                "predef": [
                    "describe", // Used by mocha
                    "it", // Used by mocha
                    "before", // Used by mocha
                    "beforeEach", // Used by mocha
                    "after", // Used by mocha
                    "afterEach"      // Used by mocha
                ]
            },
            globals: {
                exports: true
            }
        },
        simplemocha: {
            all: {
                src: 'test/**/*_test.js',
                options: {
                    globals: ['should'],
                    timeout: 3000,
                    ignoreLeaks: false,
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        }
    });

    // Npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');

    // Default task.
    grunt.registerTask('default', 'simplemocha');

    // override the default test target
    grunt.registerTask('test', 'simplemocha');

    /**
     * DB tasks
     *
     * All credit to jaredhanson/passport-local
     * https://github.com/jaredhanson/passport-local/blob/master/examples/express3-mongoose-multiple-files/Gruntfile.js
     */

    grunt.registerTask('dbseed', 'seed the database', function() {
        grunt.task.run('adduser:admin:admin@example.com:secret:true');
        grunt.task.run('adduser:bob:bob@example.com:secret:false');
      });

    grunt.registerTask('adduser', 'add a user to the database', function(usr, emailaddress, pass, adm) {
        // Convert adm string to bool
        adm = (adm === "true");

        var user = new db.userModel({
            username: usr,
            email: emailaddress,
            password: pass,
            admin: adm
        });
    
        // Save call is async, put Grunt into async mode to work
        var done = this.async();
        user.save(function(err) {
            if(err) {
              console.log('Error: ' + err);
              done(false);
            }
            else {
              console.log('saved user: ' + user.username);
              done();
            }
          });
      });

    grunt.registerTask('dbdrop', 'drop the database', function() {
        // async mode
        var done = this.async();
        db.mongoose.connection.on('open', function () { 
            db.mongoose.connection.db.dropDatabase(function(err) {

                if(err) {
                  console.log('Error: ' + err);
                  done(false);
                }
                else {
                  console.log('Successfully dropped db');
                  done();
                }
              });
          });
      });

};
