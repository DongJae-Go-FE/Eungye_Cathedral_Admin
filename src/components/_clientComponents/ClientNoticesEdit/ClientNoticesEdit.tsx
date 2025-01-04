"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import TextEditor from "@/components/TextEditor";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

import { handleEdit } from "@/actions/serverActions";

import { RequestGetDetailType } from "@/type";

import { ADMIN_EDIT_STRING, ADMIN_EDIT_STRING_COMPLETE } from "@/const/const";

export default function ClientNoticesEdit({
  id,
  data,
}: {
  id: string;
  data: RequestGetDetailType;
}) {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const [state, formActions, isPending] = useActionState(handleEdit, null);
  console.log(state);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (confirm(ADMIN_EDIT_STRING)) {
      const formData = new FormData(event.currentTarget);
      const response = await handleEdit(null, formData);
      if (response.status) {
        queryClient.refetchQueries(
          `/notices/${id}` as RefetchQueryFilters<string>,
        );
        queryClient.refetchQueries(`/notices` as RefetchQueryFilters<string>);
        alert(ADMIN_EDIT_STRING_COMPLETE);
        push(`/notices/${id}`);
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <form action={formActions} onSubmit={handleSubmit}>
      <table className="description-table">
        <caption>공지사항 수정 테이블</caption>
        <tbody>
          <tr>
            <th>
              <label htmlFor="title">제목</label>
            </th>
            <td colSpan={3}>
              <Input
                defaultValue={data.title}
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
            <th>내용</th>
            <td colSpan={3}>
              <TextEditor defaultValue={data.content} />
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
                value="/notices"
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
                value="serverNoticesList"
                name="update"
                hidden
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button type="submit" color="blue" disabled={isPending}>
          {isPending ? <Spinner /> : "수정"}
        </Button>
        <Button type="button" color="white" href={`/notices/${id}`}>
          취소
        </Button>
      </div>
    </form>
  );
}
