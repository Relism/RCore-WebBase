import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPortal';
import Dashboard from './pages/MainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/success/*' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
