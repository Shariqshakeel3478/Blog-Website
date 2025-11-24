// client/src/components/AddBlog.jsx
import React, { useState, useRef, useContext } from "react";
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
    const [imageUrl, setImageUrl] = useState("")
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [category, setCategory] = useState();
    const [uploading, setUploading] = useState(false);
    const [catId, setCatId] = useState()
    const [slug, setSlug] = useState("")

    const { categories } = useContext(CategoryContext);
    const { user } = useContext(AuthContext)
    const [user_id, setUser_id] = useState(user ? user.id : null)


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
            setUploading(false);

        } catch (err) {
            console.error(err);
            alert("Image upload failed");
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

        if (!title.trim()) return alert("Title is required");
        if (!content || content.trim() === "") return alert("Add content");



        const payload = {
            title: title.trim(),
            metaTitle: metaTitle.trim() || title.trim(),
            metaDescription: metaDescription.trim(),
            category,
            content,
            imageUrl,
            author: "Shariq Shakeel",
            catId,
            user_id: user.id

        };

        try {
            const res = await axios.post("http://localhost:5000/addblog", payload);

            if (!res) {
                alert("something went wrong")
            }
            else {
                Swal.fire({
                    title: "Blog Published",
                    icon: "success"
                });
                setTitle("");
                setMetaTitle("");
                setMetaDescription("");
                setCategory("");
                setContent("");
                setCatId()
                setUser_id()
            }




            console.log("Saved:", res.data);
        } catch (err) {
            console.error(err);
            alert("Failed to save blog");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Add New Blog</h2>

                    <form onSubmit={handlePublish} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2 space-y-3">
                                <label className="block text-sm font-medium text-slate-700">Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
                                    placeholder="e.g. 10 Study Habits That Actually Work"
                                    required
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700">Meta Title (SEO)</label>
                                        <input
                                            value={metaTitle}
                                            onChange={(e) => setMetaTitle(e.target.value)}
                                            className="w-full border rounded-lg px-3 py-2 outline-none"
                                            placeholder="Short title for search results"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700">Meta Description</label>
                                        <input
                                            value={metaDescription}
                                            onChange={(e) => setMetaDescription(e.target.value)}
                                            className="w-full border rounded-lg px-3 py-2 outline-none"
                                            placeholder="Short summary (120-160 chars)"
                                        />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <label className="block text-sm font-medium text-slate-700">Content</label>
                                    <ReactQuill
                                        theme="snow"
                                        value={content}
                                        onChange={setContent}
                                        placeholder="Write your article here..."
                                        style={{ height: 300 }}
                                    />
                                </div>

                                <div className="flex items-center gap-3 mt-3">
                                    <button
                                        type="submit"
                                        disabled={uploading}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow"
                                    >
                                        {uploading ? "Publishing..." : "Publish"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            // quick preview stub: open new window with HTML content (or implement preview modal)
                                            const previewHTML = `<html><head><title>${title}</title></head><body>${content}</body></html>`;
                                            const w = window.open("", "_blank");
                                            w.document.write(previewHTML);
                                            w.document.close();
                                        }}
                                        className="border px-4 py-2 rounded-full text-slate-700"
                                    >
                                        Preview
                                    </button>
                                </div>
                            </div>

                            <aside className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Featured Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="w-full border rounded-lg px-3 py-2 outline-none"
                                        onChange={(e) => handleImageUpload(e.target.files[0])}
                                    />
                                </div>



                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Category
                                    </label>
                                    <select
                                        value={catId}
                                        onChange={(e) => setCatId(Number(e.target.value))}

                                        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        <option value="">Select a category</option>
                                        {categories && categories.length > 0 ? (
                                            categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No categories found</option>
                                        )}
                                    </select>
                                </div>


                            </aside>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
