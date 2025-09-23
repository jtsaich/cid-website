import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';

function LanguageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const language: 'EN' | 'ZH' = location.pathname.startsWith('/zh') ? 'ZH' : 'EN';

  const handleLanguageChange = (newLang: 'EN' | 'ZH') => {
    const path = newLang === 'ZH' ? '/zh' : '/en';
    navigate(path);
  };

  return <HomePage language={language} onLanguageChange={handleLanguageChange} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/en" element={<LanguageWrapper />} />
        <Route path="/zh" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}

export default App;