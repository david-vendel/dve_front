import React from 'react';
import ObalkaSpodok from './ObalkaSpodok';
import Vrch from '../components/Vrch';

const Image = ({ kupit, vrch, obrazok }) => {
    const [opacity, setOpacity] = React.useState(1);

    // React.useEffect(() => {
    //     if (poslat) {
    //         console.log('IMAGE poslat');
    //         setTimeout(() => {
    //             setOpacity(0);
    //         }, 1100);

    //         setTimeout(() => {
    //             setOpacity(1);
    //         }, 3100);
    //     }
    // }, [poslat]);

    console.log('image', kupit, vrch);
    // if (hidden === 'hidden') {
    //     return null;
    // }

    React.useEffect(() => {
        setOpacity(obrazok ? 1 : 0);
    }, [obrazok]);
    return (
        <div
            style={{
                opacity: opacity,
                transition: 'all 1s ease',
            }}
        >
            <div
                style={{
                    padding: 20,
                    marginRight: 7,
                    maxWidth: 500,
                    border: '1px solid',
                    // position: 'absolute',
                    // top: 0,
                    // right: 0,
                    boxShadow: '5px 10px #888888',
                }}
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
                    alt=""
                />
            </div>

            {kupit && <ObalkaSpodok />}
            {vrch && <Vrch />}
        </div>
    );
};

export default Image;
