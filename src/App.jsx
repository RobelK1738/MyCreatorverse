import ShowCreators from '../../MyCreatorverse/src/components/pages/ShowCreators';
import AddCreator from '../../MyCreatorverse/src/components/pages/AddCreator';
import ViewCreator from '../../MyCreatorverse/src/components/pages/ViewCreator';
import EditCreator from '../../MyCreatorverse/src/components/pages/EditCreator';
import { useRoutes } from 'react-router-dom';

function App() {
  let routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creators/new', element: <AddCreator /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator /> },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
