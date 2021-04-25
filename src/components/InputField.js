import './InputField.scss';


function InputField({name,type,placeholder,label,register}) {
 
  return (
    <div className="App__box">
    <label htmlFor={name}>{label}</label>
    {type === "textarea" && <textarea
      id={name} 
      placeholder={placeholder}>
    </textarea>}
    
    {type !== "textarea" && <input 
    type={type} 
    name={name}
    id={name} 
    placeholder={placeholder}
    
     />}
    </div>
  );
}

export default InputField;
