const Interval = require('./interval');


describe('Overlaps', function () {

	var interval = new Interval(0,5);

	test('Overlaps : interval(1,5) => true', () => {
		var intervalTrue = new Interval(1, 5);
    	expect(intervalTrue.overlaps(intervalTrue)).toBe(true);
	});

	test('Overlaps : interval(6,10) => false', () => {
		var intervalFalse = new Interval(6, 10);
    	expect(intervalFalse.overlaps(intervalFalse)).toBe(false);
	});

	test('Overlaps : interval(1,1) => true', () => {
		var intervalEgal = new Interval(1, 1);
    	expect(intervalEgal.overlaps(intervalEgal)).toBe(true);
	});

});


describe('Includes', function () {

});