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
	clipPath: "inset(0)"
};

function ProgressiveImage(props) {
    const [highResImageLoaded, setHighResImageLoaded] = useState(false)
    const [highResImage, setHighResImage] = useState()
    const { overlaySrc } = props;
    let filteredProps = omit(props, "overlaySrc");
    return (
        <span className='z-10 w-full h-full'>
            <img
                {...filteredProps}
                onLoad={() => {
                    setHighResImageLoaded(true)
                }}
                ref={img => {
                    setHighResImage(img)
                }}
                src={props.src}
                style={{zIndex: 10000, width: "100%"}}
            />
            <img
                {...filteredProps}
                className={`${props.className}`}
                style={overlayStyles}
                {...highResImageLoaded && { style: { opacity: "0" } }}
                src={overlaySrc}
            />
        </span>
    )
}
export default ProgressiveImage