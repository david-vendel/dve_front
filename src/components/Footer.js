import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div
            className="footer"
            style={{
                padding: 30,
                borderTop: '1px solid',
                backgroundColor: '#ECEBE9',
            }}
        >
            <Link to="/obchodne-podmienky" className="legalneVeci">
                Obchodné podmienky
            </Link>
        </div>
    );
};

export default Footer;
