import React from "react"
import { PathBlack, PathBlue, PolylineBlack } from "./styles"

function BrandLogo() {
  return (
    <svg viewBox="0 0 400 610" style={{ height: "40px", paddingRight: "20px" }}>
      <PathBlack d="M233.76,5.27H306V379.54c0,148.54-73,194.18-169.29,194.18-26.56,0-58.92-5.8-77.18-13.27l10.79-58.92c14.94,5.81,36.51,10.79,60.58,10.79,64.73,0,102.9-29.05,102.9-138.59Z" />
      <PathBlue d="M267.36,38.87h72.2V413.13c0,148.55-73,194.19-169.29,194.19-26.56,0-58.92-5.81-77.18-13.27l10.79-58.92c14.94,5.8,36.51,10.78,60.58,10.78,64.73,0,102.9-29,102.9-138.58Z" />
      <PolylineBlack points="59.52 560.49 92.72 593.69 97.44 570.3" />
      <PolylineBlack points="305.5 5 339.48 39.3 305.17 38.87 305.17 5.53 305.5 5 305.5 5 305.5 5 305.5 5" />
    </svg>
  )
}

export default BrandLogo
