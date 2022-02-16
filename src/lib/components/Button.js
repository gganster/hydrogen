import * as PT from "prop-types";
import Spinner from "./Spinner";

const Button = (props) => {
  const {
    children,
    onClick,
    color,
    size,
    disabled,
    loading,
    className,
    style
  } = props;

  const fontSize = size === "xs" ? "text-xs" :
                   size === "sm" ? "text-xs" :
                   size === "md" ? "text-sm" :
                   size === "lg" ? "text-lg" : "";
  const buttonPaddingSize = size === "xs" ? "px-2 py-1" :
                            size === "sm" ? "px-7 py-1.5" :
                            size === "md" ? "px-7 py-1.5" :
                            size === "lg" ? "px-7 py-1.5" : "";
  const backgroundColor = !disabled ? (color === "primary" ? "bg-blue-500 hover:bg-blue-600" : 
                                       color === "secondary" ? "bg-gray-400 hover:bg-gray-500" :
                                       color === "danger" ? "bg-red-500 hover:bg-red-600" :
                                       color === "warning" ? "bg-yellow-400 hover:bg-yellow-500" :
                                       color === "success" ? "bg-green-400 hover:bg-green-500" : "") :
                                      (color === "primary" ? "bg-blue-300" : 
                                       color === "secondary" ? "bg-gray-300" :
                                       color === "danger" ? "bg-red-200" :
                                       color === "warning" ? "bg-yellow-200" :
                                       color === "success" ? "bg-green-200 " : "");
  const cursorType = !disabled ? "cursor-pointer" : ""
  const textColor = "text-white";

  return (
    <div 
      style={style}
      onClick={onClick}
      className={`inline-block rounded mr-4 mb-2.5 ${cursorType} ` +
                 `${fontSize} ${buttonPaddingSize} ${backgroundColor} ${textColor} ${className}`}>
      <div className="flex justify-center items-center select-none">
        {children}
        {loading &&
          <Spinner
            color="light"
            size="sm"
            className="ml-2 relative"
            style={{marginRight: size === "xs" ? 0 : -7}}
          />
        }
      </div>
    </div>
  )
}

Button.defaultProps = {
  color: "primary",
  size: "md",
  className: "",
  loading: false,
  style: {}
}

Button.propTypes = {
  onClick: PT.func.isRequired,
  color: PT.oneOf(["primary", "secondary", "danger", "warning", "info", "success"]),
  size: PT.oneOf(["xs", "sm", "md", "lg"]),
  disabled: PT.bool,
  className: PT.string,
  loading: PT.bool,
}

export default Button;