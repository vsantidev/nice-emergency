

// Footer.jsx
import React from "react";
import logoCode4sud from "../assets/logo-code4sud.png";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm md:text-base text-center md:text-left">
                    &copy; 2024 Nice emergency. Tous droits réservés.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://code4sud.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={logoCode4sud} alt="Code4sud Logo" className="w-18 h-10 hover:opacity-80" />
                </a>
                </div>
            </div>
        </footer>
    );
}