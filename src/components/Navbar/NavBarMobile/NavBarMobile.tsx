import { Key, useState } from "react";
import { navItems, NavItem } from "../contents";
import "./NavMobile.css";
export const NavBarMobile = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(true);
  const toggleCollapsed = () => {
    setCollapsed(!isCollapsed);
  };
  
  return (
    <>
      <div className="fixed top-0 left-0 p-4 w-full flex justify-between bg-background ">
        <div className="w-16">
          <img alt="Kartikay Dubey's Avatar" src="Avatar.png" />
        </div>
        <div className="flex items-center justify-center">
          <div className="group" onClick={toggleCollapsed}>
            <div
              className={`w-10 h-1 bg-links my-2 group-hover:bg-nav transition-all ${
                isCollapsed ? "" : "rotate-45  translate-y-3"
              }`}
            ></div>
            <div
              className={`w-10 h-1 bg-links my-2 group-hover:bg-nav transition-all ${
                isCollapsed ? "" : "opacity-0"
              } `}
            ></div>
            <div
              className={`w-10 h-1 bg-links my-2 group-hover:bg-nav transition-all ${
                isCollapsed ? "" : "-rotate-45 -translate-y-3"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`absolute bg-background top-[100px] h-[calc(100vh-100px)] w-full transition-all ${isCollapsed?"-left-96 opacity-0":"left-0 opacity-1"}`}>
          <ul className="h-full flex flex-col justify-evenly items-center`" >
          {navItems.map((element: NavItem,ind : Number) => (
            <li key={ind as Key} className={`block m-auto ${element.title=='blogs' ? "hover:text-destructivenav" : "hover:text-nav"}`}>
             <h6 className="text-xl" > <a href={element.link}> {element.title} </a> </h6>
            </li>
          ))}
          </ul>
        </div>
    </>
  );
};
