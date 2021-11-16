import * as PT from "prop-types";
import {useRef, useState, useEffect} from "react";

// BUG need unmount delay on collapse close
const Collapse = (props) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  const {
    children,
    isOpen,
    className,
    style,
    unmount
  } = props;

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen])

  return (
    <div className={`overflow-y-hidden ${className}`}
         style={{
           height,
           transition: "height 0.2s ease-in-out",
           ...style}}>
      <div ref={ref}>
        {!isOpen && unmount ? <></> : children}
      </div>
    </div>
  )
}

Collapse.defaultProps = {
  className: "",
  style: {},
  isOpen: true,
  unmount: false
}

Collapse.propTypes = {
  className: PT.string,
  isOpen: PT.bool.isRequired,
  unmount: PT.bool,
}

export default Collapse;