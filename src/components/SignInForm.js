import { useState } from 'react'
import { useDispatch } from "react-redux"
import { setUser } from '../app/slices'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setCheck] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = () => {
        setCheck((checked) => (!checked))
        console.log(checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3001/api/v1/user/login", {email, password})
        .then(response => {
            console.log(response.data)
            if (checked) {
                localStorage.setItem('token', response.data.body.token)
            } else {
                sessionStorage.setItem('token', response.data.body.token)
            }
            axios.defaults.headers["Authorization"]=`Bearer ${response.data.body.token}`
            axios.post("http://localhost:3001/api/v1/user/profile")
            .then(response => {
                console.log(response.data)
                dispatch(setUser(response.data.body))
                navigate("/profil")
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form
                className="form-login"
                onSubmit={handleSubmit}
                >
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox"
                        id="remember-me"
                        checked={checked}
                        onChange={handleChange}
                        />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}

export default SignInForm