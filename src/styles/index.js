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

    &.navigation {
      display: flex;
      position: relative;
      flex-direction: row-reverse;
      align-items: center;
      width: 100%;

      .navItems {
        position: absolute;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        flex: 1;
        width: 100%;
        text-align: left;
        left: 0;

        a {
          padding: 0px 35px 0px 0px;
          font-weight: 900;
          letter-spacing: 5px;
        }
      }

      .brandLogo {
        display: flex;
        flex: 1;
        align-content: flex-end;
        padding-left: 125px;
        position: absolute;
        right: 0;
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
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s ease-in;
  transform: ${props => (props.show ? "none" : "translateY(100%)")};
  z-index: 2;
  backdrop-filter: blur(30px);
  opacity: 0.9;

  @media (min-width: 700px) {
  }
`
