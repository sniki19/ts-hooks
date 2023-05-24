import { act, renderHook } from '@testing-library/react'
import { resizeWindow } from '../jest/window'
import { useWindowWidth } from './'

describe('useWindowWidth hook', () => {
  test('should initialize', () => {
    const { result } = renderHook(() => useWindowWidth())

    expect(typeof result.current).toBe('number')
  })

  test('should return the corresponding width', () => {
    const { result } = renderHook(() => useWindowWidth())

    act(() => {
      resizeWindow({
        width: 412
      })
    })

    expect(result.current).toBe(412)

    act(() => {
      resizeWindow({
        width: 1920
      })
    })

    expect(result.current).toBe(1920)
  })
})