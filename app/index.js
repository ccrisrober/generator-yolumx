'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the neat ' + chalk.red('YolumX') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'Enter your project name?',
      default: "LumX Project"
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },
  createFolders: function() {
    this.mkdir("app");
    this.mkdir("app/assets");
    this.mkdir("app/assets/js");
    this.mkdir("app/assets/css");
    this.mkdir("app/assets/img");
    //this.mkdir("gulp");
  },
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    },

    others: function() {
      this.copy("_assets/_js/_app.js",      "app/assets/js/app.js");
      this.copy("_assets/_css/_style.css",  "app/assets/css/style.css");
      this.copy("_assets/_img/_gnr.jpg",    "app/assets/img/gnr.jpg");
      this.copy("_assets/_img/_gr.jpg",     "app/assets/img/gr.jpg");
      this.copy("_assets/_img/_im.jpg",     "app/assets/img/im.jpg");
      this.copy("_assets/_img/_mg.jpg",     "app/assets/img/mg.jpg");
      this.copy("_assets/_img/_mn.jpg",     "app/assets/img/mn.jpg");
      var context = {
        title: this.appName
      };

      this.template("_index.html", "app/index.html", context);
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
