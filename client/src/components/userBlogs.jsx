import React from 'react';

// Sample blog data for design (no actual data fetching logic)
const dummyBlogs = [
    { id: 1, title: 'The Future of AI in Web Development', date: 'Oct 15, 2024', views: '2.1K' },
    { id: 2, title: 'Mastering Tailwind CSS for Modern UIs', date: 'Sep 28, 2024', views: '1.8K' },
    { id: 3, title: 'A Deep Dive into React Hooks', date: 'Aug 10, 2024', views: '3.5K' },
];

const UserBlogs = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Published Blogs
            </h2>

            {/* Blog List Layout */}
            <ul className="divide-y divide-gray-200">
                {dummyBlogs.map((blog) => (
                    <li key={blog.id} className="py-4 hover:bg-gray-50 transition duration-150 ease-in-out px-2 -mx-2 rounded-lg">
                        <div className="flex items-center justify-between">

                            {/* Blog Title */}
                            <a href="#" className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-150">
                                {blog.title}
                            </a>

                            {/* Blog Details */}
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>
                                    Views: <strong className="font-medium text-gray-700">{blog.views}</strong>
                                </span>
                                <span className="hidden sm:inline">
                                    Published: <strong className="font-medium text-gray-700">{blog.date}</strong>
                                </span>

                                {/* Action Button */}
                                <button
                                    className="ml-4 text-indigo-500 hover:text-indigo-700 font-medium p-1 rounded hover:bg-indigo-100"
                                    aria-label="Edit Blog"
                                >
                                    Edit
                                </button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

            {/* Empty State/Call to Action */}
            {dummyBlogs.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">
                        You haven't published any blogs yet.
                    </p>
                    <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Start Writing
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserBlogs;