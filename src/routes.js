import { useHistory } from "react-router";

import BlankLayout from "layouts/Blank";
import DashboardLayout from "layouts/Dashboard";

import Login from "pages/blank/login";

import { faAddressCard, faChartBar, faHome } from "@fortawesome/free-solid-svg-icons";

import Overview from "pages/dashboard/Overview";
import Components from "pages/dashboard/Components";
import DataView from "pages/dashboard/DataView";

const useRouterConfig = () => {
  const history = useHistory();

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
  ];

  /*
    required:
      name:string
      route:string
      component:JSX
      access:string
  */
  const layouts = [
    {name: "dashboard", route: "/dashboard", component: DashboardLayout, access: "public"},
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
    {name: "overview", route: "", type: "custom", layout: "dashboard", access: "public", component: Overview, icon: faHome},
    {name: "Basic components", route: "components", layout: "dashboard", access: "public", component: Components, icon: faAddressCard},
    {name: "Data view", route: "dataview", layout: "dashboard", access: "public", component: DataView, icon: faChartBar}
  ];

  return {access, layouts, routes};
}

export default useRouterConfig;