// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

const functions = {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
};

// TODO - Part 2
// isPhoneNumber
test('valid phone number equals true', () => {
  const valid = '(441) 363-2577';
  expect(functions.isPhoneNumber((valid))).toBe(true);
});

test('another valid phone number equals true', () => {
  const valid = '441-363-2577';
  expect(functions.isPhoneNumber((valid))).toBe(true);
});

test('invalid phone number equals false', () => {
  const valid = '(441) 363 2577';
  expect(functions.isPhoneNumber((valid))).toBe(false);
});

test('another invalid phone number equals false', () => {
  const valid = '4413632577';
  expect(functions.isPhoneNumber((valid))).toBe(false);
});

// isEmail
test('valid email equals true', () => {
  const valid = 'ncheah@ucsd.edu';
  expect(functions.isEmail((valid))).toBe(true);
});

test('another valid email equals true', () => {
  const valid = 'nicholasseancheah@gmail.com';
  expect(functions.isEmail((valid))).toBe(true);
});

test('invalid email equals false', () => {
  const valid = '@gmail.com';
  expect(functions.isEmail((valid))).toBe(false);
});

test('another invalid email equals false', () => {
  const valid = 'ncheah@ucsd';
  expect(functions.isEmail((valid))).toBe(false);
});

// isStrongPassword
test('valid password equals true', () => {
  const valid = 'test';
  expect(functions.isStrongPassword((valid))).toBe(true);
});

test('another valid email equals true', () => {
  const valid = 't12345678901234';
  expect(functions.isStrongPassword((valid))).toBe(true);
});

test('invalid password equals false', () => {
  const valid = '1test';
  expect(functions.isStrongPassword((valid))).toBe(false);
});

test('another invalid password equals false', () => {
  const valid = 'tes';
  expect(functions.isStrongPassword((valid))).toBe(false);
});

// isDate
test('valid date equals true', () => {
  const valid = '1/2/2024';
  expect(functions.isDate((valid))).toBe(true);
});

test('another valid date equals true', () => {
  const valid = '02/02/2002';
  expect(functions.isDate((valid))).toBe(true);
});

test('invalid date equals false', () => {
  const valid = '1/2/24';
  expect(functions.isDate((valid))).toBe(false);
});

test('another invalid date equals false', () => {
  const valid = '02 / 02 / 2002';
  expect(functions.isDate((valid))).toBe(false);
});

// isHexColor
test('valid hexColor equals true', () => {
  const valid = '#F00';
  expect(functions.isHexColor((valid))).toBe(true);
});

test('another valid hexColor equals true', () => {
  const valid = 'FFFFFF';
  expect(functions.isHexColor((valid))).toBe(true);
});

test('invalid hexColor equals false', () => {
  const valid = '#F000';
  expect(functions.isHexColor((valid))).toBe(false);
});

test('another invalid hexColor equals false', () => {
  const valid = 'FFFFFG';
  expect(functions.isHexColor((valid))).toBe(false);
});