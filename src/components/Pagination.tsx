import Link from "next/link";

export function Pagination({ pageNumber }: { pageNumber: number }) {
  const totalPages = 10;

  const startPage = Math.max(1, pageNumber - 2);
  const endPage = Math.min(totalPages, pageNumber + 2); //

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumber > 1 && (
        <Link href={`/?pageNumber=${pageNumber - 1}`}>
          <span className="mx-2 px-4 py-2 border rounded hover:bg-gray-200">
            Previous
          </span>
        </Link>
      )}

      {pages.map((page) => (
        <Link key={page} href={`/?pageNumber=${page}`}>
          <span
            className={`mx-1 px-3 py-2 border rounded ${
              page === pageNumber
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </span>
        </Link>
      ))}

      {pageNumber < totalPages && (
        <Link href={`/?pageNumber=${pageNumber + 1}`}>
          <span className="mx-2 px-4 py-2 border rounded hover:bg-gray-200">
            Next
          </span>
        </Link>
      )}
    </div>
  );
}
