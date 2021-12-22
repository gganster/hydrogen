const Card = (props) => {
  const {
    children,
    className,
    style
  } = props;

  return (
    <div className={`bg-white rounded p-6 ${className}`} style={style}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  style: {}
}
export default Card;