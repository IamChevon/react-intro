import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Input from "./components/input/Input";



function App() {

  const [ListItem, setListItem] = useState([]);

  const newItem = (item) => {
     ListItem.push(item);
    setListItem([...ListItem]);

    console.log("added new item: " + ListItem);
  };

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
