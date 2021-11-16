import {toast} from "react-toastify";
import { useHistory } from "react-router";

import BlankLayout from "layouts/Blank";
import DashboardLayout from "layouts/Dashboard";

import Login from "pages/blank/login";

import Overview from "pages/dashboard/Overview";

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
    {name: "public", isGranted: true, onSuccess: () => toast.success("access granted"), onDenied: () => toast.error("access denied")},
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
      type:string (default "custom")
  */
  const routes = [
    {name: "login", route: "", type: "custom", layout: "blank", access: "public", component: Login},
    {name: "overview", route: "", type: "custom", layout: "dashboard", access: "public", component: Overview},
  ];

  return {access, layouts, routes};
}

export default useRouterConfig;