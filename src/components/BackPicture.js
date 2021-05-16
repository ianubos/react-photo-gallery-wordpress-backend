import React from 'react'
import backpicture from '../assets/photos/fujisanto.jpg'

const siteData = {
    title: 'TsuyuPhotoGallery',
}

function BackPicture() {
    return (
        <div className='fixed w-full h-full' style={{zIndex: -10}}>
            <img 
                className='w-full'
                style={{minHeight: '600px', objectFit: 'cover', overflow: 'hidden', objectPosition: '50% 50%'}}
                alt='tsuyu fuji mountain' 
                src={backpicture} 
                loading='lazy' 
            />
            <div style={{transform: "translate(-50%, 5rem)"}} className='absolute top-10 sm:top-1/4 left-1/2'>
                <div className='text-3xl sm:text-5xl text-white font-gayathriThin'>
                    {siteData.title}
                </div>
            </div>
        </div>
    )
}
export default BackPicture
