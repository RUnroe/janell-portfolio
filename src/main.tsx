import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import ExperienceSingle from './pages/ExperienceSingle';
import ExperienceList from './pages/ExperienceList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import "./styles/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/experience",
    element: <ExperienceList/>,
  },
  {
    path: "/experience/:section",
    element: <ExperienceSingle/>,
  },
  {
    path: "/resume",
    element: <Resume/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
