import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const ExerciseDetail = lazy(() => import('./pages/ExerciseDetail'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => (
  <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Suspense>
  </Box>
);

export default App;
