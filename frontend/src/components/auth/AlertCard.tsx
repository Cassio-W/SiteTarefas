import Card from "../core/Card";

type AlertCardProp = {
  message: string;
  closeCardFunction: () => void;
}

function AlertCard({ message, closeCardFunction }: AlertCardProp) {
  return (
    <div className="relative">
      <Card extraClasses="flex flex-col gap-5 absolute top-10 !w-[250px]">
        <h5 className="text-red-400 flex justify-center">{message}</h5>
        <button onClick={() => {closeCardFunction()}} className="button-default !bg-red-600">Ok</button>
      </Card>
    </div>
    
  )
  
}

export default AlertCard;

