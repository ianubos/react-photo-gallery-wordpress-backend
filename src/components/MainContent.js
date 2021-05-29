import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import ProgressiveImage from "./ProgressiveImage";

function Latest({ latest }) {
  return (
    <div className="w-full mx-auto box-border">
      <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">
        Latest Photos
      </h2>
      <SRLWrapper>
        <div className="flex justify-around items-center flex-col sm:flex-row px-4 md:px-8">
          {latest &&
            latest.map((post) => (
              <div className="w-full h-full sm:w-1/3 px-4 md:px-8">
                <a
                  href={post.image}
                  className="w-full h-full sm:w-1/3 px-4 md:px-8"
                >
                  <img src={post.thumbnail} alt={post.alt} />
                </a>
              </div>
            ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

function Categories({ categories }) {
  return (
    <div
      className="w-full h-full font-oswaldRegular"
      style={{ minHeight: "500px" }}
    >
      <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">
        Category
      </h2>
      <ul className="w-full flex flex-wrap px-4">
        {categories && categories.map((cat) => (
          <Link
            to={`/${cat.slug}`}
            className="text-gray-400 w-full sm:w-1/2 p-4 hover:text-gray-200 transition"
          >
            <ProgressiveImage
              className="cover"
              alt={cat.title}
              overlaySrc={
                "https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?fit=800%2C455&ssl=1"
              }
              src={cat.image}
            />
            <p className="text-lg w-full flex justify-center pt-8">{cat.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function MainContent({ latest, categories }) {
  return (
    <main className="w-full sm:w-4/5 h-full bg-darkest mx-auto box-border">
      <Latest latest={latest} />
      <Categories categories={categories} />
    </main>
  );
}

export default MainContent;
