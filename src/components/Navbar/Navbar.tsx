import useMobile from '../../customHooks/useMobile'
import { NavBarMobile } from './NavBarMobile/NavBarMobile'
import { NavBarDesktop } from './NavBarDesktop/NavBarDesktop'
export const Navbar = () => {
  const isMobile : boolean = useMobile();
  return ( isMobile ? <NavBarMobile/> : <NavBarDesktop/> 
  
  )
}
