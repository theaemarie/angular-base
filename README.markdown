#Up and Running

 1. Install [node.js](https://nodejs.org/en/) if not installed already. Node Package Manager (or npm) will be installed with node.js.
 1. In command prompt, navigate to the folder of your app, in this case `angular-base`.
 1. Run `npm install` to install the dependent packages listed in `packages.json`.

Once node.js is installed, in command prompt, run `npm install`.

#Package Dependencies

##Angular

 - Angular
 - Angular Mocks (for testing)

##Grunt Task Runner

Grunt is used to automate the build/testing of this app and automates these processes below. 

To run tests: `grunt test`.
To watch on dev: `grunt watch`

###Unit Testing with Jasmine / Karma

- karma-jasmine
- Karma
- phantomjs-prebuilt (headless browser for testing, gets angry with my setup)
- phantom-jslauncher (something is screwing up w/this)
- chrome-launcher (currently the only one happy)

###Sass / PostCSS

 - sass process watches one file: `global.scss`, include all partials sass style (`@import 'partialname';`)
 - Autoprefixer appends browser prefixes as needed.
 - cssnano minifies final stylesheet, `style.css`