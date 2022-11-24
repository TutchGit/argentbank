import React from "react"
import Header from "../components/Header"
import SignInForm from "../components/SignInForm"
import Footer from "../components/Footer"

function Login() {
    return (
        <React.Fragment>
            <Header />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Login