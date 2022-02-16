import * as PT from "prop-types";
import { Card } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const {
    isOpen,
    size,
    toggle,
    children,
    className,
    style
  } = props;

  if (!isOpen) return <></>;

  return (
    <div className="fixed top-0 left-0 right-0 h-screen w-screen z-50 flex items-center justify-center"
         style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
      <Card className={`relative -top-12 px-4 pt-6 ${className}`} style={{width: size === "lg" ? 700 : 500, maxWidth: "90%", ...style}}>
        {toggle ?
          <FontAwesomeIcon icon={faTimes} className="absolute top-5 right-5 cursor-pointer" size="2x" color="#333" onClick={toggle} />
        : <></>}
        {children}
      </Card>
    </div>
  )
}

Modal.defaultProps = {
  size: "lg",
  className: "",
  style: {}
}
Modal.propTypes = {
  size: PT.oneOf("md", "lg")
}
export default Modal;