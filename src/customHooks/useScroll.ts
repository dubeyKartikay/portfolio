import { stat } from "fs";
import { useState, useEffect } from "react";
type options = {
  ScrollDown?: boolean;
  ScrollUp?: boolean;
  top?: boolean;
  bottom?: boolean;
  default: boolean;
};
const useScroll = (state: options) => {
  const [isState, setState] = useState(state.default);
  useEffect(() => {
    let previousScrollPos = window.scrollY;
    window.onscroll = () => {
      let curScrollPos = window.scrollY;
      let finalState = false;
      if (state.ScrollUp) {
        if (curScrollPos < previousScrollPos && !isState) {
          finalState = true;
        }
      }
      if (state.ScrollDown) {
        if (curScrollPos > previousScrollPos && !isState) {
          finalState = true;
        }
      }
      if (state.top && curScrollPos === 0 && !isState) {
        finalState = true;
      }
      if (state.bottom && curScrollPos === window.screenY && isState) {
        finalState = true;
      }
      setState(finalState);
      previousScrollPos = curScrollPos;
    };
  }, []);

  return isState;
};

export default useScroll;
