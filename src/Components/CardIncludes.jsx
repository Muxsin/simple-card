const IncludeList = ({ includes }) => {
  return (
    <ul>
      {includes.map((include) => {
        return (
          <li className="includes-item" key={include.id}>
            {include.text}
          </li>
        );
      })}
    </ul>
  );
};

function CardIncludes({ includes }) {
  return (
    <div className="includes">
      <h2 className="includes-header">Includes</h2>
      <IncludeList includes={includes} />
    </div>
  );
}

export default CardIncludes;
