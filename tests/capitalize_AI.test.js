import capitalize from '../src/capitalize.js'

describe('capitalize - additional cases based on implementation', () => {
  test('mixed case string becomes capitalized', () => {
    expect(capitalize('hELLo')).toBe('Hello')
  })

  test('single character string', () => {
    expect(capitalize('a')).toBe('A')
    expect(capitalize('Z')).toBe('Z')
  })

  test('string starting with non-letter remains unchanged except rest lowercased', () => {
    expect(capitalize('1APPle')).toBe('1apple')
  })

  test('numeric input is converted to string and returned', () => {
    expect(capitalize(123)).toBe('123')
  })

  test('boolean true is converted and capitalized', () => {
    expect(capitalize(true)).toBe('True')
  })

  test('object with custom toString is handled', () => {
    const obj = { toString: () => 'hELp' }
    expect(capitalize(obj)).toBe('Help')
  })

  test('unicode / accented characters are handled', () => {
    expect(capitalize('élan')).toBe('Élan')
  })

  test('leading whitespace is preserved', () => {
    expect(capitalize(' cheese')).toBe(' cheese')
  })
})