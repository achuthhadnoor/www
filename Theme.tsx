import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Icon from "react-icons-kit";
import { moon } from "react-icons-kit/feather/moon";
import { sun } from "react-icons-kit/feather/sun";

const LightTheme = {
  bg: '#fff',
  bg2: '#eee',
  color: '#121212',
  accent:'#0062ff',
  header: {
    bg: "rgba(255,255,255,.6)",
    color: "#121212",
    activeBg: "rgb(219 234 255 / 70%)",
    active: "#0062ff",
  },
};

const DarkTheme = {
  bg: '#000000',
  bg2: '#121212',
  color: '#eee',
  accent:"#cfca28",
  header: {
    bg: "rgba(0,0,0,.6)",
    color: "#f4f4f4",
    activeBg: "rgb(47 44 16 / 70%)",
    active: "#cfca28",
  },
};

const GlobalStyles = createGlobalStyle`   html,
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



`

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
