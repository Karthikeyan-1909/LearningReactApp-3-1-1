import List from "./components/List";
import Birthdays from "./data";
import { useState } from "react";

const App = () => {
  const [birthdays, setBirthdays] = useState(Birthdays);

  const handleClick = () => {
    setBirthdays([]);
  };
  return (
    <>
      <List people={birthdays} />
      <button
        type="button"
        className="btn"
        style={{ margin: "0 auto", position: "relative", left: "46.6%" }}
        onClick={handleClick}>
        Clear All
      </button>
    </>
  );
};

export default App;
