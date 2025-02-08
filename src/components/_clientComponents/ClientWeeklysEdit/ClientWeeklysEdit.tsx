"use client";

import { useRouter } from "next/navigation";
import { useState, useActionState } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

import { handleEdit } from "@/actions/serverActions";

import { RequestGetDetailType } from "@/type";

import { ADMIN_EDIT_STRING, ADMIN_EDIT_STRING_COMPLETE } from "@/const/const";

export default function ClientWeeklysEdit({
  id,
  data,
}: {
  id: string;
  data: RequestGetDetailType;
}) {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const [isVal, setIsVal] = useState(data.title);
  const [, formActions, isPending] = useActionState(handleEdit, null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (confirm(ADMIN_EDIT_STRING)) {
      const formData = new FormData(event.currentTarget);
      const response = await handleEdit(null, formData);
      if (response.status) {
        queryClient.refetchQueries(
          `/weeklys/${id}` as RefetchQueryFilters<string>,
        );
        queryClient.refetchQueries(`/weeklys` as RefetchQueryFilters<string>);
        alert(ADMIN_EDIT_STRING_COMPLETE);
        push(`/weeklys/${id}`);
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <form action={formActions} onSubmit={handleSubmit}>
      <table className="description-table">
        <caption>주보 수정 테이블</caption>
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
                value={isVal}
                maxLength={50}
                required
                onChange={(e) => setIsVal(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>사진 파일</th>
            <td colSpan={3}>
              <ImageUpload defaultValue={data.imgUrl} />
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
              <label htmlFor="id" className="hidden">
                아이디
              </label>
              <input
                type="hidden"
                id="id"
                name="id"
                value={id}
                readOnly
                hidden
              />
              <label htmlFor="update" className="sr-only">
                update
              </label>
              <input
                type="hidden"
                id="update"
                value="serverWeeklysList"
                name="update"
                hidden
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button type="submit" color="blue" disabled={isPending || !isVal}>
          {isPending ? <Spinner /> : "등록"}
        </Button>
        <Button type="button" color="white" href={`/weeklys/${id}`}>
          취소
        </Button>
      </div>
    </form>
  );
}
