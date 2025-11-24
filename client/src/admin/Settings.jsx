import React, { useState } from 'react';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        // General Settings
        siteTitle: 'My Awesome Blog',
        siteDescription: 'A blog about technology and programming',
        siteUrl: 'https://myblog.com',
        adminEmail: 'admin@myblog.com',
        timezone: 'UTC+5',
        dateFormat: 'MMMM DD, YYYY',

        // Writing Settings
        defaultCategory: 'technology',
        defaultPostStatus: 'published',
        enableComments: true,
        commentApproval: true,

        // Reading Settings
        postsPerPage: 10,
        showFullPosts: false,
        enableRSS: true,

        // Discussion Settings
        allowRegistration: true,
        userCanComment: true,
        closeCommentsAfter: 30,

        // Media Settings
        thumbnailSize: 'medium',
        maxFileSize: 2,
        allowedFileTypes: ['jpg', 'png', 'gif', 'pdf'],

        // SEO Settings
        metaDescription: '',
        enableSitemap: true,
        googleAnalytics: '',

        // Security Settings
        loginAttempts: 5,
        lockoutDuration: 30,
        enable2FA: false
    });

    const handleInputChange = (section, field, value) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleToggle = (field) => {
        setSettings(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSaveSettings = () => {
        // Here you would typically make an API call to save settings
        alert('Settings saved successfully!');
    };

    const handleResetSettings = () => {
        if (window.confirm('Are you sure you want to reset all settings to default?')) {
            // Reset logic would go here
            alert('Settings reset to default values!');
        }
    };

    const tabs = [
        { id: 'general', label: 'General', icon: 'fas fa-cog' },
        { id: 'writing', label: 'Writing', icon: 'fas fa-edit' },
        { id: 'reading', label: 'Reading', icon: 'fas fa-book' },
        { id: 'discussion', label: 'Discussion', icon: 'fas fa-comments' },
        { id: 'media', label: 'Media', icon: 'fas fa-image' },
        { id: 'seo', label: 'SEO', icon: 'fas fa-chart-line' },
        { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                    <p className="text-gray-600 mt-2">Configure your blog settings and preferences</p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-64 bg-gray-50 border-r border-gray-200">
                            <div className="p-6">
                                <nav className="space-y-2">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === tab.id
                                                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <i className={`${tab.icon} w-5`}></i>
                                            <span className="font-medium">{tab.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Settings Content */}
                        <div className="flex-1 p-6">
                            {/* Tab Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 capitalize">
                                        {tabs.find(tab => tab.id === activeTab)?.label} Settings
                                    </h2>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Configure your {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} preferences
                                    </p>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={handleResetSettings}
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Reset to Default
                                    </button>
                                    <button
                                        onClick={handleSaveSettings}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center transition-colors"
                                    >
                                        <i className="fas fa-save mr-2"></i>
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Settings Forms */}
                            <div className="space-y-6">
                                {/* General Settings */}
                                {activeTab === 'general' && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Site Title
                                                </label>
                                                <input
                                                    type="text"
                                                    value={settings.siteTitle}
                                                    onChange={(e) => handleInputChange('general', 'siteTitle', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Site Description
                                                </label>
                                                <input
                                                    type="text"
                                                    value={settings.siteDescription}
                                                    onChange={(e) => handleInputChange('general', 'siteDescription', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Site URL
                                                </label>
                                                <input
                                                    type="url"
                                                    value={settings.siteUrl}
                                                    onChange={(e) => handleInputChange('general', 'siteUrl', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Admin Email
                                                </label>
                                                <input
                                                    type="email"
                                                    value={settings.adminEmail}
                                                    onChange={(e) => handleInputChange('general', 'adminEmail', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Timezone
                                                </label>
                                                <select
                                                    value={settings.timezone}
                                                    onChange={(e) => handleInputChange('general', 'timezone', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="UTC+5">UTC+5 (Pakistan Standard Time)</option>
                                                    <option value="UTC+0">UTC+0 (GMT)</option>
                                                    <option value="UTC-5">UTC-5 (EST)</option>
                                                    <option value="UTC-8">UTC-8 (PST)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Date Format
                                                </label>
                                                <select
                                                    value={settings.dateFormat}
                                                    onChange={(e) => handleInputChange('general', 'dateFormat', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="MMMM DD, YYYY">January 15, 2024</option>
                                                    <option value="DD/MM/YYYY">15/01/2024</option>
                                                    <option value="MM/DD/YYYY">01/15/2024</option>
                                                    <option value="YYYY-MM-DD">2024-01-15</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Writing Settings */}
                                {activeTab === 'writing' && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Default Category
                                                </label>
                                                <select
                                                    value={settings.defaultCategory}
                                                    onChange={(e) => handleInputChange('writing', 'defaultCategory', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="technology">Technology</option>
                                                    <option value="lifestyle">Lifestyle</option>
                                                    <option value="travel">Travel</option>
                                                    <option value="food">Food</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Default Post Status
                                                </label>
                                                <select
                                                    value={settings.defaultPostStatus}
                                                    onChange={(e) => handleInputChange('writing', 'defaultPostStatus', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="published">Published</option>
                                                    <option value="draft">Draft</option>
                                                    <option value="pending">Pending Review</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Enable Comments</h4>
                                                    <p className="text-sm text-gray-600">Allow visitors to comment on posts</p>
                                                </div>
                                                <button
                                                    onClick={() => handleToggle('enableComments')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.enableComments ? 'bg-blue-600' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.enableComments ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Comment Approval</h4>
                                                    <p className="text-sm text-gray-600">Require admin approval for comments</p>
                                                </div>
                                                <button
                                                    onClick={() => handleToggle('commentApproval')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.commentApproval ? 'bg-blue-600' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.commentApproval ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Reading Settings */}
                                {activeTab === 'reading' && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Posts Per Page
                                            </label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="50"
                                                value={settings.postsPerPage}
                                                onChange={(e) => handleInputChange('reading', 'postsPerPage', parseInt(e.target.value))}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Show Full Posts</h4>
                                                    <p className="text-sm text-gray-600">Display full content instead of excerpts</p>
                                                </div>
                                                <button
                                                    onClick={() => handleToggle('showFullPosts')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.showFullPosts ? 'bg-blue-600' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.showFullPosts ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Enable RSS Feed</h4>
                                                    <p className="text-sm text-gray-600">Generate RSS feed for your blog</p>
                                                </div>
                                                <button
                                                    onClick={() => handleToggle('enableRSS')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.enableRSS ? 'bg-blue-600' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.enableRSS ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Add more tabs for Discussion, Media, SEO, Security */}
                                {['discussion', 'media', 'seo', 'security'].includes(activeTab) && (
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 mb-4">
                                            <i className="fas fa-cogs text-6xl"></i>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                            {tabs.find(tab => tab.id === activeTab)?.label} Settings
                                        </h3>
                                        <p className="text-gray-500">
                                            Configuration options for {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} are coming soon.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}