const BlankLayout = (props) => {
  const {
    children
  } = props;

  return (
    <div className="bg-gray-100">
      {children}
    </div>
  )
}

export default BlankLayout;