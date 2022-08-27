import findMatchingBracketIndex from "./findMatchingBracketIndex";

test("finds index of bracket matching first opening bracket", () => {
  expect(findMatchingBracketIndex("(((((")).toEqual(-1);
  expect(findMatchingBracketIndex("[[[")).toEqual(-1);
  expect(findMatchingBracketIndex("{{")).toEqual(-1);
  expect(findMatchingBracketIndex("([{")).toEqual(-1);
  expect(findMatchingBracketIndex("{([")).toEqual(-1);
  expect(findMatchingBracketIndex("({")).toEqual(-1);
  expect(findMatchingBracketIndex("{")).toEqual(-1);
  expect(findMatchingBracketIndex("[")).toEqual(-1);
  expect(findMatchingBracketIndex("(")).toEqual(-1);
  expect(findMatchingBracketIndex("{{{}")).toEqual(3);
  expect(findMatchingBracketIndex("{[[[}")).toEqual(4);
  expect(findMatchingBracketIndex("()()()")).toEqual(1);
  expect(findMatchingBracketIndex("{}")).toEqual(1);
  expect(findMatchingBracketIndex("[]")).toEqual(1);
  expect(findMatchingBracketIndex("()")).toEqual(1);
});
