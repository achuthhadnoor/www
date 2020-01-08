import App from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Icon from 'react-icons-kit'
import {moon} from 'react-icons-kit/feather'
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
const dark = {
    primary : '#000',
    color:'#fff'
} 
const light = {
    primary : '#fff',
    color:'#000'
} 
class Mainapp extends App {
    constructor(){
        super();
        this.state = {
            theme:light
        }
    }
    render() {
        const { Component } = this.props;
        return (
            <>
            <ThemeProvider theme={this.state.theme}>
            <Icon icon={moon} onClick={()=>{this.setState({theme: this.state.theme === light ? dark : light})}}/>
                <GlobalStyle/> 
                <Nav />
                <Component /> 
            </ThemeProvider>
            </>
        );
    }
}

export default Mainapp;