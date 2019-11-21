import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "../../styles/App.css";
import Button from "./elements/Button";

const theme = {
  primary: "teal",
  secondary: "green",
  alert: "yellow",
  font: "sans-serif",
  color: "red"
};

const Button2 = styled.button`
  color: red;
  background: ${props => props.theme.primary};
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color};
`;

const Practice = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Practice">
        <H1>Styled Components</H1>
        <form action="">
          <input type="text" />
          <button>Create without Styled Components</button>
          <br />
          <Button color="secondary">Create with Styled Components</Button>
          <br />
          <Button2>Practice</Button2>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Practice;
