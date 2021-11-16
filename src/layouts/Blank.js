const BlankLayout = (props) => {
  const {
    children
  } = props;

  return (
    <div>
      <p>Layout: Blank</p>
      {children}
    </div>
  )
}

export default BlankLayout;