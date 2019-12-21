import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  return (
    <Link to={hit.slug}>
      <h3>
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </h3>
      <small>{new Date(hit.date).toLocaleDateString()}</small>

      <p>
        <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p>
    </Link>
  )
}

export default PostPreview
