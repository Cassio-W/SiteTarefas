import AuthCard from "../Components/AuthCard.tsx";
import Input from "../Components/AuthInput.tsx";
import AuthButton from "../Components/AuthButton.tsx";

function RegisterCard() {
  return (
    <AuthCard>
      <h1 className="mb-5">Cadastro</h1>
      <Input placeholder="Usuario" type="text"/>
      <Input placeholder="Email" type="email"/>
      <Input placeholder="Senha" type="password"/>
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