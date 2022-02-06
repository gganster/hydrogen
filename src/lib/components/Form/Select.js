import React from "react";
import ReactSelect from "react-select";

const Select = (props) => {
  const {
    options, //[{value: <string>, label: <string> }]
    onChange,
    value,
    loading,
    disabled,
    style,
    className,
    invalid,
    placeholder,
    label,
  } = props;

  const _onChange = (e) => {
    if (onChange && !disabled) onChange(e);
  }

  //compute style
  const customStyles = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: disabled ? "#D1D5DB" : styles.backgroundColor,
        cursor: disabled ? 'not-allowed' : 'default',
        border: invalid ? "1px solid red" : styles.border,
      }
    },
    option: (styles) => {
      return {
        ...styles,
        cursor: disabled ? 'not-allowed' : 'default',
        display: disabled ? "none" : styles.display
      };
    },
  };

  return (
    <div className={`${className} mb-3`} style={{minWidth: 200, ...style}} >
      {label ? 
        <span className="block text-gray-600 mb-1">{label}</span>
      : <></>}
      <ReactSelect
        options={options}
        onChange={_onChange}
        value={value}
        loading={loading}
        disabled={disabled}
        styles={customStyles}
        placeholder={placeholder}
      />
      {invalid ? 
        <span className="block text-red-500">{invalid}</span>
      : <></>}
    </div>
  )
}

Select.defaultProps = {
  multi: false,
  style: {},
  className: "",
  options: [],
  onChange: () => {},
  placeholder: "",
}

export default Select;