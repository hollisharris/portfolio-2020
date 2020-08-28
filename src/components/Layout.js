import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import '../styles/global.scss'

export default function Layout({ children, className }) {
  return (
    <div className={className}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}