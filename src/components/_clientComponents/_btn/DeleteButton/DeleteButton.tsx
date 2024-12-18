"use client";

import Button from "@/components/Button";
import { Url } from "url";

type DeleteType = {
  href?: Url | string;
  id?: string | number;
};

export default function DeleteButton({ id, href }: DeleteType) {
  const handleDelete = () => {
    console.log(id, href);
  };

  return (
    <Button type="button" color="blue" onClick={handleDelete}>
      삭제
    </Button>
  );
}
