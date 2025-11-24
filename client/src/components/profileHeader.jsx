import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';




const ProfileHeader = () => {

   


    return (
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center">
            {/* Profile Image and Info */}
            <div className="flex items-center">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                    <div className="h-24 w-24 rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white shadow-md">
                        AS
                    </div>
                </div>

                {/* User Details */}
                <div className="ml-6">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Aman Sharma
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Joined on January 2023
                    </p>
                    <p className="text-base text-gray-700 mt-2 italic">
                        "Tech enthusiast and coffee lover. Sharing my journey, one blog at a time."
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-6 md:mt-0 md:ml-auto flex space-x-8 text-center border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 w-full md:w-auto justify-around">
                {/* Total Blogs */}
                <div>
                    <p className="text-3xl font-semibold text-indigo-600">
                        14
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                        Blogs
                    </p>
                </div>

                {/* Total Views */}
                <div>
                    <p className="text-3xl font-semibold text-indigo-600">
                        15.5K
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                        Views
                    </p>
                </div>

                {/* Followers/Following (Example) */}
                <div>
                    <p className="text-3xl font-semibold text-indigo-600">
                        85
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                        Followers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;