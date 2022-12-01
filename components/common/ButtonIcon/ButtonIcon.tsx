import {ButtonIconProps, icons} from "./ButtonIcon.props";
import styles from './ButtonIcon.module.css';
import cn from "classnames";

export const ButtonIcon = ({appearance, icon, className, ...props}: ButtonIconProps) => {
    const IconsComponent = icons[icon]

    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white'
        })}
                {...props}
        >
            <IconsComponent />
        </button>
    )
}