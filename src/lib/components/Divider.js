const Divider = (props) => {
  const {
    className,
    style,
    title,
    backgroundColor
  } = props;

  return (
    <div className={`flex items-center justify-center bg-gray-300 mb-5 ${className}`}
         style={{height: 1, ...style}}>
      {title ? 
        <span className="relative px-2 py-0 m-0 text-gray-700"
              style={{backgroundColor, top: -1}}>
          {title}
        </span>
      : <></>}
    </div>
  )
}

Divider.defaultProps = {
  backgroundColor: "white",
  style: {}
}

export default Divider;