import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { SRLWrapper } from "simple-react-lightbox"

import sampleImageSrc from '../assets/photos/sunset.jpg'
import sampleThumbnail from '../assets/photos/fujisanto.jpg'

function Museum() {
    const location = useLocation()
    const slug = location.pathname.replace('/', '')
    console.log(slug)
    return (
        <div>
            <Helmet>
                <title>Gallery | Tsuyu Photo Gallery</title>
                <meta name="description" content="Tsuyu photo gallery" />
            </Helmet>
            <div>
                <SRLWrapper>
                    <a href={sampleImageSrc}>
                        <img src={sampleThumbnail} alt="Umbrella" />
                    </a>
                    <a href={sampleImageSrc}>
                        <img src={sampleThumbnail} alt="Blue sky" />
                    </a>
                </SRLWrapper>
            </div>
        </div>
    )
}

export default Museum
