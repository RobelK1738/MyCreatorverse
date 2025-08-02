import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from 'src/client';
import DeleteCreator from '../forms/DeleteCreator';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, _error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();
      if (data) setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div className="min-h-screen  w-full py-12 px-4">
      <div className="max-w-4xl mx-auto relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute -left-20 top-4 p-3 rounded-full bg-white hover:bg-indigo-100 shadow-lg hover:shadow-xl transition-all duration-200 group"
        >
          <ArrowLeftIcon className="h-7 w-7 text-indigo-600 group-hover:text-indigo-700" />
        </button>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          {creator.imageURL && (
            <img
              src={creator.imageURL}
              alt={creator.name}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {creator.name}
            </h2>
            <p className="text-gray-600 text-lg mb-6">{creator.description}</p>

            <div className="flex gap-4">
              <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Visit Channel
              </a>
              <Link
                to={`/creators/${creator.id}/edit`}
                className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Edit
              </Link>
              <DeleteCreator creatorId={creator.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
