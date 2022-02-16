import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Settings, LogOut} from "react-feather"
import { useAuthUtilities } from "hooks/useAuth";

const Header = (props) => {
  const {
    onClick
  } = props;
  const {logout} = useAuthUtilities();

  const _logout = () => {
    logout();
  }

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
      <div className="flex text-indigo-900 mr-2" style={{gap: 10}}>
        <Link to="/dashboard/profile">
          <Settings className="cursor-pointer"/>
        </Link>
        <LogOut   className="cursor-pointer" onClick={_logout}/>
      </div>
    </div>
  )
}

export default Header;