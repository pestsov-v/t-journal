import {InputProps} from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';
import React, {ForwardedRef} from "react";

export const Input = React.forwardRef(({className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} ref={ref} {...props} />
    );
});