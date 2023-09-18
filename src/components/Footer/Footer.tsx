import useMobile from "../../customHooks/useMobile";
import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDeskTop";
import { SCREEN_SIZES } from "../../utils/constants";
export default function Footer(){
  const isMobile = useMobile();
  return isMobile ? <FooterMobile/> : <FooterDesktop/>
}
