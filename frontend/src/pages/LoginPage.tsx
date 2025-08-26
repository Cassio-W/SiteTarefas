import Card from "../components/core/Card";
import Input from "../components/core/Input";
import { login, setUserOnLocalStorage } from "../services/auth.ts";
import { useState } from "react";
import AuthRememberCheck from "../components/auth/AuthRememberCheck";
import { useNavigate } from "react-router-dom";
import Form from "../components/core/Form";

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  
  async function handleLogin() {
    const response = await login(email, password);
    if (!response.success) {
      alert(response.message);
      return;
    }

    const token = await setUserOnLocalStorage(response);
    navigate('/#');
    
    return token;
  }

  return (
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
            <a href="/login">Esqueceu sua senha?</a>
          </div>
          <button className="button-default" type="submit">
            Confirmar
          </button>
        
        <div className="my-2 text-sm">
          Não possue uma conta? <a href="/#/register">Cadastre-se</a>
        </div>
      </Form>
    </Card>
  );
}



export default LoginPage;