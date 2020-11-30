import * as React from 'react';

export const InputTextArea = React.forwardRef((props, ref) => {
    const {
        name,
        onChangeValue,
        label,
        error,
        isTouched,
        placeholder,
        height,
    } = props;

    let controlClass = ['form-control'];
    let formGroupClass = ['form-group'];
    if (isTouched) {
        formGroupClass.push('was-validated');
        if (error) {
            controlClass.push('invalid');
        } else {
            controlClass.push('valid');
        }
    }
    if (height && height === 50) {
        controlClass.push('height-50');
    }
    if (height && height === 100) {
        controlClass.push('height-100');
    }

    return (
        <div className={formGroupClass.join(' ')}>
            {label ? (
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
            ) : null}
            <textarea
                placeholder={placeholder}
                ref={ref}
                name={name}
                className={controlClass.join(' ')}
                onChange={(e) => {
                    onChangeValue && onChangeValue(e.target.value);
                }}
            />
            {error ? (
                <div className="invalid-feedback">{error}</div>
            ) : (
                <div className="no-feedback"></div>
            )}
        </div>
    );
});
