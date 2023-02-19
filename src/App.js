import React, { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-1/5 mt-5">
        <input
          type="text"
          className="input--style"
          placeholder="First name"
          value={firstName}
          onChange={(v) => setFirstName(v.target.value)}
        ></input>
        <input
          type="text"
          className="input--style"
          value={lastName}
          onChange={(v) => setLastName(v.target.value)}
          placeholder="Last name"
        ></input>
        <button
          className="bg-rose-600 p-3 uppercase text-white font-bold  rounded-md"
          onClick={() => {
            alert(`Hello ${firstName} ${lastName}`);
            setFirstName("");
            setLastName("");
          }}
        >
          Greet Me
        </button>
      </div>
    </div>
  );
}

export default App;
