import "../Styles/input.css"

type InputProp = {
  placeholder: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
  autoComplete: string
}

function Input({placeholder, type, value, onChange, autoComplete}: InputProp) {
  return(
    <input 
    className="input" 
    type={type} 
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    autoComplete={autoComplete}
    />
  )
}

export default Input;