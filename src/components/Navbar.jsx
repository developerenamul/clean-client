import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/all-issues">All Issues</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/issues">Issues</NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/add-issue">Add Issue</NavLink>
          </li>
          <li>
            <NavLink to="/my-contributions">My Contributions</NavLink>
          </li>
          <li>
            <NavLink to="/my-issues">My Issues</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = async () => {
    await signOutUser();
    alert("Logout Success");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="md:btn md:btn-ghost cursor-pointer md:text-xl">
          CleanUpHub
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-2">
        <input
          type="checkbox"
          value="black"
          className="toggle theme-controller"
        />
        {!user && (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}

        {user && (
          <div className="relative">
            <img
              onClick={() => setDropdownOpen(!dropdownOpen)}
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
            />
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg py-2 z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link>Profile</Link>
                </li>
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
