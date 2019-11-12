import React from "react";
import Item from "../item/Item";
import "./List.css";

const List = props => {


  const deleteItem = (index) => {
    props.deleteItem(index);
  }

  const createList = list => {
    return list.map(item => <Item name={item} key={item} deleteItem={deleteItem} />)
  }

  const todoList = createList(props.list);

  return (
    <div>
      {todoList}
    </div>
  );
}



export default List;
