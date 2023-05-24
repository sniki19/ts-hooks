import { useEffect, useState } from 'react'

type Size = {
  width: number
  height: number
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', handleResize)
    handleResize()

    return () => resizeListener
  }, [])

  return windowSize
}