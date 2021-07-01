import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  { createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/course/modules/1', () => {
      return[
        {
          id: 1,
          title: "HTML, CSS e Java Script",
          lessons: [
            {
              id: 1,
              title: "Desvendando a variável this no Javascript",
              video: "https://www.youtube.com/embed/GSqR2i-Pq6o"
            },
            {
              id: 2,
              title: "Array: Higher Order Functions",
              video: "https://www.youtube.com/embed/rAzHvYnQ8DY"
            },
            {
              id: 3,
              title: "Formulário Animado com JS puro e CSS Animation",
              video: "https://www.youtube.com/embed/GykTLqODQuU"
            },
            {
              id: 4,
              title: "Criando função Debounce do Zero com JavaScript",
              video: "https://www.youtube.com/embed/OyTPNNIy3pc"
            }
          ],
          "quantity": 4
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

