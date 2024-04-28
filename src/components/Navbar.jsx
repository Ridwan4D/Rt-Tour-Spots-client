import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { MdSystemUpdate } from "react-icons/md";
import userLogo from "../assets/user.png";

const Navbar = () => {
  const [theme,setTheme] = useState("light");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log("The user: ", user);
  const handleLogout = () => {
    logout();
    navigate("/signIN");
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allSpots">All Tourists Spot</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addSpots">Add Tourists Spot</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/myList">My List</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      )}
    </>
  );

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const savedTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',savedTheme)
  },[theme])

  const handleTheme = e =>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }

  }
  return (
    <div>
      <div
        className="navbar bg-[linear-gradient(to_right,#94a3b8,#e2e8f0,#94a3b8)] mb-10"
        id="navActive"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tour Guide</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-900 text-xl">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
            onChange={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent border-0"
              >
                <img
                  src={user.photoURL || userLogo}
                  alt=""
                  className="h-9 w-9 rounded-full"
                />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user.displayName && user.email ? (
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">{user.displayName}</div>
                    <div className="truncate">{user.email}</div>
                  </div>
                ) : (
                  <Link
                    to="/updateUserProfile"
                    className="text-start flex items-center gap-2 px-4 bg-slate-800 py-1 rounded-sm text-white"
                  >
                    <span>Add Info</span>
                    <MdSystemUpdate />
                  </Link>
                )}

                <hr />
                <button
                  onClick={handleLogout}
                  className="text-start flex items-center gap-2 px-4 bg-slate-800 py-1 rounded-sm text-white hover:bg-white hover:border-b-4 hover:rounded-xl hover:border-gray-900 hover:text-slate-900"
                >
                  <span>Sign Out</span>
                  <FaSignOutAlt></FaSignOutAlt>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-white space-x-2">
              <Link to="/signIn">
                <button className="px-4 bg-slate-800 py-1 rounded-sm hover:bg-white hover:border-b-4 hover:rounded-xl hover:border-gray-900 hover:text-slate-900">
                  Sign In
                </button>
              </Link>
              <Link to="/signUp">
                <button className="px-4 bg-slate-800 py-1 rounded-sm hover:bg-white hover:border-b-4 hover:rounded-xl hover:border-gray-900 hover:text-slate-900">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
