import Card from "../components/core/Card";
import Input from "../components/core/Input";
import { useState } from "react";
import { login, register, setUserOnLocalStorage } from "../services/auth.ts";
import AuthRememberCheck from "../components/auth/AuthRememberCheck";
import Form from "../components/core/Form";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  
  async function handleRegister() {
    const response = await register(username, email, password)

    if (!response.success) {
      alert(response.message);
      return;
    }
    const loginResponse = await login(email, password);

    if (!loginResponse.success) {
      alert(loginResponse.message)
      return;
    }
    
    const token = await setUserOnLocalStorage(loginResponse);

    alert('Cadastro completo')
    navigate('/#');
    
    return token;
  }
  
  return (
    <Card>
      <Form onSubmit={handleRegister}>
        <h1 className="mb-5">Cadastro</h1>
        <Input 
          placeholder="Usuario"
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
        <button className="button-default" type="submit">
          Confirmar
        </button>
        <div className="my-2 text-sm">
          Já possue uma conta? <a href="/#/login">Login</a>
        </div>
      </Form>
    </Card>
  );
}

export default RegisterPage; 