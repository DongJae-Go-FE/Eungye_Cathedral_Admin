import SectionTitle from "@/components/SectionTitle";
import ClientNotiesAdd from "@/components/_clientComponents/ClientNoticesAdd";
// import Button from "@/components/Button";
// import AddButton from "@/components/_clientComponents/_btn/AddButton";
// import Input from "@/components/Input";

// import TextEditor from "@/components/TextEditor";
// import ImageUpload from "@/components/ImageUpload/ImageUpload";

export default async function Page() {
  return (
    <section className="common-layout">
      <SectionTitle
        title="공지사항 등록"
        items={[
          { id: 0, title: "공지사항", path: "/notices" },
          { id: 1, title: "공지사항 등록", path: `/notices/add` },
        ]}
      />
      <ClientNotiesAdd/>
    </section>
  );
}
