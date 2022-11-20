import React from "react";
import {WithLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Search(): JSX.Element {

    return (
        <>

        </>
    );
}

export default WithLayout(Search);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru' + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}