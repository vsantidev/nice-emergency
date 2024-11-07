

// Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm md:text-base text-center md:text-left">
                    &copy; 2024 Nice emergency. Tous droits réservés.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                </div>
            </div>
        </footer>
    );
}