import React, { useState } from "react";
import {
  either,
  isJust,
  Left,
  map,
  Nothing,
  pipe,
} from "sanctuary";

import validateForm from "../logic/validateForm.js";

const Form = () => {

  const [
    status,
    setStatus,
  ] = useState( "initial" );
  const [
    error,
    setError,
  ] = useState(  "" );
  const [
    answer,
    setAnswer,
  ] = useState( ""  );

  const handleError = ( /** @type {string} */ value ) => {

    setStatus( "error" );
    return setError( value );

  };

  const handleSuccess = ( /** @type {string} */ value ) => {

    setStatus( "typing" );
    return setAnswer( value );

  };

  const handleChange = event => {

    const { value } = event.target;

    pipe( [
      validateForm,
      either( handleError )( handleSuccess ),
    ] )( value );

  };

  const handleSubmit = event => {

    event.preventDefault();
    return setStatus( "submitted" );

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
      <button type="submit" disabled={status !== "typing"}>
        Submit
      </button >
    </form>
  );

};
export default Form;
