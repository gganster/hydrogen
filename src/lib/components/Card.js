const Card = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <div className={`bg-white rounded p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card;