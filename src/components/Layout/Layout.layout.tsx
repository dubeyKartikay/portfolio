import { Navbar } from "../Navbar/Navbar" 
import Footer from "../Footer/Footer"
import React, { PropsWithChildren }  from "react"

export default function Layout(props:PropsWithChildren){
  return( 
    <>
    <Navbar/>
    <div className="block h-[110px]" > </div>
    {props.children}
    <Footer/>
    </> 
  )
}
