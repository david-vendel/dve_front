import React from 'react';

const Vrch = () => {
    return (
        <div
            style={{
                width: 550,
                position: 'absolute',
                top: -1,
                left: -1,
                height: 600,
            }}
            className="imageMoveDown"
        >
            <img
                src="https://i.ibb.co/S7ZbF8K/obalka-vrch-transparent.png"
                style={{ width: '100%' }}
                className="imageSpin"
                alt=""
            />
        </div>
    );
};

export default Vrch;
