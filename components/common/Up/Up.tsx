import styles from './Up.module.css';
import UpIcon from '../../../public/up-arrow.svg';
import {useScrollY} from "../../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
import {useEffect} from "react";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        control.start({opacity: y / document.body.scrollHeight}).catch(e => console.log(e));
    }, [y, control]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <motion.div
            className={styles.up}
            animate={control}
            initial={{opacity: 0}}
        >
            <ButtonIcon appearance='primary' icon='Up' onClick={scrollToTop} />
        </motion.div>
    );
};