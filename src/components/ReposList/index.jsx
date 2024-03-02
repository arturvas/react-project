import { useEffect, useState } from "react";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [areLoading, setAreLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/arturvas/repos")
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setAreLoading(false);
          setRepos(resJson);
        }, 3000);
      });
  }, []);

  return (
    <>
      {/* <div className="container"> */}
      {areLoading && <h1>Loading...</h1>}
      <ul>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <b>Name:</b> {name} <br />
            <b>Language:</b> {language} <br />
            <a target="_blank" href={html_url}>
              Visit on GitHub
            </a>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </>
  );
};

export default ReposList;
