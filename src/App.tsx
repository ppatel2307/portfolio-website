import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/**
 * App component.
 * The root component that provides the router.
 */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
