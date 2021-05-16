import React from 'react'
import backpicture from '../assets/photos/fujisanto.jpg'

const siteData = {
    title: 'TsuyuPhotoGallery',
}

function BackPicture() {
    return (
        <div className='fixed w-full h-full'>
            <img 
                className='w-full '
                alt='tsuyu fuji mountain' 
                src={backpicture} 
                loading='lazy' 
            />
            <div style={{transform: "translate(-50%, -50%)"}} className='absolute top-40 sm:top-1/4 left-1/2'>
                <div className='text-3xl sm:text-5xl text-white font-lighter font-gayathriThin'>
                    {siteData.title}
                </div>
            </div>
        </div>
    )
}
export default BackPicture
