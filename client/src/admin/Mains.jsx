import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Total Posts</p>
          <h2 className="text-2xl font-semibold mt-2">0</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Published / Draft Posts</p>
          <h2 className="text-2xl font-semibold mt-2">0 / 0</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Total Categories</p>
          <h2 className="text-2xl font-semibold mt-2">0</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Total Comments</p>
          <h2 className="text-2xl font-semibold mt-2">0</h2>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">Post Title 1</li>
            <li className="border-b pb-2">Post Title 2</li>
            <li className="border-b pb-2">Post Title 3</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">Comment on Post 1</li>
            <li className="border-b pb-2">Comment on Post 2</li>
            <li className="border-b pb-2">Comment on Post 3</li>
          </ul>
        </div>
      </div>

      {/* Graphs / Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5 h-64 flex items-center justify-center">
          <p className="text-gray-400">Posts per Month Graph</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 h-64 flex items-center justify-center">
          <p className="text-gray-400">Views per Post Graph</p>
        </div>
      </div>
    </div>
  );
}
