import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-900 py-16 px-6 md:px-20 relative overflow-hidden border-t-4 border-orange-500">
            {/* Floating shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-slowSpin"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-100/20 rounded-full blur-3xl animate-slowSpin-reverse"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {/* Logo and About */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">ShariqBlog</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Empowering learners with insightful blogs, tutorials, and guides to help you learn smarter every day.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/" className="hover:text-orange-500 transition duration-200">Home</a></li>
                        <li><a href="/about" className="hover:text-orange-500 transition duration-200">About</a></li>
                        <li><a href="/blogs" className="hover:text-orange-500 transition duration-200">Blogs</a></li>
                        <li><a href="/contact" className="hover:text-orange-500 transition duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/category/programming" className="hover:text-orange-500 transition duration-200">Programming</a></li>
                        <li><a href="/category/data-science" className="hover:text-orange-500 transition duration-200">Data Science</a></li>
                        <li><a href="/category/design" className="hover:text-orange-500 transition duration-200">UI/UX Design</a></li>
                        <li><a href="/category/career" className="hover:text-orange-500 transition duration-200">Career Advice</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4 mt-3">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="bg-orange-50 hover:bg-orange-200 text-orange-500 p-3 rounded-full transition transform hover:-translate-y-1 hover:scale-105 shadow-sm"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">
                © {new Date().getFullYear()} ShariqBlog. All Rights Reserved.
            </div>

            {/* Floating animations */}
            <style>{`
                @keyframes slowSpin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                @keyframes slowSpinReverse {0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}
                .animate-slowSpin { animation: slowSpin 120s linear infinite; }
                .animate-slowSpin-reverse { animation: slowSpinReverse 120s linear infinite; }
            `}</style>
        </footer>
    );
}
