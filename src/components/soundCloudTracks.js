import React from "react"
import SoundCloudPlayer from "../components/soundCloudPlayer"

const SoundCloudTracks = ({ url, theme }) => {
  return (
    <>
      <SoundCloudPlayer
        url={[
          "https://soundcloud.com/moonmelt/all-i-see-is-you-ft-brianna-rose",
        ]}
      />
      <SoundCloudPlayer
        url={["https://soundcloud.com/moonmelt/lunar_lullaby"]}
      />
      <SoundCloudPlayer
        url={["https://soundcloud.com/moonmelt/closer-ft-brianna-rose"]}
      />
      <SoundCloudPlayer
        url={[
          "https://soundcloud.com/moonmelt/pablo-nouvelle-i-will-moonmelt-remix-1",
        ]}
      />
      <SoundCloudPlayer
        url={["https://soundcloud.com/moonmelt/space-junk-vol-1"]}
      />
      <SoundCloudPlayer
        url={["https://soundcloud.com/moonmelt/space-junk-vol-2"]}
      />
    </>
  )
}

export default SoundCloudTracks
