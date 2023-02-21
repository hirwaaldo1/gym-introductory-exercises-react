import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Button has been clicked: {count} times</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click ME</button>
    </div>
  );
}

export default App;
