 import { useState, useEffect } from "react"

 const EmptySSRRect = {
   bottom: 0,
   height: 0,
   left: 0,
   right: 0,
   top: 0,
   width: 0,
   x: 0,
   y: 0,
 }
 
 const useScroll = () => {
   const [lastScrollTop, setLastScrollTop] = useState(0)
   const [bodyOffset, setBodyOffset] = useState (
     typeof window === "undefined" || !window.document
       ? EmptySSRRect
       : document.body.getBoundingClientRect()
   )
   const [scrollY, setScrollY] = useState(bodyOffset.top)
   const [scrollX, setScrollX] = useState(bodyOffset.left)
   const [scrollDirection, setScrollDirection] = useState()
 
   const listener = () => {
     setBodyOffset(
       typeof window === "undefined" || !window.document
         ? EmptySSRRect
         : document.body.getBoundingClientRect()
     )
     setScrollY(-bodyOffset.top)
     setScrollX(bodyOffset.left)
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
     setLastScrollTop(-bodyOffset.top)
   }
 
   useEffect(() => {
     window.addEventListener("scroll", listener)
     return () => {
       window.removeEventListener("scroll", listener)
     }
   })
 
   return {
     scrollY,
     scrollX,
     scrollDirection,
   }
 }
 
export default useScroll 