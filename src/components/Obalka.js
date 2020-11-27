import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const Obalka = (props) => {
    const kosikRef = React.createRef();

    const [positionX, setPositionX] = React.useState(0);
    const [positionY, setPositionY] = React.useState(0);
    const [myWidth, setMyWidth] = React.useState(55);
    const [hidden, setHidden] = React.useState('hidden');

    React.useEffect(() => {
        if (props.value.odoslat) {
            console.log(
                'kosikRef',
                kosikRef.current.offsetTop,
                kosikRef.current.scrollTop,
                kosikRef.current.getBoundingClientRect().top,
                kosikRef.current.getBoundingClientRect().left
            );

            console.log('>>props.value', props.value);

            const newPositionLeft =
                props.value.x - kosikRef.current.getBoundingClientRect().left;
            const newPositionTop =
                props.value.y - kosikRef.current.getBoundingClientRect().top;

            console.log('newPositionLeft', newPositionLeft);
            if (
                props.value.x !== 0 &&
                props.value.y !== 0 &&
                newPositionLeft < 0
            ) {
                setPositionX(newPositionLeft);
                setPositionY(newPositionTop);
                setMyWidth(555);

                setTimeout(() => {
                    setHidden('visible');
                }, 1000);
                setTimeout(() => {
                    setPositionY(0);
                    setPositionX(0);
                    setMyWidth(55);
                }, 2000);
            }
        }
    }, [kosikRef, props.value.y, props.value.x, props.value.odoslat]);

    return (
        <div
            className="obalkaKosik"
            ref={kosikRef}
            style={{
                left: positionX,
                top: positionY,
                width: myWidth,
                visibility: hidden,
                transition: 'all 1s ease',
            }}
        >
            <img
                src="https://i.ibb.co/zHBqFs4/Kuvert-C6-114x162-mm-Frp-med-5-st-Natur-Local-Caption-Kuvert-C6-114x162-mm-Frp-med-5-st-Natur.jpg"
                style={{ width: '100%' }}
                alt=""
            />
        </div>
    );
};

export default withStackContext(Obalka);
