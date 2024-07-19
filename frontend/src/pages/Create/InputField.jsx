
const InputField = ({ label, name, min, max, placeholder="", type="text", isTextArea=false, required=true }) => {

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="title" className="font-bold">{label}</label>
      {
        isTextArea
          ? <textarea placeholder={placeholder} name={name}
            className="border shadow-md rounded-md py-2 px-4 " required></textarea>
          : <input type={type} name={name} placeholder={placeholder} min={min} max={max}
            className="border shadow-md rounded-md py-2 px-4" required={required} 
            step={type === "number" ? "0.1" : undefined}/>
      }
    </div>
  );
};

export default InputField;