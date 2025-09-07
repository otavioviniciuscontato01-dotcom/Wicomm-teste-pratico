// src/components/InstitutionalVideo.jsx
import React from 'react';

function InstitutionalVideo() {
  return (
    <section className="institucional">
      <div className="textoDAER-esquerda">
        <div className="circulo-vermelho"></div>
        <h2 className="titulo-esquerdaDAER">Decorar Arranhar & Relaxar</h2>
      </div>

     <div className="video-imagem">
  <img src="https://i.ibb.co/cccNT9KD/Rectangle-100.png" alt="Vídeo institucional" />
  <div className="play-circulo">
    <img
      src="https://i.ibb.co/HfJNLxVF/play-button-svgrepo-com.png"
      alt="Play"
      className="play-icone"
    />
  </div>
      </div>

      <p className="descricao-video">
        Hammer can low idea of. Lunch able design items needle here stop drive. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.
      </p>

      <button className="btn-mais-sobre">MAIS SOBRE A GAT</button>
    </section>
  );
}

export default InstitutionalVideo;
