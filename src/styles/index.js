import styled from "styled-components"

// HEADER - Main
export const NavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.3s ease-out;
  transform: ${props => (props.show ? "none" : "translateY(-100%)")};
  z-index: 2;
`

// HEADER - Blog
export const BlogNavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
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
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-in;
  transform: ${props => (props.show ? "none" : "translateY(100%)")};
  z-index: 2;
`
