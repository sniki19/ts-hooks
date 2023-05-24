import { useEffect, useState } from 'react'

export const useWindowHeight = (): number => {
  const [windowHeight, setWindowHeight] = useState<number>(0)

  const handleResize = () => {
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', handleResize)
    handleResize()

    return () => resizeListener
  }, [])

  return windowHeight
}