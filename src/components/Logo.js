import React from 'react';
import ConfettyComponent from './Confetty';

const Logo = () => {
    return (
        <div
            className="circle"
            style={{
                padding: 20,
                position: 'absolute',
                top: 0,
                width: 102,
                height: 102,
            }}
        >
            <img
                src="https://i.ibb.co/z8bLGGB/logo.png"
                style={{
                    height: 100,
                    borderRadius: 100,
                    border: '1px solid',
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                }}
                alt=""
            />

            <div style={{ position: 'absolute', bottom: 90, right: 60 }}>
                <ConfettyComponent />
            </div>
        </div>
    );
};

export default Logo;
