import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div className="adopt-me">
      <h1>Adopt Me!</h1>
      <Pet name="jack" age="10" />
      <Pet name="ace" age="11" />
      <Pet name="tiken" age="12" />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
