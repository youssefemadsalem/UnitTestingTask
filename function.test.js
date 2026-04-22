const sum = require("./sum");
const isprime = require("./isprime");
const reverseString = require("./reverseString");
const getCharactersCount = require("./getcharaterscount");
const formatDate = require("./formatdate");
const validatePassword = require("./validatepassword");
const maskCardNumber = require("./maskcard");
const range = require("./range");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("check if 5 is prime", () => {
  expect(isprime(5)).toBe(true);
});

test("reverse the string 'hello'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("count characters in 'hello'", () => {
  expect(getCharactersCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
});

test("format the date '2024-06-01'", () => {
  const date = new Date("2024-06-01");
  expect(formatDate(date)).toBe("June 1, 2024");
});

test("validate a strong password", () => {
  expect(validatePassword("StrongP@ssw0rd")).toBe(true);
  expect(validatePassword("weakpassword")).toBe(false);
});

test("mask a credit card number", () => {
  expect(maskCardNumber("1234 5678 9012 3456")).toBe("************3456");
});

test("generate a range of numbers", () => {
  const result = [];
  for (const num of range(0, 5)) {
    result.push(num);
  }
  expect(result).toEqual([0, 1, 2, 3, 4]);
});
