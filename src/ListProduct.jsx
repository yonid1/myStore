import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Pagination from "./Pagination";
import Button from "@material-ui/core/Button";
import Update from "./update";

import "./store.css";

export default function ListProduct(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);
  const [listView, setListView] = useState(props.list);
  const [listSearch, setListSearch] = useState(props.list);
  const [index, setIndex] = useState(0);
  const [shoeDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const newList = props.list.filter((cars) => {
      return cars.car.toLowerCase().includes(props.search.toLowerCase());
    });
    setListSearch(newList);
  }, [props.search, props.list]);

  

  function update(index) {
    setShowDiv(true)
    setIndex(index);
  }

  return (
    <div>
      <div className="search">
        <TextField
          label="Search"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </div>
      <div className="list-item-head">
        <List>
          {listView.map((item, index) => (
            <ListItem key={index}>
              <div className="list-product">
                <div className="car"> {item.car} </div>{" "}
                <div className="price-list"> {item.price}</div>
                <div className="date"> {item.date}</div>{" "}
                <div className="discretion-list"> {item.discretion}</div>
                <div className="button-delete">
                  <Button size="small" onClick={() => update(index)}>
                    Update
                  </Button>

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
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
      <Update
        shoeDiv={shoeDiv}
        setShowDiv={setShowDiv}
        list={props.list}
        setList={props.setList}
        index={index}
        setIndex={setIndex}
      />

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
