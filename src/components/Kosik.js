import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const Kosik = (props) => {
    const imageRef = React.createRef();

    React.useEffect(() => {
        nastavit();
    }, [imageRef.current]);

    const nastavit = () => {
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
        // if (props.value.x !== x) props.value.setX(x);
        // if (props.value.y !== y) props.value.setY(y);
    };

    return (
        <div style={{ position: 'absolute', top: 30 }} ref={imageRef}>
            Košík
        </div>
    );
};

export default withStackContext(Kosik);
