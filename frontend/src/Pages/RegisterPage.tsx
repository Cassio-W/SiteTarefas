import AuthCard from "../components/AuthCard.tsx";
import Input from "../components/AuthInput.tsx";
import AuthButton from "../components/AuthButton.tsx";
import { useState } from "react";
import { register } from "../services/auth.ts";

function RegisterCard() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleRegister() {
    const response = await register(username, email, password)

    return response.data
  }
  
  return (
    <AuthCard onSubmit={handleRegister}>
      <h1 className="mb-5">Cadastro</h1>
      <Input 
        placeholder="Usuario" 
        type="text"
        value={username} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} 
        autoComplete="nickname"
      />
      
      <Input 
        placeholder="Email" 
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
        autoComplete="email"
      />
      <Input 
        placeholder="Senha" 
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        autoComplete="password"
      />
      <div className="flex justify-start items text-sm gap-10 mb-3">
        <label className="flex items-center gap-2">
          <input type="checkbox"/> Lembre-se de mim
        </label>
      </div>
      <AuthButton/>
      <div className="my-2 text-sm">
        Já possue uma conta? <a href="/login">Login</a>
      </div>
    </AuthCard>
  );
}

export default RegisterCard; 