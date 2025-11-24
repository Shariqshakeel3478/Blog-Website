import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogManagement() {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/blogs");
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        getBlogs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/deleteBlog/${id}`);
            setBlogs(blogs.filter((blog) => blog.id !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    // Filter blogs based on search
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.meta_des.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
                    <p className="text-gray-600 mt-2">Manage your blog posts</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                            <div className="flex-1">
                                <div className="relative max-w-md">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search blogs..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                    {blogs.length} blogs
                                </span>
                                <Link to="/add-blog">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center transition-colors">
                                        <i className="fas fa-plus mr-2"></i> Add Blog
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blogs Grid */}
                    <div className="p-6">
                        {filteredBlogs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredBlogs.map((blog) => (
                                    <div
                                        key={blog.id}
                                        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                                            <img
                                                className="w-full h-48 object-cover"
                                                src={blog.image}
                                                alt={blog.title}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="mb-4 font-normal text-gray-700 line-clamp-3">
                                                {blog.meta_des}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex space-x-2">
                                                    <Link to={`/blogEditor/${blog.id}`}>
                                                        <button
                                                            type="button"
                                                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex items-center transition-colors"
                                                        >
                                                            <i className="fas fa-edit mr-2"></i>
                                                            Update
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(blog.id)}
                                                        type="button"
                                                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 flex items-center transition-colors"
                                                    >
                                                        <i className="fas fa-trash mr-2"></i>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <i className="fas fa-newspaper text-6xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    {searchTerm ? 'No matching blogs found' : 'No blogs available'}
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    {searchTerm
                                        ? 'Try adjusting your search terms'
                                        : 'Get started by creating your first blog post'
                                    }
                                </p>
                                {!searchTerm && (
                                    <Link to="/add-blog">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow flex items-center transition-colors mx-auto">
                                            <i className="fas fa-plus mr-2"></i> Create Your First Blog
                                        </button>
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}