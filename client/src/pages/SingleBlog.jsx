import axios from 'axios'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";

export default function SingleBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                console.log("Blog Response", res.data);
                setBlog(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">Loading blog...</p>
            </div>
        );
    }

    if (!blog || blog.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">Blog not found.</p>
            </div>
        );
    }

    const blogData = blog[0]; // since API returns an array

    return (
        <>
            {/* ---------------- HERO SECTION ---------------- */}
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

                        <button className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition">
                            Login
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="hero relative h-[90vh] flex items-center justify-start text-white">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${blogData.image})`,
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 md:px-16 max-w-xl space-y-5 animate-fadeIn">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                            {blogData.title}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 drop-shadow-md">
                            {blogData.meta_des}
                        </p>
                    </div>
                </div>
            </div>

            {/* ---------------- BLOG DETAILS SECTION ---------------- */}
            <div className="relative z-10 bg-white -mt-20 rounded-t-3xl shadow-xl pb-20">
                {/* Blog Info Card */}
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 -mt-10 relative z-20">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="Author"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-slate-800">
                                    {blogData.author || "Admin"}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {new Date(blogData.created_at).toDateString()}
                                </p>
                            </div>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {blogData.category_name}
                        </span>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="max-w-4xl mx-auto px-4 md:px-0 py-12 text-gray-800 leading-relaxed">
                    <div
                        className="prose prose-lg prose-blue max-w-none"
                        dangerouslySetInnerHTML={{ __html: blogData.content }}
                    ></div>
                </div>

                {/* Author Bio Section */}
                <div className="max-w-4xl mx-auto bg-slate-50 p-6 rounded-xl mt-10 flex items-center space-x-4 border border-slate-200">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                        alt="Author"
                        className="w-14 h-14 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold text-slate-800">
                            Written by {blogData.author || "Admin"}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                            A passionate web developer and blogger sharing insights about tech and creativity.
                        </p>
                    </div>
                </div>

                {/* Related Posts Section */}
                <div className="max-w-6xl mx-auto mt-16 px-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                        Related Posts
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/5077043/pexels-photo-5077043.jpeg"
                                alt="Related Post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-slate-800">
                                    Sample Related Blog 1
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    A short description about this related article...
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                                alt="Related Post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-slate-800">
                                    Sample Related Blog 2
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    A short description about this related article...
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg"
                                alt="Related Post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg text-slate-800">
                                    Sample Related Blog 3
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    A short description about this related article...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
