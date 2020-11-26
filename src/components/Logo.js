import React from 'react';

const Logo = () => {
    return (
        <div style={{ padding: 20, paddingLeft: 30 }}>
            <img
                src="https://i.ibb.co/z8bLGGB/logo.png"
                style={{
                    height: 50,
                    borderRadius: 100,
                    border: '1px solid',
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                }}
            />
        </div>
    );
};

export default Logo;
