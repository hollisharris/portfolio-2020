import React from "react"

export default function Results({ teaser, headline, description, results }) {
  const resultsList = results.map(result => {
    return(
      <div className="result-item" key={result._uid}>
          <div className="result-content">
          {result.headline && <h3>{result.headline}</h3>}
          {result.description && <p>{result.description}</p>}
        </div>
      </div>
    )
  })
  return (
    <div className="results bg-dark">
      <div className="container">
        <div  className="results-intro">
          {teaser && <p className="teaser">{teaser}</p>}
          {headline && <h2>{headline}</h2>}
          {description && <p>{description}</p>}
        </div>
        <div className="results-list">
        {resultsList}
        </div>
      </div>
    </div>
  )
}
