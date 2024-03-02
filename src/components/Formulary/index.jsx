import { useState, useEffect } from "react";
import "../Profile/profile.css";

const Formulary = () => {
  // useState = return the value and also a function to change it.
  const [subjectA, setSubjectA] = useState(0);
  const [subjectB, setSubjectB] = useState(0);
  const [subjectC, setSubjectC] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("The component has inicialized");
  }, []);

  // useEffect = every time when State changes, this will be executed.
  // It can be conditioned with array [] (called dependencies).
  // If present, activates only if the values in the list change.
  useEffect(() => {
    console.log("The name state has changed to " + name);
  }, [name]);

  useEffect(() => {
    console.log("The Subject has changed to: " + subjectA);
    console.log("The Subject has changed to: " + subjectB);
    console.log("The Subject has changed to: " + subjectC);
  }, [subjectA, subjectB, subjectC]);

  const nameChange = (e) => {
    setName((previousState) => {
      return e.target.value;
    });
  };

  const renderResult = () => {
    const sum = subjectA + subjectB + subjectC;
    const average = sum / 3;

    if (average >= 7) {
      return <p>{name}, you has been approved.</p>;
    } else if (average === 0) {
      return <p>Please, enter your note.</p>;
    } else {
      return <p>{name}, you weren't approved.</p>;
    }
  };

  //   <ul>
  //      {/* map = does the return of each item */}
  //        {[1, 2, 3, 4, 5].map((item) => (
  //        <li key={item}>{item}</li>
  //      ))}
  //   </ul>

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
