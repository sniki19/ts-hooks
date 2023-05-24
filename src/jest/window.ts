type resizeProps = {
  width?: number
  height?: number
}

export const resizeWindow = ({ width, height }: resizeProps) => {
  if (width) {
    window.innerWidth = width
  }

  if (height) {
    window.innerHeight = height
  }

  window.dispatchEvent(new Event('resize'))
}