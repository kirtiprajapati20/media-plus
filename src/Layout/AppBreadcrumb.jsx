import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../../assets/css/Module.css";

import routes from "../../routes";

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getRouteName = (pathname, routes) => {
    const matchedRoute = routes.find((route) => route.path === pathname);
    return matchedRoute ? matchedRoute.name : null;
  };

  const buildBreadcrumbs = (pathname) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs = [];

    pathSegments.reduce((prevPath, currentSegment, index) => {
      const currentPath = `${prevPath}/${currentSegment}`;
      const name = getRouteName(currentPath, routes);

      if (name) {
        breadcrumbs.push({
          name,
          path: currentPath,
          active: index === pathSegments.length - 1,
        });
      }

      return currentPath;
    }, "");

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs(currentPath);

  return (
    <nav className="custom-breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        {breadcrumbs.map((item, idx) => (
          <li
            key={idx}
            className={`breadcrumb-item ${item.active ? "" : ""}`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.active ? item.name : <Link to={item.path}>{item.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default DynamicBreadcrumb;
