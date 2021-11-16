import * as PT from "prop-types";

const Spinner = (props) => {
  const {
    className,
    style,
    size,
    color,
  } = props;

  const hw = size === "sm" ? "w-4 h-4 border-4" :
             size === "md" ? "w-6 h-6 border-4" : 
             size === "lg" ? "w-12 h-12 border-8" : "";
  const borderColor = color === "primary" ? "border-blue-500" :
                      color === "secondary" ? "border-gray-400" :
                      color === "success" ? "border-green-400" :
                      color === "warning" ? "border-yellow-400" :
                      color === "danger" ? "border-red-500" :
                      color === "light" ? "border-gray-100" :
                      color === "dark" ? "border-black" : "";
  
  return (
    <div 
      className={`inline-block ${hw} ${borderColor} mr-4 ` + 
                 `spinner ${className}`}
      style={style}>
    </div>
  )
}

Spinner.defaultProps = {
  size: "md",
  color: "primary",
  className: "",
  style: {}
}

Spinner.propTypes = {
  className: PT.string,
  size: PT.oneOf(["sm", "md", "lg"]),
  color: PT.oneOf(["primary", "secondary", "success", "warning", "danger", "light", "dark"]),
}

export default Spinner;