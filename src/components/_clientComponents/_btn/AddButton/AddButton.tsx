"use client";

import Button from "@/components/Button";
import { Url } from "url";
import { ADMIN_ADD_STRING } from "@/const/const";

type AddType = {
  href?: Url | string;
};

export default function AddButton({ href }: AddType) {
  const handleAdd = () => {
    if (confirm(ADMIN_ADD_STRING)) {
      console.log(href);
    }
  };

  return (
    <Button type="button" color="blue" onClick={handleAdd}>
      등록
    </Button>
  );
}
