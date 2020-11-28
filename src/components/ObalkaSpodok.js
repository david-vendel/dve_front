import React from 'react';

const ObalkaSpodok = () => {
    return (
        <div
            style={{
                width: 550,
                position: 'absolute',
                top: -1,
                left: -1,
                height: 600,
            }}
            className="obalka"
        >
            <img
                src="https://i.ibb.co/VxV461m/obalka-spodok-transparent.png"
                style={{ width: '100%' }}
                alt=""
            />
            <div
                style={{
                    width: 550,
                    position: 'absolute',
                    top: 388,
                    left: -1,
                    height: 600,
                    backgroundColor: 'white',
                }}
            ></div>
        </div>
    );
};

export default ObalkaSpodok;
