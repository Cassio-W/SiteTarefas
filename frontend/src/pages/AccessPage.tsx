import { useNavigate } from "react-router-dom";
import Card from "../components/core/Card";


function AccessPage() {
  const navigate = useNavigate()


  return (
    <Card isCenter={true}>
      <h1>Acesse o Site!</h1>
      <div className="flex flex-col gap-5 p-8">
        <button className="button-default" onClick={() => {navigate("/login")}}>Login</button>
        <button className="button-default !bg-green-600" onClick={() => {navigate("/register")}}>Create Account</button>
      </div>
      
    </Card>
  )
}

export default AccessPage;