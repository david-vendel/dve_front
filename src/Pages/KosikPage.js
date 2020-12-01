import React from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';
import { withStackContext } from '../utils/StackProvider';
import { Form } from './../utils/Form';
import { InputTextHookForm } from './../utils/InputTextHookForm';
import yup from '../utils/yup/yup';
import DeleteIcon from '@material-ui/icons/Delete';

const FORM_VALIDATION = yup.object().shape({
    name: yup.string().required(),
});

const KosikPage = (props) => {
    const changeKosikPocet = (n) => {
        props.value.setKosikPocet(n);
        props.value.setKosikCena(20 * n);
    };

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <>
            <div>
                <h1>Tvoja objednávka</h1>
            </div>
            <div>
                <div>
                    <h3>
                        {props.value.kosikPocet}x Obrázok Dve Bodky: Mám radšej
                        teba {props.value.kosikCena}€
                    </h3>
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
                        onClick={() =>
                            changeKosikPocet(
                                Math.max(0, props.value.kosikPocet - 1)
                            )
                        }
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
                        {props.value.kosikPocet}
                    </span>
                    <Button
                        variant="contained"
                        onClick={() =>
                            changeKosikPocet(props.value.kosikPocet + 1)
                        }
                        style={{ padding: 5, minWidth: 40 }}
                    >
                        +
                    </Button>

                    <div
                        style={{
                            marginLeft: 10,
                            marginTop: 3,
                            cursor: 'pointer',
                        }}
                        title="Odstrániť"
                        onClick={() => {
                            changeKosikPocet(0);
                        }}
                    >
                        <DeleteIcon style={{ color: '#999' }} />
                    </div>
                </div>

                <Form
                    className={'form'}
                    defaultValues={{ name: 'meno' }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(data) => {
                        onSubmit(data);
                    }}
                >
                    <InputTextHookForm name="name" label={'name'} />
                </Form>
            </div>
        </>
    );
};

export default withStackContext(KosikPage);
