import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination-container">
      <button
        className="page-number"
        disabled={currentPage === 0}
        onClick={() => onPageChange(0)}
        aria-label="First page"
      >
        ⏮️
      </button>
      <button
        className="page-number"
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ◀️
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`page-number ${i === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="page-number"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        ▶️
      </button>
      <button
        className="page-number"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(totalPages - 1)}
        aria-label="Last page"
      >
        ⏭️
      </button>
    </div>
  );
};

export default Pagination;
