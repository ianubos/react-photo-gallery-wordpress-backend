import React, { useState } from "react";
const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  position: "absolute",
  filter: "blur(1px)",
  transition: "opacity ease-in 1000ms",
  clipPath: "inset(0)",
  width: 400,
  height: 300,
  top: 0,
};

function ProgressiveImage(props) {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const [highResImage, setHighResImage] = useState();
  const { overlaySrc } = props;
  let filteredProps = omit(props, "overlaySrc");
  return (
    <span className="z-10 w-full h-full relative">
      <img
        {...filteredProps}
        onLoad={() => {
          setHighResImageLoaded(true);
        }}
        ref={(img) => {
          setHighResImage(img);
        }}
        src={props.src}
        style={{ zIndex: 10000, width: "100%" }}
        alt={props?.alt ? props.alt : "japan photo"}
      />
      {/* <img
        {...filteredProps}
        className={`${props.className}`}
        style={overlayStyles}
        {...(highResImageLoaded && { style: { opacity: "0" } })}
        src={overlaySrc}
        alt={props?.alt ? props.alt : "japan photo"}
      /> */}
    </span>
  );
}
export default ProgressiveImage;
