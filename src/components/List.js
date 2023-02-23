import React from "react";
export default function List(props) {
  return (
    <li className="flex items-center gap-3 px-4 py-5">
      <span>{props.name}</span>
    </li>
  );
}
