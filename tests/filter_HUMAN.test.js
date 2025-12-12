import filter from '../src/filter.js'

test('retains all elements', () => {
    const array = [1, 2, 3];
    const predicate = () => true;
    expect(filter(array, predicate)).toEqual([1, 2, 3]);
});

test('filters all elements', () => {
    const array = [1, 2, 3];
    const predicate = () => false;
    expect(filter(array, predicate)).toEqual([]);
});

test('filters some elements', () => {
    const array = [1, 2, 3];
    const predicate = (value) => value < 3;
    expect(filter(array, predicate)).toEqual([1, 2]);
});

test('empty input array', () => {
    const array = [];
    const predicate = () => true;
    expect(filter(array, predicate)).toEqual([]);
});

test('filters array of objects', () => {
    const array = [
        {'product': 'cheese', 'category': 'dairy'},
        {'product': 'carrot', 'category': 'vegetables'}
    ]
    const predicate = (value) => value.category === 'dairy';
    expect(filter(array, predicate)).toEqual([{'product': 'cheese', 'category': 'dairy'}]);
});

test('filters array of different types', () => {
    const array = ["cheese", 1, null];
    const predicate = (value) => typeof value === "string";
    expect(filter(array, predicate)).toEqual(["cheese"]);
});

test('invalid array paremeter 1 (null)', () => {
    const array = null;
    const predicate = () => true;
    expect(() => filter(array, predicate)).toThrow(TypeError);
});

test('invalid array paremeter 2 (string)', () => {
    const array = "not an array";
    const predicate = () => true;
    expect(() => filter(array, predicate)).toThrow(TypeError);
});

test('invalid predicate (null)', () => {
    const array = [1, 2, 3];
    const predicate = null;
    expect(() => filter(array, predicate)).toThrow(TypeError);
});