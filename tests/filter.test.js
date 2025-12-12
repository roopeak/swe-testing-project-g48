// This file is a part of the first phase plan

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

// Test below here are generated with AI
test('predicate is called with value, index and array', () => {
    const array = ['a', 'b', 'c'];
    const calls = [];
    const predicate = (value, index, arr) => { calls.push([value, index, arr]); return true };
    expect(filter(array, predicate)).toEqual(['a', 'b', 'c']);
    expect(calls.length).toBe(3);
    expect(calls[1][0]).toBe('b');
    expect(calls[1][1]).toBe(1);
    expect(calls[1][2]).toBe(array);
});

test('does not mutate the original array', () => {
    const array = [1, 2, 3];
    const copy = array.slice();
    filter(array, (v) => v > 1);
    expect(array).toEqual(copy);
});

test('propagates errors thrown by predicate', () => {
    const array = [1, 2];
    const predicate = () => { throw new Error('boom') };
    expect(() => filter(array, predicate)).toThrow('boom');
});

test('handles sparse arrays (holes)', () => {
    const array = [1, , 3];
    const predicate = (v) => v != null;
    expect(filter(array, predicate)).toEqual([1, 3]);
});

