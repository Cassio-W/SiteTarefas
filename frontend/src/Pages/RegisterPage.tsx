import Card from "../components/core/Card.tsx";
import Input from "../components/core/Input.tsx";
import Button from "../components/core/Button.tsx";
import { useState } from "react";
import { register } from "../services/auth.ts";
import AuthRememberCheck from "../components/auth/AuthRememberCheck.tsx";
import Form from "../components/core/Form.tsx";

function RegisterCard() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleRegister() {
    const response = await register(username, email, password)

    alert('Cadastro completo')

    return response.data
  }
  
  return (
    <Card hasForm={true}>
      <Form onSubmit={handleRegister}>
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
          <AuthRememberCheck/>
        </div>
        <Button text='Confirmar'/>
        <div className="my-2 text-sm">
          Já possue uma conta? <a href="/login">Login</a>
        </div>
      </Form>
    </Card>
  );
}

export default RegisterCard; 