import styled from "styled-components"

// HEADER - Main
export const NavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.3s ease-out;
  transform: ${props => (props.show ? "none" : "translateY(-100%)")};
  z-index: 9;
  backdrop-filter: blur(30px);
  opacity: 0.9;

  div {
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
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-out;
  transform: ${props => (props.show ? "none" : "translateY(-90%)")};
  z-index: 9;
  backdrop-filter: blur(30px);
  opacity: 0.9;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 450px) {
      .navigation {
        max-width: 450px;
        min-width: 450px;
        width: 450px;
      }
    }

    &.navigation {
      display: flex;
      position: relative;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      min-width: 320px;

      .navItems {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        flex: 1;
        width: 100%;
        text-align: left;

        a {
          padding: 0px 35px 0px 0px;
          font-weight: 900;
          letter-spacing: 5px;
        }
      }
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
  height: 100vh;
  border-right: none;
  border-left: none;
  display: grid;
  grid-template-areas:
    "a b b b b b b b b b c"
    "a b b b b b b b b b d";
  grid-auto-flow: row dense;
  min-width: 320px;
  overflow-x: hidden;
  z-index: 3;
`

// MAIN
export const MainBody2 = styled.main`
  height: 100vh;
  border-right: none;
  border-left: none;
  display: grid;
  position: fixed;
  grid-template-areas:
    "e f f f f f f f f f g"
    "e f f f f f f f f f h";
  grid-auto-flow: row dense;
  width: 100%;
  overflow-x: hidden;
  z-index: 1;

  top: 0;
`

// CONTAINER
export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
