import styled from 'styled-components'

// HEADER - Blog
export const StyledBlogNavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundcolor};
  transition: 0.1s ease-out;
  transform: ${(props) => (props.show ? 'none' : 'translateY(-90%)')};
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
      background-color: ${(props) => props.theme.highlightcolor};
      z-index: 3;
      flex: 1;
    }
  }
`

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
