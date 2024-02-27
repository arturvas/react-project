import { useState } from "react";
import "../Profile/profile.css";

const Formulary = () => {
  // useState = return the value and also a function to change it.
  let [subjectA, setSubjectA] = useState(0);
  let [subjectB, setSubjectB] = useState(0);
  let [subjectC, setSubjectC] = useState(0);
  let [name, setName] = useState("");

  const nameChange = (e) => {
    // console.log(e.target.value);
    // setName(evento.target.value);
    setName((previousState) => {
      console.log(previousState);

      return e.target.value;
    });
  };

  const renderResult = () => {
    const sum = subjectA + subjectB + subjectC;
    const average = sum / 3;

    if (average >= 7) {
      return <p>{name}, you has been approved.</p>;
    } else if (average === 0) {
      return <p>Enter your note.</p>;
    } else {
      return <p>{name}, you weren't approved.</p>;
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Your name" onChange={nameChange} />
        <input
          type="number"
          placeholder="New subject A"
          onChange={({ target }) => setSubjectA(parseInt(target.value))}
        />
        <input
          type="number"
          placeholder="New subject B"
          onChange={({ target }) => setSubjectB(parseInt(target.value))}
        />
        <input
          type="number"
          placeholder="New subject C"
          onChange={({ target }) => setSubjectC(parseInt(target.value))}
        />
        {renderResult()}
      </form>
    </div>
  );
};

export default Formulary;
