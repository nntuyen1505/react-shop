import React from "react";

export default function Category(props) {
//   console.log(category);
  return (
    <li className="list-styled-item">
      <a className="list-styled-link" href="#">
            {props.title}
      </a>
    </li>
  );
}
