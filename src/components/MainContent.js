import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import ProgressiveImage from "./ProgressiveImage";

function Latest({ postsData }) {
  return (
    <div className="w-full mx-auto box-border">
      <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">
        Latest Photos
      </h2>
      <SRLWrapper>
        <div className="flex justify-around items-center flex-col sm:flex-row px-4 md:px-8">
          {postsData &&
            postsData.map((post) => (
              <div className="w-full h-full sm:w-1/3 px-4 md:px-8">
                <a
                  href={post.imgSrc}
                  className="w-full h-full sm:w-1/3 px-4 md:px-8"
                >
                  <img src={post.imgSrc} alt={post.alt} />
                </a>
              </div>
            ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

function Categories({ categoriesData }) {
  return (
    <div
      className="w-full h-full font-oswaldRegular"
      style={{ minHeight: "500px" }}
    >
      <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">
        Category
      </h2>
      <ul className="w-full flex flex-wrap px-4">
        {categoriesData.map((cat) => (
          <Link
            to={`/${cat.category}`}
            className="text-gray-400 w-full sm:w-1/2 p-4 hover:text-gray-200 transition"
          >
            <ProgressiveImage
              className="cover"
              alt={"woman"}
              overlaySrc={
                "https://images.pexels.com/photos/217009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
              }
              src={cat.imgSrc}
            />
            <p className="text-lg w-full flex justify-center">{cat.category}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function MainContent({ postsData, categoriesData }) {
  return (
    <main className="w-full sm:w-4/5 h-full bg-darkest mx-auto box-border">
      <Latest postsData={postsData} />
      <Categories categoriesData={categoriesData} />
    </main>
  );
}

export default MainContent;
