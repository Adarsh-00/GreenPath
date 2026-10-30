import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="px-6 py-4 bg-emerald-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                    <span className="text-2xl font-bold text-emerald-50">Green Path</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link to='/' className="text-emerald-100 hover:text-white transition-colors">Our Planet</Link>
                    <Link to="pollution" className="text-emerald-100 hover:text-white transition-colors">Hidden Killers</Link>
                    <Link to="history" className="text-emerald-100 hover:text-white transition-colors">Know Your Home</Link>
                    <Link to="about" className="text-emerald-100 hover:text-white transition-colors">About Us</Link>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors">
                    Join the Path
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
