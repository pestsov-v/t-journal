import React from "react";
import {Button, HTag} from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <HTag tag='h1'>Text</HTag>
        <Button appearance='primary' arrow='right'>Кнопка</Button>
        <Button appearance='ghost' arrow='right'>Кнопка</Button>
    </>
  );
}
