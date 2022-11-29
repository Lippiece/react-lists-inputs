import "../styles/App.css";

import React from "react";

import Form from "./Form";
import List from "./List";

const App = () => {

  const [
    items,
    setItems,
  ] = React.useState( [] );
  const [
    answer,
    setAnswer,
  ] = React.useState( "" );
  return <div className="app">
    <header className="form-header" hidden={items.length > 0}>
      <p hidden={items.length > 0}>
        Add a task:
      </p>
    </header>
    <Form items={ items } setItems={ setItems } className="form" />
    <header className="list-header" hidden={items.length === 0}>
      <p hidden={items.length === 0}>
        Tasks:
      </p>
    </header>
    <List items={items} className="list" setItems={ setItems } />
  </div>;

};
export default App;
