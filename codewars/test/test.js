const calculator = require('../calculator');
const assert = require('assert');

describe('Example', () => {
	it('Tests', () => {
		var calculate = new calculator()
		assert.equal(calculate.evaluate('127'), 127);
		assert.equal(calculate.evaluate('2 + 3'), 5);
		assert.equal(calculate.evaluate('2 - 3 - 4'), -5);
		assert.equal(calculate.evaluate('10 * 5 / 2'), 25);
	});
});