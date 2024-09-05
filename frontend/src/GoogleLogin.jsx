import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from "./Api.jsx"
import { useNavigate } from "react-router-dom"
const GoogleLogin = () => {
  const navigate = useNavigate();
  const responseGoogle = (async(authResult)=>{
    try{
      if(authResult['code']){
        const result = await googleAuth(authResult['code']);
        const {name, email,image} = result.user;
        const {token} =result;
        const obj = {name, email,image, token}
        localStorage.setItem('user-info', JSON.stringify(obj))
        navigate('/dashboard')
      }
    }
    catch(err){
      console.error('Error while requesting google code :  ',err)
    }
  })

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError:  responseGoogle,
    flow: "auth-code"
  })
  return (
    <div >
      <button onClick={googleLogin} className="px-4 py-2 border rounded-lg">
        Login With Google
      </button>
    </div>
  )
}

export default GoogleLogin;