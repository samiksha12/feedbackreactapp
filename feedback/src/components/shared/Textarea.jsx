import React from 'react'

function Textarea({ value,className, onChange, placeholder, rows, required }) {
  return (
    <div className="col-mb-6">
          <textarea
            required={required}
            className={"form-control " +className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
          />
        </div>
  )
}

export default Textarea;