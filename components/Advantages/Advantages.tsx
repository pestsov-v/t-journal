import {AdvantagesProps} from "./Advatanges.props";
import styles from './Advantages.module.css';
import CheckIcon from '../../public/check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a =>
                (<div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.line} />
                    <div>{a.description}</div>
                </div>)
            )}
        </>
    );
};