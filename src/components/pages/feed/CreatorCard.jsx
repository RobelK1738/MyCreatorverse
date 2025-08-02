import { Link } from 'react-router-dom';

export default function CreatorCard({ creator }) {
  return (
    <div className="flex flex-col">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <br />
      <div className="flex flex-col">
        <Link to={`/creators/${creator.id}`}>View</Link>
        <Link to={`/creators/${creator.id}/edit`}>Update</Link>
      </div>
    </div>
  );
}
