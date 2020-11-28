import Confetti from 'react-dom-confetti';
import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const ConfettyComponent = (props) => {
    const [start, setStart] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setStart(true);
        }, 3000);
        setTimeout(() => {
            setStart(false);
        }, 3100);
    }, []);

    React.useEffect(() => {
        const step = props.value.step;
        console.log('Confetty', step, typeof step);

        if (step === 4) {
            setTimeout(() => {
                setStart(true);
            }, 500);
            setTimeout(() => {
                setStart(false);
            }, 800);
        }
    }, [props.value.step]);

    const config = {
        angle: '222',
        spread: 360,
        startVelocity: '18',
        elementCount: '80',
        dragFriction: '0.09',
        duration: '4650',
        stagger: '6',
        width: '10px',
        height: '10px',
        perspective: '904px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };
    return <Confetti active={start} config={config} />;
};

export default withStackContext(ConfettyComponent);
