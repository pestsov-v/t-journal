import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import styles from './ReviewForm.module.css';
import {Input} from "../UI/Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../UI/Textarea/Textarea";
import {Button} from "../UI/Button/Button";
import CloseIcon from '../../public/close.svg';
import {useForm ,Controller } from "react-hook-form";
import {IReviewForm} from "./ReviewForm.interface";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState} = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log('data', data);
    };

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <div
               className={cn(styles.reviewForm, className)}
               {...props}
           >
               <Input {...register('name')} placeholder='Имя' />
               <Input {...register('title')} placeholder='Заголовок отзыва' className={styles.title}/>
               <div className={styles.rating}>
                   <span>Оценка:</span>
                   <Controller
                       control={control}
                       render={({field}) => (
                           <Rating isEditable rating={field.value} setRating={field.onChange} />
                       )}
                       name='rating' />
               </div>
               <Textarea {...register('description')} placeholder='Текст отзыва' className={styles.description} />
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
       </form>
    );
};