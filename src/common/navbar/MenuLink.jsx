import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const MenuLink = ({ name = '', subMenu = [] }) => {
  return (
    <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 } }} allowHover>
      <MenuHandler>
        <div className="flex justify-center !outline-none items-center gap-x-2 cursor-pointer">
          <p>{name}</p>
          <IoIosArrowDown size={16} />
        </div>
      </MenuHandler>

      <MenuList className="!outline-none border-none shadow-lg p-1 rounded-md w-[240px] z-50">
        {subMenu.map((item, index) =>
          item?.subMenu?.length > 0 ? (
            <Menu
              key={index}
              placement="right-start"
              allowHover
              offset={10}
            >
              <MenuHandler>
                <MenuItem className="p-0 w-full !outline-none">
                  <div className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-200">
                    <p>{item.name}</p>
                    <IoIosArrowDown size={16} className="-rotate-90" />
                  </div>
                </MenuItem>
              </MenuHandler>

              <MenuList className="shadow-lg rounded-md border-none !outline-none z-[9999] p-1">
                {item.subMenu.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} className="p-0 !outline-none">
                    <Link
                      to={subItem.route}
                      className="w-full flex justify-start items-center py-2 px-3 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <MenuItem key={index} className="p-0 w-full outline-none">
              <Link
                to={item.route}
                className="w-full flex justify-start items-center py-2 px-3 rounded-lg hover:bg-gray-200"
              >
                {item.name}
              </Link>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuLink;
