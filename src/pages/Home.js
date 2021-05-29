import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import BackPicture from "../components/BackPicture";
import MainContent from "../components/MainContent";

import imgsrc1 from "../assets/photos/sunset.jpg";

export default function Home() {
  const [latest, setLatest] = useState(null);
  const url = "http://tsuyu-photogallery.com/wp-json/wp/v2";
  const posts = useFetch(`${url}/posts`);
  const media = useFetch(`${url}/media`);
  // console.log('category:', posts[0].categories)
  // console.log('category:', posts)
  useEffect(() => {
    if (posts && media) {
      setLatest(
        posts.slice(0, 3).map((post) => {
          const target_media = media.filter(
            (m) => m.id === post.featured_media
          )[0];
          return {
            image: target_media.source_url,
            thumbnail: target_media.media_details.sizes.thumbnail.source_url,
          };
        })
      );
      // console.log('title:', posts[0].title)
      // console.log('category:', posts[0].categories)
      // console.log('post_id:', posts[0].id)
      // console.log('media_id:', posts[0].featured_media)
      console.log("latestPosts:", latest);
    }
  }, [posts, media]);
  const postsData = [
    {
      imgSrc: imgsrc1,
      alt: "alt1",
    },
    {
      imgSrc: imgsrc1,
      alt: "alt2",
    },
    {
      imgSrc: imgsrc1,
      alt: "alt3",
    },
  ];
  const categoriesData = [
    {
      category: "mountain",
      imgSrc: imgsrc1,
    },
    {
      category: "culture",
      imgSrc: imgsrc1,
    },
    {
      category: "sunset",
      imgSrc: imgsrc1,
    },
    {
      category: "mountain",
      imgSrc: imgsrc1,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Tsuyu Photo Gallery</title>
        <meta name="description" content="Tsuyu photo gallery" />
      </Helmet>
      <BackPicture />
      <Spacer />
      <MainContent postsData={postsData} categoriesData={categoriesData} />
    </div>
  );
}

const Spacer = () => <span className="h-screen block"></span>;
