import React, {useEffect, KeyboardEvent, forwardRef, ForwardedRef} from "react";
import styles from './Rating.module.css';
import {RatingProps} from "./Rating.props";
import StarIcon from '../../../public/star.svg';
import cn from 'classnames';

export const Rating = forwardRef(({isEditable = false, rating, error, setRating, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRatings(rating);
    }, [rating]);

    const constructRatings = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i) => {
            return (
                <span  className={cn(styles.start, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                    })
                }
                   onMouseEnter = {() => changeDisplay(i + 1)}
                   onMouseLeave = {() => changeDisplay(rating)}
                   onClick = {() => onClick(i + 1)}>
                    <StarIcon
                          tabIndex = {isEditable ? 0: -1}
                          onKeyDown={(e: KeyboardEvent<SVGElement>) => {
                              isEditable && handleSpace(i + 1, e);
                          }}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRatings(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })}
        >
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});