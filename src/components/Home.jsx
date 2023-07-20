import React from "react"
import { useNavigate } from "react-router-dom"
import { authentication } from "./contexts/Firebase/Firebase-config"
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth"

const Home = () => {
    const navigate = useNavigate()
    // const [isUserSignin, setIsUserSignin] = useState(null)
    const signInWithTwitter = async () => {
        const provider = new TwitterAuthProvider()
        await signInWithPopup(authentication, provider).then((re) => {
            navigate("/private")
        })
    }

    // console.log(isUserSignin)

    return (
        <>
            <div>
                <h1>Home Page</h1>
                <button onClick={signInWithTwitter}>Signin With Twitter</button>
            </div>
        </>
    )
}

export default Home
