import React from "react";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";

export default function ListProduct(props) {

  
  const newList = props.list.filter((cars) => {
    return cars.car.toLowerCase().includes(props.search.toLowerCase());
  })
    // React.useEffect(()=>{
    //     console.log("useEffect list");
        
    //     console.log(props.list);
    // },[props.list])
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

    <List>
      {newList.map((item, index) => (
          
          <ListItem key={item.car}
          >
         <div >{item.car}</div> {item.price} {item.date} {item.discretion}
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
    </div>
  );
}
