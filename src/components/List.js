import React from "react";
export default function List({ name, id }) {
  return (
    <li className="flex items-center gap-3 px-4 py-5">
      <span>{id}.</span>
      <span>{name}</span>
    </li>
  );
}
