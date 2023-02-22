import React, { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";
import { getData } from "./service/fetchData";
function App() {
  const [data, setData] = useState([]);
  function fetchData() {
    getData().then((data) => setData(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <button
        className="bg-red-600 rounded-md shadow-lg p-4 w-fit relative left-1/2 right-1/2 -ml-16"
        onClick={() => fetchData()}
      >
        Fetch Random
      </button>
      <div className="grid grid-cols-2 w-1/2 gap-9 m-auto mt-10">
        {data.map((value, index) => {
          return (
            <MemeCard
              key={index}
              img={value.avatar}
              title={value.first_name}
              desc={value.last_name}
              more={value.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
