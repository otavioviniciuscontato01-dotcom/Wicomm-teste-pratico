// src/components/Store.jsx
import React from 'react';

function Store() {
  return (
    <section className="loja-grupo">
      <div className="grupo-queridinho">
        <div className="circulo-amarelo"></div>
        <h2 className="titulo-queridinho">Queri dinho deles</h2>
        <button className="btn-ver-tudo">VER TUDO</button>
</div>


      <section className="produtos-lojapai">
        {/* Produto 1 */}
  <div className="produto-loja">
  <div className="tag-azul">10% OFF</div>
  <div className="tag-vermelha">LANÇAMENTO</div>
  <div className="imagem-produto"></div>

    <button className="btn-carrinho">
    <span className="texto-btn">ADICIONAR AO CARRINHO</span>
    <img
      src="https://i.ibb.co/kspRrJsp/cesta-de-compras.png" 
      alt="Carrinho"
      className="icone-carrinho"
    />
  </button>

    <h3 className="titulo-produto">Toca Túnel Módulos</h3>
    <div className="variacoes">
    <div className="cor cor-1"></div>
    <div className="cor cor-2"></div>
    <div className="cor cor-3"></div>
    <div className="cor cor-4"></div>
  </div>
    <div className="precos">
    <span className="preco-antigo">R$00,00</span>
    <span className="preco-novo">R$0000,00</span>
  </div>
</div>


        {/* Produto 2 */}
  <div className="produto-loja">
  <div className="tag-azul">10% OFF</div>
  <div className="tag-vermelha">LANÇAMENTO</div>
  <div className="imagem-produto"></div>

  <button className="btn-carrinho">
    <span className="texto-btn">ADICIONAR AO CARRINHO</span>
    <img
      src="https://i.ibb.co/kspRrJsp/cesta-de-compras.png" 
      alt="Carrinho"
      className="icone-carrinho"
    />
  </button>

    <h3 className="titulo-produto">Toca Túnel Módulos</h3>
    <div className="variacoes">
    <div className="cor cor-1"></div>
    <div className="cor cor-2"></div>
    <div className="cor cor-3"></div>
    <div className="cor cor-4"></div>
  </div>
    <div className="precos">
    <span className="preco-antigo">R$00,00</span>
    <span className="preco-novo">R$0000,00</span>
  </div>
</div>


        {/* Produto 3 */}
  <div className="produto-loja">
  <div className="tag-azul">10% OFF</div>
  <div className="tag-vermelha">LANÇAMENTO</div>
  <div className="imagem-produto"></div>

  <button className="btn-carrinho">
    <span className="texto-btn">ADICIONAR AO CARRINHO</span>
    <img
      src="https://i.ibb.co/kspRrJsp/cesta-de-compras.png"
      alt="Carrinho"
      className="icone-carrinho"
    />
  </button>

   <h3 className="titulo-produto">Toca Túnel Módulos</h3>
    <div className="variacoes">
    <div className="cor cor-1"></div>
    <div className="cor cor-2"></div>
    <div className="cor cor-3"></div>
    <div className="cor cor-4"></div>
  </div>
    <div className="precos">
    <span className="preco-antigo">R$00,00</span>
    <span className="preco-novo">R$0000,00</span>
  </div>
</div>

      </section>

      <h2 className="titulo-navegue">NAVEGUE PELAS CATEGORIAS</h2>
    </section>
  );
  
}

export default Store;
