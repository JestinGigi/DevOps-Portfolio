import React from 'react'
import { useInView } from '../hooks/useInView'

const Reveal = ({ as = 'div', delay = 0, className = '', style, children, ...rest }) => {
  const Tag = as
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
