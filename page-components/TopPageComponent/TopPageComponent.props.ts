import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/products.interface";

interface TopPageComponentProps {
    firstCategory: TopLevelCategory
    page: TopPageModel
    products: ProductModel[]
}

export default TopPageComponentProps;