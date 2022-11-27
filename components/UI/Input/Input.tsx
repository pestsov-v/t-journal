import {InputProps} from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';
import React, {ForwardedRef} from "react";

export const Input = React.forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input className={cn(styles.input, {
                [styles.error]: error
            })} ref={ref} {...props} />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>

    );
});