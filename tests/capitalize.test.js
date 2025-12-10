// This file is a part of the first phase plan

import capitalize from '../src/capitalize.js'

describe("Capitalization of a string", () => {
  test("A string that is in uppercase", () => {
    expect(capitalize("CHEESE")).toBe("Cheese");
  });

  test("A string that's first letter is lowercase", () => {
    expect(capitalize("cHEESE")).toBe("Cheese");
  });

  test("A string that's all lowercase", () => {
    expect(capitalize("cheese")).toBe("Cheese");
  });
});

describe("Faulty values", () => {
  test("A non-string value", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });

  test("A null value", () => {
    expect(() => capitalize(null)).toThrow(TypeError);
  });

  test("An empty string", () => {
    expect(capitalize("")).toBe("");
  });
});