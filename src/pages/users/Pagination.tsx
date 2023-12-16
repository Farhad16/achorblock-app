function Pagination({ page, setPage, numberOfPages }: any) {
  return (
    <div className="flex flex-row items-center justify-between gap-1 my-4 text-[#344054] w-full px-4">
      <button
        className={`flex items-center gap-2 text-sm font-semibold rounded-lg border border-[#D0D5DD] px-3.5 py-2 ${
          page === 1
            ? "opacity-70 pointer-events-none cursor-default"
            : "opacity-100 cursor-pointer"
        }`}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <p className="text-sm font-medium">
        Page {page} of {numberOfPages}
      </p>
      <button
        className={`flex items-center gap-2 text-sm font-semibold rounded-lg  border border-[#D0D5DD] px-3.5 py-2 ${
          page === numberOfPages
            ? "opacity-70 pointer-events-none cursor-default"
            : "opacity-100  cursor-pointer"
        }`}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
