import React from 'react';
import './Footer.css'; // Assurez-vous d'ajouter une feuille de style pour le design

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Reussitess30 — <a href="mailto:influenceur@reussitess.fr">influenceur@reussitess.fr</a> | © 2025 Reussitess Global Nexus</p>
                <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;