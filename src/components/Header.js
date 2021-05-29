import React from "react";
import { Link } from "react-router-dom";
import currentWidth from "../hooks/useCurrentWidth";
import Hamburger from "./Hamburger";

import sitedata from "../siteData";

const NavItem = ({ title, slug }) => (
  <li className="text-xl font-semibold transition">
    <Link
      to={`/${slug}`}
      className="h-full w-full py-2 px-2 hover:text-white text-gray-400 transition"
    >
      {title}
    </Link>
  </li>
);

function Header() {
  const width = currentWidth();
  const siteData = sitedata();
  return (
    <>
      <header className="w-full bg-darkest h-20 md:h-28 font-oswaldRegular box-border fixed z-50">
        <div className="text-gray-300 flex justify-between items-center h-full w-full px-2 sm:px-10">
          <Link to="/" className="text-xl md:text-2xl font-bold ">
            {siteData.title}
          </Link>
          <ul className="text-xl md:text-2xl flex justify-between items-center">
            {width > 700 ? (
              <>
                {Object.entries(siteData.pages).map((item, index) => (
                  <NavItem
                    title={item[1].title}
                    slug={item[1].slug}
                    key={index}
                  />
                ))}
                <NavItem title={"Contact"} slug={"contact"} />
              </>
            ) : (
              <Hamburger />
            )}
          </ul>
        </div>
      </header>
      <div className="block h-20 w-full"></div>
    </>
  );
}

export default Header;
