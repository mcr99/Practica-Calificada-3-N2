import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Login (){
    const[changeType, setChangeType] = useState(true)
    const[eyeChange,  setEyeChange] = useState(true)

    function changeTypeToggle(){
        setChangeType(!changeType)
    }
    function eyeChangeToggle(){
        setEyeChange(!eyeChange)
    }


    const [form, setForm] = useState({
        email:"",
        password:"",
    })

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const success = login(form.email, form.password)
        if(success){
            navigate("/profile")
        }else{
            alert("Incorrecto")
        }
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-background dark:bg-dark/90 p-5">
            <main className=" bg-light dark:bg-dark/40 dark:text-light flex flex-col items-center justify-center rounded-xl shadow-lg p-5 w-full max-w-100 relative overflow-hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-principal bg-principal/10 dark:bg-principal/50 p-2 w-13 h-13 rounded-2xl my-5">
                    <path d="M20.6216 4.04316C20.5821 3.69619 20.3083 3.4224 19.9614 3.38283C16.2551 2.96017 12.3947 4.17038 9.55023 7.01484C8.88176 7.6833 8.30341 8.40811 7.81526 9.174L7.81222 9.17412C7.73555 9.29444 7.6611 9.41579 7.58888 9.53809C6.86872 10.7576 6.37031 12.0714 6.09345 13.4211C6.0428 13.668 6.11958 13.9239 6.29782 14.1021L9.89702 17.7013C10.0752 17.8795 10.3311 17.9563 10.578 17.9057C11.9273 17.6291 13.2409 17.1311 14.4602 16.4114C15.3628 15.8787 16.2129 15.225 16.987 14.4509L16.9887 14.4525C19.8326 11.6087 21.0435 7.74873 20.6216 4.04316ZM16.0256 7.9789C16.9258 8.87906 16.9258 10.3385 16.0256 11.2387C15.1255 12.1388 13.666 12.1388 12.7659 11.2387C11.8657 10.3385 11.8657 8.87906 12.7659 7.9789C13.666 7.07874 15.1255 7.07874 16.0256 7.9789Z"/>
                    <path d="M14.6579 17.4504C13.4302 18.1321 12.1206 18.6103 10.7788 18.8853C10.5634 18.9295 10.3452 18.9321 10.1346 18.8963C10.256 19.6277 10.2443 20.3772 10.0992 21.1059C10.0429 21.3884 10.1534 21.6782 10.3836 21.8515C10.6137 22.0248 10.9228 22.0509 11.1788 21.9188C11.7836 21.6065 12.3505 21.1972 12.856 20.6917C13.7817 19.766 14.3823 18.6383 14.6579 17.4504Z"/>
                    <path d="M5.10306 13.866C5.06703 13.6549 5.06956 13.4361 5.11385 13.2201C5.38883 11.8796 5.86653 10.5713 6.54731 9.34479C5.36096 9.62075 4.23474 10.2211 3.31006 11.1457C2.80493 11.6509 2.39581 12.2173 2.08364 12.8217C1.95144 13.0776 1.97753 13.3867 2.15076 13.6169C2.324 13.847 2.61377 13.9577 2.89631 13.9015C3.62408 13.7567 4.37256 13.7449 5.10306 13.866Z"/>
                    <path d="M3.03001 20.25C3.04425 20.6429 3.35947 20.9583 3.75235 20.9725L3.75361 20.9726L3.75565 20.9727L3.76203 20.9729L3.78367 20.9735C3.79965 20.9739 3.82143 20.9744 3.8484 20.9749L3.86028 20.9751C3.92523 20.9761 4.01715 20.9767 4.12879 20.9755C4.35089 20.9731 4.65671 20.9631 4.9863 20.9323C5.31222 20.9019 5.68221 20.8492 6.02513 20.7549C6.34629 20.6666 6.74723 20.5151 7.03929 20.223C7.93945 19.3229 7.93945 17.8634 7.03929 16.9633C6.13913 16.0631 4.67969 16.0631 3.77953 16.9633C3.48747 17.2553 3.33595 17.6563 3.24764 17.9774C3.15335 18.3204 3.10068 18.6903 3.07022 19.0163C3.03942 19.3459 3.02946 19.6517 3.02704 19.8738C3.02582 19.9854 3.02649 20.0773 3.0275 20.1423C3.028 20.1748 3.02859 20.2006 3.02907 20.2189L3.0297 20.2405L3.0299 20.2469L3.03001 20.25Z"/>
                </svg>
    
                <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
                <p className="text-dark/70 dark:text-light/70">Please enter your details to sign in</p>
                <form className="flex flex-col my-10 gap-5 w-full" onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-2">
                        <p className="flex font-bold text-sm">
                            <span className="pr-1">Email</span> 
                            <span className="hidden sm:block">address</span>
                        </p>
                        <input type="email" placeholder="name@company.com" className="border p-3  rounded-lg border-dark/25 dark:border-light/25 w-full" name="email" onChange={handleChange}/>
                    </label>
                    <label className="flex flex-col gap-2">
                        <p className="flex justify-between font-bold"><span className="text-sm"> Password</span> <Link className="text-xs text-principal cursor-pointer">Forgot password?</Link></p>
                        <div className="border p-3  rounded-lg border-dark/25 dark:border-light/25 w-full flex">
                        <input type={changeType ? `password` : `text`} placeholder="•••••••" className="outline-none w-full" name="password" onChange={handleChange}/>
                        <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" className={`${changeType ? `fill-dark/70 dark:fill-light/70` : `fill-principal`}  cursor-pointer`} onClick={changeTypeToggle}>
                            <path d="M9.125 12.375C9.125 10.7872 10.4122 9.5 12 9.5C13.5878 9.5 14.875 10.7872 14.875 12.375C14.875 13.9628 13.5878 15.25 12 15.25C10.4122 15.25 9.125 13.9628 9.125 12.375Z" />
                            <path d="M2.27757 11.1101C3.97429 7.43132 7.68801 4.875 11.9999 4.875C16.3119 4.875 20.0256 7.43133 21.7223 11.1101C22.0924 11.9125 22.0924 12.8377 21.7223 13.6402C20.0256 17.3189 16.3119 19.8752 11.9999 19.8752C7.68801 19.8752 3.97428 17.3189 2.27757 13.6402C1.90748 12.8377 1.90748 11.9125 2.27757 11.1101ZM7.625 12.375C7.625 14.7912 9.58375 16.75 12 16.75C14.4162 16.75 16.375 14.7912 16.375 12.375C16.375 9.95875 14.4162 8 12 8C9.58375 8 7.625 9.95875 7.625 12.375Z" />
                        </svg>
                        </div>
    
                    </label>
                    <label className="flex border-dark/70 dark:border-light/70">
                        <input type="checkbox" className=" accent-principal cursor-pointer"/>
                        <p className="text-sm pl-1">Remember for 30 days</p>
                    </label>
                    <button className="bg-principal text-light font-bold flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-principal/80 cursor-pointer" type="submit">Sign In
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:hidden" >
                            <path d="M20.0014 11.9966L4 11.9966M14.0054 6L20.0014 11.9998L14.0054 18" stroke="#fff"/>
                        </svg>
                    </button>
                </form>
                <div className="grid grid-cols-[1fr_1.4fr_1fr] w-full justify-center items-center ">
                    <div className="border-t border-dark/25 dark:border-light/25"></div>
                    <p className="text-xs text-dark/70 dark:text-light/70 text-center px-px">OR CONTINUE WITH</p>
                    <div className="border-t border-dark/25 dark:border-light/25"></div>
                </div>
                <button className="flex border border-dark/25 dark:border-light/25 py-2 w-full items-center justify-center gap-2 rounded-lg my-5 hover:bg-dark/5 dark:hover:bg-light/5 cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className="w-6 h-6 fill-dark/80 dark:fill-light/80 sm:fill-principal">
                        <path d="M21.5939 11.0792H12.3209V13.8256H18.9768C18.6214 17.6382 15.5196 19.286 12.5148 19.286C8.70223 19.286 5.30969 16.3135 5.30969 12.0162C5.30969 7.88057 8.54068 4.74651 12.5148 4.74651C15.5519 4.74651 17.3936 6.71741 17.3936 6.71741L19.2676 4.74651C19.2676 4.74651 16.7474 2.00016 12.3856 2.00016C6.6344 1.96785 2.24023 6.78203 2.24023 11.9839C2.24023 17.0243 6.37592 22 12.4825 22C17.8783 22 21.7554 18.349 21.7554 12.8886C21.7877 11.7578 21.5939 11.0792 21.5939 11.0792Z" />
                    </svg>
                    <p className="font-bold text-sm text-dark/80 dark:text-light/80">Sign in with Google</p>
                </button>
                <div className="border-t border-dark/25 dark:border-light/25 w-full my-5"></div>
                <p className="text-xs font-bold flex gap-1">Don't have an account? <span className="text-principal sm:hidden">Start free trial</span> <Link className="text-principal hidden sm:block ">Create an account</Link></p>
                <div className="p-1 bg-linear-to-r from-principal via-principal/55 via-50% to-principal w-full absolute bottom-0 hidden sm:block"></div>
            </main>
        </div>
    )
}

export default Login