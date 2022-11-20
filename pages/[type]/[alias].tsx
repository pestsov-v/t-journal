import React from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {WithLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/products.interface";
import {firstLevelMenu} from "../../helpers/helpers";
import {TopPageComponent} from "../../page-components";

function TopPage({firstCategory, page, products}: TopPageProps): JSX.Element {

    return (
       <TopPageComponent page={page} firstCategory={firstCategory} products={products}/>
    );
}

export default WithLayout(TopPage);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    try {
        const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length === 0) {
            return {
                notFound: true
            };
        }

        const {data: page} = await axios.get<TopPageModel>('https://courses-top.ru' + '/api/top-page/byAlias/' + params.alias );
        const {data: products} = await axios.post<ProductModel[]>('https://courses-top.ru' + '/api/product/find', {
            category: page.category,
            limit: 10
        } );

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
};

interface TopPageProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: TopLevelCategory
    page: TopPageModel
    products: ProductModel[]
}