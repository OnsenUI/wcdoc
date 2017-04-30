# wcdoc

Simple API Document Generator for Web Components.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install wcdoc
```

## Examples

```js
var wcdoc = require('wcdoc');

wcdoc.run({
  src: ['src/**/*.js'],
  basePath: __dirname
}).then(function(result) {
  console.log(result);
});
```

## Running tests

Install locked dev dependencies with [Yarn](https://yarnpkg.com/):

```sh
$ yarn install && yarn test
```
