import { Link } from "react-router-dom";

export default function ContentCreatorCard({ creator }) {
  return (
    <div className="creator-card">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
      <br />
      <Link to={`/creators/${creator.id}`}>View</Link>
      <Link to={`/creators/${creator.id}/edit`}>Edit</Link>
    </div>
  );
}
