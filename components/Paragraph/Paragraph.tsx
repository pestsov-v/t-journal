import {ParagraphProps} from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({size = 'middle', children, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p className={
            cn(styles.p, className, {
                [styles.small]: size === 'small',
                [styles.middle]: size === 'middle',
                [styles.big]: size === 'big'
            })
        }
           {...props}>
            {children}
        </p>
    );
};