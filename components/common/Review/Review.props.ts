import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ReviewModel} from "../../../interfaces/products.interface";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel
}