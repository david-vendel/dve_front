import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

export const Form = (props) => {
    const {
        defaultValues,
        validationSchema,
        onSubmit,
        children,
        className,
    } = props;

    const formMethods = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
        mode: 'onBlur',
    });

    const onSubmitInner = (values) => {
        onSubmit(values, formMethods.reset);
    };

    return (
        <FormProvider {...formMethods}>
            <form
                onSubmit={formMethods.handleSubmit(onSubmitInner)}
                className={className}
            >
                {children}
            </form>
        </FormProvider>
    );
};
