
import './App.css'
import Landing from './components/Landing/Landing'
import JobSeach from './components/JobSearch/JobSearchHeroSection';
import JobSearchInfoPage from './components/JobSearch/JobSearchInfoPage';
import BrandHiring from './components/BrandHiring/BrandHiring';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/jobsearch' element={<JobSeach />} />
        <Route path='/brandhiring' element={<BrandHiring />} />

        <Route path='/jobsearchinfopage' element={<JobSearchInfoPage />} />

      </Routes>

    </Router>
  )
}

export default App
