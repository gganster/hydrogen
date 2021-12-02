import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const {
    onClick
  } = props;

  return (
    <div className={`flex items-center justify-between w-full max-h-14 h-14 shadow-md bg-white ` +
                    `px-4`} 
         style={{minHeight: "3.5rem"}}>
      {/* LEFT */}
      <div>
        <FontAwesomeIcon icon={faBars} size="2x" color="#312E81"
                         className="cursor-pointer"
                         onClick={onClick} />
      </div>

      <div></div>

      {/* RIGHT */}
      <div>
      </div>
    </div>
  )
}

export default Header;