import * as React from 'react';
import { InputText } from './InputText';
import { InputTextArea } from './InputTextArea';
import { parseData } from './parseData';
import { useFormContext } from 'react-hook-form';

export const InputTextHookForm = (props) => {
    const { dv, ...others } = props;
    const { name, textarea } = others;

    const [previous, setPrevious] = React.useState(0);

    const { register, formState, errors, reset, setValue } = useFormContext();

    const error = parseData(errors, name);
    const touched = parseData(formState.touched, name);

    React.useEffect(() => {
        setTimeout(() => {
            if (dv) {
                Object.keys(dv).map((key) => setValue(key, dv[key]));
            }
        }, 0);
    }, [dv, setValue]);

    return textarea ? (
        <InputTextArea
            {...others}
            ref={register}
            error={error ? error.message : undefined}
            isTouched={touched ? true : false}
        />
    ) : (
        <InputText
            {...others}
            ref={register}
            error={error ? error.message : undefined}
            isTouched={touched ? true : false}
        />
    );
};
