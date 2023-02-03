import { useState } from 'react';

import Landing from './pages/Landing';
import About from './pages/About';

import Header from './components/Header';

function App() {
  const [page, setPage] = useState('landing');

  const switchPage = () => {
    switch (page) {
      case 'landing':
        return <Landing />
      case 'about':
        return <About />
    }
  }

  return (
    <>
      <Header setPage={setPage} />

      {/* {page === 'landing' ? <Landing /> : <About />} */}
      {switchPage()}
    </>
  );
}

export default App;
