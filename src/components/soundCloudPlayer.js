import React from "react"
import ReactPlayer from "react-player"

const SoundCloudPlayer = ({ url }) => {
  return (
    <ReactPlayer url={url} playing={false} width={"100%"} height={"100%"} />
  )
}

export default SoundCloudPlayer
