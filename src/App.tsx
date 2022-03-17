import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import Starred from 'pages/Starred';
import Show from 'pages/Show';
import { ThemeProvider } from 'styled-components';
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
