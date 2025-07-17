type AuthCardProps = {
  children: React.ReactNode;
}

function AuthCard({children} : AuthCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-sm bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md flex justify-center items-center flex-col gap-2">
        {children}
      </div>
    </div>
  )
}

export default AuthCard;