import difference from '../src/difference.js';

test("Returns the difference between two arrays", () => {
    const array = [2, 1];
    const values = [2, 3];
    expect(difference(array, values)).toEqual([1]);
});

test("Returns an empty array when there are no differences", () => {
    const array = [1, 2, 3];
    const values = [1, 2, 3];
    expect(difference(array, values)).toEqual([]);
});

test("Handles multiple arrays to exclude", () => {
    const array = [1, 2, 3, 4, 5];
    const values1 = [2, 3];
    const values2 = [4];
    expect(difference(array, values1, values2)).toEqual([1, 5]);
});

test("Returns the same array when there are no values to exclude", () => {
    const array = [1, 2, 3];
    expect(difference(array)).toEqual([1, 2, 3]);
});

test("Values to exclude that are not in the original array", () => {
    const array = [1, 2, 3];
    const values = [4, 5];
    expect(difference(array, values)).toEqual([1, 2, 3]);
});

test("Handles non-array inputs", () => {
    expect(difference(null, [1, 2])).toEqual([]);
    expect(difference(undefined, [1, 2])).toEqual([]);
    expect(difference(123, [1, 2])).toEqual([]);
});

