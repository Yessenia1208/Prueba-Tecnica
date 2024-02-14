import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/Home';
import Peliculas from './pages/Peliculas';
import Series from './pages/Series';
import Error from './pages/Error';
import Loading from './pages/Loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Series />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
