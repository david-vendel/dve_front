import React, { Component } from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';

const Home = () => {
    const [kupit, setKupit] = React.useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image kupit={kupit} />
            <div>
                <div style={{ marginBottom: 20 }}>Cena: 11e</div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setKupit(true);
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
