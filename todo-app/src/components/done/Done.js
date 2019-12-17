import React, {useState} from "react";
import List from "../list/List";
import "./Done.css";



function Done() {

    //  state variable for updating list
    const [ListItem, setListItem] = useState([]);

      // removes a selected item from list ad updates list
  const deleteItem = (item) => {
    console.log("removed: " + item)
    let index = ListItem.indexOf(item);
    ListItem.splice(index, 1);
    setListItem([...ListItem]);

  };


  return (
    <div className="">
      <List list={ListItem} deleteItem={deleteItem} />
    </div>
    
  );

}

export default Done;
