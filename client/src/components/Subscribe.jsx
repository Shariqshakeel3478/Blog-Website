import React from 'react'
import { FiMail } from "react-icons/fi";

export default function Subscribe() {
    return (
        <section className="py-20 bg-gradient-to-r text-blue-800 relative overflow-hidden">
            {/* Decorative Gradient Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-3 drop-shadow-lg">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-blue-500 mb-8 text-lg">
                    Stay updated with the latest blogs, study tips, and tech insights delivered straight to your inbox.
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 w-full sm:w-[60%] focus-within:border-blue-300 transition">
                        <FiMail className="text-blue-500" size={20} />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent text-blue-500 text-blue-500 outline-none px-3 w-full text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-blue-500 mt-5 text-sm">
                    We respect your privacy — unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
