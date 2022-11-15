import React from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {WithLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopPageModel} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/products.interface";

const firstCategory = 0;

function Course({menu, page, products}: CourseProps): JSX.Element {

    return (
        <>
            {products.length}
        </>
    );
}

export default WithLayout(Course);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
        firstCategory
    });

    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
        firstCategory
    });

    const {data: page} = await axios.get<TopPageModel>('https://courses-top.ru' + '/api/top-page/byAlias/' + params.alias );
    const {data: products} = await axios.post<ProductModel[]>('https://courses-top.ru' + '/api/product/find', {
        category: page.category,
        limit: 10
    } );

    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
    page: TopPageModel
    products: ProductModel[]
}