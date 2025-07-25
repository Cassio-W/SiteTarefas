type CardProps = {
  children: React.ReactNode;
  extraClasses?: string;
}

function Card({children, extraClasses = ""}: CardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={"w-sm bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md flex justify-center items-center flex-col gap-2 border-blue-800 border-5 relative " + extraClasses}>
        {children}
      </div>
    </div>
  )
}

export default Card;