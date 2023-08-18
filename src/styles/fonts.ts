import { css, injectGlobal } from "@emotion/css";

injectGlobal`
 * {
    box-sizing: border-box;
    font-family: 'Poppins';
    letter-spacing: 0.02em;
    line-height: 120%;
    letter-spacing: 0;
    color: #83879B;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('assets/fonts/Poppins-Regular.eot');
    src: local('assets/fonts/Poppins Regular'), local('assets/fonts/Poppins-Regular'),
      url('assets/fonts/Poppins-Regular.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/Poppins-Regular.woff') format('woff'),
      url('assets/fonts/Poppins-Regular.woff2') format('woff2'),
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
      url('assets/fonts/Poppins-Bold.woff2') format('woff2'),
      url('assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('assets/fonts/Poppins-ExtraBold.eot');
    src: local('assets/fonts/Poppins ExtraBold'), local('assets/fonts/Poppins-Bold'),
      url('assets/fonts/Poppins-ExtraBold.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/Poppins-ExtraBold.woff') format('woff'),
      url('assets/fonts/Poppins-ExtraBold.woff2') format('woff2'),
      url('assets/fonts/Poppins-ExtraBold.ttf') format('truetype');
    font-weight: 800;
  }
`;
