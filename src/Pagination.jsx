import React, { useEffect ,useState} from "react";

export default function Pagination(props) {
  // const [listView , setListView] = useState(props.listSearch)
 const totalProduct = props.listSearch.length
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(3);

  
  useEffect(() => {
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const newList = props.listSearch.slice(indexOfFirstProduct, indexOfLastProduct);
  
    props.setlistSearch(newList);

  },[currentPage] );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {/* {listView.map((item ,index) => (<li key = {index}>   {item.car} </li>)) } */}
        {pageNumbers.map((number) => (

          <li key={number}>
            <a onClick={()=> paginate(number)} href="!#" >
              {" "}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
