import React from 'react';
import { withStackContext } from './../utils/StackProvider';

const ObalkaSpodok = (props) => {
    const w = props.value.wHome;
    const h = props.value.hHome;
    console.log('h', h);
    console.log('w', w);

    return (
        <div
            style={{
                width: w,
                position: 'absolute',
                top: -1,
                left: -1,
                height: h,
            }}
            className="obalka"
        >
            <div
                style={{
                    width: w,
                    position: 'absolute',
                    top: (w * 282) / 400,
                    left: -1,
                    height: h - (w * 282) / 400 + 20,
                    backgroundColor: 'white',
                }}
            ></div>
            <img
                src="https://i.ibb.co/VxV461m/obalka-spodok-transparent.png"
                style={{ width: '100%' }}
                alt=""
            />
        </div>
    );
};

export default withStackContext(ObalkaSpodok);
