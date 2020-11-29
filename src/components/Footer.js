import React from 'react';
import { Link } from 'react-router-dom';
import { withStackContext } from './../utils/StackProvider';

const Footer = (props) => {
    console.log('props', props);

    const step = props.value.step;
    const setStep = props.value.setStep;

    return (
        <div
            className="footer"
            style={{
                padding: 30,
                borderTop: '1px solid',
                backgroundColor: '#ECEBE9',
                display: 'flex',
            }}
        >
            <Link to="/obchodne-podmienky" className="legalneVeci">
                Obchodné podmienky
            </Link>

            {/* <button
                onClick={() => {
                    setStep(0);
                }}
            >
                reset
            </button>
            <div style={{ padding: 20 }}>{step}</div>
            <button
                onClick={() => {
                    setStep(step + 1);
                }}
            >
                next
            </button> */}
        </div>
    );
};

export default withStackContext(Footer);
