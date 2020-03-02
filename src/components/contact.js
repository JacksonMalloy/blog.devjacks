import React from "react"
import { navigate } from "gatsby-link"
import { StyledSearchInput } from "../styles/search"
import styled from "styled-components"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 5fr 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  position: relative;
  height: 100%;
  grid-row-gap: 4rem;
  justify-content: space-between;
`

const StyledParagraph = styled.p`
  display: flex;
  margin: 0;

  label {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      width: 100%;
      justify-content: space-between;
    }

    textarea {
      width: 100%;
      max-height: 100%;
      min-height: 100%;
      min-width: 100%;
      max-width: 100%;
    }
  }
`

const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <StyledForm
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <StyledParagraph hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </StyledParagraph>
      <StyledParagraph>
        <label>
          Your name:
          <br />
          <div>
            <StyledSearchInput>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="effect-19"
              />
              <span className="focus-border">
                <i></i>
              </span>
            </StyledSearchInput>
          </div>
        </label>
      </StyledParagraph>
      <StyledParagraph>
        <label>
          Your email:
          <br />
          <div>
            <StyledSearchInput>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="effect-19"
              />
              <span className="focus-border">
                <i></i>
              </span>
            </StyledSearchInput>
          </div>
        </label>
      </StyledParagraph>
      <StyledParagraph>
        <label>
          Message:
          <br />
          <textarea name="message" onChange={handleChange} />
        </label>
      </StyledParagraph>
      <StyledParagraph>
        <button type="submit">Send</button>
      </StyledParagraph>
    </StyledForm>
  )
}

export default Contact
