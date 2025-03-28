"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import Button from "@/components/Button";
import DeleteButton from "@/components/_clientComponents/DeleteButton";

import { formatDate } from "@/utils/common";

import { RequestGetDetailType } from "@/type";

export default function ClientNoticesDetail({
  id,
  data,
}: {
  id: string;
  data: RequestGetDetailType;
}) {
  const searchParams = useSearchParams();

  return (
    <div>
      <table className="description-table">
        <caption>공지사항 상세 테이블</caption>
        <tbody>
          <tr>
            <th>제목</th>
            <td>{data.title ? data.title : "-"}</td>
            <th>생성일</th>
            <td>{data.created_at ? formatDate(data.created_at) : "-"}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan={3}>
              {data.imgUrl && (
                <Image
                  src={data.imgUrl}
                  width={500}
                  height={500}
                  alt="상세이미지"
                  className="mb-4 h-auto w-auto"
                  priority
                />
              )}
              {data.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.content,
                  }}
                />
              ) : (
                "-"
              )}
            </td>
          </tr>
          <tr>
            <th>사진 파일</th>
            <td colSpan={3}>
              {data.imgUrl ? (
                <div className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.3641 10.565C33.4883 7.44083 38.5536 7.44083 41.6778 10.565C44.802 13.6892 44.802 18.7545 41.6778 21.8787L24.0001 39.5564C19.7044 43.8522 12.7396 43.8522 8.4438 39.5564C4.14803 35.2606 4.14803 28.2958 8.4438 24.0001L23.293 9.15081C24.0741 8.36976 25.3404 8.36976 26.1215 9.15081C26.9025 9.93186 26.9025 11.1982 26.1215 11.9792L11.2722 26.8285C8.53855 29.5621 8.53855 33.9943 11.2722 36.728C14.0059 39.4616 18.438 39.4616 21.1717 36.728L38.8494 19.0503C40.4115 17.4882 40.4115 14.9555 38.8494 13.3934C37.2873 11.8314 34.7546 11.8314 33.1925 13.3934L15.5149 31.0711C15.1243 31.4616 15.1243 32.0948 15.5149 32.4853C15.9054 32.8759 16.5386 32.8759 16.9291 32.4853L31.7783 17.6361C32.5594 16.855 33.8257 16.855 34.6067 17.6361C35.3878 18.4171 35.3878 19.6835 34.6067 20.4645L19.7575 35.3138C17.8049 37.2664 14.6391 37.2664 12.6864 35.3138C10.7338 33.3611 10.7338 30.1953 12.6864 28.2427L30.3641 10.565Z"
                      fill="#111111"
                    />
                  </svg>
                  <a
                    className="text-blue-400 hover:underline"
                    href={data.imgUrl}
                    target="_blank"
                    download
                  >
                    이미지 파일
                  </a>
                </div>
              ) : (
                "사진 파일이 없습니다."
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 flex justify-end gap-x-1">
        <Button color="black" href={`/notices/${id}/edit?${searchParams.toString()}`}>
          수정
        </Button>
        <DeleteButton id={id} href="/notices" update="serverNoticesList" />
        <Button color="white" href={`/notices?${searchParams.toString()}`}>
          목록으로
        </Button>
      </div>
    </div>
  );
}
