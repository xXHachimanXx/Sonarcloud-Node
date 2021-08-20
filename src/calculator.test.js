const calculator = require('./calculator');


test('add 10 + 20 equal 30', () => {
    expect(calculator.sum(10, 20)).toBe(30)
});

test('subtract 20 - 10 to equal 10', () => {
    expect(calculator.sub(20, 10)).toBe(10)
});

test('multiplies 10 * 20 to equal 200', () => {
    expect(calculator.times(10, 20)).toBe(200)
});

test('make SumX 10 + 20 + 10 to equal 40', () => {
    expect(calculator.sumX(10, 20)).toBe(40)
});
