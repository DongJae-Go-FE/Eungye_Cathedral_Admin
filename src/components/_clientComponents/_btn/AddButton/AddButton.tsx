"use client";

import Button from "@/components/Button";
import { Url } from "url";

type AddType = {
  href?: Url | string;
};

export default function AddButton({ href }: AddType) {
  const handleAdd = () => {
    console.log(href);
  };

  return (
    <Button type="button" color="blue" onClick={handleAdd}>
      등록
    </Button>
  );
}
