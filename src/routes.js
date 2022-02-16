
import BlankLayout from "layouts/Blank";
import DashboardLayout from "layouts/Dashboard";


import { faAddressCard, faChartBar, faHome } from "@fortawesome/free-solid-svg-icons";

import Login from "pages/blank/login";
import Register from "pages/blank/register";
import Forgot from "pages/blank/forgotPassword";

import Overview from "pages/dashboard/Overview";
import Components from "pages/dashboard/Components";
import DataView from "pages/dashboard/DataView";
import ProfilePage from "pages/dashboard/Profile";

import useUser from "contexts/user";

const useRouterConfig = () => {
  const [ui] = useUser();

  /*
    required:
      name:string
      isGranted:bool
    optional:
      onSuccess:func (default none)
      onDenied:func (default none)
  */
  const access = [
    {name: "public", isGranted: true},
    {name: "connected", isGranted: ui.user !== null},
    {name: "admin", isGranted: ui.user && ui.user.role === "admin"}
  ];

  /*
    required:
      name:string
      route:string
      component:JSX
      access:string
  */
  const layouts = [
    {name: "dashboard", route: "/dashboard", component: DashboardLayout, access: "connected"},
    {name: "blank", route: "", component: BlankLayout, access: "public"},
  ];

  /*
    required:
      name:string
      route:string
      layout:string
      component:JSX
    optional:
      access:string (default: herited from layout)
      type:string (default: "custom")
      hide (default: false)
      icon:fontAwesomeIcon (default: null)
  */
  const routes = [
    {name: "login", route: "", type: "custom", layout: "blank", access: "public", component: Login, hide: true},
    {name: "register", route: "register", type: "custom", layout: "blank", access: "public", component: Register, hide: true},
    {name: "forgot", route: "forgot", type: "custom", layout: "blank", access: "public", component: Forgot, hide: true},
    {name: "overview", route: "", type: "custom", layout: "dashboard", access: "connected", component: Overview, icon: faHome},
    {name: "profile", route: "profile", type: "custom", layout: "dashboard", access: "connected", component: ProfilePage, hide: true},
    {name: "Basic components", route: "components", layout: "dashboard", access: "connected", component: Components, icon: faAddressCard},
    {name: "Data view", route: "dataview", layout: "dashboard", access: "connected", component: DataView, icon: faChartBar}
  ];

  return {access, layouts, routes};
}

export default useRouterConfig;