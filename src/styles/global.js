import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #121212 no-repeat 70% top;
  background-size: 100vh;
  -webkit-font-smoothing: antialiased;
}

body, input , button {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

input[type="number"] {
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}


button {
  padding: 0.3rem 1rem;
  border: 0;
  color: #333;
  font-weight: 600;
  border-radius: 0.3rem;
  background-color: #c38efe;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#c38efe')};
  }
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
`;
