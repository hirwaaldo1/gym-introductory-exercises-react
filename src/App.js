import List from "./components/List";
import DATA from "./data/data";
function App() {
  return (
    <div className="flex justify-center mt-2">
      <ul className="w-fit rounded-md">
        {DATA.map((value, index) => (
          <List {...value} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
