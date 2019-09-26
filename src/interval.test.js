const Interval = require('./interval');


describe('Overlaps', function () {

	var interval = new Interval(0,0);

	test('Overlaps : interval(1,5) => true', () => {
		var intervalTrue = new Interval(1, 5);
    	expect(intervalTrue.overlaps(intervalTrue)).toBe(true);
	});

	test('Overlaps : interval(5,1) => false', () => {
		var intervalFalse = new Interval(5, 1);
    	expect(intervalFalse.overlaps(intervalFalse)).toBe(false);
	});

	test('Overlaps : interval(1,1) => false', () => {
		var intervalEgal = new Interval(1, 1);
    	expect(intervalEgal.overlaps(intervalEgal)).toBe(false);
	});

});