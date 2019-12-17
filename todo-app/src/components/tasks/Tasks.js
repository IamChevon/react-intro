import React, { useState } from "react";
import List from "../list/List";
import Input from "../input/Input";
import "./Tasks.css";



function Tasks() {

  //  state variable for updating list
  const [ListItem, setListItem] = useState([]);

  // new item function captures values passed from
  //  input component. add new item to list
  const newItem = (item) => {
    if (!ListItem.includes(item)) {
      ListItem.push(item);
      setListItem([...ListItem]);

      console.log("added new item: " + item);
    } else {
      alert("Item Already Exists!");
    }
  };

  // removes a selected item from list ad updates list
  const deleteItem = (item) => {
    console.log("removed: " + item)
    let index = ListItem.indexOf(item);
    ListItem.splice(index, 1);
    setListItem([...ListItem]);

  };


  return (
    <div className="tasks">
      <List list={ListItem} deleteItem={deleteItem} />
      <Input newItem={newItem} />
    </div>
    
  );

}

export default Tasks;
