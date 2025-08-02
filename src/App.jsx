import FeedPage from 'components/pages/feed/FeedPage';
import ViewCreator from 'components/pages/feed/ViewCreator';
import AddCreator from 'components/pages/forms/AddCreator';
import EditCreator from 'components/pages/forms/EditCreator';
import HomePage from 'components/pages/home/HomePage';
import { useRoutes } from 'react-router-dom';

function App() {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/creators', element: <FeedPage /> },
    { path: '/creators/new', element: <AddCreator /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator /> },
  ]);

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      {routes}
    </div>
  );
}

export default App;
