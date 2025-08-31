import Card from "../components/core/Card";
import Input from "../components/core/Input";
import { login, setUserOnLocalStorage } from "../services/auth.ts";
import { useState } from "react";
import AuthRememberCheck from "../components/auth/AuthRememberCheck";
import { useNavigate } from "react-router-dom";
import Form from "../components/core/Form";
import AlertCard from "../components/auth/AlertCard.tsx";

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  
  
  async function handleLogin() {
    const response = await login(email, password);
    if (!response.success) {
      setMessage(response.message);
      setError(true);
      return;
    }

    const token = await setUserOnLocalStorage(response);
    navigate('/main');
    
    return token;
  }

  return (
    <div className="flex justify-center">
      <Card>
        <Form onSubmit={handleLogin}>
          <h1 className="mb-5">Login</h1>
            <Input 
              type="email"
              placeholder="Usuario ou Email" 
              value={email} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
              autoComplete="email"
            />
            <Input 
              type="password"
              placeholder="Senha" 
              value={password} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <div className="flex justify-between items-center text-sm gap-10 mb-3">
              <AuthRememberCheck/>
              <a>Esqueceu sua senha?</a>
            </div>
            <button className="button-default" type="submit">
              Confirmar
            </button>
          
          <div className="my-2 text-sm">
            Não possue uma conta? <a href="/#/register">Cadastre-se</a>
          </div>
        </Form>
      </Card>

      <section className="hidden-cards absolute w-screen bg-black/50">
        {error && <AlertCard message={message} closeCardFunction={() => {setError(false)}}/>}
      </section>
    </div>
  );
}



export default LoginPage;