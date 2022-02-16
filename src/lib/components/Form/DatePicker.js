import React from "react";
import RDatePicker from "react-datepicker";
import { registerLocale, } from "react-datepicker";
import fr from 'date-fns/locale/fr';
import moment from "moment";

registerLocale('fr', fr)

const DatePicker = (props) => {
  const {
    value,
    onChange,
    className,
    style,
    disabled,
    label,
    invalid,
    placeholder,//TODO
  } = props;

  const _onChange = (e) => {
    if (onChange && !disabled) onChange(e);
  }

  return (
    <div className={`${className} mb-2`} style={{minWidth: 200, ...style}}>
      {label ? 
        <span className="block text-gray-600 mb-1">{label}</span>
      : <></>}
      {disabled ? 
        <span className={`flex items-center h-9 w-full px-2 rounded bg-gray-300 ` + 
          `${value ? "text-gray-700" : "text-gray-500"}`}>
          {value ? moment(value).format("L") : placeholder}
        </span>
      :
        <RDatePicker
          selected={value}
          onChange={_onChange}
          className={`h-9 w-full px-2 rounded ` + 
                    `${invalid ? "border-red-400" : "border-gray-200"} border`}
          dateFormat="P"
          locale="fr"
        />
      }
      {invalid ? 
        <span className="block text-red-500">{invalid}</span>
      : <></>}
    </div>
  )
}

DatePicker.defaultProps = {
  className: "",
  style: {},
  value: new Date(),
  onChange: () => {},
}

export default DatePicker;