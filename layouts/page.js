import { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
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
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
    background:${props => props.theme.background};
    color:${props => props.theme.color};
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
        background-color: ${props => props.theme.color}
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
        main {
          padding: 5rem 0;
          flex: 1; 
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: palegreen;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }
 
        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: palegreen;
          border-color: palegreen;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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

export const theme = {
    light: {
        background: '#fefefe',
        color: '#121212',
        tint:'rgba(0,0,0,.1)',
        accent:'palegreen'
    },
    dark: {
        background: '#001321',
        color: '#fefefe',
        tint:'rgba(4,4,4,.7)',
        accent:'palegreen'
    }
}
class Page extends Component {
    constructor() {
        super();
        this.state = {
            theme: theme.dark
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
        if (event.altKey && event.keyCode === 78) {
            return Router.push({
                pathname: '/new'
            })
        }
        if (event.altKey && event.keyCode === 83) {
            return Router.push({
                pathname: '/settings'
            })
        }

        if (event.altKey && event.keyCode === 37) {
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
                    <Wrapper>
                        <Nav theme={this.state.theme} changeTheme={() => { this.setState({ theme: this.state.theme === theme.light ? theme.dark : theme.light }) }} />
                        {children}
                    </Wrapper>
                </ThemeProvider>
            </>
        )
    }
}
export default Page;

const Wrapper = styled.div`
    max-width:800px;
    margin:auto;
    font-size:18px;
`