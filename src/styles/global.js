import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
  

  .app {
    width: 100%;
  }
  
  .app-content {
    display: flex;
  }
  
  .sidebar {
    width: 300px;
    background: #212121;
    color: white;
    transition: width ease .3s;
    padding: 0 20px 15px 20px;
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 9999;
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }
  
  .sidebar.hidden {
    width: 0px;
    padding: 0px;
  }
  
  .sidebar.hidden .location-list {
    display: none;
  }
  
  .sidebar.hidden .input-wrapper {
    display: none;
  }
  
  .sidebar .input-wrapper {
    width: 100%;
    margin-right: 80px;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 15px;
  }
  
  .sidebar .input-wrapper input {
    width: 100%;
    height: 40px;
    border: 2px solid #fff;
    text-indent: 20px;
    font-weight: 600;
    color: #000;
    transition: border ease .3s
  }
  .sidebar .input-wrapper input:hover,
  .sidebar .input-wrapper input:focus {
    border: 2px solid #6991fd;
}
.sidebar .input-wrapper input::placeholder {
  color: #000;
}
  .sidebar .location-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    display: block;
    justify-content: left;
    flex-wrap: wrap;
  }
  .sidebar .location:hover {
    text-decoration: underline;
}
.content {
  margin-top: 50px;
}
  .sidebar .location-list li {
    font-size: 0.9em;
    padding: 0 0 20px 0px;
    text-align: left;
  }
  
  .sidebar .location {
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
  }
  
  .sidebar .location.selected {
    color: #00e64d;
    text-decoration: underline;
  }
  
  .content {
    flex-grow: 1;
  }
  
  .content .navbar {
    background-color: #222;
    color: white;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 9999999;
    width: 100%;
  }
  
  .content .navbar .sidebarLink {
    cursor: pointer;
    color: #fff;
    background: transparent;
    border: none;
    outline: none;
    font-size: 32px;
    position: absolute;
    left: 20px;
  }
  
  .content .navbar .title {
    text-align: center;
    flex: 1;
  }
  
  .app-header {
    background-color: #222;
    height: 40px;
    padding-top: 10px;
    color: white;
  }
  
  .app-title {
    font-size: 1.5em;
  }
  
  .App-intro {
    font-size: large;
  }
  
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media screen and (max-width: 415px) {
    .sidebar {
      width: 100%;
    }
    .sidebar:not(.hidden) ~ .content {

    }
    .content .navbar .title {
      font-size: 12px;
    }
    .content .navbar .sidebarLink {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 321px) {
    .content .navbar .sidebarLink {
      position: relative;
    }
    .content .navbar {
      justify-content: space-around;
    }
  }
`;

export default GlobalStyle;
