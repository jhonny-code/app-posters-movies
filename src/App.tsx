import { Route, Routes } from 'react-router-dom'; 
import TopNavBar from './components/TopNavBar';
import MoviesPage from './pages/MoviesPage';  

function App() {
  return (
    <div className="app-container">
      <TopNavBar />
      <Routes> 
        <Route path="/" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
