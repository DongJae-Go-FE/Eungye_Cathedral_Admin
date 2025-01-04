import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import ClientNoticesEdit from "@/components/_clientComponents/ClientNoticesEdit";

import { RequestGetDetailType } from "@/type";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/notices/${id}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  );

  if (response.status === 404) {
    notFound();
  }

  const data: RequestGetDetailType = await response.json();

  return (
    <section className="common-layout">
      <SectionTitle
        title="공지사항 수정"
        items={[
          { id: 0, title: "공지사항", path: "/notices" },
          { id: 1, title: "공지사항 수정", path: `/notices/${id}/edit` },
        ]}
      />
      <ClientNoticesEdit id ={id} data = {data}/>
    </section>
  );
}
