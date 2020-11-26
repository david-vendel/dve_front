import Confetti from 'react-dom-confetti';
import React from 'react';

const ConfettyComponent = ({}) => {
    const [someProp, setSomeProp] = React.useState(false);

    setTimeout(() => {
        setSomeProp(true);
    }, 3000);

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
    // return (
    //     <div style={{ backgroundColor: 'red', width: 10, height: 10 }}>xxx</div>
    // );
    return <Confetti active={someProp} config={config} />;
};

export default ConfettyComponent;
