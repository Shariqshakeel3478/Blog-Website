import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Hero() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext); // logout bhi le lo

    const handleWriteBlog = () => {
        if (!user) {
            navigate("/login");
            return;
        }
        navigate("/add-blog");
    };

    return (
        <div className="main h-screen w-full relative">
            {/* Navbar */}
            <div className="navbar flex items-center justify-between px-8 py-4 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-20">
                <div className="logo text-2xl font-bold text-white cursor-pointer drop-shadow-lg tracking-wide">
                    Shariq
                </div>

                <div className="nav hidden md:block">
                    <ul className="flex space-x-8 text-white font-medium drop-shadow-md">
                        <li className="hover:text-blue-300 cursor-pointer transition">Home</li>
                        <li className="hover:text-blue-300 cursor-pointer transition">Blogs</li>
                        <li className="hover:text-blue-300 cursor-pointer transition">Categories</li>
                        <li className="hover:text-blue-300 cursor-pointer transition">About</li>
                        <li
                            className="hover:text-blue-300 cursor-pointer transition"
                            onClick={handleWriteBlog}
                        >
                            Write
                        </li>
                    </ul>
                </div>

                <div className="end flex items-center space-x-4">
                    <div className="search hidden sm:flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/30 focus-within:border-blue-300 transition">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent text-white placeholder-white/70 outline-none text-sm px-2 w-32 sm:w-44"
                        />
                        <button className="text-white hover:text-blue-300 transition">
                            <FiSearch size={18} />
                        </button>
                    </div>

                    {/* Conditional Login/Logout */}
                    {user ? (
                        <>
                            <button
                                onClick={logout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-full transition"
                            >
                                Logout
                            </button>
                            <button
                                onClick={() => navigate("/profile")}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition"
                            >
                                Profile
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero relative h-[90vh] flex items-center justify-start text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg')",
                    }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>

                <div className="relative z-10 px-8 md:px-16 max-w-xl space-y-5 animate-fadeIn">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                        Empower Your Learning Journey
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 drop-shadow-md">
                        Discover insights, study techniques, and tech tools that help you
                        learn smarter every day.
                    </p>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
                        Start Reading
                    </button>
                </div>
            </div>
        </div>
    );
}
