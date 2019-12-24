import styled from "styled-components"

export const ProgressBar = styled.span`
  position: sticky;
  height: 115px;
  top: 150px;
  background-color: red;
  color: red;
  z-index: 3;
  transform: ${props => (props.show ? "none" : "translateY(-90%)")};
`
