import React from "react";
export default function List({ name, icon }) {
  return (
    <li className="flex items-center gap-3 px-4 py-5 border-b">
      <span>{icon}</span>
      <span>{name}</span>
    </li>
  );
}
