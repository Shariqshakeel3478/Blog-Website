import React from 'react'
import { FiMail } from "react-icons/fi";

export default function Subscribe() {
    return (
        <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-slowSpin"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-100/20 rounded-full blur-3xl animate-slowSpin-reverse"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-3">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                    Stay updated with the latest blogs, study tips, and tech insights delivered straight to your inbox.
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <div className="flex items-center bg-orange-50 border border-orange-200 px-4 py-2 w-full sm:w-[60%] focus-within:border-orange-500 transition transform hover:-translate-y-1">
                        <FiMail className="text-orange-500" size={20} />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent text-gray-900 outline-none px-3 w-full text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 border border-orange-600 rounded-sm shadow-md transition transform hover:-translate-y-1"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-gray-600 mt-5 text-sm">
                    We respect your privacy — unsubscribe anytime.
                </p>
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
