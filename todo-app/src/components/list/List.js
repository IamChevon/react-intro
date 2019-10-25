import React from "react";
import Item from "../item/Item";
import "./List.css";

const List = props => {

  const todoList = createList(props.list);

  return (
    <div>
      {todoList}
    </div>
  );
}

const createList = list => {
  return list.map(item => <Item name={item} key={item}/>)
}

export default List;
