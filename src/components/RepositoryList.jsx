import RepositoryItem from "./RepositoryItem";
import './../styles/repositories.scss';
import { useState, useEffect } from "react";
export function RepositoryList(){

// https://api.github.com/orgs/rocketseat/repos


  const [repositories, setRepositories] = useState([])
 
  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response=> response.json())
    .then(data => setRepositories(data))
  },[])
  const repository = {
    name: "unform",
    description: "Forms in react",
    link:"https://github.com/unform/unform"
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem 
        repository={repository} 
       /> 
        <RepositoryItem repository={repository}/> 
        <RepositoryItem repository={repository}/> 
      </ul>
    </section>
  )
}