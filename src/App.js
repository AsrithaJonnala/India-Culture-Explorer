import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StatesPage from './pages/StatesPage';
import StateDetailPage from './pages/StateDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/states" element={<StatesPage />} />
          <Route path="/state/:stateName" element={<StateDetailPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;