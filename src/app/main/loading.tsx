import List from "@/components/List";

export default function Loading() {
  return (
    <div className="common-layout">
      <div className="mb-8 flex h-[300px] w-full animate-pulse rounded-md bg-gray-300"></div>
      <ul className="grid grid-cols-2 grid-rows-2 gap-3">
        <li>
          <section>
            <h3 className="mb-7 text-heading03b text-black">공지사항</h3>
            <List isLoading />
          </section>
        </li>
        <li>
          <section>
            <h3 className="mb-7 text-heading03b text-black">분당소식</h3>
            <List isLoading />
          </section>
        </li>
        <li>
          <section>
            <h3 className="mb-7 text-heading03b text-black">주보</h3>
            <List isLoading />
          </section>
        </li>
      </ul>
    </div>
  );
}
