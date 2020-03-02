import styled from "styled-components"

// SEARCH INPUT
export const StyledSearchInput = styled.div`
  width: 100%;

  .effect-19 {
    border: none;
    height: 100%;
    width: 100%;
    transition: 0.2s;
    background: transparent;
    padding-left: 1rem;
  }

  .effect-19 ~ .focus-border:before,
  .effect-19 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.highlightcolor};
    transition: 0.2s;
  }

  .effect-19 ~ .focus-border:after {
    top: auto;
    bottom: -3px;
  }
  .effect-19 ~ .focus-border i:before,
  .effect-19 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${props => props.theme.highlightcolor};
    transition: 0.2s;
  }
  .effect-19 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-19:focus ~ .focus-border:before,
  .effect-19:focus ~ .focus-border:after,
  .has-content.effect-19 ~ .focus-border:before,
  .has-content.effect-19 ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-19:focus ~ .focus-border i:before,
  .effect-19:focus ~ .focus-border i:after,
  .has-content.effect-19 ~ .focus-border i:before,
  .has-content.effect-19 ~ .focus-border i:after {
    top: 1px;
    height: 100%;
    transition: 0.6s;
  }

  input[type="text"] {
    width: 100%;
  }
`

export const StyledSearchSubmit = styled.button`
  height: 100%;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.highlightcolor};
  border: none;
`

export const StyledSearchForm = styled.form`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`
