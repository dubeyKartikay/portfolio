import { NavItem, navItems } from "../contents";
export const NavBarDesktop = () => {
  return (
    <div className="flex justify-between pt-8">
      <div className="w-20">
        <img alt="kartikay dubey's avatar" src="Avatar.png" />
      </div>
      <ul className="max-w-md w-4/5 flex justify-between items-center">
        {navItems.map((element: NavItem) => (
          <li  >
            <a href={element.link}>
              <h6 className="text-lg"> {element.title} </h6>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
