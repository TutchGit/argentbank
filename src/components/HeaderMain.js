import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from '../app/slices'

function HeaderMain() {

    const dispatch = useDispatch()

    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    let token = null
    if (localStorage.getItem('token')) {
        token = localStorage.getItem('token')
    } else if (sessionStorage.getItem('token')) {
        token = sessionStorage.getItem('token')
    }

    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()

    const [editButton, setEditButton] = useState('')

    const editName = (e) => {
        e.preventDefault()
        setEditButton((current) => (!current))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.put(
            "http://localhost:3001/api/v1/user/profile", {
                firstName: newFirstName,
                lastName: newLastName
                }, { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                }
            })
            .then(
                dispatch(updateUser(newFirstName, newLastName)),
                setEditButton((current) => (!current))
            )
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {!editButton ? ( 
                <div className="header">
                    <h1>Welcome back<br />{firstName + ' ' + lastName} !</h1>
                    <button onClick={editName} className="edit-button">Edit Name</button>
                </div>
            ) : (
                <div className="header">
                <h1>Welcome back</h1>
                <form className="editNameContent" onSubmit={submitHandler}>
                    <div className="editNameInputs">
                    <input
                        type="text"
                        placeholder={firstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder={lastName}
                        onChange={(e) => setNewLastName(e.target.value)}
                        required
                    />
                    </div>
                    <div className="editNameButtons">
                    <button className="save-button" type="submit">
                        Save
                    </button>
                    <button className="cancel-button" onClick={editName}>
                        Cancel
                    </button>
                    </div>
                </form>
                </div>
            )}
        </>
    )
}

export default HeaderMain