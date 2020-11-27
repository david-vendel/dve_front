import React from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';
import { withStackContext } from './../utils/StackProvider';

const Home = (props) => {
    const imageRef = React.createRef();
    const [number, setNumber] = React.useState(1);
    const [kupit, setKupit] = React.useState(false);
    const [vrch, setVrch] = React.useState(false);
    const [poslat, setPoslat] = React.useState(false);

    React.useEffect(() => {
        nastavit();
    }, [imageRef]);

    const nastavit = () => {
        console.log(
            'imageRef',

            imageRef.current.offsetTop,
            imageRef.current.scrollTop,
            imageRef.current.getBoundingClientRect().top,
            imageRef.current.getBoundingClientRect().left
        );

        const x = imageRef.current.getBoundingClientRect().left;
        const y = imageRef.current.getBoundingClientRect().top;

        if (props.value.x !== x) props.value.setX(x);
        if (props.value.y !== y) props.value.setY(y);
    };

    const odoslat = () => {
        console.log('odoslat');
        props.value.setOdoslat(true);

        setTimeout(() => {
            setKupit(false);
            setVrch(false);
            setPoslat(false);
            setNumber(1);
        }, 1100);
    };

    return (
        <div className="home">
            <div
                style={{ width: 550, height: 550, position: 'relative' }}
                ref={imageRef}
            >
                <Image kupit={kupit} vrch={vrch} poslat={poslat} />
            </div>
            <div style={{ marginLeft: 20 }}>
                <div style={{ marginBottom: 20, fontSize: 25 }}>
                    Obrázok Dve Bodky: Mâm radšej teba
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        fontSize: 20,
                        color: '#777',
                    }}
                >
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
                            padding: 5,
                            minWidth: 40,
                        }}
                    >
                        -
                    </Button>
                    <span
                        style={{
                            fontSize: 30,
                            padding: 10,
                        }}
                    >
                        {number}
                    </span>
                    <Button
                        variant="contained"
                        onClick={() => setNumber(number + 1)}
                        style={{ padding: 5, minWidth: 40 }}
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
                            marginTop: 10,
                            fontSize: '1.5rem',
                        }}
                        onClick={() => {
                            setKupit(true);
                            setTimeout(() => {
                                setVrch(true);
                            }, 1000);
                            setTimeout(() => {
                                setPoslat(true);
                                odoslat();
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

export default withStackContext(Home);
