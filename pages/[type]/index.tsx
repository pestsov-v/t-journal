import React from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {WithLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {firstLevelMenu} from "../../helpers/helpers";
import {ParsedUrlQuery} from "querystring";

function Type({firstCategory}: TypeProps): JSX.Element {

    return (
        <>
           Type: {firstCategory}
        </>
    );
}

export default WithLayout(Type);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
        firstCategory: firstCategoryItem.id
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}