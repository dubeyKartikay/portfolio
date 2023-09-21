import useMobile from "../../customHooks/useMobile"
import {Hero} from "../Hero/Hero"
import { Terminal } from "../Terminal/Terminal" 
const Home= () => {
  const isMobile = useMobile();
  return (
    <div className="flex max-w-full flex-row justify-between">
     <Hero/>
      {!isMobile && <Terminal/>}
    </div>
  )
}

export default Home
