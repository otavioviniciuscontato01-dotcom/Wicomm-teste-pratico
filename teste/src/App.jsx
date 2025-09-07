// src/App.jsx
import React from 'react';

// Importe os componentes que vamos criar
import Header from './components/Header';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Collections from './components/Collections';
import Store from './components/Store';
import Categories from './components/Categories';
import FeaturedCollection from './components/FeaturedCollection';
import InstitutionalVideo from './components/InstitutionalVideo';
import Community from './components/Community';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



// Não precisamos de um App.css separado se todo o CSS estiver em index.css
// ou se cada componente tiver seu próprio CSS.

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Collections />
      <Store />
      <Categories />
      <FeaturedCollection />
      <InstitutionalVideo />
      <Community />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
