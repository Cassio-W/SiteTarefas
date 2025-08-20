import { useState } from "react";
import Card from "../core/Card";
import LogoutConfirmationCard from "./LogoutConfirmationCard";

type AccountConfigProps = {
  closeCardFunction: (value: Boolean) => void
}

function AccountConfigCard({ closeCardFunction }: AccountConfigProps) {
  const [isLoginOut, setLoginOut] = useState(false)

  return (
    <>
      <Card isCenter={false} extraClasses="absolute top-13 left-13 w-60">
        <button onClick={() => closeCardFunction(false)} className="text-red-400 absolute right-2.5 top-0 text-3xl">x</button>
        <div className="relative flex flex-col gap-2">
          <div className="text-3xl flex justify-center pb-5">Minha Conta</div>
          <button className="button-default">Editar Conta</button>
          <button onClick={() => setLoginOut(true)} className="button-default !bg-red-500">Sair</button>
        </div>
      </Card>

      <div className="absolute top-0 left-0 w-screen bg-black/50">
        {isLoginOut && <LogoutConfirmationCard closeCardFunction={() => {setLoginOut(false)}}/>}
      </div>
    </>
  )
}

export default AccountConfigCard;