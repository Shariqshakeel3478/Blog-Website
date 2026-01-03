import React, { useContext, useState } from "react";
import { FiMenu, FiX, FiSettings, FiEdit2, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { BlogContext } from "../context/BlogContext";
import { motion } from "framer-motion";

export default function UserProfile() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const { blogs } = useContext(BlogContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const filteredBlogs = blogs?.filter(blog => blog.user_id === user?.id) || [];

    const handleWriteBlog = () => {
        if (!user) navigate("/login");
        else navigate("/add-blog");
    };

    if (!user) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">

            {/* Background Shapes */}
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

                    {user ? (
                        <>
                            <button
                                onClick={handleWriteBlog}
                                className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium flex items-center gap-1 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                            >
                                Write <FiArrowRight />
                            </button>

                            <button
                                onClick={() => navigate("/profile")}
                                className="text-gray-800 hover:text-gray-900 font-medium"
                            >
                                {user.username}
                            </button>

                            <button
                                onClick={() => {
                                    logout()
                                    navigate('/')

                                }}
                                className="text-orange-500 font-semibold hover:text-orange-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
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
                                Write <FiArrowRight />
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

                {/* Mobile Menu */}
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

                        <button
                            onClick={() => {
                                handleWriteBlog();
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-100 transition"
                        >
                            Write
                        </button>

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

            {/* Profile Header */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-10 flex flex-col md:flex-row items-center gap-10">

                    {/* Avatar */}
                    <div className="w-32 h-32 rounded-full bg-orange-100 border-4 border-orange-300 shadow-lg flex items-center justify-center text-4xl font-bold text-orange-700">
                        {user.username.charAt(0).toUpperCase()}
                    </div>

                    {/* User Info */}
                    <div className="flex-1 space-y-3">
                        <h1 className="text-4xl font-bold text-gray-900">{user.username}</h1>
                        <p className="text-gray-600">{user.bio || "No bio added yet."}</p>

                        <div className="flex gap-6 pt-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900">{filteredBlogs.length}</p>
                                <p className="text-sm text-gray-500">Blogs</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900">15.5K</p>
                                <p className="text-sm text-gray-500">Views</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900">85</p>
                                <p className="text-sm text-gray-500">Followers</p>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
                                <FiEdit2 /> Edit Profile
                            </button>
                            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                                <FiSettings size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blogs Section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Blogs</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map(blog => (
                        <motion.div
                            key={blog.id}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-md rounded-2xl p-5 transition"
                        >
                            <div className="h-36 bg-orange-50 rounded-xl flex items-center justify-center text-orange-700 font-semibold text-lg px-4 text-center">
                                {blog.title}
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">{blog.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Published: <span className="font-medium text-gray-700">{blog.created_at}</span>
                            </p>
                            <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-4">
                                <span className="text-sm font-medium text-orange-600">Views: 3.5K</span>
                                <button className="text-sm text-gray-600 hover:text-orange-600 transition">Edit</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
          @keyframes slowSpin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
          @keyframes slowSpinReverse {0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}
          .animate-slowSpin { animation: slowSpin 120s linear infinite; }
          .animate-slowSpin-reverse { animation: slowSpinReverse 120s linear infinite; }
        `}
            </style>
        </div>
    );
}
