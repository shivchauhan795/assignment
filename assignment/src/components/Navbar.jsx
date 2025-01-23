import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 backdrop-blur-lg shadow-md rounded-full px-8 py-3 flex items-center justify-between">




            <div className="hidden sm:flex items-center gap-6">
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Services
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/career"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Career
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/why-choose-us"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700 hover:text-blue-500 transition duration-300"
                    }
                >
                    Why Us
                </NavLink>
            </div>


            <button
                onClick={toggleMenu}
                className="sm:hidden text-gray-700 hover:text-blue-500 transition duration-300"
            >
                {menuOpen ? (
                    // Cross Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    // Hamburger Menu Icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
            </button>


            {menuOpen && (
                <div className="absolute top-16 left-0 w-full z-50 bg-white/85 backdrop-blur-2xl shadow-md rounded-lg flex flex-col items-center gap-4 py-4 sm:hidden">
                    <NavLink
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/blog"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/career"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Career
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/why-choose-us"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-gray-700 hover:text-blue-500 transition duration-300"
                        }
                    >
                        Why Us
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
