"use client";

import Button from "@/components/Button";
import { Url } from "url";
import { ADMIN_EDIT_STRING } from "@/const/const";

type EditType = {
  href?: Url | string;
  id?: string | number;
};

export default function EditButton({ id, href }: EditType) {
  const handleEdit = () => {
    if (confirm(ADMIN_EDIT_STRING)) {
      console.log(id, href);
    }
  };

  return (
    <Button type="button" color="blue" onClick={handleEdit}>
      수정
    </Button>
  );
}
