// src/components/Banner.jsx
import React from 'react';

function Banner() {
  return (
    <section className="banner-inicial">
      <img src="https://i.ibb.co/n8mhkzNq/baner-01.png" alt="Borda Esquerda" className="bordae" />

      <section className="banner-principal">
        <img src="https://i.ibb.co/TMKg2LSs/IMG-3698-2.jpg" alt="Nova Coleção" />
        <div className="banner-texto">
          <button className="btn">VER COLEÇÃO</button>
        </div>
      </section>
      <img src="https://i.ibb.co/B2mVRhWx/baner-03.png" alt="Borda Direita" className="bordad" />
    </section>
  );
}

export default Banner;
