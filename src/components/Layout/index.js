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
import SearchIcon from "../../assets/svg/search-icon.svg";
import HelpIcon from "../../assets/svg/help-icon.svg";
import BellIcon from "../../assets/svg/bell-icon.svg";

import profilePic from "../../assets/images/table-leading-pic.jpg";

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
        <div className="w-full h-20 bg-main-blue-300 shadow flex items-center px-12 justify-between">
          <div className="w-1/6 relative">
            <div className="py-3 px-3 flex rounded-full border bg-white">
              <img src={SearchIcon} alt="search-icon" className="" />
              <input
                className="appearance-none w-full px-3 text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="search"
              />
            </div>
          </div>
          <div className="flex w-1/6 items-center justify-between">
            <img src={BellIcon} alt="notification-icon" />
            <img src={HelpIcon} alt="help-icon" />
            <div className="flex items-center">
              <img
                src={profilePic}
                alt="profile-pic"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="capitalize text-white ml-4 text-xs">
                Silas kayo
              </span>
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
