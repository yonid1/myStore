import React, { useState } from "react";
import Data from "./product.json";
import ListProduct from "./ListProduct";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Sort from "./Sort";
import Pagination from './Pagination'
// import Search from './search'

export default function AddProduct() {
  const [list, setList] = useState(Data);
  const [car, setCar] = useState("");
  const [price, setPrice] = useState("");
  const [discretion, setDiscretion] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(1);
  const a = new Date();
  const date = a.toLocaleString();




  function handleChange(event) {
    setCar(event.target.value);
  }
  function handleChangePrice(event) {
    setPrice(event.target.value);
  }
  function handleChangeDiscretion(event) {
    setDiscretion(event.target.value);
  }

  function HandelAdd() {
    const newList = list.concat({ car, price, date, discretion });
    if ((car !== "") & (price !== "") & (discretion !== "")) {
      setList(newList);
    }

    setCar("");
    setPrice("");
    setDiscretion("");
  }
  function RemoveProduct(id) {
    const newList = list.filter((item, index) => index !== id);
    setList(newList);
  }

  return (
    <div>
      <div>
        <TextField
          label="Name product"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          value={car}
          onChange={handleChange}
        />

        <TextField
          label="Price"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="number"
          value={price}
          onChange={handleChangePrice}
        />
        <TextField
          label="discretion"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          value={discretion}
          onChange={handleChangeDiscretion}
        />
        <Button
          size="small"
          variant="outlined"
          type="button"
          onClick={HandelAdd}
        >
          Add
        </Button>
        <Sort setList={setList} list={list} />
        {/* <Search search = {search}  setSearch = {setSearch} setList={setList} list={list} /> */}
      </div>

      <div>
        <ListProduct
          search={search}
          setSearch={setSearch}
          setList={setList}
          list={list}
          RemoveProduct={RemoveProduct}
        />
      </div>
    <Pagination
    setList = {setList}
     list = {list}
     productPerPage = {productPerPage} 
     totalProduct = {list.length}
     currentPage = {currentPage}
     setCurrentPage = {setCurrentPage}
     />

    </div>
  );
}
