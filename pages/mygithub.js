import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { DiGithubBadge } from "react-icons/di";

export default function Mygithub() {

  const [ repos, setRepos ] = useState([]);
  useEffect(() => {
    let isCurrent = true;
    async function fetchRepos() {
      const response = await fetch("https://api.github.com/users/taseeeer/repos");
      const data = await response.json();
      if(isCurrent) {
        setRepos(data);
      }
    }

    fetchRepos();

    return () => {
      isCurrent = false;
    }
  }, []);

    function getAllData(repos) {
        return (
        <div className="each-link-outer">
            {repos?.map(repo => (
            <div key={repo.created_at}>
                <div className="each-link">
                <a>
                    <DiGithubBadge  style={{fontSize: "4rem"}} />
                    <span style={{fontSize: "0.9rem"}}>
                    {repo.name.length > 7 ? `${repo.name.substring(0,5)}...` : repo.name}
                    </span>
                </a>
                </div>
            </div>
            ))}
            </div>
        )
    }

    return (
        <Layout>
            <h2 className="skew">My github repos.</h2>
            <p className="skew">Octocats I have adopted, straight from github.</p>
            {getAllData(repos)}
        </Layout>
    )
}