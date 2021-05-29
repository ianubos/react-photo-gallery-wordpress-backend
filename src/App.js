import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Museum from "./pages/Museum";
import Contact from "./pages/Contact";
import ScrollToTop from "./hooks/useScrollTop";
import sitedata from "./siteData";

const noneeds = ["archive", "top", "sample-page"];

function dataCleaner(media, posts) {
  if (!posts || !media) return;
  return posts.map((post) => {
    const target_media = media.filter((m) => m.id === post.featured_media)[0];
    return {
      image: target_media.source_url,
      thumbnail: target_media.media_details.sizes.thumbnail.source_url,
      alt: target_media.title.rendered,
    };
  });
}

function App() {
  const slugs = Object.entries(sitedata().pages).map((arr) => {
    return arr[0];
  });
  const [latest, setLatest] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const [categoryNumber, setCategoryNumber] = useState({});
  const url = "http://tsuyu-photogallery.com/wp-json/wp/v2";
  const posts = useFetch(`${url}/posts`);
  const media = useFetch(`${url}/media`);
  const pages = useFetch(`${url}/pages`);
  const cats = useFetch(`${url}/categories`);
  useEffect(() => {
    if (cats) {
      let tmp = {};
      cats.forEach((cat) => {
        tmp[cat.id] = cat.slug;
      });
      setCategoryNumber(tmp);
    }
    // eslint-disable-next-line
  }, [cats]);
  useEffect(() => {
    if (posts && media) {
      setLatest(
        dataCleaner(media, posts.slice(0, 3))
      );
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
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home latest={latest} categories={categories} />
        </Route>
        {posts &&
          slugs &&
          slugs.map((slug) => (
            <Route path={`/${slug}`}>
              <Museum
                data={dataCleaner(
                  media,
                  posts.filter((post) =>
                    post.categories
                      .map((cat) => categoryNumber[cat])
                      .includes(slug)
                  )
                )}
              />
            </Route>
          ))}
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
