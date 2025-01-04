import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import ClientNewsEdit from "@/components/_clientComponents/ClientNewsEdit";

import { RequestGetDetailType } from "@/type";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news/${id}`,
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
        title="본당소식 수정"
        items={[
          { id: 0, title: "본당소식", path: "/news" },
          { id: 1, title: "본당소식 수정", path: `/news/${id}/edit` },
        ]}
      />
      <ClientNewsEdit id={id} data={data}/>
    </section>
  );
}
