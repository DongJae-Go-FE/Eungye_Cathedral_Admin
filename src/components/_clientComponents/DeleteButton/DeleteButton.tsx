"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import { Url } from "url";
import { handleDelete } from "@/actions/serverActions";

import {
  ADMIN_DELETE_STRING,
  ADMIN_DELETE_STRING_COMPLETE,
} from "@/const/const";

type DeleteType = {
  href?: Url | string;
  id?: string | number;
  update?: string;
};

export default function DeleteButton({ id, href, update }: DeleteType) {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm(ADMIN_DELETE_STRING)) return;

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const response = await handleDelete(null, formData);

      if (response.status && response.redirectUrl) {
        queryClient.refetchQueries(href as RefetchQueryFilters<string>);
        alert(ADMIN_DELETE_STRING_COMPLETE);
        push(response.redirectUrl);
      } else {
        alert(response.error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={href?.toString()} className="sr-only">
        {href?.toString()}
      </label>
      <input
        type="hidden"
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
        type="hidden"
        id={id?.toString()}
        value={id?.toString()}
        name="id"
        hidden
        readOnly
      />
      <label htmlFor="update" className="sr-only">
        update
      </label>
      <input
        type="hidden"
        id="update"
        value={update}
        name="update"
        hidden
        readOnly
      />
      <Button type="submit" color="blue" disabled={isPending}>
        {isPending ? "삭제중" : "삭제"}
      </Button>
    </form>
  );
}
