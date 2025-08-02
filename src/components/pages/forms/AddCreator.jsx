import { useState } from 'react';
import { supabase } from '../../../client';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

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
    <div className="flex min-h-screen bg-black min-w-screen items-center justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-8 top-8 p-3 rounded-full bg-white hover:bg-indigo-100 shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <ArrowLeftIcon className="h-7 w-7 text-indigo-600 group-hover:text-indigo-700" />
      </button>
      <form
        onSubmit={handleSubmit}
        className="px-4 py-8 bg-black shadow sm:rounded-lg max-w-2xl w-full"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-white">Profile</h2>
            <p className="mt-1 text-sm/6 text-white">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-white"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="janesmith"
                      onChange={handleChange}
                      required
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="url"
                  className="block text-sm/6 font-medium text-white"
                >
                  Portfolio URL
                </label>
                <div className="mt-2">
                  <input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://janesmith.com"
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-white"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={''}
                    placeholder="Hello, my name is Jane Smith, I am a ..."
                    onChange={handleChange}
                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-400">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="imageURL"
                  className="block text-sm/6 font-medium text-white"
                >
                  Image URL
                </label>
                <div className="mt-2">
                  <input
                    id="imageURL"
                    name="imageURL"
                    type="imageURL"
                    placeholder="https://janesmith.com/profile.jpg"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-sm/6 font-semibold text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
