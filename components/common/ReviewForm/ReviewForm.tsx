import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import styles from './ReviewForm.module.css';
import {Input} from "../../ui/Input/Input";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../../ui/Textarea/Textarea";
import {Button} from "../../ui/Button/Button";
import CloseIcon from '../../../public/close.svg';
import {useForm, Controller } from "react-hook-form";
import {IReviewForm, IReviewResponse} from "./ReviewForm.interface";
import axios from "axios";
import api from "../../../helpers/api";
import React from "react";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewResponse>(api.REVIEW.CREATE_DEMO, {...formData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e: any) {
            setError(e.message);
        }
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
           {isSuccess && <div className={cn(styles.success, styles.panel)}>
               <div className={styles.successTitle}>Ваш отзыв отправлен</div>
               <div>Спасибо! Ваш отзыв будет опубликован после проверки</div>
               <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
           </div>}
           {error && <div className={cn(styles.error, styles.panel)}>
               Что-то пошло не так...Попробуйте обновить страницу
               <CloseIcon className={styles.close}  onClick={() => setError(undefined)}/>
           </div>}
       </form>
    );
};