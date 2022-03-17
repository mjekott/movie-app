import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import Starred from 'pages/Starred';
import Show from 'pages/Show';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </div>
  );
}

export default App;
