import { AllPosts } from "@/components/AllPosts";
import { MaxWidth } from "@/components/MaxWidth";
import { Pagination } from "@/components/Pagination";

export default function Home({
  searchParams: { pageNumber },
}: {
  searchParams: { pageNumber: string };
}) {
  const page = parseInt(pageNumber, 10) || 1;
  return (
    <>
      <MaxWidth className="my-20">
        <AllPosts pageNumber={page} />
        <Pagination pageNumber={page} />
      </MaxWidth>
    </>
  );
}
