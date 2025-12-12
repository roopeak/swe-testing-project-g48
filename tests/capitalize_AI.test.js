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

describe("Additional capitalization cases", () => {
  test("Already capitalized remains unchanged", () => {
    expect(capitalize("Cheese")).toBe("Cheese")
  })

  test("Single character string", () => {
    expect(capitalize("a")).toBe("A")
    expect(capitalize("Z")).toBe("Z")
  })

  test("Unicode / accented characters", () => {
    expect(capitalize("élan")).toBe("Élan")
  })

  test("Leading whitespace is preserved and first non-space is not auto-trimmed", () => {
    expect(capitalize(" cheese")).toBe(" cheese")
  })

  test("String starting with non-letter character", () => {
    expect(capitalize("1APPLE")).toBe("1apple")
  })

  test("Mixed-case with punctuation", () => {
    expect(capitalize("hELLO-world")).toBe("Hello-world")
  })
})