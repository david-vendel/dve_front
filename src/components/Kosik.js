import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const Kosik = (props) => {
    const imageRef = React.createRef();
    const [hidden, setHidden] = React.useState('hidden');
    const [topPosition, setTopPosition] = React.useState(0);
    const [leftPosition, setLeftPosition] = React.useState(0);

    React.useEffect(() => {
        nastavit();
    }, [imageRef.current]);

    const nastavit = () => {
        try {
            console.log(
                'KOSIK imageRef',

                imageRef.current.offsetTop,
                imageRef.current.scrollTop,
                imageRef.current.getBoundingClientRect().top,
                imageRef.current.getBoundingClientRect().left
            );

            const x = imageRef.current.getBoundingClientRect().left;
            const y = imageRef.current.getBoundingClientRect().top;

            props.value.setXKosik(x);
            props.value.setYKosik(y);
        } catch (e) {
            console.error(e);
            setTimeout(() => {
                nastavit();
            }, 1000);
        }
    };

    React.useEffect(() => {
        const step = props.value.step;
        console.log('Kosik, props value step changed', step, typeof step);

        if (step === 5) {
            setTimeout(() => {
                // setPositionX(props.value.xKosik + 14);
                // setPositionY(props.value.yKosik + window.pageYOffset + 30);
                // setMyWidth(40);
                setHidden('visible');
                setLeftPosition(30);
                setTopPosition(25);
            }, 1000);
        }
        if (step === 6) {
            setTimeout(() => {
                setHidden('hidden');
                setLeftPosition(0);
                setTopPosition(0);
            }, 1000);
        }
    }, [props.value.step]);

    return (
        <div className="kosikDiv" ref={imageRef}>
            <img
                src="https://i.ibb.co/hsxnGgt/basket-front-transparent.png"
                className="kosikImgFront"
                style={{ zIndex: 2 }}
            ></img>

            {props.value.kosikPocet ? (
                <div style={{ position: 'absolute' }} className="kosikPocet">
                    {props.value.kosikPocet}
                </div>
            ) : null}

            <div
                style={{
                    position: 'absolute',
                    width: 55,
                    zIndex: 1,
                    visibility: props.value.kosikPocet ? 'visible' : 'hidden',
                    top: 25,
                    left: 30,
                    transition: 'all 1s ease',
                    transitionProperty: 'width, top, left',
                }}
                className="obalkaVKosiku"
            >
                <img
                    src="https://i.ibb.co/zHBqFs4/Kuvert-C6-114x162-mm-Frp-med-5-st-Natur-Local-Caption-Kuvert-C6-114x162-mm-Frp-med-5-st-Natur.jpg"
                    style={{ width: '100%' }}
                    alt=""
                />

                <img
                    src="https://www.nicepng.com/png/full/100-1006778_seal-of-approval-png.png"
                    style={{
                        position: 'absolute',
                        left: '38%',
                        top: '50%',
                        width: '26%',
                        transition: 'all 1s ease',
                        transitionProperty: 'width, top, left',
                        opacity: 0.47,
                    }}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    width: 55,
                    zIndex: 1,
                    visibility: hidden,
                    top: topPosition,
                    left: leftPosition,
                    transition: 'all 1s ease',
                    transitionProperty: 'width, top, left',
                }}
                className="obalkaVKosiku"
            >
                <img
                    src="https://i.ibb.co/zHBqFs4/Kuvert-C6-114x162-mm-Frp-med-5-st-Natur-Local-Caption-Kuvert-C6-114x162-mm-Frp-med-5-st-Natur.jpg"
                    style={{ width: '100%' }}
                    alt=""
                />

                <img
                    src="https://www.nicepng.com/png/full/100-1006778_seal-of-approval-png.png"
                    style={{
                        position: 'absolute',
                        left: '38%',
                        top: '50%',
                        width: '26%',
                        transition: 'all 1s ease',
                        transitionProperty: 'width, top, left',
                        opacity: 0.77,
                    }}
                />
            </div>
            <img
                src="https://i.ibb.co/B61Zck9/basket.png"
                className="kosikImg"
                style={{ zIndex: 0 }}
            ></img>
        </div>
    );
};

export default withStackContext(Kosik);
