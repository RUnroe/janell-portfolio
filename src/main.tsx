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
import pageData from './pageData';
import { CmsProvider } from 'react-simple-cms';


const App = () => {
  const location = useLocation();
  const locationArr = location.pathname;

  return (
    <React.StrictMode>
      <CmsProvider siteData={pageData}>
        <AnimatePresence mode='wait' initial={true}>
          <Routes location={location} key={locationArr}>
            <Route path="/" element={<AnimatedPage pageKey="home"><Home/></AnimatedPage>} />
            <Route path="/experience/:section" element={<AnimatedPage pageKey="experienceSingle"><ExperienceSingle/></AnimatedPage>} />
            <Route path="/experience" element={<AnimatedPage pageKey="experienceList"><ExperienceList/></AnimatedPage>} />
            <Route path="/resume" element={<AnimatedPage pageKey="resume"><Resume/></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage pageKey="contact"><Contact/></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </CmsProvider>
  </React.StrictMode>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<App />} />)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
