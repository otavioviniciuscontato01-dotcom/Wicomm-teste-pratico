// src/components/Community.jsx
import React from 'react';

function Community() {
  return (
    <section className="comunidade">
      <p className="texto-comunidade">
        Faça parte da comunidade de gatunos que amam<br />design e papelão compartilhando a hashtag:
      </p>
      <h2 className="hashtag">#AdoradoresDePapelão</h2>

      <div className="cards-comunidade">
        <div className="card">
          <img src="https://i.ibb.co/YB6yydCc/Rectangle-55.png" alt="Gato 1" />
          <div className="like">
            <div className="heart"></div>
            <span>10mil</span>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/fGD2NkmJ/Rectangle-56.png" alt="Gato 2" />
          <div className="like">
            <div className="heart"></div>
            <span>10mil</span>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/7NgvmNvM/Rectangle-57.png" alt="Gato 3" />
          <div className="like">
            <div className="heart"></div>
            <span>10mil</span>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/CshBGV0c/Rectangle-58.png" alt="Gato 4" />
          <div className="like">
            <div className="heart"></div>
            <span>10mil</span>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/5dq0HSN/Group-40.png" alt="Gato 5" />
          <div className="like">
            <div className="heart"></div>
            <span>10mil</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
