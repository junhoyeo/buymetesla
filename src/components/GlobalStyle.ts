import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif !important;
    user-select: none;
    -webkit-user-drag: none;
  }

  body {
    margin: 0;
  }
`;
