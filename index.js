'use strict';
module.exports = function (val) {
	return val < 0 ? Math.ceil(val) : Math.floor(val);
};
