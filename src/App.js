import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ProjectPage from "./pages/Project/Project";
import ResumePage from "./pages/Resume";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
