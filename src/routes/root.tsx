import config from '@/common/config';

import { NotFoundRoute, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import * as Screens from '@/screens';

export const root = createRootRouteWithContext<{}>()({
  component: () => (
    <>
      <Outlet />
      {config.run !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
  errorComponent: (error) => 
    <Screens.Error error={JSON.stringify(error, null, 2)} />,
  pendingComponent: () => {
    return <span>Loading Root</span>;
  },
});

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => root,
  component:Screens.NotFound,
});

export default root;
