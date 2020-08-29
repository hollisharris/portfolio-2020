import React from "react"

import ImageColumns from '../components/ImageColumns'

export default function StickySection({ position, sticky, content, media }) {
    return (
        <div className="sticky-section">
            <div className={`container ${position || 'left'}`}>
                <div className={`sticky-content ${sticky ? 'sticky' : ''}`}>
                    {content}
                </div>
                <div className={`sticky-media ${position || 'left'}`}>
                    <ImageColumns columns={media}/>
                </div>
            </div>
        </div>
    )
}
