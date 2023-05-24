/**
 * @jest-environment jsdom
 */

test('use jsdom in this project', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

test('use jsdom and set the URL in this test file', () => {
  expect(window.location.href).toBe('https://jestjs.io/')
})
