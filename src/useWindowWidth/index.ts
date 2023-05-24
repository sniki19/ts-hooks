import { useEffect, useState } from 'react'

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', handleResize)
    handleResize()

    return () => resizeListener
  }, [])

  return windowWidth
}