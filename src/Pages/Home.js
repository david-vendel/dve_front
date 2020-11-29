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
    }, []);

    const nastavit = () => {
        try {
            const x = imageRef.current.getBoundingClientRect().left;
            const y = imageRef.current.getBoundingClientRect().top;
            const w = imageRef.current.clientWidth;
            let h = imageRef.current.clientHeight;

            if (Math.abs(h - w) > 20) {
                h = w - 3;
            }

            console.log('w, h', w, h);
            props.value.setXHome(x);
            props.value.setYHome(y);
            props.value.setWHome(w);
            props.value.setHHome(h);
        } catch (e) {
            console.error('nastavit failed', e);
            // setTimeout(() => {
            //     nastavit();
            // }, 1000);
        }
    };

    // React.useEffect(() => {
    //     window.addEventListener('resize', nastavit);
    //     // Specify how to clean up after this effect:
    //     return function cleanup() {
    //         window.removeEventListener('resize', nastavit);
    //     };
    // }, []);

    React.useEffect(() => {
        const step = props.value.step;
        console.log('Obalka, props value step changed', step, typeof step);

        if (step === 3) {
            setObrazok(false);
        }

        if (step === 4) {
            setKupit(false);
            setVrch(false);
        }

        if (step === 5) {
            setTimeout(() => {
                props.value.setKosikPocet(props.value.kosikPocet + number);
            }, 1900);
        }

        if (step === 6) {
            // setKupit(true);
            // setVrch(true);
            setObrazok(true);
        }
    }, [props.value.step]);

    const startBuyProcess = () => {
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
        }, 4500);
        setTimeout(() => {
            props.value.setStep(6);
        }, 7100);
    };

    return (
        <div className="home">
            <div
                style={{ position: 'relative' }}
                className="homeImage"
                ref={imageRef}
            >
                <Image kupit={kupit} vrch={vrch} obrazok={obrazok} />
            </div>
            <div className="homeInfo">
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
                            startBuyProcess();
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
