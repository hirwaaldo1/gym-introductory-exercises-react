import React, { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";
import { getData } from "./service/fetchData";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData);
  }, []);
  return (
    <div className="">
      <button
        className="bg-red-600 rounded-md shadow-lg p-4 w-fit relative left-1/2 right-1/2 -ml-16"
        onClick={() => getData(setData)}
      >
        Fetch Random
      </button>
      <div className="grid grid-cols-2 w-1/2 gap-9 m-auto mt-10">
        {data.map((v, k) => {
          return (
            <MemeCard
              key={k}
              img={v.avatar}
              title={v.first_name}
              desc={v.last_name}
              more={v.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
