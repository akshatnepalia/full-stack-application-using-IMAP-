import React from 'react'
import EmailChain from './EmailChain'
import ESPTypeBadge from './ESPTypeBadge'

export default function Dashboard() {
  const sampleEmails = [
    { id: 1, from: "gmail.com", to: "yahoo.com", timestamp: "2025-09-01 10:00", esp: "Gmail" },
    { id: 2, from: "yahoo.com", to: "outlook.com", timestamp: "2025-09-01 10:02", esp: "Yahoo" },
    { id: 3, from: "outlook.com", to: "zoho.com", timestamp: "2025-09-01 10:05", esp: "Outlook" },
  ]

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Email Receiving Chain</h2>
      <EmailChain emails={sampleEmails} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold">ESP Types</h3>
        <div className="flex gap-2 mt-2">
          {sampleEmails.map(email => (
            <ESPTypeBadge key={email.id} esp={email.esp} />
          ))}
        </div>
      </div>
    </div>
  )
}
