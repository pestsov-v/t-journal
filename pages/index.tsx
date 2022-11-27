import React, {useState} from "react";
import {Button, HTag, Input, Paragraph, Rating, Tag, Textarea} from "../components";
import {WithLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {TopPageComponent} from "../page-components";
import api from "../helpers/api";

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [counter, setCounter] = React.useState<number>(0);

    const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag='h1'>{counter}</HTag>
        <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
        <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='big'>Big</Paragraph>
      <Paragraph>Middle</Paragraph>
      <Paragraph size='small'>Small</Paragraph>
        <Tag size='middle' color='ghost'>Прозрачный</Tag>
        <Tag size='small' color='red'>Красный</Tag>
        <Tag size='middle' color='grey'>Серый</Tag>
        <Tag size='small' color='green'>Зелёный</Tag>
        <Tag size='middle' color='primary'>Приоритетный</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
        <Input placeholder='tes'/>
        <Textarea placeholder={'asass'}/>
    </>
  );
}

export default WithLayout(Home);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(api.TOP_PAGE.FIND, {
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