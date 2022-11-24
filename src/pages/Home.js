import React from "react"
import Header from '../components/Header'
import Opening from "../components/Opening"
import Features from "../components/Features"
import Footer from "../components/Footer"

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <Opening />
        <Features />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home;