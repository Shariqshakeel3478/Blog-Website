import axios from 'axios'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { AuthContext } from "../context/AuthProvider";
import { CommentContext } from '../context/CommentContext';
import { useContext } from 'react';

import Swal from 'sweetalert2';

export default function SingleBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);
    const [commentText, setCommentText] = useState("");
    const { user } = useContext(AuthContext);
    const { comments } = useContext(CommentContext)
   
    const filteredComments = comments ? comments.filter(com => Number(com.user_id) === Number(user.id)) : [];




    const sendComment = async () => {
        try {
            const payload = {
                user_id: user.id,
                name: user.username,
                blog_id: id,
                comment: commentText
            };

            const res = await axios.post("http://localhost:5000/comment", payload);

            if (res) {
                Swal.fire("Comment Added");
                console.log("Comment Added:", res.data);
            }

            setCommentText("");
        } catch (err) {
            console.log("Comment cannot be saved", err);
        }
    };




    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);

                setBlog(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">Loading blog...</p>
            </div>
        );
    }

    if (!blog || blog.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-600 text-lg">Blog not found.</p>
            </div>
        );
    }

    const blogData = blog[0];
    return (
        <>
            <>

                <div className="navbar fixed top-0 left-0 right-0 z-30 bg-black/30 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-sm">
                    <div className="text-white text-2xl font-bold">Shariq</div>

                    <div className="hidden md:flex items-center space-x-8 text-white">
                        <Link to="/" className="hover:text-blue-400 duration-200">Home</Link>
                        <Link to="/blogs" className="hover:text-blue-400 duration-200">Blogs</Link>
                        <Link to="/categories" className="hover:text-blue-400 duration-200">Categories</Link>
                        <Link to="/about" className="hover:text-blue-400 duration-200">About</Link>
                    </div>

                    <button className="bg-blue-600 px-4 py-1.5 rounded-full text-white hover:bg-blue-700 duration-200">
                        Login
                    </button>
                </div>


                <section className="relative h-[75vh] w-full flex items-center justify-center text-center px-6">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${blogData.image})` }}
                    ></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

                    <div className="relative z-10 max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{blogData.title}</h1>
                        <p className="text-gray-200 mt-4 text-lg">{blogData.meta_des}</p>
                    </div>
                </section>


                <div className="max-w-4xl mx-auto mt-[-70px] bg-white rounded-2xl shadow-xl p-8 relative z-20">


                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b pb-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                className="w-12 h-12 rounded-full shadow"
                                alt="author"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{blogData.author || "Admin"}</h3>
                                <p className="text-gray-500 text-sm">
                                    {new Date(blogData.created_at).toDateString()}
                                </p>
                            </div>
                        </div>

                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow">
                            {blogData.category_name}
                        </span>
                    </div>


                    <div
                        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blogData.content }}
                    ></div>
                </div>


                <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow flex items-center space-x-4">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                        className="w-16 h-16 rounded-full shadow"
                        alt="author"
                    />

                    <div>
                        <h3 className="font-semibold text-lg">Written by {blogData.author || "Admin"}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Passionate blogger sharing insights and creativity with the world.
                        </p>
                    </div>
                </div>


                <div className="max-w-4xl mx-auto mt-14 bg-white p-8 rounded-2xl shadow">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments</h2>


                    <div className="mb-8">
                        <textarea
                            className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 outline-none"
                            rows="4"
                            placeholder="Write your comment..."
                            name='comment'
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}

                        ></textarea>

                        <button onClick={sendComment} className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 duration-200">
                            Post Comment
                        </button>
                    </div>


                    <div className="space-y-8">


                        {comments.map((com) => {
                            return <div key={com.id} className="flex space-x-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                                    className="w-12 h-12 rounded-full shadow"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        {com.name ? com.name : "User"}
                                    </h4>
                                    <p className="text-gray-600 text-sm">{com.comment}</p>

                                </div>
                            </div>
                        })}




                    </div>
                </div>


                <div className="text-center my-14">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 duration-200 shadow"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </>

        </>
    );
}
