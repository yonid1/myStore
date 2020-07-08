import React, { useEffect ,useState} from "react";

export default function Pagination(props) {
  const [listView , setListView] = useState(props.listSearch)
 const totalProduct = props.listSearch.length
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(2);

  
  useEffect(() => {
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const newList = listView.slice(indexOfFirstProduct, indexOfLastProduct);

    setListView(newList);

  },[currentPage] );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={paginate(number)} href="!#">
              {" "}
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
