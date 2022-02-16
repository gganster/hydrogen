const Checkbox = (props) => {
  const {
    label,
    value,
    onChange,
    //disabled, //TODO
    //invalid, //TODO
    className,
    style,
  } = props;

  return (
    <div className={`checkbox_container ${className}`}
         style={{minWidth: 200, ...style}}>
      <label className="flex items-center">
        <span className="checkbox_label">{label}</span>
        <input type="checkbox" checked={value} onChange={e => onChange(!value)} />
        <span className="checkbox_checkmark"></span>
      </label>
    </div>
  )
}

Checkbox.defaultProps = {

}

Checkbox.propTypes = {

}

export default Checkbox;