const Overview = (
  { items }
) =>
  (
    <ul className="list">
      {items.map(
        item =>
          (
            <li key={item}>{item}</li>
          )
      )}
    </ul>
  );
export default Overview;
