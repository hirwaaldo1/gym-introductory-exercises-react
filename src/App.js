import React, { useState } from "react";
function App() {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-1/5 mt-5">
        <input
          type="text"
          className="input--style"
          placeholder="First name"
          name="firstName"
          value={person.firstName}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          className="input--style"
          name="lastName"
          value={person.lastName}
          onChange={(event) => handleChange(event)}
          placeholder="Last name"
        />
        <button
          className="bg-rose-600 p-3 uppercase text-white font-bold  rounded-md"
          onClick={() => {
            if (person.firstName === "" || person.lastName === "")
              return alert("Please enter your names");
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
