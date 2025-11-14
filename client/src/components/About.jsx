import React from "react";
import { FaLaptopCode, FaPenNib, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion";


export default function About() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
           
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg')",
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-1/2"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-lg">
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
                    className="w-full md:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold drop-shadow-md">
                        About <span className="text-blue-300">Me</span>
                    </h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                        Hi, I’m <span className="font-semibold text-blue-300">Shariq Shakeel</span> —
                        a Computer Science student and passionate web developer who loves building
                        clean, creative, and efficient digital experiences. My journey started with
                        curiosity and a laptop, and today I’m focused on mastering the MERN Stack,
                        creating impactful projects, and sharing knowledge through my blog.
                    </p>

                    <p className="text-blue-100/90 leading-relaxed">
                        I enjoy turning complex problems into elegant solutions — whether it’s
                        through code, design, or content creation. When I’m not coding, you’ll find
                        me learning new tools, writing about tech, or exploring ideas that push me
                        toward innovation and growth.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/20 hover:border-blue-300 transition">
                            <FaLaptopCode className="text-blue-300 text-xl" />
                            <span className="font-medium">Full Stack Developer</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/20 hover:border-blue-300 transition">
                            <FaPenNib className="text-blue-300 text-xl" />
                            <span className="font-medium">Tech Blogger</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/20 hover:border-blue-300 transition">
                            <FaGlobeAsia className="text-blue-300 text-xl" />
                            <span className="font-medium">Explorer</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
