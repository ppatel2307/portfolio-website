import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';

/**
 * React Router configuration.
 * All routes use the MainLayout wrapper which provides Navbar and Footer.
 * Add new pages by adding route objects to the children array.
 */

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);



