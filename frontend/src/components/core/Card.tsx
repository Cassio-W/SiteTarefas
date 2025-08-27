type CardProps = {
  children: React.ReactNode;
  extraClasses?: string;
  isCenter?: boolean;
}

function Card({children, extraClasses = "", isCenter = true}: CardProps) {
  if (!isCenter) return (
    <div className={"bg-gray-800 p-6 rounded-xl shadow-md w-[380px] border-blue-800 border-5 " + extraClasses}>
      {children}
    </div>
  )
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={"bg-gray-800 p-6 rounded-xl shadow-md w-[380px] border-blue-800 border-5 z-10 " + extraClasses}>
        {children}
      </div>
    </div>
  )
}

export default Card;