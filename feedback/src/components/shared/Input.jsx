function Input({ label, value, onChange, placeholder, type, required }) {
    return (
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">
          {label}
        </label>
        <div className="col-sm-6">
          <input
            type= {type ? type : "text"}
            required={required}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
  export default Input;