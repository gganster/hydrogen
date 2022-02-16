import PerfectScrollbar from 'react-perfect-scrollbar'
import useRouterConfig from "routes";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Logo from "assets/img/hydrogen.png";

const Sidebar = (props) => {
  const {access, routes, layouts} = useRouterConfig();
  const {
    isOpen
  } = props;

  const renderLinks = () => {
    const links = routes.filter(r => {
                          let accessFilter = access.filter(a => a.name === r.access);
                          if (accessFilter.length === 0)
                            throw new Error(`Route ${r.name} access ${r.access} doesn't match any rule in src/route.js`);
                          return accessFilter[0].isGranted
                        })
                        .filter(r => r.hide !== true);
    
    return (
      <>
        {links.map(link => (
          <div className="mt-2" key={`${link.layout}/${link.name}`}>
            <Link className={`block text-white text-lg cursor-pointer ` + 
                             `transition-transform transform hover:translate-x-3 ` +
                             `ml-5`}
                  to={`${layouts.filter(layout => layout.name === link.layout)[0].route}/${link.route}`}>
              <FontAwesomeIcon className="mr-2 w-5" icon={link.icon ?? faChevronRight} />
              {link.name}
            </Link>
          </div>
        ))}
      </>
    )
  }

  return (
      <div className={`flex flex-col min-h-screen h-screen max-h-screen overflow-y-hidden pt-4 pb-4 w-60 ${isOpen ? "ml-0" : "-ml-60"}`}
           style={{minWidth: "15rem", maxWidth: "15rem", transition: "margin 0.2s ease-out", backgroundColor: "#2F3C4E"}}>
        <PerfectScrollbar className="w-60 overflow-y-scroll p-y-2">
          <img alt="logo" src={Logo} className="w-full mb-8" />
          {renderLinks()}
        </PerfectScrollbar>
        
        {/*<Link to=""
              className={`flex items-center justify-center h-16 bg-green-500 hover:bg-green-400 text-center text-white ` +
                         `font-semibold text-lg`}>
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Mon profil
        </Link>
        <div onClick={() => {}}
             className={`flex items-center justify-center h-16 bg-red-500 hover:bg-red-400 text-center text-white ` +
                        `font-semibold text-lg cursor-pointer`}>
          <FontAwesomeIcon icon={faPowerOff} className="mr-2 mt-1" />
          Se déconnecter
        </div>*/}
      </div>
  )
}

export default Sidebar;