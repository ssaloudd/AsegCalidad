import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { HomePage } from './Pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" replace />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
