import React from "react";
import { Helmet } from "react-helmet";
import BackPicture from "../components/BackPicture";
import MainContent from "../components/MainContent";

export default function Home({latest, categories}) {
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
