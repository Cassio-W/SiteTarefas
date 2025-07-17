import AuthCard from "../Components/AuthCard.tsx";
import Input from "../Components/AuthInput.tsx";
import AuthButton from "../Components/AuthButton.tsx";

function LoginCard() {
  return (
    <AuthCard>
      <h1 className="mb-5">Login</h1>
      <Input placeholder="Usuario ou Email" type="email"/>
      <Input placeholder="Senha" type="password"/>
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