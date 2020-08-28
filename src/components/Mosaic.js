import React from "react"
import { Link } from "gatsby"

export default function Mosaic({ work, className }) {
    const sizes = [
        "landscape-4",
        "portrait-4",
        "portrait-3",
        "landscape-6"
    ]

    if(!work) return null

    const workList = work.map((work,index) => {
        const   _uid        = work._uid,
                teaser      = work.teaser,
                headline    = work.headline,
                fullSlug    = work.fullSlug,
                thumbnail  = work.thumbnail;
    
        let counter;
        if(sizes[index]) {
          counter = index
        } else {
          counter = 0
        }
    
        return (
          <div className={`work-item ${sizes[counter]}`} key={_uid}>
            <Link to={`/${fullSlug}`}>
              {thumbnail && thumbnail.filename && <div className="thumbnail"><img src={thumbnail.filename} alt={thumbnail.alt} /></div>}
              <div className="content">
                <p><strong>{headline}</strong></p>
                <h3 className="p text-light">{teaser}</h3>
              </div>
            </Link>
          </div>
        )
      })

    return (
        <div className={`mosaic-grid ${className}`}>
            {workList}
        </div>
    )
}