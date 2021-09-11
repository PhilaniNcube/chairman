import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --blue: #4472CA;
    --black: #001011;
    --red: #D00000;
    --white: #FFFDFD;
}


  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
}


article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1.4;
    color: var(--black);
    font-family: 'Glory', sans-serif;
}

h1, h2, h3, h4 {
    line-height: 1.1;
    font-family: 'Fjalla One', sans-serif;
}

ol, ul, li {
	list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}


input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
}

audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
}

[hidden] {
    display: none;
}

html {
    font-size: 100%; 
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%; 
}


a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0; 
    -ms-interpolation-mode: bicubic; 
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0; 
    vertical-align: baseline;
    *vertical-align: middle; 
}

button,
input {
    line-height: normal;
}

button,
select {
    text-transform: none;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    *height: 13px;
    *width: 13px; 
}


img {
    vertical-align: middle;
}


.container {
    width: 90%;
    max-width: 1280px;
    min-width: 270px;
    margin: auto;
}

.heading {
    font-size: clamp(2.5rem, 1.5644rem + 5.5446vw, 6rem);
}

.sub-heading {
    font-size: clamp(1.8rem, 1.3455rem + 2.6931vw, 3.5rem);
    line-height: 1;
    
}
`;

export default GlobalStyle;
