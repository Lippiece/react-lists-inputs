/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import {
  describe, expect, test,
} from "vitest";

import removeElement from "../logic/removeElement";

describe(
  "removeElement",
  () => {

    test(
      "removes an element from an array",
      () => {

        const array    = [
          1,
          2,
          3,
          4,
        ];
        const toDelete = 3;
        const expected = [
          1,
          2,
          4,
        ];
        const actual   = removeElement(
          array,
          toDelete
        );
        expect( actual )
          .toEqual( expected );

      }
    );

    test(
      "removes a string element from an array",
      () => {

        const array    = [
          "a",
          "b",
          "c",
          "d",
        ];
        const toDelete = "c";
        const expected = [
          "a",
          "b",
          "d",
        ];
        const actual   = removeElement(
          array,
          toDelete
        );
        expect( actual )
          .toEqual( expected );

      }
    );

  }
);
