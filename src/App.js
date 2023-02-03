import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
