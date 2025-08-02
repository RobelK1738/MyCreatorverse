import AllCreators from 'components/pages/feed/AllCreators';
import ViewCreator from 'components/pages/feed/ViewCreator';
import AddCreator from 'components/pages/forms/AddCreator';
import EditCreator from 'components/pages/forms/EditCreator';
import HomePage from 'components/pages/home/HomePage';
import { useRoutes } from 'react-router-dom';

function App() {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/creators', element: <AllCreators /> },
    { path: '/creators/new', element: <AddCreator /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator /> },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
