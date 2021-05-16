import React from 'react'
import ProgressiveImage from './ProgressiveImage'

import imgsrc1 from '../assets/photos/sunset.jpg'

function MainContent() {
    return (
        <div className='w-full h-full'>
            <ProgressiveImage
                className={"cover"}
                alt={"woman"}
                overlaySrc={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
                }
                src={imgsrc1}
            />
        </div>
    )
}

export default MainContent
