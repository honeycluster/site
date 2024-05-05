import rootRoute from '../root';
import { Route, Link, NotFoundRoute, Outlet, useNavigate } from '@tanstack/react-router';

import { Dash } from '@/components/general/template';

import * as Screens from '@/screens';

export const _rootRoute = new Route({
  getParentRoute: () => rootRoute,
  component: () => (
    <Dash>
      <Outlet />
    </Dash>
  ),
  id: 'layout',
});

export const indexRoute = new Route({
  path: `/`,
  component: Screens.Home,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => 
    <Screens.Error error={JSON.stringify(error, null, 2)} />,
});

export const joinRoute = new Route({
  path: `join`,
  component: Screens.Working,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => 
    <Screens.Error error={JSON.stringify(error, null, 2)} />,
});

export const learnRoute = new Route({
  path: `learn`,
  component: Screens.Working,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => 
    <Screens.Error error={JSON.stringify(error, null, 2)} />,
});

export const startRoute = new Route({
  path: `gettingStarted`,
  component: Screens.Working,
  loader: async () => {
    /*  await queryClient.ensureQueryData(getRandomBeerQueryOptions()); */
  },
  getParentRoute: () => _rootRoute,
  pendingComponent: () => {
    return <span>Loading Random Details</span>;
  },
  errorComponent: (error) => 
    <Screens.Error error={JSON.stringify(error, null, 2)} />,
});
