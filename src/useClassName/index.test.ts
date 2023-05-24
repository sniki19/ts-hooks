import { renderHook } from '@testing-library/react'
import { useClassName } from './'

type HookProps = Parameters<typeof useClassName>
const runHook = (props: HookProps[0]) => {
  const { result } = renderHook(() => useClassName(props))

  return result.current
}

describe('useClassName hook', () => {
  test('should return empty string', () => {
    const result = runHook([])
    expect(result).toBe('')

    const result2 = runHook([
      [undefined]
    ])
    expect(result2).toBe('')
  })

  test('should return all classes (classes don\'t have dependencies)', () => {
    const result = runHook([
      ['class1']
    ])
    expect(result).toBe('class1')
    expect(result).not.toBe('otherclass')

    const result2 = runHook([
      ['class1'],
      ['class2']
    ])
    expect(result2).toBe('class1 class2')
    expect(result2).not.toBe('otherclass')
  })

  test('should return certain classes that have True dependencies', () => {
    const result = runHook([
      ['class1', false],
      ['class2', !!''],
      ['class3', !!0]
    ])
    expect(result).toBe('')

    const result2 = runHook([
      ['class1', true],
      ['class2', !!'class2'],
      ['class3', !!1]
    ])
    expect(result2).toBe('class1 class2 class3')

    const result3 = runHook([
      ['class1', true],
      ['class2', false],
      ['class3', !!0],
      ['class4', !!1],
      ['class5', !!''],
      ['class6', !!'class6']
    ])
    expect(result3).toBe('class1 class4 class6')
  })
})