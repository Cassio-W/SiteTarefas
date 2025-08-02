import { useEffect, useState } from "react";
import Card from "../core/Card";
import AccountConfigCard from "./AccountConfigCard";

function SideBar() {
  const [username, setUsername] = useState('Username')
  const [isConfigAccount, setConfigAccount] = useState(true)

  function getUsername() {
    const stringifyUser = localStorage.getItem('user');

    if (!stringifyUser) return console.log('User not found');

    const user = JSON.parse(stringifyUser)

    const username = user.username

    return username;
  }

  useEffect(() => {
    const thisUsername = getUsername()
    setUsername(thisUsername);
    
  }, [])
  
  return (
    <div className="flex flex-col gap-10 m-5 h-150">
      <div className="user-container flex gap-5 border p-5">
        <div className="relative bg-purple-600 flex items-center justify-center w-15 h-15 rounded-full border-4 hover:opacity-70 font-bold">
          {username.charAt(0).toUpperCase()}
          {isConfigAccount && <AccountConfigCard/>}
          <div className="text-3xl flex items-center justify-center">{username}</div>
        </div>
        <div className="other-pages-container border p-5 flex flex-col gap-5">
          <div className="componente-de-lista flex flex-col gap-2">
            <h1>Tarefas</h1>
            <li><a href="/">Todas</a></li>
            <li><a href="/">Pendentes</a></li>
            <li><a href="/">Em Andamento</a></li>
            <li><a href="/">Concluídas</a></li>
          </div>

          <div className="componente-de-lista flex flex-col gap-2">
            <h1 className="">Outros</h1>
            <li><a href="/">oi</a></li>
            <li><a href="/">oi</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar