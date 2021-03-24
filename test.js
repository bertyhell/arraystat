let arraystat = require('./index.js');
let assert = require('assert');

describe('arraystat', () => {
    it('should determine avg from a simple array', () => {
        let res = arraystat([1, 2, 3, 4, 5]);
        assert.equal(res.avg, 3);
    });
    it('should determine stddev from a simple array', () => {
        let res = arraystat([1, 2, 3, 4, 5]);
        assert.equal(res.stddev.toFixed(1), 0.4);
    });
    it('should determine min/max from an array', () => {
        let res = arraystat([1, 2, 3, 4, 5, 10]);
        assert.equal(res.min, 1);
        assert.equal(res.max, 10);
    });
    it('should determine median from a odd number array', () => {
        let res = arraystat([1, 2, 3, 4, 5]);
        assert.equal(res.median, 3);
    });
    it('should determine median from a even number array', () => {
        let res = arraystat([1, 2, 3, 4, 5, 6]);
        assert.equal(res.median, 3.5);
    });
    it('should determine 1st quartile and last Quartile', () => {
        let res = arraystat([1, 2, 3, 4, 5, 6]);
        assert.equal(res.q1, 2.25);
        assert.equal(res.q3, 4.75);
    });
    it('should determine range', () => {
        let res = arraystat([1, 2, 3, 4, 5, 6]);
        assert.equal(res.range, 5);
    });
    it('should determine histogram', () => {
        let res = arraystat([1, 1, 3, 3, 3, 5, 6]);
        assert.deepEqual(res.histogram, [
            { min: 1, max: 2, nb: 2 },
            { min: 2, max: 3, nb: 0 },
            { min: 3, max: 4, nb: 3 },
            { min: 4, max: 5, nb: 0 },
            { min: 5, max: 6, nb: 2 },
        ]);
    });
});
