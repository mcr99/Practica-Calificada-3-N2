import { Link } from "react-router-dom"

function Footer () {
    return(
        <footer className="flex flex-col sm:flex-row items-center justify-center h-20 gap-5 text-dark/70 dark:text-light/70 dark:bg-dark/95 py-20 sm:py-5">
            <p className="text-center">© 2026 SaaS Dash Inc. All rights reserved</p>
            <Link className="underline ">• Privacy Policy</Link>
            <Link className="underline">• Terms of Service</Link>
        </footer>
    )
}

export default Footer