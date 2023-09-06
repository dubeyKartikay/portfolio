import { useState, useEffect } from "react";
export default function useMobile(screenSize: number) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < screenSize) {
      setMobile(true);
    }else{
      setMobile(false);
    }
    const handleResize =  () => {
      if (window.innerWidth < screenSize) {
        setMobile(true);
      }else{
        setMobile(false);
      }
    }

    window.addEventListener("resize", handleResize   )
    return ( () => {window.removeEventListener("resize",handleResize)})

  }, []);
  return mobile;
}
