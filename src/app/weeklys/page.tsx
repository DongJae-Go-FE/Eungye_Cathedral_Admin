import SectionTitle from "@/components/_serverComponents/ServerSectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";
import Button from "@/components/Button";

export default async function Page() {
  return (
    <div className="common-layout">
      <SectionTitle
        title="주보"
        items={[{ id: 0, title: "주보", path: "/weeklys" }]}
      />
      <FormSearch />
      <div className="mb-2 mt-4 flex justify-end">
        <Button size="sm" color="white" href="/weeklys/add">
          등록
        </Button>
      </div>
    </div>
  );
}
