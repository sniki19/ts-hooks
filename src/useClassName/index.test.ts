import { getClassName } from './'

test('Execute without data', () => {
  expect(
    getClassName([])
  ).toBe('')
})

test('Execute with class without dependency', () => {
  expect(
    getClassName([
      ['class1']
    ])
  ).toBe('class1')
})

test('Execute with class with False dependency', () => {
  expect(
    getClassName([
      ['class1', false]
    ])
  ).toBe('')
})

test('Execute with class with True dependency', () => {
  expect(
    getClassName([
      ['class1', true]
    ])
  ).toBe('class1')
})

test('Execute with multi classes', () => {
  expect(
    getClassName([
      ['class1', true],
      ['class2', true]
    ])
  ).toBe('class1 class2')
})

test('Execute with multi classes and different dependencies', () => {
  expect(
    getClassName([
      ['class1'],
      ['class2', true],
      ['class3', false],
      ['class4', true]
    ])
  ).toBe('class1 class2 class4')
})

test('Execute give only input data', () => {
  expect(
    getClassName([
      ['class1']
    ])
  ).not.toBe('otherclass')
})

