import React from 'react';

const Image = () => {
    return (
        <div
            style={{
                padding: 20,
                maxWidth: 500,
                margin: '0 auto',
                border: '1px solid',
                position: 'relative',
                boxShadow: '5px 10px #888888',
            }}
        >
            <div
                title="Toto je náš úplne prvý produkt"
                style={{
                    position: 'absolute',
                    border: '1px solid',
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    top: -20,
                    left: -20,
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    lineHeight: 30,
                    fontSize: 30,
                }}
            >
                #1
            </div>
            <img
                src="https://i.ibb.co/JH5LK5t/122252776-192611835666450-2491408320776656204-n.jpg"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default Image;
