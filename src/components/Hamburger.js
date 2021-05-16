import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as InstagramIcon } from '../assets/images/instagram.svg'
import { ReactComponent as FacebookIcon } from '../assets/images/facebook.svg'
import './hamburger.css'

const maskItem = [
    {name:'All Posts', link:'../'},
    {name:'Culture', link:'/'},
    {name:'Nature', link:'/'},
    {name:'Sunset', link:'/'},
    {name:'Mountain', link:'/'},
    {name:'Contact', link:'/contact'}
]

function Mask () {
    return (
        <div id="mask" className="md:hidden mask bg-black bg-opacity-100 text-xl h-full z-40 fixed top-0 right-0 w-full">
            <div className='w-full sm:w-11/12 sm:mx-auto'>
                <ul className="mt-40 mx-auto text-center">
                    {maskItem.map(item => (
                        <li className="pb-10 whitespace-nowrap">
                            <Link 
                                to={item.link} 
                                className="text-white hover:no-underline hover:opacity-50 duration-300" 
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="mt-10 mx-auto text-center flex wrap w-2/3 ">
                    <li className="w-1/2">
                        <a href="#" className="px-2 inline-block ">
                            <FacebookIcon className="text-white fill-current hover:opacity-50 duration-300"/>
                        </a>
                    </li>
                    <li className="w-1/2">
                        <a href="#" className="px-2 inline-block ">
                            <InstagramIcon className="text-white fill-current hover:opacity-50 duration-300"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

function HamburgerMenu () {
    const menuButton = () => {
        if (document.querySelectorAll('#menu-button, #menu-button > div')) {
            let targets = document.querySelectorAll('#menu-button, #menu-button > div');
            for (let i = 0; i < targets.length; ++i) {
                targets[i].classList.toggle('active');
            }
            document.getElementById('mask').classList.toggle('active');
        }
    }
    return (
        <>
        <Mask />
        <div className="block right md:hidden z-50 cursor-pointer" style={{transform: "scale(0.8) translate(1rem, -2.5rem)"}}>
            <a className="bg-transparent bg-opacity-100  menu-button block w-14 h-14 fixed top-0 right-0 rounded-sm mt-3 mr-3 hover:cursor-pointer" id="menu-button"  onClick={menuButton}>
                <div className=" h-px w-3/5 bg-white absolute rounded-sm top-1/2 left-1/2  top-bar"></div>
                <div className="h-px w-3/5 bg-white absolute rounded-sm top-1/2 left-1/2  middle-bar" ></div>
                <div className=" h-px w-3/5 bg-white absolute rounded-sm top-1/2 left-1/2  bottom-bar"></div>
            </a>
        </div>
        </>
    )
}
export default HamburgerMenu