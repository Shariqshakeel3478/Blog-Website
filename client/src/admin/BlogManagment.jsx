import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaNewspaper } from "react-icons/fa";

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
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/deleteBlog/${id}`);
                setBlogs(blogs.filter((blog) => blog.id !== id));
                Swal.fire("Deleted!", "The blog has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting blog:", error);
                Swal.fire("Error!", "Failed to delete the blog.", "error");
            }
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.meta_des.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
                    <p className="text-gray-600 mt-2">Manage your blog posts</p>
                </div>

                {/* Search + Add Blog */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                        <div className="relative max-w-md w-full">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search blogs..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <FaSearch className="absolute right-3 top-3 text-gray-400" />
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                {blogs.length} blogs
                            </span>
                            <Link to="/add-blog">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center transition-colors">
                                    <FaPlus className="mr-2" /> Add Blog
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blogs Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBlogs.map(blog => (
                            <div
                                key={blog.id}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                            >
                                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={blog.image}
                                        alt={blog.title}
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="mb-4 font-normal text-gray-700 line-clamp-3">
                                            {blog.meta_des}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex space-x-2">
                                            <Link to={`/blogEditor/${blog.id}`}>
                                                <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 flex items-center transition-colors">
                                                    <FaEdit className="mr-2" /> Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2 flex items-center transition-colors"
                                            >
                                                <FaTrash className="mr-2" /> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <FaNewspaper className="text-6xl text-gray-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            {searchTerm ? 'No matching blogs found' : 'No blogs available'}
                        </h3>
                        <p className="text-gray-500 mb-6">
                            {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first blog post'}
                        </p>
                        {!searchTerm && (
                            <Link to="/add-blog">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow flex items-center transition-colors mx-auto">
                                    <FaPlus className="mr-2" /> Create Your First Blog
                                </button>
                            </Link>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}
