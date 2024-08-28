import {useGoogleLogin} from "@react-oauth/google"


const GoogleLogin = () => {

  const responseGoogle = (async(authResult)=>{
    try{
      if(authResult['code']){
        console.log(authResult);
        
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