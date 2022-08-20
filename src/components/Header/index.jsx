import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "../../assets/images/logo1.svg";
function Header() {
  const headerNav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movie",
    },
    {
      name: "TV Series",
      path: "/tv",
    },
  ];
  const { pathname } = useLocation();
  const indexTabActive = headerNav.findIndex((item) => item.path === pathname);

  return (
    // header
    <div className="fixed top-0 left-0 right-0 z-50 bg-header">
      {/* headerNav */}
      <div className="flex justify-between items-center h-16 py-[2px] px-4 text-color  ">
        {/* logo */}
        <div className="w-full max-w-[200px]">
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
        {/* navigation */}
        <nav>
          <ul className="flex text-2xl">
            {headerNav.map((item, index) => (
              <li
                key={index}
                className={` nav-item ${
                  index === indexTabActive ? "active" : ""
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex">
          {/* search */}
          <form className="flex mr-4 text-lg py-1 border-b-[1px]">
            <input type="text" placeholder="Nhập từ khóa" />
            <button className="primary-color">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {/* account */}
          <div className="flex items-center text-xl ">
            <i className="fa-solid fa-user primary-color"></i>
            <span className="ml-2">Tài khoản</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
