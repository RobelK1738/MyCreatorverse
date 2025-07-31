import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../client';

export default function EditCreator() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();
      if (data) setForm(data);
    };
    fetchCreator();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(form).eq('id', id);
    navigate(`/creators/${id}`);
  };

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="url" value={form.url} onChange={handleChange} required />
      <input name="imageURL" value={form.imageURL} onChange={handleChange} />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Creator</button>
      <button type="button" onClick={handleDelete}>
        Delete Creator
      </button>
    </form>
  );
}
