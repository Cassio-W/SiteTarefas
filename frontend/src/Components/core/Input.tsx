

type InputProp = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  autoComplete?: string;
  extraClasses?: string;
}

function Input({placeholder = "", type = "text", onChange, autoComplete = "", extraClasses = "", value = ""}: InputProp) {
  return(
    <input 
      className={"bg-gray-900 rounded text-white p-[6px] my-[10px] w-4/5 border-2 border-blue-900 " + extraClasses} 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autoComplete}
      value={value}
    />
  )
}

export default Input;