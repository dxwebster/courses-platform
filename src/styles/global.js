import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
  height: 100vh;
  line-height: 1.5em;
}
h1,
input,
button {
  border: none;
}

textarea:focus,
input:focus, 
button:focus{
    outline: none;
}

li {
  list-style: none;
}

h1 {
  font-size: 24px;
}

h3 {
  font-size: 18px;
}

a{
  text-decoration: none;
}

`;
