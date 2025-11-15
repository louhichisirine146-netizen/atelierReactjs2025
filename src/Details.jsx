import { useState } from "react";

function Details(props) {
  const { build_year, location } = props.informations;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && (
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Build year: {build_year}</strong>
          </li>
          <li className="list-group-item">
            <strong>Location: {location}</strong>
          </li>
        </ul>
      )}
    </>
  );
}

export default Details;
