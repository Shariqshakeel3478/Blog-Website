import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Hero() {
    return (
        <>
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
                            backgroundImage:
                                "url('https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg')",
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 md:px-16 max-w-xl space-y-5 animate-fadeIn">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                            Empower Your Learning Journey
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 drop-shadow-md">
                            Discover insights, study techniques, and tech tools that help you learn smarter every day.
                        </p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
                            Start Reading
                        </button>
                    </div>
                </div>

                {/* Hero Cards Section (lifted up) */}
                <div className="hero-cards mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 -mt-10 relative z-20">
                    {[
                        {
                            title: "Study Tips",
                            desc: "Master effective study methods for exams and learning.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                                </svg>
                            )
                        },
                        {
                            title: "Tech & Tools",
                            desc: "Discover the best tools and apps to make learning smarter.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="12" y1="16" x2="16" y2="12"></line>
                                    <line x1="12" y1="16" x2="8" y2="12"></line>
                                </svg>
                            )
                        },
                        {
                            title: "Career Advice",
                            desc: "Learn about academic paths and professional growth tips.",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="3" y1="15" x2="21" y2="15"></line>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                    <line x1="15" y1="3" x2="15" y2="21"></line>
                                </svg>
                            )
                        },
                    ].map((card, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl border border-blue-100 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl p-2 transition transform hover:-translate-y-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <div className="text-blue-700">{card.icon}</div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-blue-800">{card.title}</h3>
                                    <p className="text-sm text-gray-700">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
