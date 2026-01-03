import React, { useState, useContext } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import slugify from "slugify";
import { CategoryContext } from "../context/CategoryContext";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [catId, setCatId] = useState("");
    const [uploading, setUploading] = useState(false);
    const [slug, setSlug] = useState("");

    const { categories } = useContext(CategoryContext);
    const { user } = useContext(AuthContext);

    const handleImageUpload = async (file) => {
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            const res = await axios.post("http://localhost:5000/upload-image", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setImageUrl(res.data.url);
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Image upload failed", "error");
        } finally {
            setUploading(false);
        }
    };

    const handleTitleChange = (v) => {
        setTitle(v);
        setSlug(slugify(v || "", { lower: true, strict: true }).slice(0, 80));
        if (!metaTitle) setMetaTitle(v);
    };

    const handlePublish = async (e) => {
        e.preventDefault();
        if (!title.trim()) return Swal.fire("Error", "Title is required", "error");
        if (!content.trim()) return Swal.fire("Error", "Content is required", "error");

        const payload = {
            title: title.trim(),
            metaTitle: metaTitle.trim() || title.trim(),
            metaDescription: metaDescription.trim(),
            content,
            imageUrl,
            catId,
            user_id: user.id,
            slug,
        };

        try {
            await axios.post("http://localhost:5000/addblog", payload);
            Swal.fire("Success", "Blog published successfully!", "success");

            // Reset form
            setTitle("");
            setMetaTitle("");
            setMetaDescription("");
            setContent("");
            setImageUrl("");
            setCatId("");
            setSlug("");
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Failed to publish blog", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
                <div className="p-6 md:p-10">
                    {/* Top Back Button */}
                    <div className="mb-6">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </button>
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Blog</h2>

                    <form onSubmit={handlePublish} className="flex flex-col md:flex-row gap-8">
                        {/* Left Section: Inputs + Editor */}
                        <div className="flex-1 space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    placeholder="e.g. 10 Study Habits That Actually Work"
                                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            {/* Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title (SEO)</label>
                                    <input
                                        value={metaTitle}
                                        onChange={(e) => setMetaTitle(e.target.value)}
                                        placeholder="Short title for search results"
                                        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                                    <input
                                        value={metaDescription}
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                        placeholder="Short summary (120-160 chars)"
                                        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            {/* Content Editor */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    placeholder="Write your article here..."
                                    style={{ height: 300 }}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow transition"
                                >
                                    {uploading ? "Publishing..." : "Publish"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const previewHTML = `<html><head><title>${title}</title></head><body>${content}</body></html>`;
                                        const w = window.open("", "_blank");
                                        w.document.write(previewHTML);
                                        w.document.close();
                                    }}
                                    className="border px-6 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
                                >
                                    Preview
                                </button>
                            </div>
                        </div>

                        {/* Right Section: Sidebar */}
                        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
                            {/* Featured Image */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e.target.files[0])}
                                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {imageUrl && (
                                    <img src={imageUrl} alt="Preview" className="mt-3 w-full h-40 object-cover rounded-lg" />
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    value={catId}
                                    onChange={(e) => setCatId(Number(e.target.value))}
                                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <option value="">Select a category</option>
                                    {categories && categories.length > 0
                                        ? categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))
                                        : <option disabled>No categories found</option>
                                    }
                                </select>
                            </div>
                        </aside>
                    </form>
                </div>
            </div>
        </div>
    );
}
