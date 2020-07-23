/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState , useEffect} from "react";

export default function update(props) {
  // const [index,setIndex] = useState(props.index)
// console.log(props.index);

var index = props.index
  
  const [carUpdate, setCarUpdate] = useState(props.list[index].car);
  const [priceUpdate, setPriceUpdate] = useState(props.list[index].price);
  const [discretionUpdate, setDiscretionUpdate] = useState(props.list[index].discretion);
  
  
  useEffect(()=>{
    setCarUpdate(props.list[index].car)
    setPriceUpdate(props.list[index].price)
    setDiscretionUpdate(props.list[index].discretion);
  },[index])


  function car(e) {
    setCarUpdate(e.target.value);
  }
  function price(e) {
    setPriceUpdate(e.target.value);
  }
  function discretion(e) {
    setDiscretionUpdate(e.target.value);
  }

  function saveUpdate() {

    const newArry = props.list.slice();
    newArry[props.index].car = carUpdate ;
    newArry[props.index].price = priceUpdate;
    newArry[props.index].discretion = discretionUpdate;
    
    props.setList(newArry);
    props.setShowDiv(false)
  }

  return (
    <div>
      <div>
        {props.shoeDiv ? (
          <div className="div-upbeat">
            <div>
              car
              <input
                title="car"
                type="text"
                value={carUpdate}
                onChange={car}
              ></input>
            </div>
            <div>
              price
              <input type="text" value={priceUpdate} onChange={price}></input>
            </div>
            <div>
              discretion
              <input
                type="text"
                value={discretionUpdate}
                onChange={discretion}
              ></input>
            </div>
            <button onClick={saveUpdate}>save</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
