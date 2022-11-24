import React, { useEffect } from 'react'
import Header from "../components/Header"
import HeaderMain from '../components/HeaderMain'
import Account from '../components/Account'
import Footer from "../components/Footer"
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../app/slices'
import axios from 'axios'

function UserProfil() {

    const state = useSelector((state) => state)
    let token = null
    if (localStorage.getItem('token')) {
        token = localStorage.getItem('token')
    } else if (sessionStorage.getItem('token')) {
        token = sessionStorage.getItem('token')
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        axios.post(
        "http://localhost:3001/api/v1/user/profile",
        state, { 
            headers: {
                'Authorization': `Bearer ${token}`
        }
        })
        .then((response) => {
            dispatch(setUser(response.data.body))
        })
        .catch((err) => {
            console.log(err)
        })

        if(!token) {
            navigate('/')
        }
    }, [navigate, dispatch, token, state]);

    const AccountData = [
        {
            "title": "Argent Bank Checking (x8349)",
            "amount": "$2,082.79",
            "description": "Available Balance"
        },
        {
            "title": "Argent Bank Savings (x6712)",
            "amount": "$10,928.42",
            "description": "Available Balance"
        },
        {
            "title": "Argent Bank Credit Card (x8349)",
            "amount": "$184.30",
            "description": "Current Balance"
        },
    ]

    return (
        <React.Fragment>
            <Header login={true} />
            <main className="main bg-dark">
                <HeaderMain />
                <h2 className="sr-only">Accounts</h2>
                {AccountData.map((account) => {
                    return <Account key={account.title} title={account.title} amount={account.amount} description={account.description} />
                })}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default UserProfil