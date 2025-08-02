import { Link } from 'react-router-dom';
import DeleteCreator from '../forms/DeleteCreator';

export default function CreatorCard({ creator }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 m-4">
      <Link to={`/creators/${creator.id}`} className="block">
        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            className="w-full h-48 object-cover"
          />
        )}

        <h3 className="font-bold text-xl mb-2 text-indigo-1100">
          {creator.name}
        </h3>
        <p className="text-indigo-1100 text-base line-clamp-2">
          {creator.description}
        </p>
      </Link>

      <div className="px-6 pt-2 pb-4">
        <div className="flex gap-2">
          <Link
            to={`/creators/${creator.id}/edit`}
            className="flex-1 text-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            <text className="text-white">Update</text>
          </Link>
          <DeleteCreator creatorId={creator.id} />
        </div>
      </div>
    </div>
  );
}
