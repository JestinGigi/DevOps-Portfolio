import React, { useEffect, useState } from 'react'
import { prefersReducedMotion, useInView } from '../hooks/useInView'

// Counts up to a value like "10+" once visible; screen readers get the final value only.
const CountUp = ({ value, duration = 1400 }) => {
  const [, number, suffix] = value.match(/^(\d+)(.*)$/) ?? [null, null, value]
  const target = Number(number)
  const [ref, inView] = useInView()
  const [current, setCurrent] = useState(() => (number === null || prefersReducedMotion() ? target : 0))

  useEffect(() => {
    if (!inView || number === null || current === target) return undefined
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      setCurrent(Math.round(target * (1 - (1 - progress) ** 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // Run once when the element becomes visible.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  if (number === null) return value

  return (
    <span ref={ref}>
      <span aria-hidden='true' className='tabular-nums'>{current}{suffix}</span>
      <span className='sr-only'>{value}</span>
    </span>
  )
}

export default CountUp
