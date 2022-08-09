import React from "react";

function Radio({ option, name, labelClass, onClick,value:checkedValue }) {
  return (
    <div className="my-3 mx-3 row radio-row">
      {option.map((item, index) => {
        const { label, value, id } = item;
        return (
          <div className="form-check col-sm-1" key={index}>
            <input id={id} type="radio" name={name} value={value} onChange={onClick} checked={checkedValue === value}/>
            <div className={labelClass}>
              <label htmlFor={id}>{label}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
