import Details from "./Details";

function Card(props) {
  const informations = {
    build_year: props.wonder.build_year,
    location: props.wonder.location,
  };

  const handleWikipediaClick = (id) => {
    const champ = props.wonder;
    if (champ.id === id) {
      const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(champ.name)}`;
      window.open(wikipediaUrl, "_blank");
    }
  };

  const handleGoogleMapClick = (id) => {
    const champ = props.wonder;
    if (champ.id === id) {
      const google_mapurl = champ.google_map;
      window.open(google_mapurl, "_blank");
    }
  };

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.wonder.image}
          className="card-img-top"
          width={100}
          height={300}
          alt={props.wonder.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.wonder.name}</h5>
          <p className="card-text">{props.wonder.desc}</p>
          <Details informations={informations} />
          <ul className="list-group">
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={() => handleWikipediaClick(props.wonder.id)}
              >
                Wikipédia
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={() => handleGoogleMapClick(props.wonder.id)}
              >
                Google Maps
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
