import useMobile from "../../customHooks/useMobile";
import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDeskTop";

export default function Footer(){
  const isMobile = useMobile(600);
  return isMobile ? <FooterMobile/> : <FooterDesktop/>
}
