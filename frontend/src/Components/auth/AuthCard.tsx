type AuthCardProps = {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => any
}

function AuthCard({children, onSubmit}: AuthCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }} className="w-sm bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md flex justify-center items-center flex-col gap-2 border-blue-800 border-5 relative">
        {children}
      </form>
    </div>
  )
}

export default AuthCard;