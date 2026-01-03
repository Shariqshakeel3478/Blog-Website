import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Brain, Globe, PenTool } from "lucide-react";
import { CategoryContext } from "../context/CategoryContext";

export default function Categories() {
    const { categories } = useContext(CategoryContext);

    const getIcon = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes("programming") || lower.includes("code")) return Code;
        if (lower.includes("science") || lower.includes("brain")) return Brain;
        if (lower.includes("language") || lower.includes("globe")) return Globe;
        if (lower.includes("writing") || lower.includes("pen")) return PenTool;
        return BookOpen;
    };

    return (
        <section className="py-16 bg-white">
            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-bold text-gray-900">
                    Explore by <span className="text-orange-500">Categories</span>
                </h2>
                <p className="text-gray-700 mt-2 text-lg max-w-xl mx-auto">
                    Browse through topics that match your learning interests.
                </p>
                <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
            </div>

            {/* Categories Grid */}
            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-6xl md:grid-cols-3 px-4">
                {categories && categories.length > 0 ? (
                    categories.map((cat) => {
                        const Icon = getIcon(cat.name);
                        return (
                            <Link
                                key={cat.id}
                                to={`/categories/${cat.id}`}
                                className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="relative bg-white border border-gray-200 shadow-lg hover:shadow-2xl overflow-hidden">
                                    {/* Top accent strip */}
                                    <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>

                                    {/* Card Content */}
                                    <div className="flex flex-col items-center justify-center p-6">
                                        <div className="w-14 h-14 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg mb-4">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{cat.name}</h3>
                                        {cat.description && (
                                            <p className="text-sm text-gray-600 text-center line-clamp-3">{cat.description}</p>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No categories found.</p>
                )}
            </div>
        </section>
    );
}
