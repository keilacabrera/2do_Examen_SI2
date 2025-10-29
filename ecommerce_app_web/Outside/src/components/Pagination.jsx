export default function Pagination({ page, setPage, totalPages }) {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Mostrar máximo 5 botones de página
  const getPageNumbers = () => {
    const maxButtons = 5;
    let start = Math.max(1, page - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
      >
        &lt;
      </button>

      {getPageNumbers().map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-3 py-1 border rounded-lg ${
            num === page
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
