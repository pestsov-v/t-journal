import {SearchProps} from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import {Input} from "../../ui/Input/Input";
import {Button} from "../../ui/Button/Button";
import React, {KeyboardEvent} from "react";
import GlassIcon from '../../../public/search.svg';
import {useRouter} from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setState] = React.useState<string>('');
    const router = useRouter();

    const goToSearch = async () => {
        await router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = async (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            await goToSearch();
        }
    };


    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={e => setState(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon />
            </Button>
        </div>
    );
};