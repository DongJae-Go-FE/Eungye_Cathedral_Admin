"use client";

import Button from "@/components/Button";
import { Url } from "url";
import { ADMIN_DELETE_STRING } from "@/const/const";

type DeleteType = {
  href?: Url | string;
  id?: string | number;
};

export default function DeleteButton({ id, href }: DeleteType) {
  const handleDelete = () => {
    if (confirm(ADMIN_DELETE_STRING)) {
      console.log(id, href);
    }
  };

  return (
    <Button type="button" color="blue" onClick={handleDelete}>
      삭제
    </Button>
  );
}
