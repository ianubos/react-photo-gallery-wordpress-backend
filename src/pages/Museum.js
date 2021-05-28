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

    let fakedata = Object.entries(fakeData())
    return (
        <div>
            <Helmet>
                <title>Gallery | Tsuyu Photo Gallery</title>
                <meta name="description" content="Tsuyu photo gallery" />
            </Helmet>
            <div>
                <SRLWrapper>
                    <div className='w-full flex justify-start flex-wrap'>
                        {fakedata.map(data => (
                            <a href={data[1].photo} className='w-full sm:w-1/2 lg:w-1/3 p-3'>
                                <img src={data[1].thumbnail} alt={data[1]?.alt} />
                            </a>
                        ))}
                    </div>
                </SRLWrapper>
            </div>
        </div>
    )
}

export default Museum

const fakeData = () => (
    {
        sample1: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc,
            alt: 'alt'
        },
        sample2: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc,
            alt: 'alt'
        },
        sample3: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
        sample4: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
        sample5: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
        sample6: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
        sample7: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
        sample8: {
            thumbnail: sampleThumbnail,
            photo: sampleImageSrc
        },
    }
)