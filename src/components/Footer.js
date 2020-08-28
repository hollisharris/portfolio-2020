import React from "react"

export default function Footer() {
  return (
    <footer>
      <div className="container text-light">
        <div>
          &copy; {new Date().getFullYear()} Hollis Harris
        </div>
      </div>
    </footer>
  )
}