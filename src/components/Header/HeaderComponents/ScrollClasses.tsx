'use client'

import useScrollDirection from '@/hooks/useScrollDetection/useScrollDirection'
import { useState, useEffect } from 'react'

interface Styles {
  top: string
  hide: string
  show: string
}

const ScrollClasses = ({ styles }: { styles: Styles }) => {
  const [className, setClassName] = useState(styles.top)
  const direction = useScrollDirection()

  useEffect(() => {
    if (direction === 'top') {
      setClassName(styles.top)
    } else if (direction === 'down') {
      setClassName(styles.hide)
    } else if (direction === 'up') {
      setClassName(styles.show)
    }
  }, [direction, styles])

  return className
}

export default ScrollClasses
