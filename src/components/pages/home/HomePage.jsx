import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div class="text-center">
      <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        My Creatorverse
      </h1>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Link
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/creators/new"
        >
          Add New Creator
        </Link>
        <Link
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to="/creators"
        >
          View All Creators
        </Link>
      </div>
    </div>
  );
}
