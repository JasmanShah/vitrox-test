import { cssBundleHref } from '@remix-run/css-bundle';
import MainNavigation from './components/MainNavigation';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import stylesheet from '~/tailwind.css';

export const links = () => [
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: stylesheet }
];

export default function App () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-row">
        <sidemenu className="z-20 fixed">
          <MainNavigation/>
        </sidemenu>
        <view className="flex h-screen w-screen flex-col border-r z-10 pl-16">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </view>
      </body>

    </html>
  );
}
