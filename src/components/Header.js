import React from 'react'
import { Link } from 'react-router-dom'
import windowWidth from '../hooks/useWindowWidth'

const siteData = {
    title: 'TsuyuPhotoGallery',
    items: ['Culture', 'Nature', 'Sunset', 'Mountain', 'Contact'],
}

function Header() {
    const width = windowWidth()
    console.log(width)
    return (
        <header className='w-full bg-darkest h-28 font-oswaldRegular'>
            <div className='text-gray-300 flex justify-between items-center h-full w-full px-2 sm:px-10'>
                <div className='text-2xl font-bold '>{siteData.title}</div>
                <ul className='text-2xl flex justify-between items-center'>
                    {width > 500 ? (
                        siteData.items.map(item => (
                            <li className='text-xl font-semibold hover:text-white transition'>
                                <Link to='/' className='h-full w-full py-2 px-2'>{item}</Link>
                            </li>
                        ))
                    ) : (
                        <Hamburger />
                    )}
                </ul>
            </div>
        </header>
    )
}

function Hamburger() {
    return (
        <div className='w-full bg-red-500'>hamburger</div>
    )
}

export default Header
