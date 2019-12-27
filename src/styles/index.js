import styled from "styled-components"

// HEADER - Main
export const NavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.3s ease-out;
  transform: ${props => (props.show ? "none" : "translateY(-100%)")};
  z-index: 9;

  div {
    background-color: ${props => props.theme.backgroundcolor};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

// HEADER - Blog
export const BlogNavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-out;
  transform: ${props => (props.show ? "none" : "translateY(-90%)")};
  z-index: 2;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    a {
      flex: 12;
    }

    &.reading-progress-bar {
      position: absolute;
      height: 5px;
      bottom: 0px;
      background-color: ${props => props.theme.highlightcolor};
      z-index: 3;
      flex: 1;
    }
  }
`

// MAIN
export const MainBody = styled.main`
  margin-top: 50px;
  height: auto;
  border-right: none;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  overflow-x: hidden;
`

// CONTAINER
export const Container = styled.div`
  height: 100%;
  border-right: none;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

// FOOTER
export const NavigationFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-in;
  transform: ${props => (props.show ? "none" : "translateY(100%)")};
  z-index: 2;
`
// SEARCH INPUT
export const SearchInput = styled.div`
  width: 100%;

  .effect-19 {
    border: none;
    height: 100%;
    width: 100%;
    transition: 0.4s;
    background: transparent;

    ::placeholder {
      padding: 0px 10px;
    }
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
    transition: 0.4s;
  }
  .effect-19 ~ .focus-border:after {
    top: auto;
    bottom: 0;
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
    transition: 0.6s;
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
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }

  /* necessary to give position: relative to parent. */
  input[type="text"] {
    width: 100%;
    padding: 0px 10px;
  }
`

export const SearchSubmit = styled.button`
  height: 100%;
`

export const SearchForm = styled.form`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`
