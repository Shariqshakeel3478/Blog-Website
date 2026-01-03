import React from 'react'
import { useState } from 'react';
import { CategoryContext } from "../context/CategoryContext";
import { useContext } from 'react';

export default function Categories() {



    const { categories } = useContext(CategoryContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedColor, setSelectedColor] = useState('blue');


    console.log('category_contxt', categories)


    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
                    <p className="text-gray-600 mt-2">Manage your blog categories</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Categories List Section */}
                        <div className="p-6 border-r border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-700">Existing Categories</h2>
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                    {categories.length} categories
                                </span>
                            </div>

                            {/* Search and Filter */}
                            <div className="mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search categories..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                                </div>
                            </div>

                            {/* Categories List */}
                            <div className="overflow-y-auto max-h-96">
                                <div>
                                    {filteredCategories.map(category => (
                                        <div
                                            key={category.id}
                                            className="category-item bg-white p-4 rounded-lg shadow-sm border-l-4 mb-4 fade-in"
                                            style={{ borderLeftColor: category.color }}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
                                                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                                                    <div className="flex items-center mt-2 text-sm text-gray-500">
                                                        <span className="bg-gray-100 px-2 py-1 rounded mr-2">/{category.slug}</span>
                                                        <span><i className="far fa-file-alt mr-1"></i> {category.total_blogs} posts</span>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button className="edit-category text-blue-600 hover:text-blue-800">
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                    <button className="delete-category text-red-600 hover:text-red-800">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Add Category Section */}
                        <div className="p-6 bg-gray-50">
                            <h2 className="text-xl font-semibold text-gray-700 mb-6">
                                Add New Category
                            </h2>

                            <form>
                                <div className="mb-4">
                                    <label htmlFor="category-name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        id="category-name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter category name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="category-slug" className="block text-sm font-medium text-gray-700 mb-1">
                                        Slug
                                    </label>
                                    <input
                                        type="text"
                                        id="category-slug"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="URL-friendly version"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="category-description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="category-description"
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Brief description of this category"
                                    ></textarea>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Color Tag
                                    </label>
                                    <div className="flex space-x-2">
                                        {['blue', 'green', 'purple', 'yellow', 'red', 'indigo'].map(color => (
                                            <div
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-8 h-8 rounded-full cursor-pointer border-2 border-white shadow ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                                                    }`}
                                                style={{ backgroundColor: getColorValue(color) }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center transition-colors"
                                    >
                                        <i className="fas fa-plus mr-2"></i>
                                        Add Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const getColorValue = (color) => {
    const colorMap = {
        blue: '#3b82f6',
        green: '#10b981',
        purple: '#8b5cf6',
        yellow: '#f59e0b',
        red: '#ef4444',
        indigo: '#6366f1'
    };
    return colorMap[color] || '#3b82f6';
};



