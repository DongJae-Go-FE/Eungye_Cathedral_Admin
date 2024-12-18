import SectionTitle from "@/components/_serverComponents/SectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="본당소식"
        items={[{ id: 0, title: "본당소식", path: "/news" }]}
      />
      <FormSearch />
      <div className="mt-4 flex justify-end">
        <Button href="/news/add">등록하기</Button>
      </div>
    </div>
  );
}
