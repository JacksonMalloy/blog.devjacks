import styled from "styled-components"

// HEADER
export const NavigationHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.3s linear;
  transform: ${props => (props.show ? "none" : "translateY(-100%)")};
`

// MAIN
export const MainBody = styled.main`
  margin-top: 50px;
  height: auto;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

// CONTAINER
export const Container = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
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
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundcolor};
  transition: 0.1s linear;
  transform: ${props => (props.show ? "none" : "translateY(100%)")};
`

export const PostList = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin-top: calc(50px + 1rem);
  width: 100%;
`

export const PostContent = styled.section`
  margin-top: calc(50px + 1rem);
  width: 100%;
  display: grid;
`

export const SinglePost = styled.article`
  display: grid;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 275px;
  border: 1px solid black;
`
