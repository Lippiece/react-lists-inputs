import React from "react";
import Overview from "./Overview";
import Form from "./Form";

const App        = () =>
  (
    <div className="App">
      <header className="form-header">
        <p>Add a task:</p>
      </header>
      <Form />
      <header className="list-header">
        <p>List:</p>
      </header>
      <Overview items={[
        "Task 1",
        "Task 2",
      ]}
      />

    </div>
  );
export default App;
