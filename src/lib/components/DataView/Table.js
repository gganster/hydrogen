
const Table = (props) => {
  const {
    className,
    style,
    header, // [string, ...]
    data,
    renderItem,
  } = props;

  return (
    <div className={`table_container ${className}`}
         style={style}>
      <table className="w-full">
        <thead>
          <tr className="border-t border-b border-gray-300">
            {(header && header.length && header.map(item => (
              <th key={item}>{item}</th>
            ))) || <></>}
          </tr>
        </thead>
        <tbody>
          {(data && data.length && data.map(renderItem)) || <></>}
        </tbody>
      </table>
    </div>
  )
}

Table.defaultProps = {
  header: [],
  data: [],
  style: {},
  className: ""
}

Table.propTypes = {

}

export default Table;