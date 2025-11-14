import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { CategoryContext } from "../context/CategoryContext";

export default function BlogEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { categories } = useContext(CategoryContext);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDes, setMetaDes] = useState("");
    const [content, setContent] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                if (res.data && res.data.length > 0) {
                    const data = res.data[0];
                    setTitle(data.title || "");
                    setImage(data.image || "");
                    setMetaTitle(data.meta_title || "");
                    setMetaDes(data.meta_des || "");
                    setContent(data.content || "");
                    setCategoryId(data.category_id || "");
                    setLastUpdated(data.created_at || "");
                    console.log('Blog Data', data)
                }
            } catch (err) {
                console.error("❌ Error fetching blog:", err);
                alert("Failed to fetch blog data.");
            }
        };
        getBlog();
    }, [id]);


    const getCurrentDateTime = () => {
        const now = new Date();
        const mysqlDate = now.getFullYear() + "-" +
            String(now.getMonth() + 1).padStart(2, "0") + "-" +
            String(now.getDate()).padStart(2, "0") + " " +
            String(now.getHours()).padStart(2, "0") + ":" +
            String(now.getMinutes()).padStart(2, "0") + ":" +
            String(now.getSeconds()).padStart(2, "0");

        return mysqlDate;
    };


    const handleUpdate = async () => {
        if (!title.trim() || !content.trim() || !categoryId) {
            alert("Please fill all required fields!");
            return;
        }

        try {
            const currentDateTime = getCurrentDateTime();

            const payload = {
                Blog_title: title,
                Blog_image: image,
                Blog_content: content,
                meta_title: metaTitle,
                meta_description: metaDes,
                category_id: categoryId,
                last_updated: currentDateTime,
            };

            const res = await axios.put(`http://localhost:5000/blogs/${id}`, payload);
            console.log("✅ Blog Updated:", res.data);

            alert("Blog updated successfully!");
            navigate(-1);
        } catch (error) {
            console.error("❌ Error updating blog:", error);
            alert("Failed to update blog");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Edit Blog</h2>

            <label className="block mb-1 text-gray-700 font-medium">Blog Title</label>
            <input
                type="text"
                placeholder="Enter blog title"
                className="w-full border p-2 rounded mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block mb-1 text-gray-700 font-medium">Cover Image URL</label>
            <input
                type="text"
                placeholder="Enter image URL"
                className="w-full border p-2 rounded mb-4"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <label className="block mb-1 text-gray-700 font-medium">Category</label>
            <select
                className="w-full border p-2 rounded mb-4"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            >
                <option value="">Select a category</option>
                {categories && categories.length > 0 ? (
                    categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))
                ) : (
                    <option disabled>No categories available</option>
                )}
            </select>

            <label className="block mb-1 text-gray-700 font-medium">Meta Title</label>
            <input
                type="text"
                placeholder="Enter meta title"
                className="w-full border p-2 rounded mb-4"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
            />

            <label className="block mb-1 text-gray-700 font-medium">Meta Description</label>
            <textarea
                placeholder="Write meta description..."
                rows="3"
                className="w-full border p-2 rounded mb-4"
                value={metaDes}
                onChange={(e) => setMetaDes(e.target.value)}
            ></textarea>

            <label className="block mb-1 text-gray-700 font-medium">Blog Content</label>
            <ReactQuill
                theme="snow"
                placeholder="Write your blog content here..."
                className="h-64 mb-6"
                value={content}
                onChange={setContent}
            />

            <div className="flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600"
                >
                    ← Back
                </button>

                <button
                    onClick={handleUpdate}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Update Blog
                </button>
            </div>
        </div>
    );
}
