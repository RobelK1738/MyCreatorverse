import { useEffect, useState } from 'react';

import { supabase } from 'src/client';
import CreatorCard from './CreatorCard';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function FeedPage() {
  const [creators, setCreators] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, _error } = await supabase.from('creators').select();
      if (data) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen min-w-screen bg-black py-12 px-4 sm:px-6 lg:px-8 items-center justify-center">
      <button
        onClick={() => navigate('/')}
        className="fixed left-4 top-4 p-3 rounded-full bg-white hover:bg-indigo-100 shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <ArrowLeftIcon className="h-7 w-7 text-indigo-600 group-hover:text-indigo-700" />
      </button>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-indigo-500 sm:text-7xl mb-4">
          Our Creators
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Discover amazing content creators from around the world
        </p>
      </div>

      <div className="place-items-center mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-5xl w-full mx-auto">
        {creators.map((creator) => (
          <div
            className="transform transition duration-300 hover:scale-105 w-full"
            key={creator.id}
          >
            <CreatorCard key={creator.id} creator={creator} />
          </div>
        ))}
      </div>
    </div>
  );
}
