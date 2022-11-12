import React from "react";
import {Button, HTag, Paragraph, Tag} from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <HTag tag='h1'>Text</HTag>
        <Button appearance='primary' arrow='right'>Кнопка</Button>
        <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='big'>Big</Paragraph>
      <Paragraph>Middle</Paragraph>
      <Paragraph size='small'>Small</Paragraph>
        <Tag size='middle' color='ghost'>Прозрачный</Tag>
        <Tag size='small' color='red'>Красный</Tag>
        <Tag size='middle' color='grey'>Серый</Tag>
        <Tag size='small' color='green'>Зелёный</Tag>
        <Tag size='middle' color='primary'>Приоритетный</Tag>
    </>
  );
}
