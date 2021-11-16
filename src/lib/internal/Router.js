import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import useRouterConfig from "routes";

import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";

const RouteSystem = (props) => {
  const {
    route,
    layout,
    params
  } = props;
  const {access} = useRouterConfig();
  const [isGranted, setIsGranted] = useState(null);

  const _getAccess = (accessName) => {
    let match = access.filter(i => i.name === accessName);

    if (match.length === 0) throw `access doesn't contain entry with name: ${accessName}`;
    return match[0];
  }

  useEffect(() => {
    let access = route.access ? _getAccess(route.access) :
                 layout.access ? _getAccess(layout.access) :
                 null;

    if (access === null) throw `layout ${layout.name} doesn't contain access field`
    setIsGranted(access.isGranted);
    if (access.isGranted && access.onSuccess) access.onSuccess(params);
    if (!access.isGranted && access.onDenied) access.onDenied(params);
  }, []);


  return <>
    {
      isGranted === true ?  <route.component /> :
      isGranted === false ? <AccessDenied /> :
                            <></>
    }
  </>
}

const Router = () => {
  const {layouts, routes} = useRouterConfig();

  return (
    <Switch>
      {layouts.map(layout => (
        <Route key={`layout_${layout.name}`} path={layout.route ?? ""} children={({match}) => (
          <layout.component>
            <Switch>
              {routes.filter(i => i.layout === layout.name).map(route => 
                <Route key={`route_${route.name}`} exact path={`${match.url}/${route.route}`.replace("//", "/")} children={p => (
                  <RouteSystem params={p} route={route} layout={layout}/>
                )} />
              )}
              <Route path="*"><NotFound /></Route>
            </Switch>
          </layout.component>
        )} />
      ))}
      <Route path="*"><NotFound /></Route>
    </Switch>
  )
}

export default () => <BrowserRouter><Router /></BrowserRouter>;
