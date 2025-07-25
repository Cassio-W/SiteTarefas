

type InputProp = {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  autoComplete?: string;
  extraClasses?: string;
}

function Input({placeholder = "", type, value, onChange, autoComplete = "", extraClasses = ""}: InputProp) {
  return(
    <input 
      className={"bg-gray-900 rounded text-white p-[6px] my-[10px] w-4/5 border-2 border-blue-900 " + extraClasses} 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  )
}

export default Input;