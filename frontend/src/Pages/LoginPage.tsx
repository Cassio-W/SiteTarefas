import AuthCard from "../components/AuthCard.tsx";
import Input from "../components/AuthInput.tsx";
import AuthButton from "../components/AuthButton.tsx";
import { login } from "../services/auth.ts";
import { useState } from "react";

function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleLogin() {
    const response = await login(email, password);
    
    const token = response.data
    localStorage.setItem('token', token)
    
    return response.data;
  }

  return (
    <AuthCard onSubmit={handleLogin}>
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
          <label className="flex items-center gap-2">
            <input type="checkbox"/> Lembre-se de mim
          </label>
          <a href="/login">Esqueceu sua senha?</a>
        </div>
        <AuthButton/>
      
      <div className="my-2 text-sm">
        Não possue uma conta? <a href="/register">Cadastre-se</a>
      </div>
    </AuthCard>
  );
}



export default LoginCard;