
import './App.css'
import Landing from './components/Landing/Landing'
import JobSeach from './components/JobSearch/JobSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/jobsearch' element={<JobSeach />} />
      </Routes>
    </Router>
  )
}

export default App
