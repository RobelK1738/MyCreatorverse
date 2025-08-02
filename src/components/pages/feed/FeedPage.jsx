import { useEffect, useState } from 'react';

import { supabase } from 'src/client';
import CreatorCard from './CreatorCard';

export default function FeedPage() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, _error } = await supabase.from('creators').select();
      if (data) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Our Creators
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}
