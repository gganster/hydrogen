const RadioGroup = (props) => {
  const {
    options,
    onChange,
    //invalid, //TODO
    className,
    style,
    value,
    label,
  } = props;

  const renderRadio = (item) => (
    <div className={`radio_container ${className}`}
         style={{...style}}>
      <label className="flex items-center">
        <span className="radio_label">{item.label}</span>
        <input type="radio" checked={item.value === value} onChange={e => onChange(item.value)} />
        <span className="radio_checkmark"></span>
      </label>
    </div>
  )

  return (
    <div className={`my-4 pb-4 rounded border border-gray-200 ` +
                    `${label ? "" : "pt-4"} ` +
                    `${className}`}
                    style={{minWidth: 200, ...style}}>
      {label ?
        <span className="inline-block relative px-3 py-0 m-0 bg-white" style={{top: -14, left: 10}}>
          {label}
        </span>
      : <></>}
      <div className="px-3">
        {options.map(renderRadio)}
      </div>
    </div>
  )
}

RadioGroup.defaultProps = {
  className: "",
}

export default RadioGroup;