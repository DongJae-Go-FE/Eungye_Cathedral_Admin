import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import ClientWeeklysEdit from "@/components/_clientComponents/ClientWeeklysEdit";

import { RequestGetDetailType } from "@/type";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/weeklys/${id}`,
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
        title="주보 수정"
        items={[
          { id: 0, title: "주보", path: "/weeklys" },
          { id: 1, title: "주보 수정", path: `/weeklys/${id}/edit` },
        ]}
      />
      <ClientWeeklysEdit id ={id} data = {data}/>
    </section>
  );
}
