import React, { useContext } from 'react';
import { FiSearch, FiEdit2, FiSettings } from 'react-icons/fi';
import { AuthContext } from '../context/AuthProvider';
import { BlogContext } from '../context/BlogContext';





export default function UserProfile() {





    const { user } = useContext(AuthContext)
    const { blogs } = useContext(BlogContext)


    const filteredBlogs = blogs?.filter(blog => blog.user_id === user?.id) || [];


    console.log("user Profile", user)
    console.log("Blogs in profile", blogs)
    console.log("Filtered", filteredBlogs)



    if (!user) {
        return (
            <div className="h-screen w-full flex items-center justify-center text-xl font-semibold">
                Loading Profile...
            </div>
        );
    }

    return (
        <div className="main h-full w-full relative">


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
                        <li className="hover:text-blue-300 cursor-pointer transition" >
                            Write
                        </li>
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

                    <button
                        className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition">Logout</button>
                </div>
            </div>

            {/* Hero Section (User Profile Header) */}
            <div className="hero relative h-[450px] sm:h-[550px] flex items-center justify-start text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg')",
                    }}
                ></div>


                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>


                <div className="relative z-10 px-8 md:px-16 max-w-2xl space-y-6">


                    <div className="flex items-end space-x-6">

                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">

                            <span className="text-4xl sm:text-2xl text-center font-extrabold text-blue-800">{user.image ? user.image : "No image"}</span>

                        </div>


                        <div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg">
                                {user.username}
                            </h1>
                            <p className="text-lg text-blue-200 mt-1 italic drop-shadow-md">
                                {user.bio || "Add a bio"}
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-8 pt-4">

                        <div className="flex space-x-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold">{filteredBlogs.length}</p>
                                <p className="text-sm font-medium text-blue-200">Blogs</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold">15.5K</p>
                                <p className="text-sm font-medium text-blue-200">Views</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold">85</p>
                                <p className="text-sm font-medium text-blue-200">Followers</p>
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            <button className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full text-white hover:bg-white/30 transition">
                                <FiEdit2 className="mr-2" /> Edit Profile
                            </button>
                            <button className="p-2 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full text-white hover:bg-white/30 transition" aria-label="Settings">
                                <FiSettings size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white min-h-screen -mt-16 relative z-30 pt-16 shadow-2xl rounded-t-3xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">


                    <div className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-40">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                            <button

                                className="border-b-2 border-blue-600 text-blue-600 whitespace-nowrap py-3 px-1 font-semibold text-lg transition duration-150 ease-in-out"
                            >
                                Published Blogs ({filteredBlogs.length})
                            </button>



                        </nav>
                    </div>


                    <div className="pt-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                        {filteredBlogs.map(blog => {
                            return <div key={blog.id} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                                <div className="h-48 bg-gray-200">
                                    <div className="flex items-center justify-center h-full text-gray-500 font-medium">
                                        {blog.title}
                                    </div>
                                </div>
                                <div className="p-5 space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition cursor-pointer">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Published on: <span className="font-medium text-gray-700">{blog.created_at}</span>
                                    </p>
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                        <span className="text-sm font-medium text-blue-600">Views: 3.5K</span>
                                        <button className="text-sm text-gray-500 hover:text-blue-600 transition">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>


            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="max-w-7xl mx-auto text-center text-sm">
                    &copy; 2024 Shariq's Blog. All rights reserved.
                </div>
            </footer>

        </div>
    )
}