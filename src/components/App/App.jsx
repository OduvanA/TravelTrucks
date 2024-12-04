import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import CircleLoader from 'react-spinners/CircleLoader';
import './App.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('../../pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('../../pages/CamperDetailsPage/CamperDetailsPage')); 
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures')); 
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews')); 
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage')); 


export default function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<CircleLoader className='loader' color="#D84343" />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CampersPage />} />
          <Route path='/catalog/:id' element={<CamperDetailsPage />}>
            <Route path='features' element={<CamperFeatures />} />
            <Route path='reviews' element={<CamperReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>        
      </Suspense>

    </>
  )
};