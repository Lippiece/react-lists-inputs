import React, { useState } from "react";
import Sanctuary from "sanctuary";

import validateForm from "../logic/validateForm.js";

const {
  Left,
  Right,
  Maybe,
  Just,
  pipe,
  either,
  isNothing,
  isJust,
  map,
} = Sanctuary;
const Form = () => {

  const [
    status,
    setStatus,
  ] = useState( "typing" );
  const [
    error,
    setError,
  ] = useState( Left( "No error" ) );
  const [
    answer,
    setAnswer,
  ] = useState( ""  );

  const handleChange = event => {

    const { value } = event.target;

    return pipe( [
      validateForm,
      either( setError )( setAnswer ),
    ] )( value );

  };

  return (
    <form>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
      <p>
        {
          `Status: ${ status }
          Error: ${ error }`
        }
      </p>
    </form>
  );

};
export default Form;
