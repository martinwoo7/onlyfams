import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Todo from './pages/todo';
import Home from './pages/home';
import Contact from './pages/contact';
import ErrorPage from './pages/error'
import Help from './pages/help'
import Root from './pages/root'
import How from './pages/how'
import Contract from './pages/contract';
import About from './pages/about';
import Store from './pages/store';
import Cookie from './pages/cookie';
import Safety from './pages/safety';
import Blog from './pages/blog';
import Terms from './pages/terms';
import DMCA from './pages/dmca';
import Slavery from './pages/slavery';
import Branding from './pages/branding';
import Privacy from './pages/privacy';
import USC from './pages/usc';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "help",
        element: <Help />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "how",
        element: <How />
      },
      {
        path: "terms#complaints",
        element: <Terms />
      },
      {
        path: "contract",
        element: <Contract />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "store",
        element: <Store />
      },
      {
        path: "cookie",
        element: <Cookie />
      },
      {
        path: "safety",
        element: <Safety />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "terms",
        element: <Terms />
      },
      {
        path: "dmca",
        element: <DMCA />
      },
      {
        path: "slavery",
        element: <Slavery />
      },
      {
        path: "branding",
        element: <Branding />
      },
      {
        path: "privacy",
        element: <Privacy />
      },
      {
        path: "usc",
        element: <USC />
      },
      {
        path: "terms#policy",
        element: <Terms />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
