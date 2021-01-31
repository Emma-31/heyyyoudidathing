import React from "react"
import { Link } from "gatsby"
import Header from "/Users/Emma/hello-world/src/pages/components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}