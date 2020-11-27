import React from 'react';
import ObalkaSpodok from './ObalkaSpodok';
import Vrch from '../components/Vrch';

const Image = ({ kupit, vrch, poslat }) => {
    return (
        <div
            style={
                poslat
                    ? {}
                    : {
                          padding: 20,
                          marginRight: 20,
                          maxWidth: 500,
                          border: '1px solid',
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          boxShadow: '5px 10px #888888',
                      }
            }
        >
            <div
                title="Toto je náš úplne prvý produkt"
                style={
                    kupit
                        ? {
                              position: 'absolute',
                              border: '1px solid',
                              borderRadius: 50,
                              width: 50,
                              height: 50,
                              top: 260,
                              left: 244,
                              backgroundColor: 'white',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              lineHeight: 30,
                              fontSize: 30,
                              transition: 'all 1.5s ease',
                          }
                        : {
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
                              transition: 'all 1.5s ease',
                          }
                }
            >
                #1
            </div>
            <img
                src="https://i.ibb.co/JH5LK5t/122252776-192611835666450-2491408320776656204-n.jpg"
                style={{ width: '100%' }}
            />

            {kupit && <ObalkaSpodok />}
            {vrch && <Vrch />}
        </div>
    );
};

export default Image;
