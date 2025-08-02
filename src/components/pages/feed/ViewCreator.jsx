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
    <div className="min-h-screen h-screen w-full flex items-center justify-center bg-black">
      <button
        onClick={() => navigate(-1)}
        className="fixed left-4 top-4 p-3 rounded-full bg-white hover:bg-indigo-100 shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <ArrowLeftIcon className="h-7 w-7 text-indigo-600 group-hover:text-indigo-700" />
      </button>
      <div className="bg-indigo-500 rounded-lg overflow-hidden shadow-xl w-full max-w-4xl mx-4">
        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            className="w-full h-96 object-cover"
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
              className="flex-1 text-center bg-white hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Visit Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
