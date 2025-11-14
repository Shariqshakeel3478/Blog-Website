import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Blog() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const response = await axios.get('http://localhost:5000/blogs');
            setBlogs(response.data);
            console.log(response.data)
        };
        getBlogs();
    }, []);

    return (
        <div className="mt-50">
            <section className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-wrap items-center justify-between mb-8">
                    <h2 className="text-4xl font-bold md:text-5xl">Featured Blogs</h2>
                    <a href="#"
                        className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
                        View More
                    </a>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <div
                            key={blog.id}
                            className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={blog.image}
                                alt="Blog cover"
                                className="object-cover w-full h-48"
                            />

                            {/* Content Section */}
                            <div className="flex flex-col justify-between flex-grow p-5">
                                <div>
                                    <span className="inline-block mb-3 text-xs font-semibold uppercase text-blue-600 border-b-2 border-blue-600">
                                        Category
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors duration-200">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{blog.meta_des}</p>
                                </div>

                                <Link to={`/blogs/${blog.id}`}>
                                    <div className="mt-5">
                                        <a
                                            href="#"
                                            className="inline-block text-blue-600 font-semibold uppercase text-sm hover:underline"
                                        >
                                            Read More →
                                        </a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
