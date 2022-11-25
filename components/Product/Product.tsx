import {ProductProps} from "./Product.props";
import {Card} from "../UI/Card/Card";
import styles from './Product.module.css';
import {Rating} from "../Rating/Rating";
import {Tag} from "../UI/Tag/Tag";
import {Button} from "../UI/Button/Button";
import {priceRu} from "../../helpers/helpers";
import {Divider} from "../UI/Divider/Divider";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  return (
      <Card className={styles.product}>
          <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
              {priceRu(product.price)}
              {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price- product.oldPrice)}</Tag>}
          </div>
          <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.month}>мес</span></div>
          <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
          <div className={styles.tags}>{product.tags.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
          <div className={styles.priceTitle}>Цена</div>
          <div className={styles.creditTitle}>Кредит</div>
          <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
          <Divider  className={styles.hr}/>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>feature</div>
          <div className={styles.advBlock}>
              {product.advantages && <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
              </div>}
              {product.disadvantages && <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
              </div>}
          </div>
          <Divider  className={styles.hr}/>
          <div className={styles.action}>
              <Button appearance='primary'>Узнать подробнее</Button>
              <Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Читать отзывы</Button>
          </div>
      </Card>
  );
};