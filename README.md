# Gebo
## grunt-express-bootstrap-oauth2

This software creates a ready-to-deploy/develop Express server with traditional and OAuth2 authentication, all preconfigured.

## Getting Started
Install the module: `sudo npm install gebo -g`

## Documentation
Further to the description above, this project is the composite effort of two authors with three relevant projects.

These projects include:

* [wolfeidau/grunt-express-bootstrap](https://github.com/wolfeidau/grunt-express-bootstrap)
    * [connect-cachify](https://github.com/mozilla/connect-cachify)
    * [twitter bootstrap](http://twitter.github.com/bootstrap/)
    * [JQuery](http://jquery.com/)
    * [bower](http://twitter.github.com/bower/)
    * [jade](http://jade-lang.com/)
    * [winston-request-logger](https://github.com/wolfeidau/winston-request-logger)

* [jaredhanson/passport-local](https://github.com/jaredhanson/passport-local)
    * express
    * passport
    * passport-local
    * mongoose
    * bcrypt
    
* [jaredhanson/oauth2orize](https://github.com/jaredhanson/oauth2orize)
    * oauth2orize
    * passport-http
    * passport-http-bearer
    * passport-oauth2-client-password
    * connect-ensure-login

### Create a new project:

```
$ mkdir mynewproject
$ cd mynewproject
$ gebo init
$ npm install
$ bower install
$ node app.js
```

Then go to <http://localhost:3000>.

### Setup the database

Read your project's [README.md](https://github.com/RaphaelDeLaGhetto/gebo/tree/master/tasks/init/gebo/root).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History

## License
All credit to where credit is due. Thank you, [jaredhanson](https://github.com/jaredhanson) and
[wolfeidau](https://github.com/wolfeidau).

The rest is Copyright 2013, Capitol Hill Productions Inc. 

MIT license.
