// src/components/Newsletter.jsx
import React from 'react';

function Newsletter() {
  return (
    <section className="optin">
      <div className="linha-superior"></div>
      <div className="imagem-nl"></div>
      <h2 className="titulo-nl">NEWSLETTER</h2>
      <p className="subtitulo-nl">CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</p>
      <p className="descricao-nl">Seja a primeira a receber lançamentos, novidades e promoções.</p>

      <label className="inf-pet" htmlFor="petName">Nome do seu pet</label>
      <div className="linha linha-2"></div> {/* Isso parece ser uma linha de estilo, não um input */}
      {/* Se for um input, adicione: <input type="text" id="petName" /> */}

      <label className="inf-email" htmlFor="userEmail">Seu email</label>
      <div className="linha linha-3"></div> {/* Isso parece ser uma linha de estilo, não um input */}
      {/* Se for um input, adicione: <input type="email" id="userEmail" /> */}

      <button className="btn-cadastrar">CADASTRAR</button>
    </section>
  );
}

export default Newsletter;
