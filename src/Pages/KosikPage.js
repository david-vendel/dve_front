import React from 'react';
import Image from '../components/Image';
import Button from '@material-ui/core/Button';
import { withStackContext } from '../utils/StackProvider';
import { Form } from './../utils/Form';
import { InputTextHookForm } from './../utils/InputTextHookForm';
import yup from '../utils/yup/yup';

const FORM_VALIDATION = yup.object().shape({
    name: yup.string().required(),
});

const KosikPage = (props) => {
    return (
        <>
            <div className="kosik">Kosik</div>

            <Form
                className={'form'}
                defaultValues={{ name: 'meno' }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(data) => {}}
            >
                <InputTextHookForm name="name" label={'name'} />
            </Form>
        </>
    );
};

export default KosikPage;
