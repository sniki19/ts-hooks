import { useEffect, useState } from 'react'

export const useWindowScrollY = (): number => {
  const [position, setPosition] = useState(0)

  const handleScroll = () => {
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}