type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => any;
  extraClasses?: string;
}

function Form({children, onSubmit}: FormProps) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e);
    }}>
      {children}
    </form>
  )
}

export default Form;