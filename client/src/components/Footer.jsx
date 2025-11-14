import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-10 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo and About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">EduBlogs</h2>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Empowering learners with insightful educational blogs, tutorials,
                        and guides designed to help you learn smarter every day.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/blogs" className="hover:text-white transition">Blogs</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/category/programming" className="hover:text-white transition">Programming</a></li>
                        <li><a href="/category/data-science" className="hover:text-white transition">Data Science</a></li>
                        <li><a href="/category/design" className="hover:text-white transition">UI/UX Design</a></li>
                        <li><a href="/category/career" className="hover:text-white transition">Career Advice</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="bg-white hover:bg-gray-600 text-blue-600 p-2 rounded-full transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-white hover:bg-gray-600 text-blue-600 p-2 rounded-full transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-white hover:bg-gray-600 text-blue-600 p-2 rounded-full transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-white hover:bg-gray-600 text-blue-600 p-2 rounded-full transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} EduBlogs. All Rights Reserved.
            </div>
        </footer>
    );
}
