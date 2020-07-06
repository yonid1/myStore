import React from "react";

export default function Pagination({
  productPerPage,
  totalProduct,
  currentPage,
  list,
  setCurrentPage,
  
}) {
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentPosts = list.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return <nav>
      <ul>
          {pageNumbers.map(number =>(
              <li key = {number}>
                  <a onClick = {paginate(number)} href ='!#'> {number} </a>
              </li>
          ))}
      </ul>
  </nav>;
}
