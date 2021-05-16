import React from 'react'
import useFetch from '../hooks/useFetch'
import BackPicture from '../components/BackPicture'

export default function Home() {
    const url = 'http://tsuyu-photogallery.com/wp-json/wp/v2/posts'
    const posts = useFetch(url)
    return (
        <div>
            <BackPicture />
            {posts && (
                <div>{posts[0].id}</div>
            )}
        </div>
    );
}