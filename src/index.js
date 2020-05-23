import Abacate from "./Abacate";

const App = (
  <div style="text-align:center; border: 4px solid darkred; padding:13px; font-size:2rem; font-family: Palatino, serif">
    <h1 style="color:#7B9243">
      Abacate funciona de forma parecida com o React
    </h1>
    <span style="display:block">Composto essencialmente por duas funções:</span>
    <ul style="list-style:none; padding:0;">
      <li>
        <b>Create element</b>: identifica o tipo de elemento e cria com as
        respectivas propriedades
      </li>
      <li>
        <b>Render</b>: responsável por adicionar o elemento ao DOM no container
        indicado
      </li>
    </ul>
    <img
      style="width:50%"
      src="https://i.pinimg.com/originals/57/fd/3b/57fd3ba86db5ece487465216a432a411.jpg"
    />
  </div>
);

const container = document.getElementById("root");

Abacate.render(App, container);
