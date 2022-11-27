import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import styles from './ReviewForm.module.css';
import {Input} from "../UI/Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../UI/Textarea/Textarea";
import {Button} from "../UI/Button/Button";
import CloseIcon from '../../public/close.svg';
import {useForm, Controller } from "react-hook-form";
import {IReviewForm} from "./ReviewForm.interface";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log('data', data);
    };

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
           <div
               className={cn(styles.reviewForm, className)}
               {...props}
           >
               <Input
                   {...register('name', {required: {value: true, message: 'Заполните имя'},})}
                   error={errors.name}
                   placeholder='Имя' />
               <Input {...register('title', {
                   required: {value: true, message: 'Заполните заголовок'}
               })}
                   error={errors.title}
                      placeholder='Заголовок отзыва'
                      className={styles.title}/>
               <div className={styles.rating}>
                   <span>Оценка:</span>
                   <Controller
                       control={control}
                       rules={{required: {value: true, message: 'Укажите рейтинг'}}}
                       render={({field}) => (
                           <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} error={errors.rating} />
                       )}
                       name='rating' />
               </div>
               <Textarea
                   {...register('description', {
                       required: {value: true, message: 'Текст отзыва является обязательным'}
                   })}
                         placeholder='Текст отзыва'
                         className={styles.description}
                   error={errors.description}
               />

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