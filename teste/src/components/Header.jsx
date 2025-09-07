// src/components/Header.jsx
import React from 'react';
// import './styles/Header.css'; // Se você quiser CSS específico para o Header

function Header() {
  return (
    <header className="nav-hdr">
      <div className="nav-bg-left"></div>
      <div className="nav-bg-right"></div>

      <div className="logo">
        <img src="https://i.ibb.co/39v0T6K7/horizontal.png" alt="Logo" />
      </div>

      <div className="menu-produtos">
        <div className="menu-icon">
          <img src="https://i.ibb.co/S707XgQ6/menu-01.png" alt="Ícone produtos" />
        </div>
        <span className="menu-text">produtos</span>
      </div>

      <div className="menu-colecoes">
        <div className="menu-icon">
          <img src="https://i.ibb.co/yBmwvqSL/menu-02.png" alt="Ícone coleções" />
        </div>
        <span className="menu-text">coleções</span>
      </div>

      <nav className="menu-maior">
        <span>Blog</span>
        <span>Lookbook</span>
        <span>Sobre a Gat</span>
        <span>Wishlist</span>
      </nav>

      <div className="busca">
        <img className="search-icon" src="https://i.ibb.co/GZmrKzv/search.png" alt="Ícone de busca" />
        <span className="search-text">Digite aqui o que procura</span>
      </div>

      <div className="conta">
        <div className="user-icon">
          <img src="https://i.ibb.co/BVbkpcWs/user.png" alt="Ícone de usuário" />
        </div>
      </div>

      {/* Fechamento de div extra no HTML original, removido aqui para correção */}
      {/* <div className="carrinho-icon"> está fora do div que foi fechado incorretamente */}
      {/* O HTML original tinha um </div> extra aqui que fechava um div não aberto */}
      {/* Removido: </div> </div> */}

      <div className="carrinho-icon">
        <img src="https://i.ibb.co/WpYRgV9K/cart.png" alt="Ícone de carrinho" />
        <div className="notification"></div>
      </div>
    </header>
  );
}

export default Header;
