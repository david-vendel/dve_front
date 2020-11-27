import React from 'react';

const Vrch = () => {
    return (
        <div
            style={{
                width: 555,
                position: 'absolute',
                top: -5,
                left: -5,
                height: 600,
            }}
            className="imageMoveDown"
        >
            <img
                src="https://i.ibb.co/S7ZbF8K/obalka-vrch-transparent.png"
                style={{ width: '100%' }}
                className="imageSpin"
            />
        </div>
    );
};

export default Vrch;
