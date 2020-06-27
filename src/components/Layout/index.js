import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/svg/menu-icon.svg";
import HomeIcon from "../../assets/svg/home-purple-icon.svg";
import MessageIcon from "../../assets/svg/message-icon.svg";
import PackageIcon from "../../assets/svg/package-icon.svg";
import DocumentIcon from "../../assets/svg/file-text-icon.svg";
import ChatIcon from "../../assets/svg/chat-icon.svg";
import CalendarIcon from "../../assets/svg/calendar-icon.svg";
import ProfileIcon from "../../assets/svg/user-icon.svg";
import SettingIcon from "../../assets/svg/settings-icon.svg";

const Layout = ({ children }) => {
  const links = [
    { name: "home", path: "/", icon: HomeIcon },
    { name: "message", path: "/", icon: MessageIcon },
    { name: "package", path: "/", icon: PackageIcon },
    { name: "document", path: "/", icon: DocumentIcon },
    { name: "chat", path: "/", icon: ChatIcon },
    { name: "calendar", path: "/", icon: CalendarIcon },
    { name: "profile", path: "/", icon: ProfileIcon },
    { name: "setting", path: "/", icon: SettingIcon },
  ];
  return (
    <div className="w-full flex">
      <div className="w-1/50 bg-white min-h-screen">
        <div className="w-full h-20 flex items-center justify-center text-white">
          <img src={MenuIcon} />
        </div>

        <div className="mt-2">
          <ul className="list-reset px-2">
            {links.map((link) => {
              return (
                <li
                  className="w-full py-4 flex justify-center hover:bg-custom-bg-light-100 rounded-md mb-4"
                  key={link.name}
                >
                  <Link
                    className="text-white hover:text-gray-500"
                    to={link.path}
                  >
                    <img src={link.icon} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-6/7 min-h-screen bg-custom-bg-light-100">
        <div className="w-full h-20 bg-main-blue-300 shadow flex items-center px-12">
          <div className="w-1/6">
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 rounded-full leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
