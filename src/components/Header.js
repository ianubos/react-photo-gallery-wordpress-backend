import React from 'react'
import { Link } from 'react-router-dom'
import windowWidth from '../hooks/useWindowWidth'
import Hamburger from './Hamburger'

const siteData = {
    title: 'TsuyuPhotoGallery',
    items: ['Culture', 'Nature', 'Sunset', 'Mountain', 'Contact'],
}

function Header() {
    const width = windowWidth()
    console.log(width)
    return (
        <>
        <header className='w-full bg-darkest h-20 md:h-28 font-oswaldRegular box-border fixed z-50'>
            <div className='text-gray-300 flex justify-between items-center h-full w-full px-2 sm:px-10'>
                <Link to='/' className='text-xl md:text-2xl font-bold '>
                    {siteData.title}
                </Link>
                <ul className='text-xl md:text-2xl flex justify-between items-center'>
                    {width > 500 ? (
                        siteData.items.map(item => (
                            <li className='text-xl font-semibold transition'>
                                <Link to='/' className='h-full w-full py-2 px-2 hover:text-white text-gray-400 transition'>
                                    {item}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <Hamburger />
                    )}
                </ul>
            </div>
        </header>
        <div className='block h-20 w-full'></div>
        </>
    )
}

export default Header
