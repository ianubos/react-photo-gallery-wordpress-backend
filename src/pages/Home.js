import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";
import BackPicture from "../components/BackPicture";
import MainContent from "../components/MainContent";

const noneeds = ["archive", "top", "sample-page"];

export default function Home() {
  const [latest, setLatest] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const url = "http://tsuyu-photogallery.com/wp-json/wp/v2";
  const posts = useFetch(`${url}/posts`);
  const media = useFetch(`${url}/media`);
  const pages = useFetch(`${url}/pages`);
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
            alt: target_media.title.rendered,
          };
        })
      );
      console.log("latestPosts:", latest);
    }
    // eslint-disable-next-line
  }, [posts, media]);
  useEffect(() => {
    if (pages && media) {
      setCategories(
        pages
          .filter((page) => !noneeds.includes(page.slug))
          .map((page) => {
            return {
              title: page.title.rendered,
              slug: page.slug,
              image: media.filter((m) => m.id === page.featured_media)[0]
                .source_url,
            };
          })
      );
    }
    // eslint-disable-next-line
  }, [pages, media]);
  return (
    <div>
      <Helmet>
        <title>Tsuyu Photo Gallery</title>
        <meta name="description" content="Tsuyu photo gallery" />
      </Helmet>
      <BackPicture />
      <Spacer />
      {typeof latest !== undefined && typeof categories !== undefined && (
        <MainContent latest={latest} categories={categories} />
      )}
    </div>
  );
}

const Spacer = () => <span className="h-screen block"></span>;
