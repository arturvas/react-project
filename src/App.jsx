import { useState } from "react";
import Profile from "./components/Profile";
// import Formulary from "./components/Formulary";
import ReposList from "./components/ReposList";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />
      {userName.length > 4 && (
        <>
          <Profile userName={userName} />
          <ReposList userName={userName} />
        </>
      )}
      {/* <Formulary /> */}
    </>
  );
}

export default App;
