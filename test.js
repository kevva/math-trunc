'use strict';
var test = require('ava');
var mathTrunc = require('./');

test(function (t) {
	t.assert(mathTrunc(13.37) === 13);
	t.assert(mathTrunc(42.84) === 42);
	t.assert(mathTrunc(0.123) === 0);
	t.assert(mathTrunc(-0.123) === -0);
	t.assert(mathTrunc('-1.123') === -1);
	t.assert(isNaN(mathTrunc(NaN)));
	t.assert(isNaN(mathTrunc('foo')));
	t.assert(isNaN(mathTrunc()));
	t.end();
});
