import React, { useContext, useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Hero() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleWriteBlog = () => {
        if (!user) navigate("/login");
        else navigate("/add-blog");
    };

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Background shapes */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-slowSpin"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20 animate-slowSpin-reverse"></div>

            {/* Navbar */}
            <nav className="relative z-50 px-6 py-4 max-w-7xl mx-auto flex items-center justify-between text-gray-900">
                <div
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    ShariqBlog
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    {["Home", "Blogs", "Categories", "About"].map((item) => (
                        <button
                            key={item}
                            onClick={() => navigate("/" + item.toLowerCase())}
                            className="text-gray-800 hover:text-gray-900 font-medium transition-colors"
                        >
                            {item}
                        </button>
                    ))}

                    {/* If user logged in → Write + Profile + Logout */}
                    {user ? (
                        <>
                            <button
                                onClick={handleWriteBlog}
                                className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium flex items-center gap-1 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                            >
                                Write
                                <FiArrowRight />
                            </button>

                            <button
                                onClick={() => navigate("/profile")}
                                className="text-gray-800 hover:text-gray-900 font-medium"
                            >
                                {user.name || "Profile"}
                            </button>

                            <button
                                onClick={logout}
                                className="text-orange-500 font-semibold hover:text-orange-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {/* If user NOT logged in → Login + Write */}
                            <button
                                onClick={() => navigate("/login")}
                                className="text-gray-800 hover:text-gray-900 font-medium"
                            >
                                Login
                            </button>

                            <button
                                onClick={handleWriteBlog}
                                className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium flex items-center gap-1 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                            >
                                Write
                                <FiArrowRight />
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-gray-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-3">
                        {["Home", "Blogs", "Categories", "About"].map((item) => (
                            <button
                                key={item}
                                className="w-full text-left py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-100 transition"
                                onClick={() => {
                                    navigate("/" + item.toLowerCase());
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item}
                            </button>
                        ))}

                        {/* Write Button */}
                        <button
                            onClick={() => {
                                handleWriteBlog();
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-100 transition"
                        >
                            Write
                        </button>

                        {/* Login / Logout */}
                        {user ? (
                            <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2">
                                <button
                                    onClick={() => {
                                        navigate("/profile");
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-gray-900"
                                >
                                    Profile
                                </button>

                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-orange-500 font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    navigate("/login");
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-orange-500 text-white py-2 rounded-full mt-2"
                            >
                                Login
                            </button>
                        )}
                    </div>
                )}
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Hero Text */}
                <div
                    className={`flex-1 text-center lg:text-left space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                        <span className="text-orange-500">Empower Your</span> <br />
                        <span className="text-gray-900">Learning Journey</span>
                    </h1>
                    <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
                        Explore insightful articles, smart study tips, and tools to enhance your learning journey.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                        <button
                            onClick={() => navigate("/blogs")}
                            className="group flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            Start Reading
                            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={handleWriteBlog}
                            className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all"
                        >
                            Share Your Story
                        </button>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="flex-1 relative w-full h-96 lg:h-[28rem]">
                    <div className="absolute top-10 left-10 w-24 h-32 bg-white rounded-2xl border border-gray-200 shadow-md transform rotate-6 hover:scale-105 transition-transform duration-500 animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-28 h-36 bg-orange-100 rounded-2xl border border-orange-300 transform -rotate-6 hover:scale-105 transition-transform duration-500 animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-white rounded-2xl border border-gray-300 animate-float-slow"></div>
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
                    @keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
                    @keyframes float-delayed {0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
                    @keyframes float-slow {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
                    @keyframes slowSpin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                    @keyframes slowSpinReverse {0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}
                    .animate-float { animation: float 4s ease-in-out infinite; }
                    .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
                    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                    .animate-slowSpin { animation: slowSpin 120s linear infinite; }
                    .animate-slowSpin-reverse { animation: slowSpinReverse 120s linear infinite; }
                `}
            </style>
        </div>
    );
}
