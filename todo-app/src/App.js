import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Input from "./components/input/Input";



function App() {

  const [ListItem, setListItem] = useState([]);

  const newItem = (item) => {
    //  theList.push(item);
    setListItem([...ListItem, item]);

    console.log("added new item");
  };


  return (
    <div>
      <Header />
      <List list={ListItem} />
      <Input newItem={newItem} />
    </div>
  );

}

export default App;
