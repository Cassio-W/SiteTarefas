type ButtonProp = {
  extraClasses?: string;
  text: string
}

function Button({extraClasses = "", text}: ButtonProp) {
  return(
   <button className={"button-default " + extraClasses} type="submit">{text}</button> 
  )
  
}

export default Button;