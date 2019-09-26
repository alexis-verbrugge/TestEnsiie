const Util = require('./math');

test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});


describe('sumPrime', function () {

    test('Test sumPrime 6 => 10', () => {
        expect(Util.sumPrime(6)).toBe(10)
    });
    test('Test sumPrime 8 => 17', () => {
        expect(Util.sumPrime(8)).toBe(17)
    });

    test('Test sumPrime < 2 => throw exception', () => {
        expect(() => { Util.sumPrime(-5) }).toThrow('Unable to compute prime for n < 2');
    }); 

    test.each([
        [5, 10],
        [10, 17],
        [15, 41],
        [20, 77],
        [25, 100],
        [30, 129],
    ])(
        'sumPrime %i equals to %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        }
    );

});

describe('fizzBuzz', function () {
     test('fizz buzz val = 15', () => {
        var tab = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        expect(Util.fizzBuzz(15)).toEqual(tab);
     }); 

     test('Test fizzBuzz < 1 => throw exception', () => {
        expect(() => { Util.fizzBuzz(0) }).toThrow('Unable to compute fizzBuzz for n < 1');
    }); 

     test('Return Array', function () {
        expect(Array.isArray(Util.fizzBuzz(1))).toBe(true);
     }); 

});

describe('cipher', function () {

    test('cipher : Test Unitaire => Uftu Vojubjsf', () => {
        expect(Util.cipher('Test Unitaire')).toEqual('Uftu Vojubjsf');
    });

    test('cipher : Zz => Aa', () => {
        expect(Util.cipher('Zz')).toEqual('Aa');
    });

    test('cipher : Nassim le boss', () => {
        expect(Util.cipher('Nassim le boss')).toEqual('Obttjn mf cptt');
    });

    test('cipher : &(-èè"") => &(-èè"")', () => {
        expect(Util.cipher('&(-èè"")')).toEqual('&(-èè"")');
    });
}); 


describe('pairs', function () {
    test('Test pairs : ([3,3]) => 1', () => {
        expect(Util.pairs([3,3])).toBe(1)
    });

    test('Test pairs : ([3,3,5]) => 1', () => {
        expect(Util.pairs([3,3,5])).toBe(1)
    });

    test('Test pairs : ([3,3,5,5,5]) => 4', () => {
        expect(Util.pairs([3,3,5,5,5])).toBe(4)
    });

    test('Test pairs : ([]) => 0', () => {
        expect(Util.pairs([])).toBe(0)
    });

    test('Test pairs : ([1]) => 0', () => {
        expect(Util.pairs([1])).toBe(0)
    });

    test('Test pairs : ([1,2,1,2,1,2,1,2]) => 12', () => {
        expect(Util.pairs([1,2,1,2,1,2,1,2])).toBe(12)
    });

});