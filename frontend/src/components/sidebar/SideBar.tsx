import { useEffect, useState } from "react";
// import Card from "../core/Card";
import AccountConfigCard from "./AccountConfigCard";

function SideBar() {
  const [username, setUsername] = useState('Username')
  const [isConfigAccount, setConfigAccount] = useState(false)

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
      <div className="user-container relative flex gap-5 border rounded-full p-5">
        <div className="">
          <button onClick={() => setConfigAccount(!isConfigAccount)} className="hover:cursor-pointer bg-purple-600 flex items-center justify-center w-15 h-15 rounded-full border-4 font-bold hover:opacity-70 border">
            {username.charAt(0).toUpperCase()}
          </button>
          {isConfigAccount && <AccountConfigCard closeCardFunction={() => setConfigAccount(false)}/>}
        </div>
          <div className="text-3xl flex items-center justify-center">{username}</div>
      </div>
      <div className="other-pages-container border rounded-xl p-5 flex flex-col gap-5">
          <div className="componente-de-lista flex flex-col gap-2">
            <h1>Tarefas</h1>
            <li><a href="/">Todas</a></li>
            <li><a href="/">Pendentes</a></li>
            <li><a href="/">Em Andamento</a></li>
            <li><a href="/">Concluídas</a></li>
          </div>
      </div>
    </div>
  )
}

export default SideBar