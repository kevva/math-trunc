# math-trunc [![Build Status](https://travis-ci.org/kevva/math-trunc.svg?branch=master)](https://travis-ci.org/kevva/math-trunc)

> ES6 [`Math.trunc()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) [ponyfill](https://ponyfill.com)

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save math-trunc
```


## Usage

```js
var mathTrunc = require('math-trunc');

mathTrunc(13.37);
//=> 13

mathTrunc(-0.123);
//=> -0
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
