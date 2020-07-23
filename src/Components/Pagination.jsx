import React, { useEffect } from "react";
import PaginationStyle from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { logDOM } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(70),
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
  console.log("list", list);

  useEffect(() => {
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const newList = list.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(newList, "Pagination");

    setList(newList);
  }, [currentPage, list]);
  const classes = useStyles();
  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={classes.root}>
      <PaginationStyle
        onChange={paginate}
        href="!#"
        count={Math.ceil(totalProduct / productPerPage)}
      />
    </div>
  );
}
