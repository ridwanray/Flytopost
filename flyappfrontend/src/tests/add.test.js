const sum = (a,b) => a + b;

test('adds 1 + 2 to equal 3', () => {
    const result = sum(3,4);
  expect(result).toBe(7);
});