import Overview from "./Overview";

const Form       = (
  { status }
) =>
  ( status === "success" ? (
    <p>Success!</p>
  ) : (
    <form className="form" onSubmit={submitForm()}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  ) );
const App        = () =>
  (
    <div className="App">
      <header className="tasks-header">
        <p>Tasks</p>
      </header>
      <Form status="waiting" />
      <Overview items={[
        "Task 1",
        "Task 2",
      ]}
      />

    </div>
  );
const submitForm = () =>
  event =>
    event.target.value;
export default App;
