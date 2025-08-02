import { useState } from 'react';
import { supabase } from '../../../client';
import { useNavigate } from 'react-router-dom';

export default function AddCreator() {
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([form]);
    navigate('/creators');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="url" placeholder="URL" onChange={handleChange} required />
      <input name="imageURL" placeholder="Image URL" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Creator</button>
    </form>
  );
}
