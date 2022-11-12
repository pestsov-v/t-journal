import cn from 'classnames'
import {TagProps} from "./Tag.props";
import styles from './Tag.module.css'

export const Tag = ({size, children, color = 'ghost', href,className, ...props}: TagProps) => {
    return (
        <div
            className={cn(styles.Tag, className, {
                [styles.s]: size === 'small',
                [styles.m]: size === 'middle',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
                [styles.primary]: color === 'primary',
                })
            }
            {...props}
        >{
            href ? <a href={href}>{children}</a> : <>{children}</>
        }
        </div>
    );
};