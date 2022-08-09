import React from 'react';
import { PropTypes } from "prop-types";

function Button({children,type,disabled,className,onClick}) {
  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>{children}</button>
  )
}

Button.defaultProps={
    className:"btn btn-primary",
    type:"button",
    disabled:true,
}
Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
  };
export default Button;