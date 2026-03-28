import AppPreferences from "../components/AppPreferences"
import ProfileSettings from "../components/ProfileSettings"
import InfoMobile from "../components/InfoMobile"
import InfoDesktop from "../components/InfoDesktop"


function Profile () {
    return(
        <main className="p-5 bg-background flex flex-col gap-10">
            <div>
                <h1 className="text-2xl font-bold">Welcome back, <span>Alex</span></h1>
                <p className="sm:hidden text-dark/70 font-semibold text-sm">Manage your account settings and preferences here.</p>
                <p className="hidden sm:block text-dark/70 font-semibold text-sm">Here's what's happening with your workspace today.</p>
            </div>
            <ProfileSettings/>
            <AppPreferences/>
            <InfoMobile/>
            <InfoDesktop/>
        </main>
    )
}

export default Profile