import * as React from 'react';

export const InputText = React.forwardRef((props, ref) => {
    const {
        name,
        value,
        onChange,
        label,
        error,
        isTouched,
        placeholder,
        height,
        onChangeValue,
        width,
        phone_prefix,
        ...rest
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

    // if (props.disabled) {
    //   return (
    //     <div className={formGroupClass.join(" ")}>
    //       {label ? (
    //         <label htmlFor={name} className="form-label">
    //           {label}
    //         </label>
    //       ) : null}
    //       <input
    //         {...rest}
    //         placeholder={placeholder}
    //         ref={ref}
    //         name={name}
    //         value={value}
    //         className={controlClass.join(" ")}
    //       />
    //       {error ? (
    //         <div className="invalid-feedback">{error}</div>
    //       ) : (
    //         <div className="no-feedback"></div>
    //       )}
    //     </div>
    //   );
    // }

    return (
        <div
            className={formGroupClass.join(' ')}
            style={width ? { width: width } : null}
        >
            {label ? (
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
            ) : null}
            <input
                {...rest}
                placeholder={placeholder}
                ref={ref}
                name={name}
                className={controlClass.join(' ')}
                onChange={(e) => {
                    onChangeValue &&
                        !props.disabled &&
                        onChangeValue(e.target.value);
                }}
                style={phone_prefix ? { paddingLeft: 43 } : {}}
            />
            {phone_prefix && (
                <div
                    style={{
                        position: 'absolute',
                        top: 38,
                        left: 10,
                        color: 'rgb(112, 112, 112)',
                        fontFamily: 'Arial',
                        fontSize: 13.3333,
                    }}
                >
                    +420
                </div>
            )}
            {error ? (
                <div className="invalid-feedback">{error}</div>
            ) : (
                <div className="no-feedback"></div>
            )}
        </div>
    );
});
