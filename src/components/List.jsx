import "../styles/List.css";

import React from "react";

import removeElement from "../logic/removeElement";

const List = ( {
  items, setItems,
} ) =>
  (
    <ul>
      { items.map( (
        item, index
      ) => {

        const updateItem = event => {

          const updatedList = items.map( (
            listItem, listItemIndex
          ) =>
            ( listItemIndex === index
              ? event.target.textContent
              : listItem ) );
          return setItems( updatedList );

        };
        return <div className="list-item" key={ index }>
          <li key={ index } onBlur={updateItem} contentEditable={true}>
            {item}
          </li>
          <RemoveButton item={item} items={items} setItems={setItems} />
        </div>;

      } ) }
    </ul>
  );
const RemoveButton = ( {
  item, items, setItems,
} ) => {

  const removeTask
    = _event => {

      const updatedList = removeElement(
        items,
        item
      );
      return setItems( updatedList );

    };

  return <button onClick={removeTask} >
    X
  </button>;

};
export default List;
