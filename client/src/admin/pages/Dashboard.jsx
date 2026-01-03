import React, { useState } from 'react';
import { FiSearch, FiHome, FiFileText, FiGrid, FiMessageSquare, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import Mains from '../Mains';
import Blogs from '../BlogManagment';
import Categories from '../Categories';
import Comments from '../Comments';
import Settings from '../Settings';
import Users from '../Users';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

export default function Dashboard() {
    const [activePage, setActivePage] = useState('home');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { user, logout } = useContext(AuthContext);

    const renderComponent = () => {
        switch (activePage) {
            case 'home': return <Mains />;
            case 'blogs': return <Blogs />;
            case 'categories': return <Categories />;
            case 'comments': return <Comments />;
            case 'users': return <Users />;
            case 'settings': return <Settings />;
            default: return <Mains />;
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: <FiHome /> },
        { id: 'blogs', label: 'Blogs', icon: <FiFileText /> },
        { id: 'categories', label: 'Categories', icon: <FiGrid /> },
        { id: 'comments', label: 'Comments', icon: <FiMessageSquare /> },
        { id: 'users', label: 'Users', icon: <FiUsers /> },
        { id: 'settings', label: 'Settings', icon: <FiSettings /> },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-100 overflow-hidden">

            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white text-orange-500 h-full transition-all duration-300 flex flex-col shadow-2xl`}>
                <div className="p-5 font-bold tracking-wide text-xl border-b border-orange-500">{sidebarOpen ? 'Admin Panel' : 'AP'}</div>

                <ul className="flex-1 mt-4 space-y-2">
                    {navItems.map(item => (
                        <li key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={`flex items-center space-x-3 px-5 py-3 cursor-pointer hover:bg-blue-800 transition text-sm ${activePage === item.id ? 'bg-orange-500 text-white' : ''}`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {sidebarOpen && <span>{item.label}</span>}
                        </li>
                    ))}
                </ul>

                <div className="p-5 border-t border-orange-500 flex items-center space-x-3 cursor-pointer hover:bg-blue-800 transition">
                    <FiLogOut className="text-lg" />
                    {sidebarOpen && <span onClick={() => logout()}>Logout</span>}
                </div>
            </div>

            {/* Main Section */}
            <div className="flex-1 flex flex-col">

                {/* Topbar */}
                <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
                    <button
                        className="text-blue-900 text-xl"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none text-sm w-32 md:w-56"
                            />
                            <FiSearch className="text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6 overflow-y-auto h-full">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}