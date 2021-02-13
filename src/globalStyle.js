import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000;
}

p{
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3 {
  font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;
