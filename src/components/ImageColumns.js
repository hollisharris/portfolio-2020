import React from "react"

export default function ImageColumns({ columns }) {
 
  const makeColumns = columns.map(column => {
    if(column.component === 'image_block') {

      return (
          <aside className="column col-image" key={column._uid}>
              <figure>
                <img src={column.image.filename} alt={column.image.alt}/>
                  {column.image.title && <figcaption>{column.image.title}</figcaption>}
              </figure>
          </aside>
      )
    } else if (column.component === 'video_block') {
      return (
        <aside className="column col-video" key={column._uid}>
          <figure>
            <video muted autoPlay loop title={column.video.alt}>
              <source src={column.video.filename} type="video/mp4" />
            </video>
            {column.video.title && <figcaption>{column.video.title}</figcaption>}
          </figure>
        </aside>
      )
    }
  })

  return (
    <div className="image-columns">
      {makeColumns}
    </div>
  )
}
