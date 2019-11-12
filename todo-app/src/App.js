import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Input from "./components/input/Input";



function App() {

  //  state variable for updating list
  const [ListItem, setListItem] = useState([]);

  // new item function captures values passed from
  //  input component. add new item to list
  const newItem = (item) => {
     ListItem.push(item);
    setListItem([...ListItem]);

    console.log("added new item: " + ListItem);
  };

  // removes a selected item from list ad updates list
  const deleteItem = (item) => {
    console.log("removed: " + item)
    let index = ListItem.indexOf(item);
    ListItem.splice(index, 1);
    setListItem([...ListItem]);

  };


  return (
    <div>
      <Header />
      <List list={ListItem} deleteItem={deleteItem}/>
      <Input newItem={newItem} />
    </div>
  );

}

export default App;
