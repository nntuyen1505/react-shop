import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb({ children }) {
  // const count= React.Children.count(children)
  return (
    <nav className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Breadcrumb */}
            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
              {React.Children.map(children, (child, index) => {
                return <li className="breadcrumb-item">{child}</li>
              })}
              {/* <li className="breadcrumb-item">
                  <Link className="text-gray-400" to="index.html">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-gray-400" to="index.html">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-gray-400" to="index.html">Home</Link>
                </li> */}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const BreadCrumbItem = ({ children, to }) => {
  return <Link className="text-gray-400" to={to}>{children}</Link>;
};
