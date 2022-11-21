import TopPageComponentProps from "./TopPageComponent.props";
import {HhData, HTag, Tag} from "../../components";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "../../interfaces/page.interface";

export const TopPageComponent = ({firstCategory, products, page}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag='h1'>{page.title}</HTag>
                {products && <Tag color='grey' size='middle'>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag='h2'>Вакансии - {page.category}</HTag>
                <Tag color='red' size='middle'>hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
        </div>
    );
};