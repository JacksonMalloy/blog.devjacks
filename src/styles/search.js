import styled from "styled-components"

export const SearchInput = styled.input`
  border: none;

  color: ${props => props.theme.subprimary};
  background-color: inherit;

  &:focus {
    border: none;
    outline: none;
    -webkit-backdrop-filter: blur(80px);
    backdrop-filter: blur(80px);
  }
`
