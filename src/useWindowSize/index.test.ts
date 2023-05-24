import { act, renderHook } from '@testing-library/react'
import { resizeWindow } from '../jest/window'
import { useWindowSize } from './'

describe('useWindowSize hook', () => {
  test('should initialize', () => {
    const { result } = renderHook(() => useWindowSize())

    const { height, width } = result.current

    expect(typeof height).toBe('number')
    expect(typeof width).toBe('number')
  })

  test('should return the corresponding width and height', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      resizeWindow({
        width: 412,
        height: 810
      })
    })

    expect(result.current.width).toBe(412)
    expect(result.current.height).toBe(810)

    act(() => {
      resizeWindow({
        width: 1920,
        height: 1080
      })
    })

    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)
  })
})