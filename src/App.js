import JokeCard from "./components/JokeCard";
import JOKE from "./data/data.json";
function App() {
  return (
    <div className="flex justify-center items-center h-screen max-w-screen-2xl m-auto">
      <div className="grid grid-cols-2 w-1/2 gap-9 mt-5">
        {JOKE.map((value, index) => {
          return (
            <JokeCard key={index} title={value.setup} desc={value.punchline} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
