import React from "react";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // currentPage: La página actual.
  // totalPages: El número total de páginas.
  // onPageChange: Una función para manejar el cambio de página.
  return (
    <div className="iconsPaginationConteiner">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} >
        <img src="./assets/firstPage.svg" alt="fist page" />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <img src="./assets/leftPage.svg" alt="preview page" />
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <img src="./assets/rigthPage.svg" alt="next page" />
      </button>

      <button onClick={() => onPageChange(totalPages)}>
        <img src="./assets/lastPage.svg" alt="last page" />
      </button>
    </div>
  );
};

export default Pagination;
