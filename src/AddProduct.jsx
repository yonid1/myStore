import React, { useState,useEffect } from "react";
import Data from "./product.json";
import ListProduct from "./ListProduct";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Sort from "./Sort";
import "./store.css";
// import Search from './search'

export default function AddProduct() {
  const a = new Date();
  const date = a.toLocaleString();

  const [list, setList] = useState(Data);
  const [car, setCar] = useState("");
  const [price, setPrice] = useState("");
  const [discretion, setDiscretion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newData =  Data.map((item) =>{
        return {...item,date}
    })
    setList(newData)
  },[])
  useEffect(()=>{

    console.log(list,"list");
  },[list])


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
      
        {/* <div className ="div-field" > */}
        <div className="name-product">
        <TextField
          
          label="Name product"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          value={car}
          onChange={handleChange}
        />
        </div>
      <div className="price">
        <TextField
          
          label="Price"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="number"
          value={price}
          onChange={handleChangePrice}
        />
        </div>
        <div className="discretion">
        <TextField
          
          label="discretion"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          type="text"
          value={discretion}
          onChange={handleChangeDiscretion}
        />
        </div>
        
        <div className="button">
        <Button
          
          size="small"
          variant="outlined"
          type="button"
          onClick={HandelAdd}
        >
          Add
        </Button>
        </div>
        <div className = "sort">
        <Sort setList={setList} list={list} />
        </div>
        {/* <Search search = {search}  setSearch = {setSearch} setList={setList} list={list} /> */}
      {/* </div> */}

      <div>
        <ListProduct
          search={search}
          setSearch={setSearch}
          setList={setList}
          list={list}
          RemoveProduct={RemoveProduct}
        />
      </div>
    </div>
  );
}
