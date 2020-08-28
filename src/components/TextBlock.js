import React from "react"

export default function TextBlock({ children, position, className, teaser }) {
    const block_position = position || 'left';

  return (
    <div className={`text-block ${block_position} ${className}`}>
      {teaser && <h2 className={`${block_position === 'center' ? 'h3' : 'teaser'} text-dark`}>{teaser}</h2>}

      <div className="content">
          { children }
      </div>
    </div>
  )
}
