import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  useLocation,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import ExperienceSingle from './pages/ExperienceSingle';
import ExperienceList from './pages/ExperienceList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import "./styles/app.scss";
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from './components/layout/animation/AnimatedPage';
import TopNavMenu from './components/navigation/TopNavMenu';


const App = () => {
  const location = useLocation();
  const locationArr = location.pathname;

  return (
    <React.StrictMode>
      <TopNavMenu />
      <AnimatePresence mode='wait' initial={true}>
        <Routes location={location} key={locationArr}>
          <Route path="/" element={<AnimatedPage><Home/></AnimatedPage>} />
          <Route path="/experience/:section" element={<AnimatedPage><ExperienceSingle/></AnimatedPage>} />
          <Route path="/experience" element={<AnimatedPage><ExperienceList/></AnimatedPage>} />
          <Route path="/resume" element={<AnimatedPage><Resume/></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact/></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
  </React.StrictMode>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<App />} />)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
