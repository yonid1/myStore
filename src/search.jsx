import React from "react";
import TextField from "@material-ui/core/TextField";
import ListProduct from "./ListProduct";

export default function search(props) {
  //   function handleInput(event) {
  //     const listFilter = filterProduct(event.target.value)
  //     props.setList(listFilter)
  //   }

  function filterProduct(searchValue) {
     
      
    const newList = props.list.filter((cars) => {
      return cars.car.toLowerCase().includes(searchValue.toLowerCase());
    });
    return newList;
  }

  return (
    <div>
      <TextField
        label="Search"
        id="outlined-size-small"
        variant="outlined"
        size="small"
        type="text"
        // value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <ListProduct
        filterProduct={filterProduct}
        search={search}
        setSearch={props.setSearch}
        setList={props.setList}
        list={props.list}
        RemoveProduct={props.RemoveProduct}
      />
    </div>
  );
}
