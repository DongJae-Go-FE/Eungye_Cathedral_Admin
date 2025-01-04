"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

import { handleAdd } from "@/actions/serverActions";

import { ADMIN_ADD_STRING, ADMIN_ADD_STRING_COMPLETE } from "@/const/const";

export default function ClientWeeklysAdd() {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const [state, formActions, isPending] = useActionState(handleAdd, null);
  console.log(state);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (confirm(ADMIN_ADD_STRING)) {
      const formData = new FormData(event.currentTarget);
      const response = await handleAdd(null, formData);
      if (response.status) {
        queryClient.refetchQueries("/weeklys" as RefetchQueryFilters<string>);
        alert(ADMIN_ADD_STRING_COMPLETE);
        push("/weeklys");
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <form action={formActions} onSubmit={handleSubmit}>
      <table className="description-table">
        <caption>주보 등록 테이블</caption>
        <tbody>
          <tr>
            <th>
              <label htmlFor="title">제목</label>
            </th>
            <td colSpan={3}>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="제목을 입력해주세요."
                maxLength={50}
                required
              />
            </td>
          </tr>
          <tr>
            <th>사진 파일</th>
            <td colSpan={3}>
              <ImageUpload />
              <label htmlFor="path" className="hidden">
                경로
              </label>
              <input
                type="hidden"
                id="path"
                name="path"
                value="/weeklys"
                readOnly
                hidden
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button type="submit" color="blue" disabled={isPending}>
          {isPending ? <Spinner /> : "등록"}
        </Button>
        <Button type="button" color="white" href="/weeklys">
          취소
        </Button>
      </div>
    </form>
  );
}
