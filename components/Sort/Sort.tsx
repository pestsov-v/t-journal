import {SortKind, SortProps} from "./Sort.props";
import styles from './Sort.module.css';
import SortIcon from '../../public/sort.svg';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortKind.Rating)}
                className={cn({
                    [styles.active]: sort === SortKind.Rating
                })}
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </span>
            <span
                onClick={() => setSort(SortKind.Price)}
                className={cn({
                    [styles.active]: sort === SortKind.Price
                })}
            >
                <SortIcon className={styles.sortIcon} />По цене
            </span>
        </div>
    );
};