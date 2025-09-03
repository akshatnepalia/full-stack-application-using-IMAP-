import React from 'react'

export default function ESPTypeBadge({ esp }) {
  const colors = {
    Gmail: "bg-red-100 text-red-600",
    Yahoo: "bg-purple-100 text-purple-600",
    Outlook: "bg-blue-100 text-blue-600",
    Zoho: "bg-green-100 text-green-600",
    Default: "bg-gray-100 text-gray-600"
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[esp] || colors.Default}`}>
      {esp}
    </span>
  )
}
