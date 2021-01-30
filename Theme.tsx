import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Icon from "react-icons-kit";
import { moon } from "react-icons-kit/feather/moon";
import { sun } from "react-icons-kit/feather/sun";
import reset from 'styled-reset'

const LightTheme = {
  bg: '#F5F5F5',
  bg2: '#eee',
  bg3:'#fff',
  color: '#121212',
  color2:'#333',
  color3:'#aaa',
  accent:'#0062ff',
  header: {
    bg: "rgb(242 242 242 / 60%)",
    color: "#121212",
    activeBg: "rgba(216, 227, 255, 0.57)",
    active: "#104B82",
  },
  blog:{
     bg:'#ffe8ec',
     color:'hotpink',
  },
  note:{
    bg:'#beffbe',
    color:'green',
  }
};

const DarkTheme = {
  bg: '#121212',
  bg2: '#222',
  bg3:"#212121",
  color: '#eee',
  color2:'#b8b8b8',
  color3:'#6d6d6d',
  accent:"#cfca28",
  header: {
    bg: "rgb(18 18 18 / 30%)",
    color: "#f4f4f4",
    activeBg: "rgb(47 44 16 / 70%)",
    active: "#cfca28",
  },
  blog:{
     bg:'#ffe8ec',
     color:'hotpink',
  },
  note:{
    bg:'#c7ffc7',
    color:'green',
  }
};

const GlobalStyles = createGlobalStyle`
  ${reset}
html,
body {
  padding: 0;
  margin: 0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,
    sans-serif;
  background:${(props) => props.theme.bg};
  color:${(props) => props.theme.color};
  scroll-behavior: smooth;
} 
* {
  box-sizing: border-box;
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
    background-color: ${(props) => props.theme.accent}
}
::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0
}
::-webkit-scrollbar-corner {
    background-color: transparent
}
a{
    text-decoration:none;
    color:inherit;
}
`;

export const ThemeContext = React.createContext({
  theme: LightTheme,
  setValue: (theme: any) => LightTheme,
});

export const ThemedWrapper = ({ children }) => {
  const [themeValue, setThemeValue] = useState(LightTheme);
  return (
    <ThemeContext.Provider
      value={{
        theme: themeValue, setValue: (theme) => {
          setThemeValue(theme)
          return theme
        }
      }}
    >
      <ThemeProvider theme={themeValue}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const ThemedButton = () => (
  <ThemeContext.Consumer>
    {({ theme, setValue }) => (
      <Button
        onClick={() => setValue(theme === LightTheme ? DarkTheme : LightTheme)}
        aria-label="theme"
      >
        <Icon icon={theme === LightTheme ? moon : sun} />
      </Button>
    )}
  </ThemeContext.Consumer>
);

const Button = styled.button`
  padding:0px;
  margin:0px;
  background:transparent;
  color:inherit;
  border:none;
  cursor:pointer;
  outline:none;
`;
