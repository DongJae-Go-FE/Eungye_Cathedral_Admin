"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import Input from "@/components/Input";

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
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm(ADMIN_EDIT_STRING)) return;

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
              <label htmlFor="detailUpdate" className="sr-only">
                detailUpdate
              </label>
              <input
                type="hidden"
                id="detailUpdate"
                value="weeklys"
                name="detailUpdate"
                hidden
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button type="submit" color="blue" disabled={isPending || !isVal}>
          {isPending ? "수정중" : "수정"}
        </Button>
        <Button type="button" color="white" href={`/weeklys/${id}`}>
          취소
        </Button>
      </div>
    </form>
  );
}
