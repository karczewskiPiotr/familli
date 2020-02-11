import React from 'react'

export default function MobileOnly() {
  return (
    <div className="mobile-message">
      <div className="apology">
        <h1>SORRY</h1>
      </div>
      <div>
        <h3>
          For now, the app is only available on mobile browsers.
      </h3>
      </div>
    </div>
  )
}
