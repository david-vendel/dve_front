import React from 'react';

const ObalkaSpodok = () => {
    return (
        <div
            style={{
                width: 555,
                position: 'absolute',
                top: -5,
                left: -5,
                height: 600,
            }}
            className="obalka"
        >
            <img
                src="https://i.ibb.co/VxV461m/obalka-spodok-transparent.png"
                style={{ width: '100%' }}
            />
            <div
                style={{
                    width: 555,
                    position: 'absolute',
                    top: 391,
                    left: 0,
                    height: 600,
                    backgroundColor: 'white',
                }}
            ></div>
        </div>
    );
};

export default ObalkaSpodok;
