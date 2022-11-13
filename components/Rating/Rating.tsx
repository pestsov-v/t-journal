import React, {useEffect} from "react";
import styles from './Rating.module.css';
import {RatingProps} from "./Rating.props";
import StarIcon from '../../public/star.svg';
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRatings(rating);
    }, [rating]);

    const constructRatings = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i) => {
            return (
                <StarIcon className={cn(styles.start, {
                    [styles.filled]: i < currentRating
                    })
                } />
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};