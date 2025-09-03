import React from 'react'

export default function EmailChain({ emails }) {
  return (
    <ul className="space-y-4">
      {emails.map((email, index) => (
        <li key={email.id} className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 font-bold">
            {index + 1}
          </div>
          <div>
            <p className="font-semibold">{email.from} → {email.to}</p>
            <p className="text-sm text-gray-500">{email.timestamp}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
