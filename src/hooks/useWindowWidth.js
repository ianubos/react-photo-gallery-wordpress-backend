import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth || undefined);
    useEffect(() => {
        const handleResize = setWidth(window.innerWidth || undefined)
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);
    return width;
}
export default useWindowWidth;