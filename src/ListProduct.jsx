import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Pagination from "./Pagination";

export default function ListProduct(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(2);
  const [listView, setListView] = useState(props.list);
  const [listSearch, setListSearch] = useState(props.list);

  useEffect(() => {
    const newList = props.list.filter((cars) => {
      return cars.car.toLowerCase().includes(props.search.toLowerCase());
    });
    setListSearch(newList);
  }, [props.search, props.list]);

  return (
    <div>
      <TextField
        label="Search"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        type="text"
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <List>
        {listView.map((item, index) => (
          <ListItem key={item.car}>
            <div>{item.car}</div> {item.price} {item.date} {item.discretion}
            <IconButton
              edge="end"
              aria-label="delete"
              size="small"
              variant="outlined"
              type="button"
              onClick={() => props.RemoveProduct(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Pagination
        setList={setListView}
        list={listSearch}
        productPerPage={productPerPage}
        totalProduct={listSearch.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
