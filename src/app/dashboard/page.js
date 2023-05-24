'use client'
import { useRouter } from "next/navigation";
import * as AuthAPI from "../api/authenticate";


const page = () => {

  const router = useRouter()

  const LogOut = async ()=>{
    try{
     let result = await AuthAPI.logout()
     console.log(result)
     if(result.status === 204)
      alert("successfully Logout")
      router.push("/")
      
    }catch(error){
      alert(error)
    }
     
  }

  return (
    <>
      <button onClick={LogOut} >Logout</button>
      
    </>
  )
}

export default page