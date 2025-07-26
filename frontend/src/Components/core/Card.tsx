type CardProps = {
  children: React.ReactNode;
  extraClasses?: string;
  hasForm?: boolean;
}

function Card({children, extraClasses = "", hasForm = false}: CardProps) {
  let classes = "flex justify-center items-center flex-col gap-2 relative " + extraClasses

  if (hasForm) {
    classes = "";
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={"w-sm bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md border-blue-800 border-5 " + classes}>
        {children}
      </div>
    </div>
  )
}

export default Card;