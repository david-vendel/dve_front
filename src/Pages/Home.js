import React, { Component } from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';

const Home = () => {
    const [number, setNumber] = React.useState(1);
    const [kupit, setKupit] = React.useState(false);
    const [vrch, setVrch] = React.useState(false);
    const [poslat, setPoslat] = React.useState(false);

    return (
        <div className="home">
            <div style={{ width: 550, height: 550, position: 'relative' }}>
                <Image kupit={kupit} vrch={vrch} poslat={poslat} />
            </div>
            <div style={{ marginLeft: 20 }}>
                <div style={{ marginBottom: 20, fontSize: 25 }}>
                    Obrázok Dve Bodky: Mâm radšej teba
                </div>
                <div style={{ marginBottom: 20, fontSize: 20, color: '#777' }}>
                    Cena: 11€
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 65,
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => setNumber(Math.max(0, number - 1))}
                        style={{
                            fontSize: 31,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                    >
                        -
                    </Button>
                    <span
                        style={{
                            fontSize: 31,
                            padding: 20,
                        }}
                    >
                        {number}
                    </span>
                    <Button
                        variant="contained"
                        onClick={() => setNumber(number + 1)}
                        style={{ fontSize: 31 }}
                    >
                        +
                    </Button>
                </div>

                <div style={{ marginBottom: 20 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                            backgroundColor: 'green',
                            marginTop: 20,
                            fontSize: '1.5rem',
                        }}
                        onClick={() => {
                            setKupit(true);
                            setTimeout(() => {
                                setVrch(true);
                            }, 1000);
                            setTimeout(() => {
                                setPoslat(true);
                            }, 3500);
                        }}
                    >
                        Kúpiť
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
