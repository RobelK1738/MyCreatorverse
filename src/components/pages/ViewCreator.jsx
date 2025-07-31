import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../client';

export default function ViewCreator() {
  const { id } = useParams();
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
    <div>
      <h2>{creator.name}</h2>
      <img src={creator.imageURL} alt={creator.name} />
      <p>{creator.description}</p>
      <a href={creator.url}>Visit Channel</a>
      <br />
      <Link to={`/creators/${creator.id}/edit`}>Edit</Link>
    </div>
  );
}
