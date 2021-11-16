const Alert = (props) => {
  const {
    color,
    onClose,
    children,
    className
  } = props;

  const colorCode = color === "primary" ? "bg-blue-500 text-white" :
                    color === "secondary" ? "bg-gray-400 text-white" :
                    color === "danger" ? "bg-red-500 text-white" :
                    color === "warning" ? "bg-yellow-400 text-white" :
                    color === "success" ? "bg-green-400 text-white" : "";

  return (
    <div className={`mb-3 p-3 rounded ${colorCode} ${className}`}>
      {children}
    </div>
  )
}

Alert.defaultProps = {
  color: "primary"
}

Alert.propTypes = {

}

export default Alert;