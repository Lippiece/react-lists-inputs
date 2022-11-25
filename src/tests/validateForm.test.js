/* eslint-disable fp/no-nil, fp/no-unused-expression */
import {
  Left, Right,
} from "sanctuary";

import validateForm from "../logic/validateForm";

describe(
  "validateForm",
  () => {

    test(
      "returns a Left if the value is empty",
      () => {

        expect( validateForm( "" ) )
          .toEqual( Left( "Empty" ) );

      }
    );

    test(
      "returns a Left if the value is too short",
      () => {

        expect( validateForm( "a" ) )
          .toEqual( Left( "Too short" ) );

      }
    );

    test(
      "returns a Left if the value is too long",
      () => {

        expect( validateForm( "aaaaaaaaaaa" ) )
          .toEqual( Left( "Too long" ) );

      }
    );

    test(
      "returns a Right if the value is valid",
      () => {

        expect( validateForm( "valid" ) )
          .toEqual( Right( "valid" ) );

      }
    );

  }
);
