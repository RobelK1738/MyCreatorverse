import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    /* Full-viewport flex container → centers everything inside */
    <div className="flex items-center justify-center bg-[url('/src/assets/image.jpeg')] min-h-screen min-w-screen bg-cover">
      {/* The “card” you wanted centered */}
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white">My Creatorverse</h1>

        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            to="/creators/new"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-black  hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <text className="text-white">Add New Creator</text>
          </Link>

          <Link
            to="/creators"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <text className="text-white">View All Creators</text>
          </Link>
        </div>
      </div>
    </div>
  );
}
