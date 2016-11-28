# grunt-configlobal

> Reads config json file, creates global object from its content and injects it into a target bundle.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-configlobal --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-configlobal');
```

## The "configlobal" task

### Overview
In your project's Gruntfile, add a section named `configlobal` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
   configlobal: {
        default_options: {
          options: {
          }
        }
      }
});
```

### Options

#### options.target
Type: `String`

Path to js file where to inject the global object.

#### options.config
Type: `String`

Path to configuration JSON file.

#### options.global
Type: `String`

The name of the global object to create to avoid name collisions.

#### options.es6
Type: `Boolean`

Flag to use 'var' (false) or 'const' (true) when declaring the global object.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
   configlobal: {
        default_options: {
          options: {
            target: 'js/bundle.js',
            config: 'config.json',
            global: 'CONFIG100',
            es6: true
          }
        }
      },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
