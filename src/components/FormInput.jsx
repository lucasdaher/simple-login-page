import "../App.css";

function FormInput({ type, name, placeholder }) {
  return (
    <div className="form-input">
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
