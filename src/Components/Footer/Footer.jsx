import React from "react";
import { FaGithub } from "react-icons/fa"; // make sure you imported this
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2025 Edusity. All rights reserved.</p>

            {/* GitHub link */}
            <a
                href="https://github.com/Kartikey2427"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                <FaGithub className="text-xl" />Kartikey-24
            </a>

            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
};

export default Footer;
