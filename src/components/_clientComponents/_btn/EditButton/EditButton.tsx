"use client";

import Button from "@/components/Button";
import { Url } from "url";

type EditType = {
  href?: Url | string;
  id?: string | number;
};

export default function EditButton({ id, href }: EditType) {
  const handleEdit = () => {
    console.log(id, href);
  };

  return (
    <Button type="button" color="blue" onClick={handleEdit}>
      수정
    </Button>
  );
}
