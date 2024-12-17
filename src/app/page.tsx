import SectionTitle from "@/components/_serverComponents/SectionTitle";
import FormSearch from "@/components/_clientComponents/FormSearch";

export default function Home() {
  return (
    <main>
      <div className="h-[calc(100dvh-80px)] bg-white p-10">
        <SectionTitle
          title="출입 정보"
          items={[
            { id: 0, title: "테스트", path: "/" },
            { id: 1, title: "테스트1", path: "/" },
          ]}
        />
        <FormSearch />
      </div>
    </main>
  );
}
