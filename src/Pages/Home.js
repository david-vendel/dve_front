import React from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';
import { withStackContext } from './../utils/StackProvider';

const Home = (props) => {
    const imageRef = React.createRef();
    const [number, setNumber] = React.useState(1);
    const [kupit, setKupit] = React.useState(false);
    const [vrch, setVrch] = React.useState(false);
    const [obrazok, setObrazok] = React.useState(true);

    React.useEffect(() => {
        nastavit();
    }, [imageRef.current]);

    const nastavit = () => {
        console.log('imageRef', imageRef);
        console.log(
            'HOME imageRef',

            imageRef.current.offsetTop,
            imageRef.current.scrollTop,
            imageRef.current.getBoundingClientRect().top,
            imageRef.current.getBoundingClientRect().left
        );

        const x = imageRef.current.getBoundingClientRect().left;
        const y = imageRef.current.getBoundingClientRect().top;

        props.value.setXHome(x);
        props.value.setYHome(y);
        // if (props.value.x !== x) props.value.setX(x);
        // if (props.value.y !== y) props.value.setY(y);
    };

    React.useEffect(() => {
        const step = props.value.step;
        console.log('Obalka, props value step changed', step, typeof step);

        if (step === 3) {
            setObrazok(false);
        }

        if (step === 4) {
            console.log('>>> step is 3', step);
            setKupit(false);
            setVrch(false);
        }

        if (step === 6) {
            // setKupit(true);
            // setVrch(true);
            setObrazok(true);
        }
    }, [props.value.step]);

    const startProcess = () => {
        setKupit(true);
        setTimeout(() => {
            setVrch(true);
            props.value.setStep(1);
        }, 1000);
        setTimeout(() => {
            props.value.setStep(2);
        }, 3000);
        setTimeout(() => {
            props.value.setStep(3);
        }, 3050);
        setTimeout(() => {
            props.value.setStep(4);
        }, 4050);
        setTimeout(() => {
            props.value.setStep(5);
        }, 5100);
        setTimeout(() => {
            props.value.setStep(6);
        }, 7100);
    };

    return (
        <div className="home">
            <div
                style={{ width: 550, height: 550, position: 'relative' }}
                ref={imageRef}
            >
                <Image kupit={kupit} vrch={vrch} obrazok={obrazok} />
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
                            startProcess();
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
