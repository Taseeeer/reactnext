import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AiFillFile } from "react-icons/ai";

export default function Home() {

  // const [ repos, setRepos ] = useState([]);
  // useEffect(() => {
  //   let isCurrent = true;
  //   async function fetchRepos() {
  //     const response = await fetch("https://api.github.com/users/taseeeer/repos");
  //     const data = await response.json();
  //     if(isCurrent) {
  //       setRepos(data);
  //     }
  //   }

  //   fetchRepos();

  //   return () => {
  //     isCurrent = false;
  //   }
  // }, []);


  function getAllData(repos) {
    return (
      <div className="each-link-outer">
        {repos?.map(repo => (
          <div key={repo.created_at}>
            <div className="each-link">
              <a>
                <AiFillFile className="each-file" style={{fontSize: ""}}/>
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
    <div>
      <Layout>
        <h2 className="skew">WELCOME.</h2>
      </Layout>
    </div>
  )
}
