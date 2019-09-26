const Interval = require('./interval');

var interval = new Interval(2,5);

describe('Overlaps', function () {

	test('Overlaps : interval (2,5) and interval(1,5) => true', () => {
		var intervalTrue = new Interval(1, 5);
    	expect(interval.overlaps(intervalTrue)).toBe(true);
	});

	test('Overlaps : interval (2,5) and interval(6,10) => false', () => {
		var intervalFalse = new Interval(6, 10);
    	expect(interval.overlaps(intervalFalse)).toBe(false);
	});

	test('Overlaps : interval (1,1) and interval(1,1) => false', () => {
		var intervalEgal = new Interval(1, 1);
    	expect(intervalEgal.overlaps(intervalEgal)).toBe(false);
	});

});


describe('Includes', function () {

	test('includes : interval (2,5) and interval(2,3) => true', () => {
		var intervalTrue = new Interval(2, 3);
    	expect(interval.includes(intervalTrue)).toBe(true);
	});

	test('includes : interval (2,5) and interval(3,6) => false', () => {
		var intervalFalse = new Interval(3, 6);
    	expect(interval.includes(intervalFalse)).toBe(false);
	});

	test('includes : interval (2,5) and interval(2,5) => false', () => {
    	expect(interval.includes(interval)).toBe(true);
	});


});