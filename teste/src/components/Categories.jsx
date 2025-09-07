// src/components/Categories.jsx
import React from 'react';

function Categories() {
  return (
    <section className="paicategorias">
      <button className="categorias">
        <img src="https://i.ibb.co/5XG41yff/image-30.png" alt="Clássico" />
        <span>CLÁSSICO</span>
      </button>

      <button className="categorias">
        <img src="https://i.ibb.co/6cHkdHsL/image-29.png" alt="Minimalismo" />
        <span>MINIMALISMO</span>
      </button>

      <button className="categorias">
        <img src="https://i.ibb.co/Xx8Ltpky/image-28.png" alt="Maximalismo" />
        <span>MAXIMALISMO</span>
      </button>

      <button className="categorias">
        <img src="https://i.ibb.co/p7kW4fp/image-27.png" alt="Boho" />
        <span>BOHO</span>
      </button>

      <button className="categorias">
        <span>VER TUDO</span>
      </button>
    </section>
  );
}

export default Categories;
