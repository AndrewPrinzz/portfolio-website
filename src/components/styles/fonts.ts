import { css, injectGlobal } from "@emotion/css";

injectGlobal`
 * {
    box-sizing: border-box;
    font-family: 'Poppins';
    letter-spacing: 0.02em;
    line-height: 120%;
    letter-spacing: 0;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('assets/fonts/Poppins-Regular.eot');
    src: local('assets/fonts/Poppins Regular'), local('assets/fonts/Poppins-Regular'),
      url('assets/fonts/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/Poppins-Regular.woff') format('woff'),
      url('assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('assets/fonts/Poppins-Bold.eot');
    src: local('assets/fonts/Poppins Bold'), local('assets/fonts/Poppins-Bold'),
      url('assets/fonts/Poppins-Bold.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/Poppins-Bold.woff') format('woff'),
      url('assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
