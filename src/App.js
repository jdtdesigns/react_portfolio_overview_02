import { useState } from 'react';

import Landing from './pages/Landing';
import About from './pages/About';

import Header from './components/Header';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      <Header setPage={setPage} />

      {page === 'landing' ? <Landing /> : <About />}
    </>
  );
}

export default App;
