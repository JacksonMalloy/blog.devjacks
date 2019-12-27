import styled from "styled-components"

export const HitList = styled.section`
  display: grid;
  grid-gap: 1rem;
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
`

export const PostTitle = styled.h1`
  text-align: center;
`

export const PostDate = styled.p`
  font-size: 9rem;
  color: ${props => props.theme.highlightcolor};
  font-weight: 900;
  height: 100%;
  text-align: center;
`

export const PostExcerpt = styled.p`
  text-align: center;
  padding: 20px;
`
