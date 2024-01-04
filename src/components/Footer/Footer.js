import React from 'react'

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer style={{background:"#1d3557"}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="mb-0 text-white text-center">&copy; {year}. All Rights Are Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}