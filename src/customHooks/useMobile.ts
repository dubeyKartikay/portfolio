import { useState, useEffect } from "react";
import { SCREEN_SIZES } from "../utils/constants";
export default function useMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < SCREEN_SIZES.MOBILE) {
      setMobile(true);
    }else{
      setMobile(false);
    }
    const handleResize =  () => {
      if (window.innerWidth < SCREEN_SIZES.MOBILE) {
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
