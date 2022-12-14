import TopPageComponentProps from "./TopPageComponent.props";
import {Advantages, HhData, HTag, Product, Sort, Tag} from "../../components";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortKind} from "../../components/common/Sort/Sort.props";
import React, {useEffect} from "react";
import {sortReducer} from "../../reducers/sort.reducer";
import {useScrollY} from "../../hooks/useScrollY";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = React.useReducer(sortReducer, {products, sort: SortKind.Rating});
    const y = useScrollY();

    const setSort = (sort: SortKind) => dispatchSort({type: sort});

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag='h1'>{page.title}</HTag>
                {products && <Tag color='grey' size='middle'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product layout='size' product={p} key={p._id} />))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color='red' size='middle'>hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <HTag tag='h2'>Преимущества</HTag>
                <Advantages advantages={page.advantages} />
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <HTag tag='h2'>Получаемые навыки</HTag>
            {page.tags.map(t => (<Tag key={t} color='primary' size='middle'>{t}</Tag>))}
        </div>
    );
};