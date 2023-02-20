import React, { useState } from "react";
function App() {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-1/5 mt-5">
        <input
          type="text"
          className="input--style"
          placeholder="First name"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          type="text"
          className="input--style"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          placeholder="Last name"
        />
        <button
          className="bg-rose-600 p-3 uppercase text-white font-bold  rounded-md"
          onClick={() => {
            alert(`Hello ${person.firstName} ${person.lastName}`);
            setPerson({ firstName: "", lastName: "" });
          }}
        >
          Greet Me
        </button>
      </div>
    </div>
  );
}

export default App;
