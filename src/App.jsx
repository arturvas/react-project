import { useState } from "react";
import Profile from "./components/Profile";
import Formulary from "./components/Formulary";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(true);

  const toggleFormVisibility = () => {
    setFormIsVisible(!formIsVisible);
  };

  return (
    <>
      <Profile
        name="Artur Vasconcelos"
        address="https://github.com/arturvas.png"
        toggleFormVisibility={toggleFormVisibility}
      />
      {/* <button onClick={() => setFormIsVisible(!formIsVisible)} type="button">
        Toggle form
      </button> */}
      {formIsVisible && <Formulary />}
    </>
  );
}

export default App;
