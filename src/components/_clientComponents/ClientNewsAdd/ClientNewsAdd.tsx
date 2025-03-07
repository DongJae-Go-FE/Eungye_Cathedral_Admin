"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { useQueryClient, RefetchQueryFilters } from "@tanstack/react-query";

import Button from "@/components/Button";
import Input from "@/components/Input";

import TextEditor from "@/components/TextEditor";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

import { handleAdd } from "@/actions/serverActions";

import { ADMIN_ADD_STRING, ADMIN_ADD_STRING_COMPLETE } from "@/const/const";

export default function ClientNewsAdd() {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const [isVal, setIsVal] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm(ADMIN_ADD_STRING)) return;

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const response = await handleAdd(null, formData);

      if (response.status) {
        queryClient.refetchQueries("/news" as RefetchQueryFilters<string>);
        alert(ADMIN_ADD_STRING_COMPLETE);
        push("/news");
      } else {
        alert(response.error);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <table className="description-table">
        <caption>본당소식 등록 테이블</caption>
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
            <th>내용</th>
            <td colSpan={3}>
              <TextEditor />
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
                value="/news"
                readOnly
                hidden
              />
              <label htmlFor="update" className="sr-only">
                update
              </label>
              <input
                type="hidden"
                id="update"
                value="serverNewsList"
                name="update"
                hidden
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button
          type="submit"
          color="blue"
          className="relative"
          disabled={isPending || !isVal}
        >
          {isPending ? "등록중" : "등록"}
        </Button>
        <Button type="button" color="white" href="/news">
          취소
        </Button>
      </div>
    </form>
  );
}
