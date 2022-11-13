import React, {useState} from "react";
import {Button, HTag, Paragraph, Rating, Tag} from "../components";
import {Layout} from "../layout/Layout";

export default function Home(): JSX.Element {
    const [counter, setCounter] = React.useState<number>(0);

    const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
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
    </Layout>
  );
}
