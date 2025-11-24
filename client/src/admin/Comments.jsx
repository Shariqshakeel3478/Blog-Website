import React, { useState } from 'react';

export default function Comments() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Sample comments data
    const comments = [
        {
            id: 1,
            author: "John Doe",
            email: "john@example.com",
            content: "This is a great article! Very informative and well-written.",
            post: "Getting Started with React",
            status: "approved",
            date: "2024-01-15",
            avatar: "JD"
        },
        {
            id: 2,
            author: "Sarah Smith",
            email: "sarah@example.com",
            content: "I have a question about the implementation details. Can you elaborate more?",
            post: "Advanced JavaScript Patterns",
            status: "pending",
            date: "2024-01-14",
            avatar: "SS"
        },
        {
            id: 3,
            author: "Mike Johnson",
            email: "mike@example.com",
            content: "Thanks for sharing this valuable information!",
            post: "CSS Grid vs Flexbox",
            status: "approved",
            date: "2024-01-13",
            avatar: "MJ"
        },
        {
            id: 4,
            author: "Emily Brown",
            email: "emily@example.com",
            content: "I found a typo in the third paragraph, please fix it.",
            post: "Node.js Best Practices",
            status: "rejected",
            date: "2024-01-12",
            avatar: "EB"
        },
        {
            id: 5,
            author: "Alex Wilson",
            email: "alex@example.com",
            content: "This helped me solve my problem. Thank you!",
            post: "React Hooks Guide",
            status: "approved",
            date: "2024-01-11",
            avatar: "AW"
        }
    ];

    // Filter comments based on search and status
    const filteredComments = comments.filter(comment => {
        const matchesSearch =
            comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.post.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || comment.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Get status count
    const statusCounts = {
        all: comments.length,
        approved: comments.filter(c => c.status === 'approved').length,
        pending: comments.filter(c => c.status === 'pending').length,
        rejected: comments.filter(c => c.status === 'rejected').length
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved': return 'fas fa-check-circle';
            case 'pending': return 'fas fa-clock';
            case 'rejected': return 'fas fa-times-circle';
            default: return 'fas fa-circle';
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Comments</h1>
                    <p className="text-gray-600 mt-2">Manage and moderate user comments</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Header with Stats and Filters */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                            <div className="flex-1">
                                <div className="relative max-w-md">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search comments..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Status Filters */}
                                <div className="flex space-x-2">
                                    {[
                                        { key: 'all', label: 'All', count: statusCounts.all },
                                        { key: 'approved', label: 'Approved', count: statusCounts.approved },
                                        { key: 'pending', label: 'Pending', count: statusCounts.pending },
                                        { key: 'rejected', label: 'Rejected', count: statusCounts.rejected }
                                    ].map(filter => (
                                        <button
                                            key={filter.key}
                                            onClick={() => setStatusFilter(filter.key)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${statusFilter === filter.key
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            {filter.label} ({filter.count})
                                        </button>
                                    ))}
                                </div>

                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                                    {comments.length} comments
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="p-6">
                        {filteredComments.length > 0 ? (
                            <div className="space-y-6">
                                {filteredComments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-4 flex-1">
                                                {/* Avatar */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                        {comment.avatar}
                                                    </div>
                                                </div>

                                                {/* Comment Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-800">
                                                            {comment.author}
                                                        </h3>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(comment.status)}`}>
                                                            <i className={`${getStatusIcon(comment.status)} mr-1`}></i>
                                                            {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-600 mb-3">
                                                        {comment.content}
                                                    </p>

                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                        <span>
                                                            <i className="fas fa-envelope mr-1"></i>
                                                            {comment.email}
                                                        </span>
                                                        <span>
                                                            <i className="fas fa-file-alt mr-1"></i>
                                                            On: {comment.post}
                                                        </span>
                                                        <span>
                                                            <i className="fas fa-calendar mr-1"></i>
                                                            {new Date(comment.date).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex space-x-2 ml-4">
                                                {comment.status === 'pending' && (
                                                    <>
                                                        <button className="text-green-600 hover:text-green-800 p-2 rounded-lg hover:bg-green-50 transition-colors">
                                                            <i className="fas fa-check"></i>
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors">
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </>
                                                )}
                                                <button className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                                    <i className="fas fa-reply"></i>
                                                </button>
                                                <button className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <i className="fas fa-comments text-6xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    {searchTerm || statusFilter !== 'all' ? 'No matching comments found' : 'No comments yet'}
                                </h3>
                                <p className="text-gray-500">
                                    {searchTerm || statusFilter !== 'all'
                                        ? 'Try adjusting your search or filter criteria'
                                        : 'Comments will appear here once users start engaging with your content'
                                    }
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}