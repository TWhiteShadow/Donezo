import React from "react";
import { useNavigate } from 'react-router';
import { CheckCircle, Circle, Settings } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div
                        onClick={() => {
                            navigate('/', { replace: true });
                        }}
                        className="flex items-center cursor-pointer">
                        <h1 className="flex items-center text-2xl font-bold text-slate-800">
                            <CheckCircle className="w-8 h-8 mr-1" />
                            Donezo
                        </h1>
                    </div>
                    <div className="flex space-x-1 sm:space-x-4">
                        <button
                            onClick={() => {
                                navigate('/', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <Circle className="w-5 h-5 mr-1" />
                            Active Tasks
                        </button>
                        <button
                            onClick={() => {
                                navigate('/completed', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <CheckCircle className="w-5 h-5 mr-1" />
                            Completed
                        </button>
                        <button
                            onClick={() => {
                                navigate('/settings', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <Settings className="w-5 h-5 mr-1" />
                            Settings
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;