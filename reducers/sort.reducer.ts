import {SortKind} from "../components/Sort/Sort.props";
import {ProductModel} from "../interfaces/products.interface";

export type SortAction = { type: SortKind.Price } | {type: SortKind.Rating};

export interface SortReducerState {
    sort: SortKind
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
    switch (action.type) {
        case SortKind.Price:
            return {
                sort: SortKind.Price,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortKind.Rating:
            return {
                sort: SortKind.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
            };
        default:
            throw new Error('Неверный тип сортировки');
    }
};