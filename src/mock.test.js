
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);


test('Mock', () => {
	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe(1);

	// The return value of the first call to the function was 42
	expect(mockCallback.mock.results[0].value).toBe(42);
});

const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);

//###########################################################################


test('Mock2', () => {
	// The function was called exactly once
	expect(forEach.mock.calls.length).toBe(1);

	// The first arg of the first call to the function was 'first arg'
	expect(forEach.mock.calls[0][0]).toBe('first arg');

	// The second arg of the first call to the function was 'second arg'
	expect(forEach.mock.calls[0][1]).toBe('second arg');

	// The return value of the first call to the function was 'return value'
	expect(forEach.mock.results[0].value).toBe('return value');

	// This function was instantiated exactly twice
	expect(forEach.mock.instances.length).toBe(2);

	// The object returned by the first instantiation of this function
	// had a `name` property whose value was set to 'test'
	expect(forEach.mock.instances[0].name).toEqual('test');
});

const myMock2 = jest.fn();
console.log(myMock2());
// > undefined

myMock2
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

console.log(myMock2(), myMock2(), myMock2(), myMock2());

//###########################################################################

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(filterTestFn);

console.log(result);
// > [11]
console.log(filterTestFn.mock.calls);
// > [ [11], [12] ]

//###########################################################################