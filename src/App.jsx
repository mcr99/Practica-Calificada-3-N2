import BottonNavBar from "./components/BottomNavBar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./routes/PrivateRoute"



function App() {

  return (
    <>
    <AuthProvider>
      <Header/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
    </Routes>
      <Footer/>
      <BottonNavBar/>
      </AuthProvider>
    </>
  )
}

export default App
