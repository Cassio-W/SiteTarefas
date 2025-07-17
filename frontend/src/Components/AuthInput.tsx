import "../Styles/input.css"

type InputProp = {
  placeholder: string
  type: string
}

function Input({placeholder, type}: InputProp) {
  return(
    <input className="input" type={type} placeholder={placeholder}/>
  )
}

export default Input;