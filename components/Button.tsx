// Reusable button component used throughout the project. It has a default styling
// so that there is consistency with the colors, and easier changes if needed

import { hoverStyles } from "@/constants"

const Button = ({
  title,
  inline,
  margin,
  overridePadding,
}: {
  title: string
  inline?: boolean
  margin?: string
  overridePadding?: string
}) => (
  // Optional editing capabilities of the button
  <button
    className={`bg-[#1F1F2D] 
      max-w-fit rounded-full smallCaps
      ${hoverStyles} selection:bg-transparent
      ${margin || ""} 
      ${overridePadding || "px-5 py-3"}
        ${inline ? "inline-block" : ""}`}
  >
    {title}
  </button>
)

export default Button
