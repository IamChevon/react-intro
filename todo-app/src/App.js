import React from "react";
import { Switch, Route } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import Done from "./components/done/Done";
import Nav from "./components/navigation/Nav";
import Header from "./components/header/Header";
import "./App.css";



function App() {
  const title = "Todo";

  return (
    <div>
      <Header title={title} />
        <main className="app">
      <Nav />
      <Switch>
        <Route path="/tasks" component={Tasks}/>
        <Route path="/done" component={Done}/>
        <Route path="/" exact component={Tasks}/>
      </Switch>
    </main>
    </div>


  );

}

export default App;
