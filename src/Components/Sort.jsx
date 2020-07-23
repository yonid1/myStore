import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Sort(props) {
  //   console.log(props);

  function sort(event) {
    
    if (event.target.value === "1") {
      const newLIst = props.list.slice();
      newLIst.sort((a, b) => (a.car > b.car) ? 1: -1 );
      props.setList(newLIst);
    }
    if (event.target.value === "2") {
      const newLIst = props.list.slice();
      newLIst.sort((a, b) => (a.price > b.price) ? 1 : -1);
      
      props.setList(newLIst);
    }
  }

  return (
    <div>
      <FormControl>
        <InputLabel>Sort</InputLabel>
        <Select
          onChange={sort}
          native
          defaultValue="0"
          id="grouped-native-select"
        >
          <option value={0}>no sort</option>
          <option value={1}>name</option>
          <option value={2}>price</option>
        </Select>
      </FormControl>
    </div>
  );
}
