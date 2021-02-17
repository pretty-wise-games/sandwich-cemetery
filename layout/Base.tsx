import { ReactElement } from "react";
import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Ouroboros";
    font-style: normal;
    font-display: swap;
    src: local("Ouroboros-Regular"),
      url("/fonts/Ouroboros-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Sporting_Grotesque";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local("Sporting_Grotesque-Regular_web"),
      url("/fonts/Sporting_Grotesque-Regular_web.woff2") format("woff2");
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    cursor: url("/cursor/paw.svg"), auto;
    background-color: #ffeeaa;
    color: #222;
    font-family: "Sporting_Grotesque", -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  ::selection {
    background-color: pink;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ouroboros";
  }
`;

const BaseLayout = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BaseLayout;
