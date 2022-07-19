const capitalize = require("./capitalize");
const reverseString = require("./reverse-string");
const { add, subtract, multiply, divide } = require("./calculator");
const caesar = require("./caesarCipher");
const analizeArray = require("./analize");

let obj = {
  min: 1,
  max: 6,
  average: 3.5,
  length: 6,
};

test("Capitalize", () => {
  expect(capitalize("abc")).toBe("Abc");
  expect(capitalize("AAA")).toBe("AAA");
  expect(capitalize("triple")).toBe("Triple");
  expect(capitalize("string")).toBe("String");
  expect(capitalize("table")).toBe("Table");
  expect(capitalize("parent")).toBe("Parent");
});

test("Capitalize", () => {
  expect(capitalize("AAA")).toBe("AAA");
});

test("Capitalize", () => {
  expect(capitalize("triple")).toBe("Triple");
});

test("Reverse String", () => expect(reverseString("abc")).toBe("cba"));
test("Reverse String", () => expect(reverseString("123")).toBe("321"));
test("Reverse String", () =>
  expect(reverseString("Talk to me")).toBe("em ot klaT"));

test("Add", () => expect(add(1, 2)).toBe(3));
test("Subtract", () => expect(subtract(1, 2)).toBe(-1));
test("Multiply", () => expect(multiply(1, 2)).toBe(2));
test("Divide", () => expect(divide(1, 2)).toBe(0.5));

test("Caesar", () => expect(caesar("ABC", 3)).toBe("DEF"));

test("Analize", () =>
  expect(analizeArray([1, 2, 3, 4, 5, 6])).toMatchObject(obj));
