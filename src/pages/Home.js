import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

export default function Home() {
    const url = 'http://tsuyu-photogallery.com/wp-json/wp/v2/posts'
    const posts = useFetch(url)
    console.log(posts)
    useEffect(() => {
        const data = fetch(url)
            .then(data => {
                console.log(data)
                return data
            })

    },[])
    return (
        <div>
        {posts && (
            <div>{posts[0].id}</div>
        )}
        </div>
    );
}