import List from "./components/List";
import DATA from "./data/data";
function App() {
  return (
    <div className="flex justify-center mt-2">
      <ul className="w-fit shadow-lg rounded-md">
        {DATA.map((value, index) => {
          return <List name={value.name} icon={value.icon} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default App;
