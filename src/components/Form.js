import { useState } from "react";
import React from "react";

const Form = () => {

  // TODO: write submitForm
  const [
    answer,
    setAnswer,
  ] = useState(
    ""
  );
  const [
    error,
    setError,
  ] = useState(
    null
  );
  const [
    status,
    setStatus,
  ] = useState(
    "typing"
  ); // 'typing', 'submitting', or 'success'

  const submitForm = event => {

    event.preventDefault();
    const form      = event.target;
    const input     = form.querySelector(
      "input"
    );
    const { value } = input;

    if ( value === "" ) {

      return setError(
        "Please enter a value"
      );

    }

    setStatus(
      "submitting"
    );
    return setError(
      null
    );

  };

  return status === "success" ? (
    <p>Success!</p>
  ) : ( 
    <form className="form" onSubmit={submitForm}>
      <input type="text" />
      <button onSubmit={submitForm} type="submit">
        Add
      </button>
    </form>
  );

};
export default Form;
