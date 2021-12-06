import * as PT from "prop-types";

const TextInput = (props) => {
  const {
    value,
    onChange,
    onEnterPressed,
    label,
    invalid,
    disabled,
    placeholder,
    className,
    style,
    inputClassName,
    inputStyle,
  } = props;

  const _onKeyDown = (e) => {
    if (e.key === "Enter" && onEnterPressed)
      onEnterPressed(e);
  }

  const _onChange = (e) => {
    if (onChange && !disabled) onChange(e.target.value);
  }

  return (
    <div className={`mb-3 ${className}`} style={style}>
      {label ? 
        <span className="block text-gray-600 mb-1">{label}</span>
      : <></>}
      {disabled ? 
        <span className={`flex items-center h-9 w-full px-2 rounded bg-gray-300 ` + 
                         `${value ? "text-gray-700" : "text-gray-500"} ` +
                         `${inputClassName}`}
              style={inputStyle}>
          {value ? value : placeholder}
        </span>
      :
      <input type="text"
             value={value}
             onChange={_onChange}
             onKeyDown={_onKeyDown}
             placeholder={placeholder}
             style={inputStyle}
             className={`${inputClassName} h-9 w-full px-2 rounded `+ 
                        `${invalid ? "border-red-400" : "border-gray-200"} ` +
                        `bg-white border `}
             style={inputStyle} />
      }
      {invalid ? 
        <span className="block text-red-500">{invalid}</span>
      : <></>}
    </div>
  )
}

TextInput.defaultProps = {
  disabled: false,
  placeholder: "",
  className: "",
  style: {},
  inputClassName: "",
  inputStyle: {}
}

TextInput.propTypes = {
  value: PT.string,
  onChange: PT.func.isRequired,
  onEnterPressed: PT.func,
  label: PT.string,
  invalid: PT.oneOf([PT.string, PT.bool]),
  disabled: PT.bool,
  placeholder: PT.string,
  className: PT.string,
  style: PT.object,
  inputClassName: PT.string,
  inputStyle: PT.object
}

export default TextInput;