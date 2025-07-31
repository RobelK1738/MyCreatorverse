import { useState, useEffect } from "react";
import { supabase } from "../../client";

import { Link } from "react-router-dom";
import ContentCreatorCard from "../ContentCreatorCard";


export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      if (data) setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Creatorverse</h1>
      <Link to="/creators/new">Add New Creator</Link>
      {creators.length === 0 ? (
        <p>No creators yet!</p>
      ) : (
        creators.map((creator) => (
          <ContentCreatorCard key={creator.id} creator={creator} />
        ))
      )}
    </div>
  );
}
