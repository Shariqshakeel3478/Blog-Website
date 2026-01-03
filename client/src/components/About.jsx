import React from "react";
import { FaLaptopCode, FaPenNib, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 opacity-30 rounded-full filter blur-3xl animate-slowSpin"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-100 opacity-20 rounded-full filter blur-3xl animate-slowSpin-reverse"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="overflow-hidden shadow-lg border border-gray-200">
                        <img
                            src="https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg"
                            alt="About Me"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        About <span className="text-orange-500">Me</span>
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Hi, I’m <span className="font-semibold text-orange-500">Shariq Shakeel</span> — a Computer Science student and passionate web developer who loves building clean, creative, and efficient digital experiences. My journey started with curiosity and a laptop, and today I’m focused on mastering the MERN Stack, creating impactful projects, and sharing knowledge through my blog.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        I enjoy turning complex problems into elegant solutions — whether it’s through code, design, or content creation. When I’m not coding, you’ll find me learning new tools, writing about tech, or exploring ideas that push me toward innovation and growth.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 border border-orange-200 hover:border-orange-500 transition transform hover:-translate-y-1">
                            <FaLaptopCode className="text-orange-500 text-xl" />
                            <span className="font-medium">Full Stack Developer</span>
                        </div>
                        <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 border border-orange-200 hover:border-orange-500 transition transform hover:-translate-y-1">
                            <FaPenNib className="text-orange-500 text-xl" />
                            <span className="font-medium">Tech Blogger</span>
                        </div>
                        <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 border border-orange-200 hover:border-orange-500 transition transform hover:-translate-y-1">
                            <FaGlobeAsia className="text-orange-500 text-xl" />
                            <span className="font-medium">Explorer</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating animations */}
            <style>{`
                @keyframes slowSpin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                @keyframes slowSpinReverse {0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}
                .animate-slowSpin { animation: slowSpin 120s linear infinite; }
                .animate-slowSpin-reverse { animation: slowSpinReverse 120s linear infinite; }
            `}</style>
        </section>
    );
}
