import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

export default function Blog() {
    const { blogs } = useContext(BlogContext);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getReadingTime = (content) => {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    return (
        <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
            {/* Floating background shapes */}
            <div className="absolute top-0 left-0 w-36 h-36 bg-orange-200/30 rounded-full blur-3xl animate-slowSpin"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-orange-100/20 rounded-full blur-3xl animate-slowSpin-reverse"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
                        Latest Articles
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Featured Blogs
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Discover insightful articles, tutorials, and stories from our community of passionate writers and learners.
                    </p>
                </div>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {blogs.map(blog => (
                        <article
                            key={blog.id}
                            className="group relative bg-gradient-to-tr from-white to-blue-50 rounded-xl shadow-lg border border-orange-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
                        >
                            {/* Floating card layers for 3D effect */}
                            <div className="absolute top-2 left-2 w-full h-full rounded-xl bg-white/10 pointer-events-none blur-md"></div>
                            <div className="absolute top-1 left-1 w-full h-full rounded-xl bg-white/20 pointer-events-none blur-sm"></div>

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden rounded-t-xl">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Category */}
                                <div className="absolute top-3 left-3 z-10">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold shadow">
                                        {blog.category_name}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-56">
                                <div>
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-gray-500 text-xs mb-2">
                                        <div className="flex items-center gap-1">
                                            <FiCalendar size={12} />
                                            <span>{formatDate(blog.created_at)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiClock size={12} />
                                            <span>{getReadingTime(blog.content || blog.meta_des)} min read</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {blog.meta_des}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                                            {blog.author_name?.charAt(0) || 'U'}
                                        </div>
                                        <span className="text-gray-900 text-sm font-medium">
                                            {blog.author_name || 'Unknown'}
                                        </span>
                                    </div>

                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-medium transition-all duration-200"
                                    >
                                        Read
                                        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={14} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link
                        to="/blogs"
                        className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    >
                        <span>View All Articles</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    </Link>
                </div>
            </div>

            {/* Floating Animations */}
            <style>{`
                @keyframes slowSpin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
                @keyframes slowSpinReverse {0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}
                .animate-slowSpin { animation: slowSpin 120s linear infinite; }
                .animate-slowSpin-reverse { animation: slowSpinReverse 120s linear infinite; }
            `}</style>
        </section>
    )
}
