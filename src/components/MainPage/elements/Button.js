import styled, { css } from "styled-components";

// this is called a tagged template literal, it's a new js feature. You can call functions this way, passing arguments between the ``
export default styled.button`
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  /* background: red; */
  /* background: ${props => (props.primary ? "red" : "green")}; */
  ${props =>
    props.color &&
    css`
      background: ${props => props.theme[props.color]};
    `}
  color: "#fff";
  &:hover {
    background: blue;
  }`;
