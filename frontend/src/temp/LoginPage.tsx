import Card from "./core/Card.tsx";
import Input from "./core/Input.tsx";
import { login, setUserOnLocalStorage } from "../services/auth.ts";
import { useState } from "react";
import AuthRememberCheck from "./auth/AuthRememberCheck.tsx";
import { useNavigate } from "react-router-dom";
import Form from "./core/Form.tsx";

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  
  async function handleLogin() {
    const response = await login(email, password);
    const token = await setUserOnLocalStorage(response)
    navigate('/');
    
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
          Não possue uma conta? <a href="/register">Cadastre-se</a>
        </div>
      </Form>
    </Card>
  );
}



export default LoginPage;