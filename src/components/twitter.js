import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledTweet = styled.article`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  margin-left: 2rem;
  border-radius: 1rem;

  .tweet {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 3fr;
    height: 100%;

    img {
      border-radius: 50%;
      grid-column: 1;
      grid-row: 1;
      align-self: center;
    }

    .createdAt {
      grid-column: 2;
      grid-row: 1;
      align-self: center;
    }

    span {
      padding-top: 1rem;
      grid-column: 1 / span 2;
      grid-row: 2;
    }
  }
`

const Twitter = props => {
  const data = useStaticQuery(graphql`
    query TwitterFeed {
      allTwitterStatusesUserTimelineDevjacks {
        edges {
          node {
            retweeted
            created_at
            full_text
            entities {
              hashtags {
                text
              }
              user_mentions {
                screen_name
                name
              }
            }
          }
        }
      }
      twitterStatusesUserTimelineDevjacks {
        user {
          profile_image_url_https
          profile_background_color
          profile_background_tile
          profile_link_color
          profile_sidebar_border_color
          profile_sidebar_fill_color
          profile_text_color
        }
      }
    }
  `)

  const user = data.twitterStatusesUserTimelineDevjacks.user

  const tweets = data.allTwitterStatusesUserTimelineDevjacks.edges.map(
    (node, i) => {
      const {
        node: { created_at, full_text },
      } = node

      return (
        <a
          href="https://www.twitter.com/devjacks"
          target="_blank"
          rel="noopener norefferer"
        >
          <StyledTweet key={i}>
            <div className="tweet">
              <img src={user.profile_image_url_https} />
              <small className="createdAt">{created_at}</small>
              <span>{full_text}</span>
            </div>
          </StyledTweet>
        </a>
      )
    }
  )

  return <>{tweets}</>
}

export default Twitter
