// src/App.jsx
import React from 'react';
import { Suspense } from 'react';
import './style.css';



const Header = React.lazy(() => import('./components/Header'));
const Banner = React.lazy(() => import('./components/Banner'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const Collections = React.lazy(() => import('./components/Collections'));
const Store = React.lazy(() => import('./components/Store'));
const Categories = React.lazy(() => import('./components/Categories'));
const FeaturedCollection = React.lazy(() => import('./components/FeaturedCollection'));
const InstitutionalVideo = React.lazy(() => import('./components/InstitutionalVideo'));
const Community = React.lazy(() => import('./components/Community'));
const Newsletter = React.lazy(() => import('./components/Newsletter'));
const Footer = React.lazy(() => import('./components/Footer'));



function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
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
    </Suspense>
  );
}

export default App;
