import words from "../src/words.js";

test("splits a simple ASCII sentence into words", () => {
  const result = words("fred, barney, & pebbles");
  expect(result).toEqual(["fred", "barney", "pebbles"]);
});

test("handles an empty string", () => {
  const result = words("");
  expect(result).toEqual([]);
});

test("handles a string with no words", () => {
  const result = words("!!! ??? ...");
  expect(result).toEqual([]);
});