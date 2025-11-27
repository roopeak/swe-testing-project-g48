import at from "../src/at.js";

test("extracts values from deep property paths", () => {
  const object = { a: [{ b: { c: 3 } }, 4] };

  const result = at(object, ["a[0].b.c", "a[1]"]);

  expect(result).toEqual([3, 4]);
});

test("returns undefined for non-existing paths", () => {
  const object = { a: { b: 2 } };

  const result = at(object, ["a.b", "a.c", "a.d.e"]);

  expect(result).toEqual([2, undefined, undefined]);
});