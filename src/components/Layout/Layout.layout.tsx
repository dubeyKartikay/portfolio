import { Navbar } from "../Navbar/Navbar" 
import Footer from "../Footer/Footer"
import React  from "react"
type LayoutProps = {
  children:React.ReactNode;
}
export default function Layout(props:LayoutProps){
  return( 
    <>
    <Navbar/>
    <div className="block h-[110px]" > </div>
    {props.children}
    <Footer/>
    </> 
  )
}
