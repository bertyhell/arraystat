var arraystat = require('./index.js');
var assert = require('assert');

describe('arraystat', function () {

    it('should determine a min/max/avg from a simple array', function () {
        var res = arraystat([1, 2, 3, 4, 5]);
        assert.equal(res.min, 1);
        assert.equal(res.max, 5);
        assert.equal(res.avg, 3);
    });
});