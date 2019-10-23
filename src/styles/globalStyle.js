import { createGlobalStyle } from "styled-components";
import JosefinSlab from "../fonts/JosefinSlab-Regular.ttf";
import JosefinSlabBold from "../fonts/JosefinSlab-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: "Josefin Slab";
    src: url(${JosefinSlab})
  }

  @font-face{
    font-family: "Josefin Slab";
    src: url(${JosefinSlabBold})
    font-style: bold;
  }

  body, html {

    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Josefin Slab", serif;
          
    select, textarea, input, button {
      font-family: inherit; 
      font-size: inherit;
    }

  }  
  
  body {
    overflow-x: hidden;
  }
`;