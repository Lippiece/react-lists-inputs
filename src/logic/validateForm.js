import Sanctuary, {
  either,
  Left,
  pipe,
  Right,
} from "sanctuary";

const min        = 3;
const max        = 10;
const isTooShort = ( /** @type {string} */ value ) =>
  ( value.length < min
    ? Left( "Too short" )
    : Right( value ) );
const isTooLong  = ( /** @type {string} */ value ) =>
  ( value.length > max
    ? Left( "Too long" )
    : Right( value ) );
const isEmpty    = ( /** @type {string} */ value ) =>
  ( value.length === 0
    ? Left( "Empty" )
    : Right( value ) );

// validateForm :: string -> string
const validateForm = ( /** @type {string} */ value ) =>
  pipe( [
    isEmpty,
    either( Left )( isTooShort ),
    either( Left )( isTooLong ),
    either( Left )( Right ),

  ] )( value );
export default validateForm;
