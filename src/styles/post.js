import styled from "styled-components"

export const HitList = styled.section`
  display: grid;
  grid-gap: 1rem;

  a {
    position: relative;
  }
`

export const PostPreview = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 275px;
`

export const Content = styled.div`
  display: grid;
  padding: 0.5rem;
  z-index: 2;
  max-width: 450px;

  /* @media (min-width: 700px) {
    max-width: ;
  } */
`

export const PostTitle = styled.h1`
  text-align: right;
  z-index: 2;
`

export const PostDate = styled.p`
  font-size: 9rem;
  color: ${props => props.theme.highlightcolor};
  font-weight: 900;
  height: 100%;
  text-align: right;
  z-index: 2;
`

export const PostExcerpt = styled.p`
  text-align: right;
  padding: 20px 7px 20px 20px;
  z-index: 2;
`

export const PostKeywords = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`
export const PostSubtitle = styled.h4`
  text-align: right;
  padding-top: 15px;
  padding-right: 10px;
`
