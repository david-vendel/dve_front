import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const Obalka = (props) => {
    const kosikRef = React.createRef();

    const [positionX, setPositionX] = React.useState(0);
    const [positionY, setPositionY] = React.useState(0);
    const [myWidth, setMyWidth] = React.useState(55);
    const [hidden, setHidden] = React.useState('hidden');
    const [stampWidth, setStampWidth] = React.useState('2000%');

    React.useEffect(() => {
        const step = props.value.step;
        console.log('Obalka, props value step changed', step, typeof step);

        if (step === 0) {
            setHidden('hidden');
        }
        if (step === 1) {
            setPositionX(props.value.xHome);
            setPositionY(props.value.yHome);
            setMyWidth(props.value.wHome);
        }
        if (step === 2) {
            setHidden('visible');
        }
        if (step === 3) {
            setStampWidth('26%');
        }
        if (step === 5) {
            setPositionX(props.value.xKosik);
            setPositionY(props.value.yKosik + window.pageYOffset);
            setMyWidth(55);
        }
        if (step === 6) {
            setHidden('hidden');
            setTimeout(() => {
                setStampWidth('2000%');
            }, 1000);
        }
    }, [props.value.step]);

    // React.useEffect(() => {
    //     if (props.value.odoslat) {
    //         console.log(
    //             'kosikRef',
    //             kosikRef.current.offsetTop,
    //             kosikRef.current.scrollTop,
    //             kosikRef.current.getBoundingClientRect().top,
    //             kosikRef.current.getBoundingClientRect().left
    //         );

    //         console.log('>>props.value', props.value);

    //         const newPositionLeft =
    //             props.value.x - kosikRef.current.getBoundingClientRect().left;
    //         const newPositionTop =
    //             props.value.y - kosikRef.current.getBoundingClientRect().top;

    //         console.log('newPositionLeft', newPositionLeft);
    //         if (
    //             props.value.x !== 0 &&
    //             props.value.y !== 0 &&
    //             newPositionLeft < 0
    //         ) {
    //             setPositionX(newPositionLeft);
    //             setPositionY(newPositionTop);
    //             setMyWidth(555);

    //             setTimeout(() => {
    //                 setHidden('visible');
    //             }, 1000);
    //             setTimeout(() => {
    //                 setPositionY(0);
    //                 setPositionX(0);
    //                 setMyWidth(55);
    //             }, 2000);
    //         }
    //     }
    // }, [kosikRef, props.value.y, props.value.x, props.value.odoslat]);

    return (
        <>
            <div
                ref={kosikRef}
                style={{
                    position: 'absolute',
                    left: positionX - 1,
                    top: positionY - 1,
                    width: myWidth,
                    visibility: hidden,
                    transition: 'all 1s ease',
                    transitionProperty: 'width, top, left',
                    zIndex: 100,
                    overflow: 'hidden',
                }}
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
                        width: stampWidth,
                        transition: 'all 1s ease',
                        transitionProperty: 'width, top, left',
                        opacity: 0.77,
                    }}
                />
            </div>
        </>
    );
};

export default withStackContext(Obalka);
