import { Key } from "react";
import { NavItem, navItems } from "../contents";
export const NavBarDesktop = () => {
  return (
    <div className="fixed top-0 left-0 p-4 w-full flex justify-between bg-background ">
      <div className="w-16">
        <img alt="kartikay dubey's avatar" src="Avatar.png" />
      </div>
      <ul className="max-w-md w-4/5 flex justify-between items-center">
        {navItems.map((element: NavItem,ind:Number) => (
          <li key={ind as Key} >
            <a href={element.link}>
              <h6 className="text-lg"> {element.title} </h6>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
