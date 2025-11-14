import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Brain, Globe, PenTool } from "lucide-react";

export default function Categories() {
    const categories = [
        {
            name: "Technology",
            icon: <Code size={28} />,
            desc: "Learn about the latest tools, trends, and innovations in tech.",
            link: "/category/technology",
            color: "from-blue-500 to-blue-700",
        },
        {
            name: "Study Tips",
            icon: <BookOpen size={28} />,
            desc: "Practical study techniques to boost your learning efficiency.",
            link: "/category/study-tips",
            color: "from-purple-500 to-indigo-700",
        },
        {
            name: "AI & Data Science",
            icon: <Brain size={28} />,
            desc: "Explore AI concepts, data insights, and future technologies.",
            link: "/category/ai-data-science",
            color: "from-cyan-500 to-blue-700",
        },
        {
            name: "Global Education",
            icon: <Globe size={28} />,
            desc: "Discover education systems, trends, and opportunities worldwide.",
            link: "/category/global-education",
            color: "from-green-500 to-emerald-700",
        },
        {
            name: "Creative Writing",
            icon: <PenTool size={28} />,
            desc: "Express your thoughts, ideas, and stories with creative writing tips.",
            link: "/category/creative-writing",
            color: "from-pink-500 to-rose-700",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            {/* Heading Section */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-4xl font-bold text-blue-800 drop-shadow-sm">
                    Explore by <span className="text-blue-600">Categories</span>
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    Browse through topics that match your learning interests.
                </p>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Categories Grid */}
            <div className="hero-cards mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 relative z-20 mb-10">
                {categories.map((cat, i) => (
                    <Link key={i} to={cat.link}>
                        <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl p-2 transition transform hover:-translate-y-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <div className={`text-blue-700`}>{cat.icon}</div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-blue-800">{cat.name}</h3>
                                    <p className="text-sm text-gray-700">{cat.desc}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
