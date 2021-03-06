import {useEffect, useState} from "react";
import {useProfile} from "../../contexts/profile-context";

const SecureContent = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            setCurrentUser(user)
        } catch (e) {
        }
    }
    useEffect(() => { check() }, [])

    if(currentUser) {
        return children
    }
    return null
}

export default SecureContent