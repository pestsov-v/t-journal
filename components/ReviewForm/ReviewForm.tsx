import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import styles from './ReviewForm.module.css';
import {Input} from "../UI/Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../UI/Textarea/Textarea";
import {Button} from "../UI/Button/Button";
import CloseIcon from '../../public/close.svg'

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    return (
       <>
           <div
               className={cn(styles.reviewForm, className)}
               {...props}
           >
               <Input placeholder='Имя' />
               <Input placeholder='Заголовок отзыва' className={styles.title}/>
               <div className={styles.rating}>
                   <span>Оценка:</span>
                   <Rating rating={0} />
               </div>
               <Textarea placeholder='Текст отзыва' className={styles.description} />
               <div className={styles.submit}>
                   <Button appearance='primary'>Отправить</Button>
                   <span className={styles.info}>Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
               </div>
           </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо! Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.close} />
            </div>
       </>
    );
};