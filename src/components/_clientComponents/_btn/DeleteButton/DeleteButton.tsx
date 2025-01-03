"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";

import Button from "@/components/Button";
import { Url } from "url";
import { handleDelete } from "@/actions/serverDelete";

import Spinner from "@/components/Spinner";

import { ADMIN_DELETE_STRING } from "@/const/const";

type DeleteType = {
  href?: Url | string;
  id?: string | number;
};

export default function DeleteButton({ id, href }: DeleteType) {
  const { push } = useRouter();
  const [_, formActions, isPending] = useActionState(handleDelete, null);
  console.log(_);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (confirm(ADMIN_DELETE_STRING)) {
      const formData = new FormData(event.currentTarget);
      const response = await handleDelete(null, formData);

      if (response.status && response.redirectUrl) {
        push(response.redirectUrl);
      } else {
        alert(response.error);
      }
    }
  };
  return (
    <form action={formActions} onSubmit={handleSubmit}>
      <label htmlFor={href?.toString()} className="sr-only">
        {href?.toString()}
      </label>
      <input
        type="text"
        id={href?.toString()}
        value={href?.toString()}
        name="path"
        hidden
        readOnly
      />
      <label htmlFor={id?.toString()} className="sr-only">
        {id?.toString()}
      </label>
      <input
        type="text"
        id={id?.toString()}
        value={id?.toString()}
        name="id"
        hidden
        readOnly
      />
      <Button type="submit" color="blue" disabled={isPending}>
        {isPending ? <Spinner /> : "삭제"}
      </Button>
    </form>
  );
}
