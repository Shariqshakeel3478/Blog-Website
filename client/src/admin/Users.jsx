import React from 'react';

export default function Users() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Users Management</h1>


            <div className="mb-4 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                    + Add User
                </button>
            </div>

            
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Username
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                       
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">John Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">john@example.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Admin</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Active</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-800 mr-4">Edit</button>
                                <button className="text-red-600 hover:text-red-800">Delete</button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
