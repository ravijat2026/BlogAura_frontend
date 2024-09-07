import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"


const Menu = () => {
const {user}=useContext(UserContext)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()

const handleLogout=async()=>{
  try{
    const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
    // console.log(res)
    setUser(null)
    navigate("/login")

  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div className="bg-gray-800  w-[180px] z-10 flex flex-col items-start justify-center absolute top-16 right-4 md:right-32 rounded-md p-6 space-y-4">
    {!user && <h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to="/login">Login</Link></h3>}
    {!user &&<h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to="/register">Register</Link></h3>}
    {user &&<h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to="/">Home</Link></h3>}
    {user && <h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to={"/profile/"+user._id}>Profile</Link></h3>}
    {user &&<h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to="/write">Write</Link></h3>}
    {user && <h3 className="text-teal-400 text-lg hover:scale-105 duration-300 cursor-pointer"><Link to={"/myblogs/"+user._id}>My blogs</Link></h3>}
    {user &&<h3 onClick={handleLogout} className="text-teal-400 hover:scale-105 duration-300 cursor-pointer">Logout</h3>}

    </div>
  )
}

export default Menu