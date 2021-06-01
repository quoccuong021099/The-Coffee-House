import React from 'react';
import './assets/App.css';
import './assets/Header.css';
import './assets/Body.css';
import './assets/ProductContainer.css';
import './assets/CartContainer.css';
import './assets/Footer.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
