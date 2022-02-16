import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import useUser from "contexts/user";
import useAuth from "hooks/useAuth";
import useRouterConfig from "routes";

import Loading from "pages/Loading";

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

  useEffect(() => {
    const _getAccess = (accessName) => {
      let match = access.filter(i => i.name === accessName);
  
      if (match.length === 0) throw new Error(`access doesn't contain entry with name: ${accessName}`);
      return match[0];
    }

    let _access = route.access ? _getAccess(route.access) :
                 layout.access ? _getAccess(layout.access) :
                 null;

    if (_access === null) throw new Error(`layout ${layout.name} doesn't contain access field`);
    setIsGranted(_access.isGranted);
    if (_access.isGranted && _access.onSuccess) _access.onSuccess(params);
    if (!_access.isGranted && _access.onDenied) _access.onDenied(params);
  }, [layout.access, layout.name, params, route.access, access]);


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
  const [ui] = useUser();
  useAuth();

  if (ui.loading) return <Loading />;

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

const GlobalRouter = () => <BrowserRouter><Router /></BrowserRouter>
export default GlobalRouter;
