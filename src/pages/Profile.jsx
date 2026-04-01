import AppPreferences from "../components/AppPreferences"
import ProfileSettings from "../components/ProfileSettings"
import InfoMobile from "../components/InfoMobile"
import InfoDesktop from "../components/InfoDesktop"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


function Profile () {
    const {user} = useContext(AuthContext)

    return(
        <main className="p-5 bg-background dark:bg-dark/90 dark:text-background flex flex-col gap-10">
            <div>
                <h1 className="text-2xl font-bold" >Welcome back, <span>{user.username}</span></h1>
                <p className="sm:hidden text-dark/70 dark:text-background/70 font-semibold text-sm">Manage your account settings and preferences here.</p>
                <p className="hidden sm:block text-dark/70 dark:text-background/70 font-semibold text-sm">Here's what's happening with your workspace today.</p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                <ProfileSettings/>
                <AppPreferences/>
            </div>
            <InfoMobile/>
            <InfoDesktop/>
        </main>
    )
}

export default Profile