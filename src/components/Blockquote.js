import React from "react"

export default function Blockquote({ quote, author }) {
  return (
    <div className="blockquote">
      {quote && <blockquote className="h2">{quote}</blockquote>}
      {author && <p className="teaser">{author}</p>}
    </div>
  )
}
