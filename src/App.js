import Button from "./components/Button";
import "./App.css";
function App() {
  return (
    <div className="flex">
      <div style={{ display: "flex", gap: "20px" }}>
        {["button 1", "button 2", "button 3"].map((value, index) => {
          return <Button title={value} msg={value} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
