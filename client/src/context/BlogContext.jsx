import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export default function BlogProvider({ children }) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/blogs");
                setBlogs(res.data || []);
            } catch (err) {
                console.error("Cannot fetch blogs", err);
            }
        };

        fetchBlogs();
    }, []);
    return (
        <BlogContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </BlogContext.Provider>
    );
}
