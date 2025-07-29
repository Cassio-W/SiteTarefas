import Card from "../components/core/Card.tsx";
import Input from "../components/core/Input.tsx";
import Button from "../components/core/Button.tsx";
import { login } from "../services/auth.ts";
import { useState } from "react";
import AuthRememberCheck from "../components/auth/AuthRememberCheck.tsx";
import { useNavigate } from "react-router-dom";
import Form from "../components/core/Form.tsx";

function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  
  async function handleLogin() {
    const response = await login(email, password);
    
    const loginInfo = response.data;
    const token = loginInfo.token;
    const user = {
      username: loginInfo.username,
      email: loginInfo.email
    }
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    
    navigate('/');
    
    return token;
  }

  return (
    <Card hasForm={true}>
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
          <Button text='Confirmar'/>
        
        <div className="my-2 text-sm">
          Não possue uma conta? <a href="/register">Cadastre-se</a>
        </div>
      </Form>
    </Card>
  );
}



export default LoginCard;