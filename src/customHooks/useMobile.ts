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
    window.onresize = () => {
      if (window.innerWidth < screenSize) {
        setMobile(true);
      }else{
        setMobile(false);
      }
    };
  }, []);
  return mobile;
}
