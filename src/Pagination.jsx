import React, { useEffect, useCallback } from "react";
import PaginationStyle from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Pagination({
  productPerPage,
  totalProduct,
  currentPage,
  list,
  setList,
  setCurrentPage,
}) {
  useEffect(() => {
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const newList = list.slice(indexOfFirstProduct, indexOfLastProduct);
    setList(newList);
  }, [currentPage, list]);
  const classes = useStyles();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.root}>
      
        {pageNumbers.map((number, index) => (
              

          <PaginationStyle
            onClick={() => {
              paginate(number);
            }}
            href="!#"
            count = {number}
          />
            
          
          

        ))}
      
    </div>

    // <nav>
    //   <ul>
    //     {pageNumbers.map((number) => (
    //       <li key={number}>
    //         <a
    //           onClick={() => {
    //             paginate(number);
    //           }}
    //           href="!#"
    //         >
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );

}
