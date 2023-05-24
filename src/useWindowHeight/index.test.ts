import { act, renderHook } from '@testing-library/react'
import { useWindowHeight } from '.'
import { resizeWindow } from '../jest/window'

describe('useWindowHeight hook', () => {
  test('should initialize', () => {
    const { result } = renderHook(() => useWindowHeight())

    expect(typeof result.current).toBe('number')
  })

  test('should return the corresponding height', () => {
    const { result } = renderHook(() => useWindowHeight())

    act(() => {
      resizeWindow({
        height: 810
      })
    })

    expect(result.current).toBe(810)

    act(() => {
      resizeWindow({
        height: 1080
      })
    })

    expect(result.current).toBe(1080)
  })
})