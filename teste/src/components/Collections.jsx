// src/components/Collections.jsx
import React from 'react';

function Collections() {
  return (
    <section className="geral-colecoes">
      <div className="gc"></div>
      <h2 className="nome-coleções">COLEÇÕES</h2>
      <a href="#" className="ver-todas">ver todas</a>
      <div className="imagem-5"></div>
      <h1 className="titulo-colecao">MINIMA<br />LISMO</h1>
      <p className="descricao-colecao">
        Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.
      </p>
      <button className="btn-explorar">EXPLORAR</button>
      <div className="forma-33"></div>
      <div className="forma-34"></div>
      <div className="imagem-25"></div>

      <label className="icone-mais">
        <input type="checkbox" className="toggle-info" />
        <div className="circulo-mais">
          <span className="ponto-mais">+</span>
        </div>
        <div className="caixa-info">
          Informações sobre
        </div>
      </label>
    </section>
  );
}


export default Collections;
