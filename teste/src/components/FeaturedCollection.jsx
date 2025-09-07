// src/components/FeaturedCollection.jsx
import React from 'react';

function FeaturedCollection() {
  return (
    <section className="destaque-colecao">
      <div className="fundo-imagem"></div>

      <div className="coleça-info">
        <h2>Lorem Ipsum Dolor Sit</h2>
        <p className="descricao-SELEÇÃO">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <button className="btn-VER">VER SELEÇÃO</button>
      </div>

<div className="numeros">
  <div className="numero-wrapper num1">
    <div className="numero">1</div>
    <div className="tooltip">Informações sobre o item 1</div>
  </div>

  <div className="numero-wrapper num2">
    <div className="numero">2</div>
    <div className="tooltip">Informações sobre o item 2</div>
  </div>

  <div className="numero-wrapper num3">
    <div className="numero">3</div>
    <div className="tooltip">Informações sobre o item 3</div>
  </div>

  <div className="numero-wrapper num4">
    <div className="numero">4</div>
    <div className="tooltip">Informações sobre o item 4</div>
  </div>

  <div className="numero-wrapper num5">
    <div className="numero">5</div>
    <div className="tooltip">Informações sobre o item 5</div>
  </div>
</div>
</section>
  )
}
export default FeaturedCollection;