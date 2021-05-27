import React from 'react'
import { Helmet } from "react-helmet";
import useFetch from '../hooks/useFetch'
import BackPicture from '../components/BackPicture'
import MainContent from '../components/MainContent'

import imgsrc1 from '../assets/photos/sunset.jpg'

export default function Home() {
    const url = 'http://tsuyu-photogallery.com/wp-json/wp/v2/posts'
    const posts = useFetch(url)
    const pages = useFetch('http://tsuyu-photogallery.com/wp-json/wp/v2/pages')
    const media = useFetch('http://tsuyu-photogallery.com/wp-json/wp/v2/media')
    const categories = useFetch('http://tsuyu-photogallery.com/wp-json/wp/v2/categories')
    // console.log('categories data:', categories)
    // console.log('posts data:', posts)
    // console.log('pages data:', pages)
    // console.log('madia data:', media)
    const postsData = [
        {
            imgSrc: imgsrc1,
            alt: 'alt1'
        },
        {
            imgSrc: imgsrc1,
            alt: 'alt2'
        },
        {
            imgSrc: imgsrc1,
            alt: 'alt3'
        },
    ]
    const categoriesData = [
        {
            category: 'mountain',
            imgSrc: imgsrc1
        },
        {
            category: 'culture',
            imgSrc: imgsrc1
        },
        {
            category: 'sunset',
            imgSrc: imgsrc1
        },
        {
            category: 'mountain',
            imgSrc: imgsrc1
        },
    ]
    return (
        <div>
            <Helmet>
                <title>Tsuyu Photo Gallery</title>
                <meta name="description" content="Tsuyu photo gallery" />
            </Helmet>
            <BackPicture />
            <Spacer />
            <MainContent
                postsData={postsData}
                categoriesData={categoriesData}
            />
        </div>
    );
}

const Spacer = () => (
    <span className="h-screen block"></span>
)
