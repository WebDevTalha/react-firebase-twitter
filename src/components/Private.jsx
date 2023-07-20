import React from "react"
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Private() {
    const navigate = useNavigate()
    const auth = getAuth()
    async function signOutUser() {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <div>
                <h1>Private Page</h1>
                <button onClick={signOutUser}>Sign out</button>
            </div>
        </>
    )
}

export default Private
