import useMobile from '../../customHooks/useMobile'
import { NavBarMobile } from './NavBarMobile/NavBarMobile'
import { NavBarDesktop } from './NavBarDesktop/NavBarDesktop'
export const Navbar = () => {
  const isMobile : boolean = useMobile(900);
  return ( isMobile ? <NavBarMobile/> : <NavBarDesktop/> 
  
  )
}
