import React from "react";
import { useNavigate } from 'react-router';
import { CheckCircle, Circle, Settings } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-secondary shadow-sm">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div
                        onClick={() => {
                            navigate('/', { replace: true });
                        }}
                        className="flex items-center cursor-pointer">
                        <h1 className="flex items-center text-2xl font-bold">
                            <CheckCircle className="w-8 h-8 mr-1" />
                            <span>Donezo</span>
                        </h1>
                    </div>
                    <div className="flex space-x-1 sm:space-x-4">
                        <button
                            onClick={() => {
                                navigate('/', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium">
                            <Circle className="w-5 h-5 sm:mr-1" />
                            <span className="hidden sm:inline">Active Tasks</span>
                        </button>
                        <button
                            onClick={() => {
                                navigate('/completed', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium">
                            <CheckCircle className="w-5 h-5 sm:mr-1" />
                            <span className="hidden sm:inline">Completed</span>
                        </button>
                        <button
                            onClick={() => {
                                navigate('/settings', { replace: true });
                            }}
                            className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium">
                            <Settings className="w-5 h-5 sm:mr-1" />
                            <span className="hidden sm:inline">Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;