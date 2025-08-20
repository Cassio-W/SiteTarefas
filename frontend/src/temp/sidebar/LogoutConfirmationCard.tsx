import Card from "../core/Card";

type LogoutConfirmationProps = {
  closeCardFunction: () => void
}

function LogoutConfirmationCard({ closeCardFunction }: LogoutConfirmationProps) {
  function handleLogout() {
    localStorage.removeItem('token');
  }

  return (
    <Card>
      <div className="text-3xl flex justify-center pb-5">Deseja sair da sua conta?</div>
      <div className="flex gap-10 justify-center p-3">
        <button onClick={closeCardFunction} className="button-default w-30">Cancelar</button>
        <button onClick={() => {closeCardFunction(); handleLogout()}} className="button-default !bg-red-500 w-30">Sair</button>
      </div>
    </Card>
  )
}

export default LogoutConfirmationCard;