import isNestedCorrectly from "./isNestedCorrectly";

test("checks if string of brackets is syntaxically correct", () => {
  expect(isNestedCorrectly("{[}")).toBe(false);
//   expect(isNestedCorrectly("[]")).toBe(true);
});
