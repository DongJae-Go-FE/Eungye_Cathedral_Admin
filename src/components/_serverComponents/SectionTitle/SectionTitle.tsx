import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { BreadcrumbType } from "../Breadcrumb/Breadcrumb";

interface SectionTitleType extends BreadcrumbType {
  title: string;
}

export default function SectionTitle({ title, items }: SectionTitleType) {
  return (
    <h2 className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-x-2 text-heading03b text-black">
        {title}
      </div>
      {items && <Breadcrumb items={items} />}
    </h2>
  );
}
