import { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Router from 'next/router'
import Progress from 'nprogress'
import Nav from '../components/nav';
// Global Styles
const GlobalStyle = createGlobalStyle`
 
html,body{
  margin:0;
  padding:0;  
  position:relative;
  height:100%;
  width:100%;
  font-size:24px;
  background:${props=>props.theme.primary};
  color:${props=>props.theme.color};
  transition:.3s ease-in-out;
}

*,:after,:before {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none
}

::-webkit-scrollbar {
    width: 14px;
    height: 14px
}

::-webkit-scrollbar-track {
    background-color: transparent
}

::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px
}

::-webkit-scrollbar-thumb {
    background-color: ${props=>props.theme.color}
}

::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0
}

::-webkit-scrollbar-corner {
    background-color: transparent
}
#__next{
  padding:0;
  margin:0;   
  font-family:sans-serif;
}
input[type="submit"] {
      padding: 5px 15px;
      background: #ccc;
      border: 0 none;
      cursor: pointer;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
    a{
      text-decoration:none;
      color:inherit;
      outline:none;
    }
    a:visited{
        font-weight:600;
    }
    .themeChanger{
        position:absolute;
        top:0px;
        right:0px;
        border:none;
        background:transparent;
        z-index:999999
    }
    i{
        cursor:pointer;
    }
    #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #5d9e6b;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #5d9e6b, 0 0 5px #5d9e6b;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
`; 
let progress
const stopProgress = () => {
    clearTimeout(progress)
    Progress.done()
}

Router.onRouteChangeStart = () => {
    progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

const light = {
    color: '#000',
    primary: '#fff',
    secondary: '#000',
    accent: '#5d9e6b'
};
const dark = {
    color: '#fff',
    primary: '#000',
    secondary: '#181a1d',
    accent: "#5d9e6b"
}

class Page extends Component {
    constructor() {
        super();
        this.state = { 
            theme: light
        } 
        this.handleKeypress = this.handleKeypress.bind(this)
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeypress, true)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeypress, true)
    }

    handleKeypress(event) {  
    if (event.altKey  && event.keyCode === 78 ) { 
      return Router.push({
        pathname: '/new'
      })
    }
    if (event.altKey && event.keyCode === 83 ) { 
      return Router.push({
        pathname: '/settings'
      })
    }
    
    if (event.altKey && event.keyCode === 37 ) { 
      return Router.push({
        pathname: '/home'
      })
    }
}


    render() {
        const { children } = this.props;
        return (
            <>
               <ThemeProvider theme={this.state.theme}>
                    <GlobalStyle />
                     <Nav OnThemeChange = {()=>{this.setState({theme: this.state.theme === light ? dark : light})}}/>
                    {children}
                </ThemeProvider>
            </>
        )
    }
}
export default Page