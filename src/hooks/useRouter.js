
//import useRouteConfig from "routes";
import { useHistory, useRoute } from "react-router";

const useRouter = () => {
  const history = useHistory();
  const route = useRoute();

  //const {access, layouts, routes} = useRouteConfig();

  const navigate = history.push;
  const goBack = history.goBack()

  return {
    history,
    route,
    params: route.params,
    navigate,
    goBack,
  }
}

export default useRouter;