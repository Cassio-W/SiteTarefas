

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
      className="bg-gray-900 rounded text-white p-[6px] my-[10px] w-4/5 border-2 border-blue-900" 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  )
}

export default Input;