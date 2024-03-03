import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ userName }) => {
  const [repos, setRepos] = useState([]);
  const [areLoading, setAreLoading] = useState(true);

  useEffect(() => {
    setAreLoading(true);
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setAreLoading(false);
          setRepos(resJson);
        }, 2000);
      });
  }, [userName]);

  return (
    <>
      <div className="container">
        {areLoading ? (
          <h1 className={styles.textCenter}>Loading...</h1>
        ) : (
          <ul className={styles.list}>
            {repos.map(({ id, name, language, html_url }) => (
              <li className={styles.listItem} key={id}>
                <div className={styles.itemName}>
                  <b>Name:</b> {name} <br />
                </div>
                <div className={styles.itemLanguage}>
                  <b>Language:</b> {language} <br />
                </div>
                <a className={styles.itemLink} target="_blank" href={html_url}>
                  Visit on GitHub
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ReposList;
